"use client";

import Link from "next/link";
import {
  type FormEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { Turnstile } from "@/components/contact/Turnstile";
import {
  inquiryTypes,
  validateContactSubmission,
  type ContactField,
  type ContactFieldErrors,
  type InquiryType,
} from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

interface ContactFormProps {
  initialInquiryType: InquiryType;
}

interface FieldProps {
  children: ReactNode;
  description?: string;
  error?: string;
  label: string;
  name: ContactField;
}

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const requiresTurnstile = process.env.NODE_ENV === "production";

function subscribeToLocation(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function inquiryTypeFromLocation() {
  const requestedType = new URLSearchParams(window.location.search).get("type");
  return inquiryTypes.some((option) => option.value === requestedType)
    ? (requestedType as InquiryType)
    : "project";
}

function Field({ children, description, error, label, name }: FieldProps) {
  const errorId = `${name}-error`;
  const descriptionId = `${name}-description`;

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {description ? (
        <p id={descriptionId} className="text-sm leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-sm text-[#9b382d]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const controlClassName =
  "w-full rounded-2xl border border-hairline bg-surface px-4 py-3 text-base text-ink shadow-sm outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/40";

export function ContactForm({ initialInquiryType }: ContactFormProps) {
  const urlInquiryType = useSyncExternalStore(
    subscribeToLocation,
    inquiryTypeFromLocation,
    () => initialInquiryType
  );
  const inquiryType = urlInquiryType;
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileAttempt, setTurnstileAttempt] = useState(0);
  const startedAt = useRef(0);
  const trackedStart = useRef(false);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const handleTurnstileToken = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);
  const focusSuccessHeading = useCallback((heading: HTMLHeadingElement | null) => {
    heading?.focus();
  }, []);

  function trackStart() {
    if (trackedStart.current) return;
    trackedStart.current = true;
    trackEvent("contact_form_start");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      inquiryType,
      name: formData.get("name"),
      email: formData.get("email"),
      summary: formData.get("summary"),
      startedAt: startedAt.current,
      turnstileToken,
    };
    const validation = validateContactSubmission(payload);

    if (!validation.data) {
      setFieldErrors(validation.errors);
      setStatus("error");
      setStatusMessage("Check the highlighted fields and try again.");
      requestAnimationFrame(() => {
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
      trackEvent("contact_form_error", {
        reason: "validation",
      });
      return;
    }

    setFieldErrors({});
    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      const result = (await response.json()) as {
        accepted?: boolean;
        error?: string;
        fieldErrors?: ContactFieldErrors;
      };

      if (!response.ok || !result.accepted) {
        setFieldErrors(result.fieldErrors ?? {});
        setStatus("error");
        setStatusMessage(
          result.error ?? "We could not send your inquiry. Please try again."
        );
        setTurnstileToken("");
        setTurnstileAttempt((attempt) => attempt + 1);
        trackEvent("contact_form_error", {
          reason:
            response.status === 429
              ? "rate_limit"
              : response.status === 400
                ? "verification"
                : "delivery",
        });
        return;
      }

      setStatus("success");
      trackEvent("generate_lead");
    } catch {
      setStatus("error");
      setStatusMessage(
        "We could not reach the inquiry service. Please try again shortly."
      );
      setTurnstileToken("");
      setTurnstileAttempt((attempt) => attempt + 1);
      trackEvent("contact_form_error", {
        reason: "network",
      });
    }
  }

  if (status === "success") {
    return (
      <section
        className="rounded-3xl border border-accent/40 bg-surface p-8 shadow-soft sm:p-10"
        aria-live="polite"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-muted">Sent</p>
        <h2
          ref={focusSuccessHeading}
          tabIndex={-1}
          className="mt-4 font-serif text-3xl tracking-tight text-ink outline-none"
        >
          Thanks for reaching out.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          We’ll review your message and get back to you by email.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-hairline px-4 py-2 text-sm font-medium text-ink transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Return to our work
        </Link>
      </section>
    );
  }

  return (
    <form
      className="rounded-3xl border border-hairline bg-surface p-4 shadow-soft sm:p-8"
      onFocus={trackStart}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Name" name="name" error={fieldErrors.name}>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={100}
              className={controlClassName}
              required
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
            />
          </Field>
          <Field label="Email" name="email" error={fieldErrors.email}>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={254}
              className={controlClassName}
              required
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
            />
          </Field>
        </div>

        <Field
          label="How can we help?"
          name="summary"
          description="Share what you are working on, relevant timing, and any useful links."
          error={fieldErrors.summary}
        >
          <textarea
            id="summary"
            name="summary"
            rows={7}
            placeholder="A short, direct note is enough."
            className={`${controlClassName} resize-y`}
            required
            aria-invalid={Boolean(fieldErrors.summary)}
            aria-describedby={`summary-description${
              fieldErrors.summary ? " summary-error" : ""
            }`}
          />
        </Field>

        <Turnstile
          key={turnstileAttempt}
          siteKey={turnstileSiteKey}
          onTokenChange={handleTurnstileToken}
        />

        {statusMessage ? (
          <p
            className="rounded-2xl border border-[#9b382d]/25 bg-[#9b382d]/5 px-4 py-3 text-sm text-[#7d2d25]"
            role="alert"
          >
            {statusMessage}
          </p>
        ) : null}

        <div className="flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs leading-relaxed text-muted">
            We use what you send only to evaluate and respond to your inquiry.
            See our <Link href="/legal/privacy" className="underline underline-offset-2">privacy policy</Link>.
          </p>
          <button
            type="submit"
            disabled={
              status === "submitting" ||
              (requiresTurnstile && (!turnstileSiteKey || !turnstileToken))
            }
            className="inline-flex min-w-36 items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-surface transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {status === "submitting" ? "Sending…" : "Send inquiry"}
          </button>
        </div>
      </div>
    </form>
  );
}
