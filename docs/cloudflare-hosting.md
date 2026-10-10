# Cloudflare Hosting

## Target and Cost Boundary

Only account `37.technology` (`7f05a1dcb6e16f9c239564a0293bbe74`) is configured.
Do not use inherited Cloudflare environment variables: the workstation's default
API token currently belongs to eReps. Local deployments use the existing Thirty
Seven Wrangler OAuth login with `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ZONE_ID` unset.

Cloudflare Workers Free serves static assets without request/bandwidth charges.
Dynamic requests have a 100,000/day quota and 10 ms CPU limit; waiting for Resend
or Turnstile does not count as CPU time. No paid plan, Images, R2, KV, D1, queues,
or OpenNext runtime is required. The repository is currently public, so GitHub
builds use standard Linux GitHub-hosted runners without introducing a paid
third-party runner. Reassess build-minute limits if repository visibility changes.

The existing Next.js site stays intact. `npm run build:cloudflare` copies public
sources into an ignored staging directory, excludes the two Node API routes,
exports HTML/RSC/JS/CSS, and pre-renders branded sharing images. Committed WebP
images are served directly rather than transformed on demand. The small Worker
handles `/api/contact`, maps `/api/og?slug=...` to those generated images, and
preserves legacy legal redirects. Next.js `next dev` and Vercel builds still work.

The 15-minute contact rate limit remains process-local best effort, as it was on
Vercel; it is not a globally coordinated limit. Turnstile is mandatory and
server-validated on every Worker submission. Worker requests trust only
Cloudflare's client IP and the actual URL host, not supplied forwarding headers.

## Preview

Preview URL: https://thirty-seven-website-preview.thirty-seven-inc.workers.dev

```sh
npm ci
NEXT_PUBLIC_DEPLOYMENT_ENV=preview npm run build:cloudflare
env -u CLOUDFLARE_API_TOKEN -u CLOUDFLARE_ZONE_ID npm run preview:cloudflare
env -u CLOUDFLARE_API_TOKEN -u CLOUDFLARE_ZONE_ID npm run deploy:cloudflare -- --env=""
node scripts/smoke-cloudflare.mjs https://thirty-seven-website-preview.thirty-seven-inc.workers.dev preview
```

Preview responses are noindex, robots disallow crawling, and GA/PostHog are
disabled. Canonical URLs and schema stay pointed at `https://37.technology`.
Configure `RESEND_API_KEY` and `TURNSTILE_SECRET_KEY` using Worker encrypted
secrets. Add only the exact preview hostname to the existing Thirty Seven
Turnstile widget, retaining all current hostnames. Never place server secrets
in build/public configuration or commit local `.env.local`/`.dev.vars` files.

## Automated Deployments

The workflow `.github/workflows/cloudflare-deploy.yml` runs tests, lint,
typecheck, Vercel-compatible build, static export, Worker bundle check, deploy,
and live smoke. PRs run checks but never deploy. Pushes to the migration branch
and `main` update the stable preview while production is disabled.

Repository secrets:

- `CLOUDFLARE_DEPLOY_TOKEN`: Workers Scripts Edit + Account Settings Read, only
  the Thirty Seven account. No DNS/billing/other-account permissions.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`

Repository variables:

- `CLOUDFLARE_PREVIEW_ENABLED=true` enables preview automation.
- `CLOUDFLARE_PRODUCTION_ENABLED=false` keeps production disabled until approved.

The scheduled-news workflow explicitly calls the reusable deployment workflow
after its content commit. This avoids relying on a bot push to trigger another
workflow, and deploys the exact published commit. The daily schedule remains
16:00 UTC and does nothing when no article is due.

## Approved Cutover and Rollback

Do not change DNS, make the repository private, or delete Vercel during preview
preparation. Once the owner approves the rendered preview and one real contact
submission with confirmed inbox receipt, deploy a production-mode build to
`thirty-seven-website` with its server secrets and verify its workers.dev URL.
Set `CLOUDFLARE_PRODUCTION_ENABLED=true` only at that approved boundary.

Before switching, export the current apex/www DNS records and Vercel deployment
identity. Attach `37.technology` to the production Worker; preserve www's apex
redirect using a Cloudflare redirect rule so normal static assets bypass the
Worker. Verify apex/www HTTPS, legal redirects, sitemap, robots, canonical/schema,
sharing images, all screenshots, analytics, and an actual delivered inquiry.

The 2026-10-10 read-only check confirmed an active Thirty Seven Cloudflare zone
and Cloudflare nameservers (`jakub` and `jill`). Production still resolves to
Vercel: apex `216.198.79.1`, www CNAME
`b155d2c06ece26db.vercel-dns-017.com`. Wrangler OAuth can read the zone identity
but cannot list DNS records. A complete dashboard BIND export was therefore
saved locally at `.cloudflare-build/evidence/37.technology-before-cutover.txt`
(ignored, not committed). The dashboard confirms apex and www are DNS-only,
with automatic TTL. Refresh that export immediately before cutover and leave
all mail, verification, downloads, and unrelated subdomain records unchanged.

Rollback removes only the production Worker's custom-domain attachment and
the new www redirect rule, then restores the original DNS-only apex A and www
CNAME above. Do not restore the whole zone over unrelated changes made since
the snapshot.

Keep the Vercel project and original DNS snapshot available during stabilization.
For rollback, restore those DNS records, disable Cloudflare production automation,
and verify Vercel again. Deleting Vercel or changing repository visibility is a
separate owner-approved step after cutover is proven.

References: [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/),
[Workers limits](https://developers.cloudflare.com/workers/platform/limits/),
[Next.js static exports](https://nextjs.org/docs/app/guides/static-exports).
