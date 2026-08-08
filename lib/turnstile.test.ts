import { afterEach, describe, expect, it, vi } from "vitest";
import { verifyTurnstile } from "@/lib/turnstile";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("verifyTurnstile", () => {
  it("accepts only the expected hostname and action", async () => {
    vi.stubEnv("TURNSTILE_SECRET_KEY", "test-secret");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        Response.json({
          action: "contact_submit",
          hostname: "37.technology",
          success: true,
        })
      )
    );

    await expect(
      verifyTurnstile({
        expectedHostname: "37.technology",
        ip: "192.0.2.1",
        token: "test-token",
      })
    ).resolves.toBe(true);
  });

  it("rejects a token for another hostname or action", async () => {
    vi.stubEnv("TURNSTILE_SECRET_KEY", "test-secret");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        Response.json({
          action: "other_action",
          hostname: "attacker.example",
          success: true,
        })
      )
    );

    await expect(
      verifyTurnstile({
        expectedHostname: "37.technology",
        ip: "192.0.2.1",
        token: "test-token",
      })
    ).resolves.toBe(false);
  });

  it("fails closed when verification exceeds its timeout", async () => {
    vi.stubEnv("TURNSTILE_SECRET_KEY", "test-secret");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockImplementation((_: string, init: RequestInit) =>
        new Promise((_, reject) => {
          init.signal?.addEventListener("abort", () => reject(new Error("aborted")));
        })
      )
    );

    await expect(
      verifyTurnstile({
        expectedHostname: "37.technology",
        ip: "192.0.2.1",
        timeoutMs: 5,
        token: "test-token",
      })
    ).resolves.toBe(false);
  });
});
