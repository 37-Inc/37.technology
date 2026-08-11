import { describe, expect, it } from "vitest";
import { shouldEnableBrowserAnalytics } from "@/lib/analytics-host";

describe("browser analytics host policy", () => {
  it.each(["localhost", "127.0.0.1", "::1"])(
    "disables analytics on %s",
    (hostname) => {
      expect(shouldEnableBrowserAnalytics(hostname)).toBe(false);
    }
  );

  it("allows a deliberate local test override", () => {
    expect(shouldEnableBrowserAnalytics("localhost", true)).toBe(true);
  });

  it("enables analytics on the production hostname", () => {
    expect(shouldEnableBrowserAnalytics("37.technology")).toBe(true);
  });
});
