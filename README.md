# Thirty Seven, Inc. portfolio

A minimal, high-performance portfolio for [Thirty Seven, Inc.](https://37.technology) built with the Next.js App Router, TypeScript, and Tailwind CSS. Every route is statically generated for instant loads and clean deep links to each project.

## Stack
- Next.js 15 (App Router, SSG)
- TypeScript with strict mode
- Tailwind CSS 4 with CSS variables for the neutral theme
- `next/font` for Inter (UI) and Fraunces (display)
- Edge-based Open Graph image generation (`/api/og`)
- Optional Plausible analytics (cookieless)

## Local development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to preview the site. The dev server uses file watching with hot reload.

### Quality checks
```bash
npm run lint
npm run build
```
`npm run build` runs a production bundle to ensure all routes render statically without type errors.

## Editing the portfolio
All project content comes from a single data source at [`data/projects.ts`](data/projects.ts). Update or add entries there to change the homepage grid and project detail pages—no layout edits required.

Each project supports:
- `slug`, `name`, `oneLiner`, `description`
- `tags` (rendered as chips)
- `featured` flag to pin items ahead of alphabetical sorting
- `hero` icon path and optional `highlights`/`screenshots`
- `platforms` array driving the platform buttons

Project icons live in [`public/assets/projects`](public/assets/projects). Replace the placeholder SVGs with production-ready artwork (keep the same filenames or update the `hero` path in the data file).

## SEO & sharing
- Site-wide metadata lives in [`app/layout.tsx`](app/layout.tsx)
- Per-project `generateMetadata` populates canonical URLs and Open Graph tags
- `/api/og?slug=<project>` creates branded OG/Twitter cards using project data
- `app/sitemap.ts` and `app/robots.ts` keep search engines informed automatically

## Analytics
Plausible is opt-in. Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (e.g. `37.technology`) in your environment to load the analytics script. Leave it unset to disable tracking everywhere (no client JavaScript shipped).

## Deployment
Deploy with Vercel for zero-config static output:
```bash
npm run build
vercel deploy --prebuilt  # optional preview
vercel deploy --prod       # promotion to production
```
Ensure the `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` env var is set on Vercel if analytics are desired. The build output is static, so the default Vercel CDN handles every page efficiently.

## Brand notes
- Use neutral, airy imagery respecting the white/beige palette.
- Maintain the wordmark “Thirty Seven, Inc.” in headers, footers, and copy.
- Swap the placeholder screenshots on project pages when final assets are ready.
# 37.technology
