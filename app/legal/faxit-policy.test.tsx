import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import PrivacyPage from "./privacy/page";
import TermsPage from "./terms/page";

describe("Fax It earned-credit disclosures", () => {
  it("explains conditional SDK use, identifiable verification and shared-claim retention", () => {
    const privacy = renderToStaticMarkup(createElement(PrivacyPage));
    expect(privacy).toContain("not yet available in the public app");
    expect(privacy).toContain("Google AdMob");
    expect(privacy).toContain("Ad Privacy Choices");
    expect(privacy).toContain("pseudonymous Fax It");
    expect(privacy).toContain("not anonymous records");
    expect(privacy).toContain("account identifier from shared referral claims");
    expect(privacy).toContain("grant records needed to settle the other participant");
    expect(privacy).toContain("not a HIPAA-covered service");
  });

  it("does not turn number inventory into buyer geography or promise free receiving", () => {
    const terms = renderToStaticMarkup(createElement(TermsPage));
    expect(terms).not.toContain("subscriptions are currently offered only in the United");
    expect(terms).toContain("Purchase availability");
    expect(terms).toContain("not yet available in the public app");
    expect(terms).toContain("Sharing an invitation alone does not earn credits");
    expect(terms).toContain("do not provide a free");
    expect(terms).toContain("other supported destinations use two");
  });
});
