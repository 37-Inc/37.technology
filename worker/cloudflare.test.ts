import { afterEach, describe, expect, it, vi } from "vitest";
import { handleWorkerRequest, type WorkerEnvironment } from "./cloudflare";

function environment(
  overrides: Partial<WorkerEnvironment> = {},
): WorkerEnvironment {
  return {
    DEPLOYMENT_ENV: "preview",
    ASSETS: { fetch: vi.fn().mockResolvedValue(new Response("asset")) },
    ...overrides,
  };
}

const hostname = "thirty-seven-website-preview.thirty-seven-inc.workers.dev";
function inquiry(headers: Record<string, string> = {}) {
  return new Request(`https://${hostname}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: `https://${hostname}`,
      ...headers,
    },
    body: JSON.stringify({
      name: "Preview test",
      email: "test@example.com",
      summary: "Hello",
      inquiryType: "project",
      startedAt: Date.now() - 3_000,
      turnstileToken: "invalid",
    }),
  });
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("Cloudflare routing", () => {
  it("serves assets and marks preview responses noindex", async () => {
    const response = await handleWorkerRequest(
      new Request(`https://${hostname}/faxit`),
      environment(),
    );
    expect(await response.text()).toBe("asset");
    expect(response.headers.get("X-Robots-Tag")).toBe("noindex, nofollow");
  });

  it("does not mark production pages noindex", async () => {
    const response = await handleWorkerRequest(
      new Request("https://37.technology/faxit"),
      environment({ DEPLOYMENT_ENV: "production" }),
    );
    expect(response.headers.has("X-Robots-Tag")).toBe(false);
  });

  it("serves pre-rendered sharing images without forwarding query data", async () => {
    const env = environment();
    await handleWorkerRequest(
      new Request(`https://${hostname}/api/og?slug=faxit&private=ignored`),
      env,
    );
    const request = vi.mocked(env.ASSETS.fetch).mock.calls[0][0];
    expect(new URL(request.url).pathname).toBe("/assets/og/faxit.png");
    expect(new URL(request.url).search).toBe("");
  });

  it("does not permit path traversal through sharing-image slugs", async () => {
    const env = environment();
    await handleWorkerRequest(
      new Request(`https://${hostname}/api/og?slug=../../secret`),
      env,
    );
    expect(
      new URL(vi.mocked(env.ASSETS.fetch).mock.calls[0][0].url).pathname,
    ).toBe("/assets/og/homepage.png");
  });

  it("preserves legal redirects and query strings", async () => {
    const response = await handleWorkerRequest(
      new Request(`https://${hostname}/legal/privacy/faxit/?source=store`),
      environment(),
    );
    expect(response.status).toBe(308);
    expect(response.headers.get("Location")).toBe(
      `https://${hostname}/legal/privacy?source=store`,
    );
  });

  it("redirects www to the canonical host", async () => {
    const response = await handleWorkerRequest(
      new Request("https://www.37.technology/faxit?source=link"),
      environment(),
    );
    expect(response.headers.get("Location")).toBe(
      "https://37.technology/faxit?source=link",
    );
  });

  it("rejects unsupported contact methods", async () => {
    const response = await handleWorkerRequest(
      new Request(`https://${hostname}/api/contact`),
      environment(),
    );
    expect(response.status).toBe(405);
    expect(response.headers.get("Allow")).toBe("POST");
  });

  it("does not accept forged forwarded hosts", async () => {
    const response = await handleWorkerRequest(
      inquiry({
        Origin: "https://attacker.example",
        "X-Forwarded-Host": "attacker.example",
      }),
      environment(),
    );
    expect(response.status).toBe(403);
  });

  it("fails closed without a Turnstile secret even if development mock delivery is set", async () => {
    vi.stubEnv("NODE_ENV", "development");
    const response = await handleWorkerRequest(
      inquiry(),
      environment({ CONTACT_DELIVERY_MODE: "mock" }),
    );
    expect(response.status).toBe(400);
  });

  it("uses the trusted Cloudflare client IP and request hostname for verification", async () => {
    const fetch = vi.fn().mockResolvedValue(Response.json({ success: false }));
    vi.stubGlobal("fetch", fetch);
    const response = await handleWorkerRequest(
      inquiry({
        "CF-Connecting-IP": "192.0.2.150",
        "X-Forwarded-For": "forged",
        "X-Forwarded-Host": "forged.example",
      }),
      environment({ TURNSTILE_SECRET_KEY: "fixture-secret" }),
    );
    expect(response.status).toBe(400);
    expect(fetch.mock.calls[0][1].body.get("remoteip")).toBe("192.0.2.150");
  });

  it("keeps the custom 404 path for unknown APIs", async () => {
    const response = await handleWorkerRequest(
      new Request(`https://${hostname}/api/unknown`),
      environment(),
    );
    expect(response.status).toBe(404);
  });

  it("sends a verified inquiry using Worker credentials", async () => {
    const fetch = vi
      .fn()
      .mockResolvedValueOnce(
        Response.json({ success: true, hostname, action: "contact_submit" }),
      )
      .mockResolvedValueOnce(Response.json({ id: "fixture-email" }));
    vi.stubGlobal("fetch", fetch);
    const response = await handleWorkerRequest(
      inquiry({ "CF-Connecting-IP": "192.0.2.151" }),
      environment({
        TURNSTILE_SECRET_KEY: "fixture-turnstile-secret",
        RESEND_API_KEY: "re_fixture",
        CONTACT_FROM_EMAIL: "inquiries@37.technology",
        CONTACT_TO_EMAIL: "info@37.technology",
      }),
    );
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ accepted: true });
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch.mock.calls[1][0]).toBe("https://api.resend.com/emails");
    expect(new Headers(fetch.mock.calls[1][1].headers).get("Authorization")).toBe(
      "Bearer re_fixture",
    );
    expect(JSON.parse(fetch.mock.calls[1][1].body)).toMatchObject({
      from: "inquiries@37.technology",
      to: "info@37.technology",
      reply_to: "test@example.com",
    });
  });

  it("does not send an inquiry if verification belongs to another hostname", async () => {
    const fetch = vi.fn().mockResolvedValue(
      Response.json({
        success: true,
        hostname: "37.technology",
        action: "contact_submit",
      }),
    );
    vi.stubGlobal("fetch", fetch);
    const response = await handleWorkerRequest(
      inquiry({ "CF-Connecting-IP": "192.0.2.152" }),
      environment({
        TURNSTILE_SECRET_KEY: "fixture-secret",
        RESEND_API_KEY: "re_fixture",
      }),
    );
    expect(response.status).toBe(400);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
