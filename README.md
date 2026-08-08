# Thirty Seven, Inc. portfolio

The marketing site for [Thirty Seven, Inc.](https://37.technology) — a problem-first landing page per app, plus the company homepage — built with the Next.js App Router, TypeScript, and Tailwind CSS. Public pages are statically generated; the inquiry form uses one server route for protected email delivery.

## Stack
- Next.js 16 (App Router, SSG plus one server route)
- TypeScript with strict mode
- Tailwind CSS 4 with CSS variables for the warm neutral theme
- `next/font` for Inter (UI) and Fraunces (display)
- Edge-based Open Graph image generation (`/api/og`)
- Google Analytics 4 and PostHog through one typed event dispatcher
- Resend delivery and Cloudflare Turnstile protection for project inquiries

## Local development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to preview the site.

### Quality checks
```bash
npm test
npm run lint
npm run build
```
The Vitest suite exercises the inquiry validation and delivery boundary. `npm run build` runs a production bundle to ensure every route compiles and the static pages render without type errors.

## Editing the portfolio
Each project lives in its own file under [`data/projects/`](data/projects/) (e.g. `data/projects/reshoot.ts`), aggregated by `data/projects/index.ts`. The schema is defined in [`data/projects/types.ts`](data/projects/types.ts) and drives both the homepage grid and the landing page template at `app/[slug]/page.tsx` — no layout edits required to add or change a project.

Each project defines:
- identity: `slug`, `name`, `category`, `oneLiner`, `description`, `tags`, `featured`
- SEO content: `problem`, `solution`, `features`, `useCases`, `comparison`, `faqs`, `keywords`, `seo`, `applicationCategory`, `cta`
- structured-data inputs: `offer` (machine-readable price), `operatingSystem`
- visuals: `hero` icon, `screenshots` (WebP with intrinsic `width`/`height`), and a per-project `theme` (accent colors sampled from the app icon)

Copy rules: every claim must be verifiable from the App Store listing, the official product site, or first-hand knowledge. No invented stats, ratings, or user counts.

Assets live in [`public/assets/projects`](public/assets/projects) — icons at ≤192px, screenshots resized to ≤960px tall and encoded as WebP before committing.

## SEO & sharing
- Site-wide metadata lives in [`app/layout.tsx`](app/layout.tsx); `data/site.ts` holds the site config
- Per-project `generateMetadata` sets absolute titles (bypassing the layout template), descriptions, keywords, and canonicals
- Landing pages emit SoftwareApplication/WebApplication, BreadcrumbList, and FAQPage JSON-LD (`components/landing/structured-data.ts`); the homepage emits Organization/WebSite
- `/api/og?slug=<project>` creates branded OG/Twitter cards
- `app/sitemap.ts` and `app/robots.ts` keep search engines informed automatically
- `37.technology` is the primary domain; `www` 308-redirects to it (configured in Vercel), matching all canonical URLs

## Legal pages
One consolidated privacy policy (`/legal/privacy`) and terms of service (`/legal/terms`) cover the website and every app — these are the URLs App Store Connect listings point at. The old app-specific URLs (`/legal/privacy/faxit`, `/legal/terms/faxit`) permanently redirect to them via `next.config.ts`; remove the redirects only after every store listing has shipped a version pointing at the consolidated pages.

## Analytics
Google Analytics 4 is enabled in production via `siteConfig.gaMeasurementId` in [`data/site.ts`](data/site.ts) (currently the `37.technology` web stream in the Thirty Seven, Inc. GA account). PostHog is enabled only when `NEXT_PUBLIC_POSTHOG_KEY` is configured. [`lib/analytics.ts`](lib/analytics.ts) is the shared event contract; never send inquiry contents or other personal data through it. Search Console is verified via the GA tag; `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` remains available for meta-tag verification.

## Contact delivery
The embedded form posts to `app/api/contact/route.ts`, which validates, abuse-checks, and delivers the inquiry through Resend. Provider keys are server-only. See [`docs/contact-form.md`](docs/contact-form.md) and [`.env.example`](.env.example) for configuration and local mock-mode review.

## Deployment
Vercel deploys automatically: PRs get preview deployments and merges to `main` go to production. Static pages remain on the Vercel CDN; only `/api/contact` invokes a function.

## Task tracking
Follow-up work is tracked in the owner's roadmap, not in this repo. The `.beads/` workspace is local-only and gitignored — do not commit it.
