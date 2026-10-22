import { describe, expect, it } from "vitest";
import robots from "./robots";
import sitemap from "./sitemap";

describe("public search discoverability", () => {
  it("allows search retrieval without removing training opt-outs", () => {
    const rules = robots().rules;
    expect(rules).toContainEqual({ userAgent: "*", allow: "/" });
    for (const userAgent of ["GPTBot", "ClaudeBot", "Applebot-Extended"]) {
      expect(rules).toContainEqual({ userAgent, disallow: "/" });
    }
    for (const userAgent of ["Googlebot", "Bingbot", "OAI-SearchBot", "PerplexityBot", "Claude-SearchBot"]) {
      expect(rules).not.toContainEqual({ userAgent, disallow: "/" });
    }
  });

  it("includes the canonical product and excludes invitations and held drafts", () => {
    const urls = sitemap().map(({ url }) => url);
    expect(urls).toContain("https://37.technology/faxit");
    expect(urls.some((url) => /invite|fax-it-earned-credits|\?code=/.test(url))).toBe(false);
    expect(robots().sitemap).toBe("https://37.technology/sitemap.xml");
  });
});
