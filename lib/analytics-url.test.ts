import { describe, expect, it } from "vitest";
import { analyticsPageContext, isReferralInvitationPath, withoutQuery } from "@/lib/analytics-url";

describe("analytics URL sanitization", () => {
  it("scopes the invitation privacy guard to the invitation route", () => {
    expect(isReferralInvitationPath("/faxit/invite")).toBe(true);
    expect(isReferralInvitationPath("/faxit/invite/")).toBe(true);
    expect(isReferralInvitationPath("/faxit/stage-invite")).toBe(true);
    expect(isReferralInvitationPath("/faxit/stage-invite/")).toBe(true);
    expect(isReferralInvitationPath("/faxit")).toBe(false);
    expect(isReferralInvitationPath("/faxit/invite-other")).toBe(false);
  });

  it("never retains invitation codes in current or referring page context", () => {
    expect(analyticsPageContext(
      "https://37.technology/faxit/invite?code=ABCD7K9M&offer=v1",
      "https://37.technology/faxit/invite?code=ZZZZ9999&offer=v2"
    )).toEqual({
      page_location: "https://37.technology/faxit/invite",
      page_referrer: "https://37.technology/faxit/invite",
    });
  });
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
