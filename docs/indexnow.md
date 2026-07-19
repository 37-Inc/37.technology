# IndexNow

IndexNow notifies Bing, Yandex, and other participating engines when canonical
public URLs change. Google does not consume IndexNow. An HTTP `200` or `202`
means a notification was received, not that the URL was crawled or indexed.

## Components

- Public key: `public/d5c2b10ee5495228525c0fd06e783806.txt`
- Submission tool: `scripts/indexnow-submit.mjs`
- Shared endpoint: `https://api.indexnow.org/indexnow`
- Default URL source: the live production sitemap

The tool accepts only HTTPS URLs on the canonical apex host `37.technology`,
deduplicates URLs, and rejects API routes.

## Usage

```bash
npm run indexnow:submit -- --dry-run
npm run indexnow:submit
npm run indexnow:submit -- --url https://37.technology/news/example
```

Run the full-sitemap form once for the initial seed. Afterward, notify only URLs
that were created, materially changed, or deleted. Do not submit the entire
sitemap on every deployment.

## Disable or rotate

The tool is manual and has no scheduled hook. To disable it, stop invoking it.
To invalidate submissions, remove the public key file. To rotate the key, add a
new root key file whose contents match its filename and remove the old file.
