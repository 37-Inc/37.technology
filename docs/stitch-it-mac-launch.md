# Stitch It Mac Website Launch

Article: `https://37.technology/news/stitch-it-comes-to-mac`.
Publication date: October 12, 2026. Apple app `554594252`, native Mac version
`1.0.0` / build `481.1`.

## Verified Sources

The owner authorized the website launch through the Native Mac Editor chat.
The release receipt and native Mac App Store screenshot are retained at
`/Users/cameronehrlich/Documents/Codex/2026-10-12/Stitch-It-Mac-Release/`.
The initial launch copy packet is in the adjacent `Stitch-It-Mac-Launch/` folder.
Apple's live Mac listing was independently read on October 12; its description
and structured data confirm native Mac workflows and macOS 14 compatibility.
A cached generic iOS listing is not Mac release evidence.

The website uses the already-published English Mac App Store artwork, not the
release screenshot containing the owner's App Store account name. Both artwork
cards preserve the approved composition and fictional demonstration images:

- `mac-one-clean-result.webp`: [approved first Mac card](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ea/4e/71/ea4e71dc-c352-26b8-1ef5-06653618aff6/01_one_clean_result.png/1286x804bb.webp).
- `mac-horizontal.webp`: [approved horizontal-stitching card](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d2/18/09/d2180920-5c23-8dc7-5934-dc2e384ab90e/02_stitch_side_by_side.png/1286x804bb.webp).

Both committed WebP assets are 1286 x 804 pixels, below the website's 960px
screenshot-height limit. The article and product page use intrinsic dimensions
and descriptive platform-specific alt text.

The article's 1200 x 630 PNG share card composes the approved first image with
existing Thirty Seven fonts and colors. It is a committed static asset, so no
new image service, Worker route, storage product, or request-time rendering is
needed. Regenerate it from the website checkout with:

```sh
npx tsx scripts/create-stitch-it-mac-share.tsx
```

## Scope and Guardrails

The article, article metadata, sitemap inclusion, and Stitch It product data are
updated together. Existing news articles retain their default sharing image and
hero behavior. Other products, store identities, offer pricing, analytics,
privacy settings, and Cloudflare infrastructure remain unchanged.

Mac claims are bounded to the shipped native SwiftUI/AppKit app: Apple Silicon
and Intel on macOS 14+, PNG/JPEG/Photos/clipboard import, vertical/horizontal
stitching, manual precise trim, live preview, solid-color rectangle/freehand
redaction, editable Mac projects, and JPEG/PNG/PDF export. Free supports three
images and a watermark; Pro lifts the cap and removes the watermark. Neither
Mac tier has ads. Apple Pro purchases use the same Apple Account across Apple
devices without an extra app login; Android purchases remain separate.

Do not imply automatic alignment, Mac blur/pixelation, native Mac Share/AirDrop
or Photos output, cloud project sync, or iOS editing of Mac projects. Editable
projects retain originals; share flattened exports when details must remain
hidden. No new prices, reviews, ratings, rankings, or portfolio counts are added.

Facebook and X announcements are outside this website implementation. The
Native Mac Editor chat owns that coordination and the Chrome37 session.
