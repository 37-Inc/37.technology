import { describe, expect, it } from "vitest";
import { siteConfig } from "@/data/site";
import { generateMetadata, generateStaticParams } from "./page";

describe("news metadata", () => {
  it("publishes a share-ready Mac article with its own approved imagery", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: "stitch-it-comes-to-mac" }),
    });
    const image = `${siteConfig.url}/assets/news/stitch-it-comes-to-mac-share.png`;

    expect(metadata.title).toEqual({
      absolute: "Stitch It Comes to Mac: Native Screenshot Stitching",
    });
    expect(metadata.alternates?.canonical).toBe(
      `${siteConfig.url}/news/stitch-it-comes-to-mac`
    );
    expect(metadata.openGraph).toMatchObject({
      type: "article",
      images: [{ url: image, width: 1200, height: 630 }],
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      images: [image],
    });
    expect(generateStaticParams()).toContainEqual({
      slug: "stitch-it-comes-to-mac",
    });
  });

  it("preserves the existing share-image fallback for other articles", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: "fax-it-comes-to-mac" }),
    });

    expect(metadata.openGraph).toMatchObject({
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    });
  });
});
