import { describe, expect, it } from "vitest";
import { stitchIt } from "@/data/projects/stitch-it";
import { buildSoftwareApplicationLd } from "./structured-data";

describe("software application JSON-LD", () => {
  it("keeps Stitch It features and store links platform-accurate", () => {
    const data = buildSoftwareApplicationLd(stitchIt);

    expect(data.operatingSystem).toBe("iOS, iPadOS, Android");
    expect(data.featureList).toContain("Horizontal stitching on iPhone and iPad");
    expect(data.featureList).toContain("Vertical stitching on every platform");
    expect(data.downloadUrl).toEqual([
      "https://apps.apple.com/us/app/stitch-it-long-screenshots/id554594252",
      "https://play.google.com/store/apps/details?id=com.luckybunnyllc.stitchit",
    ]);
    expect(data.sameAs).toContain("https://www.stitchitapp.com/");
  });
});
