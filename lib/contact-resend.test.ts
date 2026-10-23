import { afterEach, describe, expect, it, vi } from "vitest";
import { handleContact } from "./contact-handler";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("installed Resend SDK contract", () => {
  it.each([200, 422])("handles a real SDK response with status %s", async (status) => {
    const errorLog = vi.spyOn(console, "error").mockImplementation(() => {});
    const delivery = vi.fn();
    const fetchMock = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = new URL(input instanceof Request ? input.url : String(input));
      if (url.href === "https://challenges.cloudflare.com/turnstile/v0/siteverify") {
        return Response.json({
          success: true,
          hostname: "37.technology",
          action: "contact_submit",
        });
      }

      expect(url.origin).toBe("https://api.resend.com");
      expect(url.pathname).toBe("/emails");
      const headers = new Headers(init?.headers);
      expect(headers.get("authorization")).toBe("Bearer re_test_not_a_secret");
      expect(headers.get("idempotency-key")).toMatch(/^contact-[a-f0-9]{64}$/);
      delivery(JSON.parse(String(init?.body)));
      return status === 200
        ? Response.json({ id: "synthetic-email-id" })
        : Response.json({ name: "validation_error", message: "Synthetic provider error" }, { status });
    });
    vi.stubGlobal("fetch", fetchMock);

    const response = await handleContact(
      new Request("https://37.technology/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "https://37.technology",
        },
        body: JSON.stringify({
          name: "Example Person",
          email: "person@example.com",
          inquiryType: "project",
          summary: "A synthetic SDK contract test.",
          startedAt: Date.now() - 3_000,
          turnstileToken: "synthetic-token",
        }),
      }),
      {
        NODE_ENV: "production",
        RESEND_API_KEY: "re_test_not_a_secret",
        TURNSTILE_SECRET_KEY: "synthetic-secret",
        CONTACT_FROM_EMAIL: "inquiries@37.technology",
        CONTACT_TO_EMAIL: "info@37.technology",
      },
      { ip: "192.0.2.123", trustForwardedHost: false },
    );

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(delivery).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({
      from: "inquiries@37.technology",
      to: "info@37.technology",
      reply_to: "person@example.com",
      tags: [
        { name: "source", value: "37-technology-contact" },
        { name: "inquiry_type", value: "project" },
      ],
    }));
    expect(response.status).toBe(status === 200 ? 200 : 502);
    expect(errorLog).toHaveBeenCalledTimes(status === 200 ? 0 : 1);
    await expect(response.json()).resolves.toEqual(
      status === 200
        ? { accepted: true }
        : { error: "We could not send your inquiry. Please try again shortly." },
    );
  });
});
