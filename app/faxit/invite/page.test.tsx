import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import sitemap from "@/app/sitemap";
import InvitationPage, { metadata } from "./page";

vi.mock("next/navigation", () => ({ useSearchParams: () => new URLSearchParams() }));

describe("static invitation page", () => {
  it("publishes generic query-free, noindex metadata", () => {
    expect(metadata.title).toEqual({ absolute: "A little credit. An easier fax." });
    expect(metadata.alternates?.canonical).toBe("https://37.technology/faxit/invite");
    expect(metadata.robots).toEqual({ index: false, follow: false });
    const image = "https://37.technology/assets/projects/faxit/invitation-share.png";
    expect(metadata.openGraph).toMatchObject({
      url: "https://37.technology/faxit/invite",
      images: [{ url: image, width: 1200, height: 630 }],
    });
    expect(metadata.twitter).toMatchObject({ card: "summary_large_image", images: [image] });
    expect(sitemap().some(({ url }) => url.includes("/invite"))).toBe(false);
  });

  it("uses a real static PNG with the required dimensions", () => {
    const png = readFileSync("public/assets/projects/faxit/invitation-share.png");
    expect(png.subarray(1, 4).toString()).toBe("PNG");
    expect([png.readUInt32BE(16), png.readUInt32BE(20)]).toEqual([1200, 630]);
  });

  it("explains installation, reopening, manual claim and old-app fallback without promising an amount", () => {
    const html = renderToStaticMarkup(<InvitationPage />);
    expect(html).toContain("Install Fax It, then reopen this invitation or enter its code in Account.");
    expect(html).toContain("does not carry the code");
    expect(html).toContain("Sign in with Apple");
    expect(html).toContain("Have an invitation code?");
    expect(html).toContain("update Fax It");
    expect(html).toContain("iPhone, iPad and Mac");
    expect(html).not.toMatch(/\d+ (?:free )?credits?/);
    expect(html).not.toContain("<form");
  });
});
