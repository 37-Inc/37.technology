# QuickKey Corporate Update

Owner authorized review, simplification, merge and production publication on
November 6, 2026. Tracker: `roadmap-i37s.39.6`.

## Surfaces

- `/`: portfolio card and orbit link, with education in the portfolio description.
- `/quickkey`: shared product template, current icon and store artwork, supported
  teacher workflows, current store links, support, forms, pricing and legal links.
- `/news/quickkey-joins-thirty-seven`: acquisition and stewardship article, linked
  from the product page, homepage news and news index.
- `/about`: shared portfolio mosaic includes QuickKey without an orphaned tile.

The article is published through the ordinary catalog. Temporary draft-preview
status, environment flags and draft UI were removed rather than retaining a
second publishing path. Publication date is November 6, not the acquisition date.

## Facts And Boundaries

- Acquisition: September 2026, verified against the executed asset-sale record.
  Month-level wording distinguishes August 31 signatures from September 1
  execution/delivery wording. No price, seller identity or private terms published.
- iOS relaunch: public 1.0.0 on November 3, verified by Apple's current lookup for
  app `686229501`; seller Thirty Seven Inc., languages EN/ES.
- Android: 1.0.0 controlled production rollout, verified in the existing release
  receipts and `roadmap-i37s.39.4.1`. No rollout percentage is advertised.
- 1.0.1 is a separate public beta, not a production launch. Current release Beads
  distinguish it from the public 1.0.0 apps.
- Published workflows use supported QuickKey forms and teacher review. No perfect
  recognition, arbitrary-form, fully-offline, adoption, rating or compliance claims.
- English/Spanish mobile apps and homepage/signup are shipped. Supporting web
  journeys are not represented as fully translated. Additional billing-screen
  work is not advertised as released.
- The product's own site remains the destination for accounts, forms, pricing,
  support and privacy. Paths were read from the actual live site and checked.

## Artwork

`quickkey-media-provenance.json` records source and derivative hashes/dimensions.
The native rabbit icon and approved `v1-approved` artwork match the public Apple
listing. No new app captures or unpublished finishing-batch images were used.

The iPhone gallery follows answer key, printing, scanning, review and results.
The hero deliberately pairs complete iPhone scanning and iPad reporting posters.
Their classroom examples are fictional. Icon is 192px; screenshots are at most
960px tall; hero is 1200x800 and sharing image is 1200x630.

Rebuild from the existing local QuickKey sources:

```sh
node scripts/create-quickkey-media.mjs /path/to/local/quickkey
```

## Release Verification

Run tests, zero-warning lint, strict types, full audit, production build,
Cloudflare export/Worker bundle and local smoke before merge. After deployment,
verify actual public routes, canonical/schema/sharing metadata, cross-links,
artwork, redirects, seller file and contact rejection boundaries. Preserve the
Stupid Gifts rebrand/aliases and approved Stitch It icon. Main pushes deploy
through the existing Cloudflare workflow; no DNS or hosting migration is needed.

Dated validation and deployment receipts are retained outside Git in the owner's
Codex evidence directory and linked from the existing Bead. Related app rollout,
teacher/device acceptance, customer announcements, and the QuickKey marketing-site
screenshot refresh remain with their existing owners; this website update does
not complete or activate those separate tasks.

Local review before merge: 122 tests, zero-warning lint, strict types, zero audit
vulnerabilities, production build and Cloudflare production export pass. The
Worker dry-run is 62.76 KiB gzip. Homepage, product and article were checked at
390, 768 and 1280px: no page overflow, broken loaded images or orbit-icon overlaps.
The about mosaic fits at tablet width. FAQ Enter/Tab behavior passes. One existing
development-only LCP advisory names the shared brand mark; its current priority
setting was preserved. No first-party runtime error was observed.
