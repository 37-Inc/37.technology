import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/contact/route";

const sendMock = vi.hoisted(() => vi.fn());

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: sendMock };
  },
}));

let ipSuffix = 1;

function payload(overrides: Record<string, unknown> = {}) {
  return {
    companyWebsite: "",
    email: "person@example.com",
    inquiryType: "project",
    name: "Pat Example",
    startedAt: Date.now() - 3_000,
    summary: "We need help taking a tested prototype into production.",
    turnstileToken: "",
    ...overrides,
  };
}

function request(
  body: unknown,
  headers: Record<string, string> = {}
) {
  return new Request("http://localhost:3737/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Host: "localhost:3737",
      Origin: "http://localhost:3737",
      "X-Forwarded-For": `192.0.2.${ipSuffix++}`,
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.stubEnv("CONTACT_DELIVERY_MODE", "mock");
    vi.stubEnv("CONTACT_FROM_EMAIL", "");
    vi.stubEnv("RESEND_API_KEY", "");
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");
    sendMock.mockReset();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("accepts a validated inquiry in local mock mode", async () => {
    const response = await POST(request(payload()));
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({
      accepted: true,
      delivery: "mock",
    });
  });

  it("rejects cross-origin requests", async () => {
    const response = await POST(
      request(payload(), { Origin: "https://attacker.example" })
    );
    expect(response.status).toBe(403);
  });

  it("uses the forwarded host behind a deployment proxy", async () => {
    const response = await POST(
      request(payload(), {
        Host: "localhost:3737",
        Origin: "https://preview.example",
        "X-Forwarded-Host": "preview.example",
      })
    );
    expect(response.status).toBe(200);
  });

  it("rejects invalid fields without calling delivery", async () => {
    const response = await POST(request(payload({ email: "not-an-email" })));
    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({
      fieldErrors: { email: expect.any(String) },
    });
  });

  it("silently absorbs honeypot submissions", async () => {
    const response = await POST(
      request(payload({ companyWebsite: "https://spam.example" }))
    );
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ accepted: true });
  });

  it("asks fast submissions to wait rather than refresh", async () => {
    const response = await POST(request(payload({ startedAt: Date.now() })));
    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      error: "Please wait a moment and try again.",
    });
  });

  it("enforces the process-local fallback limit", async () => {
    const fixedHeaders = { "X-Forwarded-For": "198.51.100.42" };
    for (let attempt = 0; attempt < 5; attempt += 1) {
      const response = await POST(request(payload(), fixedHeaders));
      expect(response.status).toBe(200);
    }

    const limited = await POST(request(payload(), fixedHeaders));
    expect(limited.status).toBe(429);
  });

  it("verifies Turnstile and forwards a Resend idempotency key", async () => {
    vi.stubEnv("CONTACT_DELIVERY_MODE", "");
    vi.stubEnv("TURNSTILE_SECRET_KEY", "test-secret");
    vi.stubEnv("RESEND_API_KEY", "test-api-key");
    vi.stubEnv("CONTACT_FROM_EMAIL", "inquiries@37.technology");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        Response.json({
          action: "contact_submit",
          hostname: "localhost",
          success: true,
        })
      )
    );
    sendMock.mockResolvedValue({ data: { id: "test-email" }, error: null });

    const response = await POST(
      request(payload({ turnstileToken: "test-token" }))
    );
    expect(response.status).toBe(200);
    expect(sendMock).toHaveBeenCalledOnce();
    expect(sendMock.mock.calls[0][1]).toMatchObject({
      idempotencyKey: expect.stringMatching(/^contact-[a-f0-9]{64}$/),
    });
  });

  it("returns a generic error when Resend rejects delivery", async () => {
    vi.stubEnv("CONTACT_DELIVERY_MODE", "");
    vi.stubEnv("TURNSTILE_SECRET_KEY", "test-secret");
    vi.stubEnv("RESEND_API_KEY", "test-api-key");
    vi.stubEnv("CONTACT_FROM_EMAIL", "inquiries@37.technology");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        Response.json({
          action: "contact_submit",
          hostname: "localhost",
          success: true,
        })
      )
    );
    sendMock.mockResolvedValue({ data: null, error: { message: "provider error" } });

    const response = await POST(
      request(payload({ turnstileToken: "test-token" }))
    );
    expect(response.status).toBe(502);
    await expect(response.json()).resolves.toEqual({
      error: "We could not send your inquiry. Please try again shortly.",
    });
  });
});
