import { contactTurnstileAction } from "@/lib/contact";

interface VerifyTurnstileOptions {
  allowUnconfigured?: boolean;
  expectedHostname: string;
  ip: string;
  secretKey?: string;
  timeoutMs?: number;
  token: string;
}

export async function verifyTurnstile({
  allowUnconfigured = process.env.NODE_ENV !== "production",
  expectedHostname,
  ip,
  secretKey = process.env.TURNSTILE_SECRET_KEY,
  timeoutMs = 5_000,
  token,
}: VerifyTurnstileOptions) {
  const secret = secretKey;

  if (!secret) {
    return allowUnconfigured;
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
