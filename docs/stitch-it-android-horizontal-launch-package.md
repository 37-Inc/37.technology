# Stitch It Android Horizontal Launch Package

Status: dormant preparation only. This package is not current product copy and must not be activated without owner approval and verified production availability.

## Current public truth

- Android is available on Google Play with a vertical long-screenshot workflow.
- Android horizontal stitching exists in the referenced integration branch but is gated by `android_horizontal_stitching_enabled`, whose default is `false`.
- The current landing page therefore separates Apple horizontal stitching from Android vertical stitching.
- The current Android redaction and export language remains intentionally narrower than the Apple feature list.

## Post-launch data slots

When the Android production gate is complete, update `data/projects/stitch-it.ts` as one reviewed change:

- Add a platform-specific horizontal Android feature title and body.
- Add verified Android horizontal screenshots with intrinsic dimensions and alt text that names Android and the side-by-side result.
- Update the Android FAQ, comparison/use-case copy, `featureList` JSON-LD, and CTA together.
- Keep the App Store URL at `https://apps.apple.com/us/app/stitch-it-long-screenshots/id554594252` and the Google Play URL at `https://play.google.com/store/apps/details?id=com.luckybunnyllc.stitchit`.

## Suggested activation copy

> Horizontal and vertical stitching on Android

> Arrange screenshots, switch direction, crop the result, redact private details, and save or share the finished image.

This copy is dormant until the Android store listing, production build, remote-config state, and device acceptance all agree.

## Activation gate

1. Verify the production Android version contains the horizontal integration.
2. Verify `android_horizontal_stitching_enabled` is intentionally enabled and the direction selector is visible.
3. Run horizontal arrange, edit, render, redaction, and share acceptance coverage on the production candidate.
4. Verify the Google Play listing and the website link resolve to the intended release.
5. Update the data, screenshots, rendered copy, and schema in the same review.
