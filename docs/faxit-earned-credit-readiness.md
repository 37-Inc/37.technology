# Fax It website: earned-credit readiness

Reviewed October 22, 2026 (Pacific). Website work: `roadmap-j73d5.8`. Gated publication/screenshots: `roadmap-j73d5.10`; App Privacy/ATT reconciliation: `roadmap-j73d5.9`; existing dependency-advisory triage: `roadmap-gtdwd`.

## Publication decision

The product page keeps paid sending and optional ad-free number plans as available choices. Its earned-credit card is explicitly **Upcoming**, and says neither earning method is in the public app yet. The free-fax FAQ explains free download versus paid sending and paid receiving. Titles, descriptions and SoftwareApplication features do not advertise currently available free faxing.

Current evidence is public iOS/Mac **1.4.7**, internal TestFlight **1.4.8 / iOS344 / Mac343**, production referral enrollment enabled, and production `isRewardAdsEnabled=false` without an override. Backend deployment does not make a candidate app feature public. No fixed reward, instant-grant promise, ad inventory guarantee, free receiving, overseas local-number promise or cheapest-provider claim is made. Paid credits remain usable without an ad; supported international destinations may cost more than one credit per page, including cover pages.

The referral-first article in [the draft](drafts/fax-it-earned-credits.md) is intentionally outside the news content/metadata and daily scheduling system. Referrals can launch independently of ads. When referrals become public, split the referral and ad availability states; do not mark the combined earning card available while ads are disabled. Publish the optional ad paragraph only after its separate device/consent/verification/activation gates. Set the actual publication date then.

## Claim sources

- `/Users/cameronehrlich/roadmap/marketing/faxit/evidence/2026-10-21-referral-release/receipt.json`: reviewed Apple PR166/source `3c22c9be91f5afbbf4b2fbe31b71f498fe3c6c32`, internal builds, signed exports, backend rollout and remaining physical acceptance.
- `/Users/cameronehrlich/fax-it/fax-it-marketing-packet/marketing/faxit/reviews/2026-10-22-earned-credits/evidence/`: fresh read-only ASC version/build/pricing and production provider-gate receipts. `REVIEW.md` and `COPY.md` separate current, referral-launch and ad-launch claims. The final owner-review copy/gallery is `/Users/cameronehrlich/Documents/Fax It/2026-10-22-earned-credits/`.
- Canonical `MONETIZATION-SPEC.md` and `REFERRALS-SPEC.md` define destination-based credit value, paid receiving, independent pinned referral amounts and sign-in/claim eligibility. `PRODUCT-FACTS.yaml` has an older verification date and is not authority for current release state or the proposed $3.99 pack price. No prices changed here.
- Native Apple source at `3c22c9be`: `AdConsentService.swift`, `RewardedAdService.swift`, `EarnAdCreditsUseCase.swift`, `AddCreditsSwiftUIView.swift`, AppDelegate tracking-permission handling, and pinned Google Mobile Ads13.11/UMP3.1 packages.
- Backend PR110/source `21e43a530be26f5810fc21fdb8c4fad65c4fff5b`: `ReferralService.purgeAccount`, account deletion, signed ad callbacks and grant handling. In particular, shared referral settlement records can remain after the deleted account UID/code is removed; the policy must not promise every shared claim is erased.

## Privacy and terms scope

The Fax It sections disclose conditional Google ad/consent processing, pseudonymous (not anonymous) UID/watch identifiers, verification/grant records, referral account linkage and deletion/settlement behavior, RevenueCat credit handling, and push-token choices. The existing HIPAA exclusions and other apps' practices remain intact. No unintegrated AppLovin/Unity adapter is listed as current. Terms clarify destination-based credit costs, cover pages, earned-offer conditions, and US/Canadian number inventory versus buyer storefront geography.

These are factual product disclosures, not a legal-compliance certification. Store privacy labels, ATT behavior and all actually shipped SDKs still require release-specific reconciliation before public reward availability. UMP success and an updated website policy do not prove compliance or authorize activation. See [Google SDK disclosure guidance](https://developers.google.com/admob/ios/privacy/data-disclosure) and [Apple App Privacy details](https://developer.apple.com/app-store/app-privacy-details/).

## Search and crawl audit

The existing canonical `/faxit`, homepage link, sitemap entry and static server-rendered content are retained. Two contextual article links and direct free-fax/earning/page-cost answers are added. SoftwareApplication, BreadcrumbList and visible-answer FAQPage data remain; no fabricated rating/review or upcoming feature is added as a shipped application capability. The $0 offer is explicitly a free download, not free fax service. FAQ markup is not a promise of a Google rich result.

The wildcard robots rule already permits Googlebot, Bingbot, OAI-SearchBot, PerplexityBot and Claude-SearchBot. Existing GPTBot, ClaudeBot and Applebot-Extended training opt-outs remain unchanged. Invitation pages remain noindex and outside the sitemap. The root `app-ads.txt` authorized Google seller record is unchanged; no unverified mediation seller is added.

`node scripts/audit-faxit.mjs BASE_URL` checks static copy, metadata/schema, internal links, seller record, approved-current media, policy dates and qualifications. On the public apex it also checks search-agent User-Agent responses and indexability headers. These requests originate from the audit host, not genuine crawler IPs, so they cannot prove verified-bot allowlisting, actual crawling/indexing, AI citation or ranking. No security rule is loosened. Preview noindex remains independently checked by the existing Worker smoke test.

This approach follows [Google's standard SEO guidance for AI features](https://developers.google.com/search/docs/appearance/ai-features), not special hidden AI markup. Search/training controls are distinct in [OpenAI's crawler documentation](https://developers.openai.com/api/docs/bots), [Perplexity's crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), and [Anthropic's crawler guidance](https://privacy.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler).

## Visual and rollout boundary

Approved-current hero, screenshots, icon, Mac automation image and share identity are unchanged. All new marketing composites and adaptive-UI captures remain owner-review/unreleased; do not promote a fixture or unmerged UI as current. The draft records exact manifest ownership and export requirements.

Review includes the scoped diff, release/claim checks, local desktop/390px phone/768px tablet inspection, FAQ interaction, no page overflow at tested widths, unit tests, lint, type checking, normal production build, static Cloudflare export and Worker bundle validation. Deploy only through the normal reviewed main-branch Cloudflare workflow, then repeat public HTTP/crawler and visual checks. No app, SDK, backend, price, ad flag, DNS, seller record, social post or account configuration changes are part of this rollout.

Local before/after images, logs and raw audit receipts are retained at `/Users/cameronehrlich/Documents/Codex/2026-10-22/Fax-It-Website/`. The unchanged dependency baseline also reports existing npm advisories; retain the audit and track patch/reachability work separately rather than force a framework downgrade in this content change.
