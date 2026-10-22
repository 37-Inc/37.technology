import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import sitemap from "@/app/sitemap";
import StagingInvitationPage, { metadata } from "./page";

vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams("code=ABCD7K9M&offer=v1"),
}));

describe("staging invitation", () => {
  it("is a noindex static page with a query-free canonical and staging preview text", () => {
    expect(metadata.title).toEqual({ absolute: "Fax It Staging Invitation" });
    expect(metadata.robots).toEqual({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe("https://37.technology/faxit/stage-invite");
    expect(metadata.openGraph).toMatchObject({ title: "Fax It Staging Invitation", url: "https://37.technology/faxit/stage-invite" });
    expect(sitemap().some(({ url }) => url.includes("stage-invite"))).toBe(false);
  });

  it("labels the environment conspicuously and never opens a production claim", () => {
    const html = renderToStaticMarkup(<StagingInvitationPage />);
    expect(html).toContain("Staging invitation. Test credits only.");
    expect(html).toContain("Do not enter this code in the App Store build.");
    expect(html).toContain("Copy Code");
    expect(html).toContain("faxit://stage-invite?");
    expect(html).not.toContain("faxit://invite");
    expect(html).not.toContain("apps.apple.com");
  });
});
