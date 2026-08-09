"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { contactTurnstileAction } from "@/lib/contact";

type TurnstileSize = "compact" | "flexible";

interface TurnstileApi {
  remove(widgetId: string): void;
  render(
    container: HTMLElement,
    options: {
      action: string;
      callback(token: string): void;
      "error-callback"(): void;
      "expired-callback"(): void;
      size: TurnstileSize;
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

const flexibleWidgetMinWidth = 300;

export function turnstileSizeForWidth(width: number): TurnstileSize {
  return width < flexibleWidgetMinWidth ? "compact" : "flexible";
}

export function Turnstile({ onTokenChange, siteKey }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const widgetSizeRef = useRef<TurnstileSize | null>(null);
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

    const size = turnstileSizeForWidth(containerRef.current.clientWidth);
    widgetSizeRef.current = size;
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      action: contactTurnstileAction,
      sitekey: siteKey,
      size,
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

  const removeWidget = useCallback(() => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.remove(widgetIdRef.current);
    }
    widgetIdRef.current = null;
    widgetSizeRef.current = null;
  }, []);

  useEffect(() => {
    renderWidget();

    const container = containerRef.current;
    const resizeObserver =
      container && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(([entry]) => {
            const nextSize = turnstileSizeForWidth(entry.contentRect.width);
            if (
              widgetIdRef.current &&
              widgetSizeRef.current !== nextSize
            ) {
              removeWidget();
              onTokenChange("");
              renderWidget();
            }
          })
        : null;

    if (container && resizeObserver) resizeObserver.observe(container);

    const timeout = window.setTimeout(() => {
      if (!widgetIdRef.current) setHasError(true);
    }, 10_000);

    return () => {
      window.clearTimeout(timeout);
      resizeObserver?.disconnect();
      removeWidget();
    };
  }, [attempt, onTokenChange, removeWidget, renderWidget]);

  function retry() {
    removeWidget();
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
        id="turnstile-script"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
        onError={() => setHasError(true)}
      />
      <div
        className="flex w-full min-w-0 max-w-full justify-center overflow-hidden"
        ref={containerRef}
        aria-label="Bot verification"
      />
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
