import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { InvitationClient, parseInvitation } from "./InvitationClient";

const { search } = vi.hoisted(() => ({ search: { value: "" } }));
vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(search.value),
}));

describe("invitation links", () => {
  beforeEach(() => { search.value = ""; });

  it("normalizes an encoded code and preserves the displayed offer version", () => {
    expect(parseInvitation(new URLSearchParams("code=%20abcd7k9m%20&offer=v1"))).toEqual({
      code: "ABCD7K9M",
      offer: "v1",
      appUrl: "faxit://invite?code=ABCD7K9M&offer=v1",
    });
  });

  it("allows manual-code links without inventing an offer version", () => {
    expect(parseInvitation(new URLSearchParams("code=ABCD7K9M")).appUrl).toBe(
      "faxit://invite?code=ABCD7K9M"
    );
  });

  it.each([
    "", "code=", "code=short", "code=ABCD7K9M&code=ZZZZ9999",
    "code=%3Cscript%3E", "code=ABCD%0A7K9M", "code=%E2%84%AAABC7890", "code=%C5%BFABC7890",
  ])("does not open or copy malformed or ambiguous code: %s", (query) => {
    expect(parseInvitation(new URLSearchParams(query))).toEqual({ code: "", offer: "", appUrl: "" });
    search.value = query;
    const html = renderToStaticMarkup(<InvitationClient />);
    expect(html).not.toContain("faxit://");
    expect(html).not.toContain("Copy Code");
    expect(html).toContain("App Store");
    expect(html).toContain("recognizable invitation code");
  });

  it.each(["offer=", "offer=v1&offer=v2", "offer=%3Cscript%3E", `offer=${"x".repeat(65)}`])(
    "keeps a valid code as a manual fallback for malformed offers: %s", (offer) => {
      search.value = `code=ABCD7K9M&${offer}`;
      expect(parseInvitation(new URLSearchParams(search.value))).toEqual({ code: "ABCD7K9M", offer: "", appUrl: "" });
      const html = renderToStaticMarkup(<InvitationClient />);
      expect(html).toContain("Copy Code");
      expect(html).not.toContain("faxit://");
      expect(html).not.toContain("<script");
    }
  );

  it("only forwards code and offer into an explicit app action", () => {
    search.value = "code=abcd7k9m&offer=v2&uid=private&redirect=https://example.com";
    const html = renderToStaticMarkup(<InvitationClient />);
    expect(html).toContain('href="faxit://invite?code=ABCD7K9M&amp;offer=v2"');
    expect(html).toContain("Offer version: v2");
    expect(html).toContain("Open Fax It");
    expect(html).toContain("Copy Code");
    expect(html).not.toContain("private");
    expect(html).not.toContain("example.com");
  });

  it("routes staging codes only to the stage-invite host and keeps manual fallback", () => {
    search.value = "code=ABCD7K9M&offer=v1";
    const html = renderToStaticMarkup(<InvitationClient staging />);
    expect(html).toContain("ABCD7K9M");
    expect(html).toContain("Offer version: v1");
    expect(html).toContain("Copy Code");
    expect(html).toContain('href="faxit://stage-invite?code=ABCD7K9M&amp;offer=v1"');
    expect(html).toContain("Open Fax It (Staging)");
    expect(html).not.toContain("faxit://invite");
    expect(html).not.toContain("apps.apple.com");
  });
});
