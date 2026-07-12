# Project Instructions for AI Agents

This file provides instructions and context for AI coding agents working on this project.

<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:6cd5cc61 -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

**Architecture in one line:** issues live in a local Dolt DB; sync uses `refs/dolt/data` on your git remote; `.beads/issues.jsonl` is a passive export. See https://github.com/gastownhall/beads/blob/main/docs/SYNC_CONCEPTS.md for details and anti-patterns.

## Agent Context Profiles

The managed Beads block is task-tracking guidance, not permission to override repository, user, or orchestrator instructions.

- **Conservative (default)**: Use `bd` for task tracking. Do not run git commits, git pushes, or Dolt remote sync unless explicitly asked. At handoff, report changed files, validation, and suggested next commands.
- **Minimal**: Keep tool instruction files as pointers to `bd prime`; use the same conservative git policy unless active instructions say otherwise.
- **Team-maintainer**: Only when the repository explicitly opts in, agents may close beads, run quality gates, commit, and push as part of session close. A current "do not commit" or "do not push" instruction still wins.

## Session Completion

This protocol applies when ending a Beads implementation workflow. It is subordinate to explicit user, repository, and orchestrator instructions.

1. **File issues for remaining work** - Create beads for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **Handle git/sync by active profile**:
   ```bash
   # Conservative/minimal/default: report status and proposed commands; wait for approval.
   git status

   # Team-maintainer opt-in only, unless current instructions forbid it:
   git pull --rebase
   git push
   git status
   ```
5. **Hand off** - Summarize changes, validation, issue status, and any blocked sync/commit/push step

**Critical rules:**
- Explicit user or orchestrator instructions override this Beads block.
- Do not commit or push without clear authority from the active profile or the current user request.
- If a required sync or push is blocked, stop and report the exact command and error.
<!-- END BEADS INTEGRATION -->


## Build & Test

```bash
npm install
npm run lint    # ESLint
npm run build   # production build; also the type/SSG correctness check
npx tsc --noEmit
```

There is no test suite; `npm run build` (all routes must render statically) plus `tsc` is the quality gate.

## Architecture Overview

Next.js 15 App Router, fully static (SSG). The site is data-driven:

- `data/projects/<slug>.ts` — one file per app/project, typed by `data/projects/types.ts`, aggregated in `data/projects/index.ts`. This content drives everything.
- `app/[slug]/page.tsx` — the shared landing-page template (hero, problem/solution, features, screenshots, comparison, FAQ, CTA), themed per-project via CSS custom properties.
- `components/landing/` — landing sections + JSON-LD builders (`structured-data.ts` emits SoftwareApplication/WebApplication, BreadcrumbList, FAQPage; homepage emits Organization/WebSite).
- `app/legal/privacy` and `app/legal/terms` — single consolidated documents covering the site and every app; old app-specific URLs redirect via `next.config.ts`.
- Analytics: GA4 through `@next/third-parties`, gated by `siteConfig.gaMeasurementId` in `data/site.ts` (env `NEXT_PUBLIC_GA_MEASUREMENT_ID` overrides).

## Conventions & Patterns

- **Truthful copy only**: every claim on a landing page must be verifiable from the App Store listing, the official product site, or the owner. No invented stats, ratings, or user counts. Never emit aggregateRating/review JSON-LD.
- **SEO**: per-project titles are absolute (they bypass the layout title template); keep `seo.title` ≤60 chars and `seo.description` ≤155 chars. Canonical domain is apex `37.technology` (www redirects to it).
- **Images**: icons ≤192px; screenshots ≤960px tall, WebP, committed with intrinsic `width`/`height` in the data file.
- **Voice**: short, humble, plain. "No buzzwords, just good software." When in doubt, cut words.
- **`.beads/` is local-only and gitignored** — never commit it; the owner tracks follow-up work in an external roadmap. (The managed Beads block above predates this; the gitignore wins.)
- AGENTS.md mirrors this file — apply substantive edits to both.
