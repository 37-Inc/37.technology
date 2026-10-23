import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ScreenshotStrip } from "./ScreenshotStrip";

describe("static screenshot delivery", () => {
  it("keeps original assets and intrinsic dimensions without an image service", () => {
    const html = renderToStaticMarkup(
      <ScreenshotStrip
        name="Example"
        screenshots={[
          {
            src: "/assets/projects/example/screen.webp",
            alt: "Example screen",
            width: 444,
            height: 960,
          },
        ]}
      />,
    );

    expect(html).toContain('src="/assets/projects/example/screen.webp"');
    expect(html).toContain('width="444"');
    expect(html).toContain('height="960"');
    expect(html).toContain('loading="lazy"');
    expect(html).toContain('alt="Example screen"');
    expect(html).not.toContain("/_next/image");
  });

  it("omits the section when there are no screenshots", () => {
    expect(renderToStaticMarkup(<ScreenshotStrip name="Example" />)).toBe("");
  });
});
