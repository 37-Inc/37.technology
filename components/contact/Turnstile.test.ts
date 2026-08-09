import { describe, expect, it } from "vitest";
import { turnstileSizeForWidth } from "./Turnstile";

describe("turnstileSizeForWidth", () => {
  it("uses Cloudflare's compact widget below the flexible minimum", () => {
    expect(turnstileSizeForWidth(299)).toBe("compact");
  });

  it("uses the flexible widget when at least 300px is available", () => {
    expect(turnstileSizeForWidth(300)).toBe("flexible");
    expect(turnstileSizeForWidth(480)).toBe("flexible");
  });
});
