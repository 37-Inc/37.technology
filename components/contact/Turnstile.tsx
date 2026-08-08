"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { contactTurnstileAction } from "@/lib/contact";

interface TurnstileApi {
  remove(widgetId: string): void;
  render(
    container: HTMLElement,
    options: {
      action: string;
      callback(token: string): void;
      "error-callback"(): void;
      "expired-callback"(): void;
      size: "flexible";
      sitekey: string;
      theme: "light";
    }
  ): string;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

interface TurnstileProps {
  onTokenChange(token: string): void;
  siteKey?: string;
}

export function Turnstile({ onTokenChange, siteKey }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const [hasError, setHasError] = useState(false);

  const renderWidget = useCallback(() => {
    if (
      !siteKey ||
      !containerRef.current ||
      !window.turnstile ||
      widgetIdRef.current
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      action: contactTurnstileAction,
      sitekey: siteKey,
      size: "flexible",
      theme: "light",
      callback: (token) => {
        setHasError(false);
        onTokenChange(token);
      },
      "expired-callback": () => onTokenChange(""),
      "error-callback": () => {
        setHasError(true);
        onTokenChange("");
      },
    });
  }, [onTokenChange, siteKey]);

  useEffect(() => {
    renderWidget();

    const timeout = window.setTimeout(() => {
      if (!widgetIdRef.current) setHasError(true);
    }, 10_000);

    return () => {
      window.clearTimeout(timeout);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [attempt, renderWidget]);

  function retry() {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }
    onTokenChange("");
    setHasError(false);
    setAttempt((value) => value + 1);
  }

  if (!siteKey) {
    return process.env.NODE_ENV === "development" ? (
      <p className="text-xs text-muted">Bot verification is skipped locally.</p>
    ) : (
      <p className="text-sm text-muted" role="status">
        The inquiry form is awaiting its production verification key.
      </p>
    );
  }

  return (
    <>
      <Script
        key={attempt}
        id={`turnstile-script-${attempt}`}
        src={`https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&attempt=${attempt}`}
        strategy="afterInteractive"
        onLoad={renderWidget}
        onError={() => setHasError(true)}
      />
      <div className="min-w-0" ref={containerRef} aria-label="Bot verification" />
      {hasError ? (
        <div
          className="rounded-2xl border border-[#9b382d]/25 bg-[#9b382d]/5 px-4 py-3 text-sm text-[#7d2d25]"
          role="alert"
        >
          <p>
            Verification did not load. Check any content blocker, then try
            again. You can also contact info@37.technology directly.
          </p>
          <button
            type="button"
            className="mt-2 font-medium underline underline-offset-4"
            onClick={retry}
          >
            Retry verification
          </button>
        </div>
      ) : null}
    </>
  );
}
