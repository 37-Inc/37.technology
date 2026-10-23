# Cloudflare Hosting

## Current Production

The public site runs on Cloudflare Worker `thirty-seven-website`; the separate
`thirty-seven-website-preview` remains the noindex preview. Public contact,
analytics and navigation checks passed on October 12, 2026, after which the
owner-approved retirement of the old `37-technology` Vercel project completed.
That project returned 404 after deletion; the other Vercel projects were retained.

Current recovery is a previous known-good Cloudflare Worker version or a tested
Git revision rebuilt and deployed through the existing workflow. Do not restore
the historical Vercel DNS targets below: the deleted project is no longer a
working rollback target. Preserve mail and unrelated records. The cutover section
below is a historical receipt, not an instruction to repeat the migration.

Build locally and in CI with Node.js 24 LTS from `.nvmrc`. Both workflows use
the same pinned runtime; dependency, lint, type, export and Worker checks run
before a production deployment.

## Target and Cost Boundary

Only account `37.technology` (`7f05a1dcb6e16f9c239564a0293bbe74`) is configured.
Do not use inherited Cloudflare environment variables: the workstation's default
API token currently belongs to eReps. The dedicated deploy token is stored in
macOS Keychain under service `37.technology/cloudflare/deploy-token`, account
`cameronehrlich`, and GitHub secret `CLOUDFLARE_DEPLOY_TOKEN`. It has Workers Scripts
Edit + Account Settings Read for this account only. Inject it privately for local
deploys, or use the existing Thirty Seven Wrangler OAuth login with inherited
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ZONE_ID` unset. Do not print credentials.

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
update the stable preview. Pushes to `main` deploy production. Production smoke
checks both the Worker URL and public apex, including the www redirect.

Repository secrets:

- `CLOUDFLARE_DEPLOY_TOKEN`: Workers Scripts Edit + Account Settings Read, only
  the Thirty Seven account. No DNS/billing/other-account permissions.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`

Repository variables:

- `CLOUDFLARE_PREVIEW_ENABLED=true` enables preview automation.
- `CLOUDFLARE_PRODUCTION_ENABLED=true` enables approved production deployment.

Both variables are now true. The preview variable is also the workflow's global
deployment gate; disabling it stops production deployments too.

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

On October 11, 2026 (Pacific time), the owner approved production cutover. PR #30
merged as `9bb31935706dd6b8a53a2e3509ced92d5160fa96`. Cloudflare production
deployment run `38205201917`, attempt 2, passed. The first attempt found the old
externally managed apex A record; after its backed-up removal, the Worker custom
domain was attached and the deployment rerun succeeded.

The apex is the managed custom domain of Worker `thirty-seven-website`, explicitly
pinned to zone `0342ffbd2e2ed35161e07a3c442c4ad0` in `wrangler.jsonc`. The www
record is proxied A `192.0.2.0`, an originless redirect placeholder. Cloudflare
Redirect Rule `Thirty Seven www to apex` matches only `www.37.technology`, returns
308 to `concat("https://37.technology", http.request.uri.path)`, and preserves the
query string. The dedicated deploy token does not have general DNS permissions;
the owner-authenticated Cloudflare dashboard was used for these DNS changes.

Real preview and production Worker inquiries passed Turnstile and reached the
`cam@37.technology` inbox through `info@37.technology`, with test references
`37-CF-PREVIEW-20261011` and `37-CF-PROD-20261011`. These are inbox receipts, not
just send-provider acknowledgements. Production Worker URL:
https://thirty-seven-website.thirty-seven-inc.workers.dev.

A fresh complete BIND export and Vercel project/domain metadata are retained in
ignored `.cloudflare-build/evidence/` and copied outside the worktree to
`/Users/cameronehrlich/.codex/deployment-evidence/37.technology/2026-10-11/`, including
`37.technology-before-cutover-20261011.txt`. The post-cutover export was compared
with the original: all 16 unrelated DNS records are unchanged. The original rollback records are
DNS-only apex A `216.198.79.1` and www CNAME
`b155d2c06ece26db.vercel-dns-017.com`, both automatic TTL. Preserve these artifacts
outside the worktree before cleanup. Leave all mail, verification, downloads, and
unrelated subdomain records unchanged.

Rollback removes only the production Worker's custom-domain attachment and
the new www redirect rule, then restores the original DNS-only apex A and www
CNAME above. Do not restore the whole zone over unrelated changes made since
the snapshot.

Keep the Vercel project and original DNS snapshot available during stabilization.
For rollback, restore those DNS records, disable Cloudflare production automation,
and verify Vercel again. Deleting Vercel or changing repository visibility is a
separate owner-approved step after cutover is proven.

On October 11 the owner also conditionally authorized Vercel retirement after
stability checks. The Git connection was removed only from project `37-technology`
(`prj_M4KIl1d7r78Rif6JcUtURbGQ7JUg`) in team `37-inc`; its settings, environment
variables, and existing production deployment remain available for rollback.
There are no deploy hooks. Reconnect `37-Inc/37.technology` to resume automatic
Vercel builds if rollback is needed. No other Vercel projects were disconnected.

Public production CI passed against apex and www after the switch. Direct HTTPS
checks verified all 11 published articles and 37 linked image/icon assets. The
local Mac nevertheless retained a negative DNS cache from the brief removal of
the old apex record, preventing a final browser submission at the apex. Do not
delete the retained Vercel project until that final public-host contact check and
analytics/navigation verification are complete. A browser success on workers.dev
does not by itself prove the public-host submission. Keep this distinction in the
Roadmap cutover and retirement tasks.

References: [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/),
[Workers limits](https://developers.cloudflare.com/workers/platform/limits/),
[Next.js static exports](https://nextjs.org/docs/app/guides/static-exports).
