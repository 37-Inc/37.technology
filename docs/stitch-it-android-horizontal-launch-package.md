# Stitch It Android Horizontal Website Activation

Status: implementation ready on the review branch. Public `37.technology` publication remains owner-gated.

## Verified release truth

- Google Play production reports release `2.4.2` (`versionCode 2026082602`) with status `completed` and no staged user-fraction limit.
- All 18 active Play locales contain the horizontal-stitching release note, and the public listing serves the horizontal/vertical short description.
- Remote Config template 23 enables `android_horizontal_stitching_enabled` for Android 2.4.0 and newer; the global fallback remains off as the incident kill switch.
- The Android release gate covered horizontal Arrange, Crop, Edit/redaction, PNG/JPG/PDF rendering, Share, and vertical regressions on representative device profiles.

## Activated content contract

- `data/projects/stitch-it.ts` is the single product source for the homepage card, project page, SEO metadata, Open Graph text, FAQs, and SoftwareApplication schema.
- Vertical and horizontal stitching are available on iPhone, iPad, and Android.
- Both current apps provide straight-line and freeform solid-color redaction. Do not claim blur or pixelation; neither current implementation contains those tools.
- PNG, JPG, and PDF output are available on both platforms, while interface and Pro details can still vary.
- The approved Play assets are copied from `android/play-store/metadata/en-US/images/phoneScreenshots/02_horizontal_result.png` and `04_arrange_horizontal.png`, converted to 540x960 WebP, and included with Android-specific alt text.
- Historical News & Notes copy now carries an August 26 Android 2.4.2 update instead of rewriting the February announcement as though the feature existed then.

## Remaining publication gate

1. Review the branch copy and rendered Android screenshots.
2. Merge only after owner approval.
3. Let the normal production integration deploy from `main`; do not manually deploy this worktree.
4. After deployment, verify the Vercel SHA, live product/news routes, metadata, JSON-LD, images, and store links together.
