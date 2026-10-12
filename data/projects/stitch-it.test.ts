import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { stitchIt } from "./stitch-it";

describe("Stitch It Mac release", () => {
  it("adds Mac without changing the existing store identities or free offer", () => {
    expect(stitchIt.operatingSystem).toBe("iOS, iPadOS, macOS, Android");
    expect(stitchIt.tags).toContain("macOS");
    expect(stitchIt.platforms).toContainEqual({
      label: "Mac App Store",
      url: "https://apps.apple.com/us/app/stitch-it-long-screenshots/id554594252?platform=mac",
      kind: "app-store",
    });
    expect(stitchIt.platforms.some((platform) =>
      platform.url === "https://play.google.com/store/apps/details?id=com.luckybunnyllc.stitchit"
    )).toBe(true);
    expect(stitchIt.offer).toEqual({
      price: "0",
      description: "Free download; optional Pro upgrade",
    });
  });

  it("keeps Mac commerce, redaction and project limitations explicit", () => {
    const answers = stitchIt.faqs.map((faq) => faq.answer).join(" ");

    expect(answers).toContain("macOS 14");
    expect(answers).toContain("Apple Silicon and Intel");
    expect(answers).toContain("up to three images");
    expect(answers).toContain("no Mac ads");
    expect(answers).toContain("same Apple Account");
    expect(answers).toContain("Android purchases are separate");
    expect(answers).toContain("Mac does not offer blur or pixelation");
    expect(answers).toContain("projects retain the original images");
    expect(answers).toContain("do not currently open for editing");
  });

  it("ships approved Mac images with bounded dimensions and concise SEO", () => {
    expect(stitchIt.seo.title.length).toBeLessThanOrEqual(60);
    expect(stitchIt.seo.description.length).toBeLessThanOrEqual(155);
    for (const media of [stitchIt.heroMedia!, stitchIt.spotlight!.media]) {
      expect(existsSync(path.join(process.cwd(), "public", media.src))).toBe(true);
      expect(media.width).toBeGreaterThan(media.height);
      expect(media.height).toBeLessThanOrEqual(960);
      expect(media.alt).toContain("Mac");
    }
  });
});
