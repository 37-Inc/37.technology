import { describe, expect, it } from "vitest";
import { stitchIt } from "@/data/projects/stitch-it";
import { buildSoftwareApplicationLd } from "./structured-data";

describe("software application JSON-LD", () => {
  it("keeps Stitch It features and store links platform-accurate", () => {
    const data = buildSoftwareApplicationLd(stitchIt);

    expect(data.operatingSystem).toBe("iOS, iPadOS, Android");
    expect(data.featureList).toContain("Vertical and horizontal stitching");
    expect(data.featureList).toContain("Solid-color redaction tools");
    expect(data.featureList).toContain("PNG, JPG, or PDF export");
    expect(data.screenshot).toContain(
      "https://37.technology/assets/projects/stitch-it/android-horizontal-result.webp"
    );
    expect(data.screenshot).toContain(
      "https://37.technology/assets/projects/stitch-it/android-horizontal-arrange.webp"
    );
    expect(data.downloadUrl).toEqual([
      "https://apps.apple.com/us/app/stitch-it-long-screenshots/id554594252",
      "https://play.google.com/store/apps/details?id=com.luckybunnyllc.stitchit",
    ]);
    expect(data.sameAs).toContain("https://www.stitchitapp.com/");
  });
});
