import { describe, expect, it } from "vitest";
import { analyticsPageContext, withoutQuery } from "@/lib/analytics-url";

describe("analytics URL sanitization", () => {
  it("removes query strings and fragments from absolute URLs", () => {
    expect(
      withoutQuery("https://37.technology/contact?email=person%40example.com#form")
    ).toBe("https://37.technology/contact");
  });

  it("removes query strings from relative values", () => {
    expect(withoutQuery("/contact?type=press#form")).toBe("/contact");
  });

  it("sanitizes current and referring URLs together", () => {
    expect(
      analyticsPageContext(
        "https://37.technology/contact?name=Pat",
        "https://example.com/path?token=secret"
      )
    ).toEqual({
      page_location: "https://37.technology/contact",
      page_referrer: "https://example.com/path",
    });
  });
});
