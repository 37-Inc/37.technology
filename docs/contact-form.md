# Contact form operations

The public form collects only name, email, and a message, then posts to
`POST /api/contact`. The inquiry type is inferred from the contact link that
opened the page. The form does not send an automated reply and never forwards
form contents to analytics.

## Provider configuration

Set the variables documented in `.env.example` in Vercel Production only.
Preview deployments should omit the analytics and delivery credentials.

Resend setup:

1. Verify `37.technology` (or the approved sending subdomain) in the dedicated
   Thirty Seven Resend team.
2. Create a sending-only, domain-scoped API key.
3. Store the key as `RESEND_API_KEY`; never prefix it with `NEXT_PUBLIC_`.
4. Set `CONTACT_FROM_EMAIL` to an address covered by the verified domain and
   `CONTACT_TO_EMAIL` to `info@37.technology`.

Cloudflare Turnstile setup:

1. Create a widget restricted to `37.technology` and the intended Vercel
   preview hostname, if preview submissions are required.
2. Set the public site key and server-only secret in their matching variables.
3. Production submissions fail closed if the server secret is absent.
4. Keep the widget action set to `contact_submit`; the server verifies the
   action and exact request hostname and gives Siteverify five seconds to
   respond.

PostHog setup:

1. Create a separate `37.technology` project in the existing Thirty Seven
   PostHog organization.
2. Set its public project token as `NEXT_PUBLIC_POSTHOG_KEY` and use the
   project region's ingestion host for `NEXT_PUBLIC_POSTHOG_HOST`.
3. Session recording, autocapture, persistent browser identity, and person
   profiles remain disabled in code.
4. Campaign/referrer persistence is disabled. A final `before_send` boundary
   removes current, initial, and session campaign identifiers and strips query
   strings from URL/referrer fields, including nested SDK properties.

## Local review

Create an ignored `.env.local` containing:

```dotenv
CONTACT_DELIVERY_MODE=mock
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_POSTHOG_KEY=
```

Run `npm run dev`. Mock mode validates the complete request and returns a
success response without sending or logging the submitted personal data.

## Abuse controls

The endpoint validates same-origin JSON requests and strict field lengths,
silently absorbs the honeypot field, rejects unrealistically fast or stale
submissions, verifies Turnstile when configured, and applies a best-effort
per-instance rate limit. Vercel Firewall rate limiting should be added before
production launch for a durable edge-level limit across server instances. The
process-local fallback is defense in depth, not a production-grade distributed
limit.

## Analytics contract

The shared `trackEvent` dispatcher sends the same sanitized event names to GA4
and PostHog:

- `contact_cta_click`
- `contact_form_start`
- `contact_form_error`
- `generate_lead` after confirmed delivery
- `project_open`
- `outbound_product_click`

Form completion events carry no form-derived properties. The adapter also
enforces a per-event property allowlist at runtime. Never add names, emails,
free-form text, user-provided URLs, or inquiry type to analytics events.

GA automatic pageviews are disabled. Route pageviews are emitted manually with
the pathname only. Current, initial, session-entry, and referring URLs are
stripped of query strings before any event leaves the browser. Both analytics
providers stay disabled when the browser sends a Do Not Track signal.
