import { contactTurnstileAction } from "@/lib/contact";

interface VerifyTurnstileOptions {
  expectedHostname: string;
  ip: string;
  timeoutMs?: number;
  token: string;
}

export async function verifyTurnstile({
  expectedHostname,
  ip,
  timeoutMs = 5_000,
  token,
}: VerifyTurnstileOptions) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return process.env.NODE_ENV !== "production";
  }
  if (!token) return false;

  const body = new URLSearchParams({
    secret,
    response: token,
    ...(ip !== "unknown" ? { remoteip: ip } : {}),
  });
  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body,
        cache: "no-store",
        signal: AbortSignal.timeout(timeoutMs),
      }
    );

    if (!response.ok) return false;
    const result = (await response.json()) as {
      action?: string;
      hostname?: string;
      success?: boolean;
    };
    return (
      result.success === true &&
      result.hostname === expectedHostname &&
      result.action === contactTurnstileAction
    );
  } catch {
    return false;
  }
}
