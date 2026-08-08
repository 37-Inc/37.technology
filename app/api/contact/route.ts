import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactSubmission } from "@/lib/contact";
import {
  buildInquiryEmail,
  contactIdempotencyKey,
} from "@/lib/contact-email";
import { hasExceededContactRateLimit } from "@/lib/contact-rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16_000;
const MIN_FILL_TIME_MS = 2_000;
const MAX_FILL_TIME_MS = 2 * 60 * 60 * 1_000;

function json(body: object, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function requestIp(request: Request) {
  return (
    request.headers.get("x-vercel-forwarded-for") ??
    request.headers.get("x-forwarded-for") ??
    "unknown"
  )
    .split(",")[0]
    .trim();
}

function requestHost(request: Request) {
  return (
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    new URL(request.url).host
  );
}

function requestHostname(request: Request) {
  return new URL(`https://${requestHost(request)}`).hostname;
}

function hasValidOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    return new URL(origin).host === requestHost(request);
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!hasValidOrigin(request)) {
    return json({ error: "Invalid request origin." }, 403);
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "Expected a JSON request." }, 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json({ error: "The inquiry is too large." }, 413);
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "The inquiry could not be read." }, 400);
  }
  if (JSON.stringify(payload).length > MAX_BODY_BYTES) {
    return json({ error: "The inquiry is too large." }, 413);
  }

  const validation = validateContactSubmission(payload);
  if (!validation.data) {
    return json(
      { error: "Check the highlighted fields.", fieldErrors: validation.errors },
      400
    );
  }
  const submission = validation.data;

  // Give form-filling bots a convincing success response without sending mail.
  if (submission.companyWebsite) {
    return json({ accepted: true });
  }

  const elapsed = Date.now() - submission.startedAt;
  if (!Number.isFinite(elapsed) || elapsed > MAX_FILL_TIME_MS) {
    return json({ error: "Please refresh the page and try again." }, 400);
  }
  if (elapsed < MIN_FILL_TIME_MS) {
    return json({ error: "Please wait a moment and try again." }, 400);
  }

  const ip = requestIp(request);
  if (hasExceededContactRateLimit(ip)) {
    return json(
      { error: "Too many attempts. Please wait a few minutes and try again." },
      429
    );
  }

  if (
    !(await verifyTurnstile({
      token: submission.turnstileToken,
      ip,
      expectedHostname: requestHostname(request),
    }))
  ) {
    return json(
      { error: "Please complete the verification and try again." },
      400
    );
  }

  if (
    process.env.CONTACT_DELIVERY_MODE === "mock" &&
    process.env.NODE_ENV !== "production"
  ) {
    return json({ accepted: true, delivery: "mock" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? "info@37.technology";
  if (!apiKey || !from) {
    return json(
      { error: "Inquiry delivery is not configured yet. Please try again later." },
      503
    );
  }

  const resend = new Resend(apiKey);
  const email = buildInquiryEmail(submission);
  try {
    const { error } = await resend.emails.send(
      {
        from,
        to,
        replyTo: submission.email,
        subject: email.subject,
        text: email.text,
        html: email.html,
        tags: [
          { name: "source", value: "37-technology-contact" },
          { name: "inquiry_type", value: submission.inquiryType },
        ],
      },
      { idempotencyKey: contactIdempotencyKey(submission) }
    );

    if (!error) return json({ accepted: true });
  } catch {
    // Return the same response as provider errors without exposing internals.
  }

  return json(
    { error: "We could not send your inquiry. Please try again shortly." },
    502
  );
}
