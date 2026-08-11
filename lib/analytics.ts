"use client";

import posthog from "posthog-js";
import { useSyncExternalStore } from "react";
import { analyticsPageContext } from "@/lib/analytics-url";

export type AnalyticsEventName =
  | "contact_cta_click"
  | "contact_form_error"
  | "contact_form_start"
  | "generate_lead"
  | "news_article_open"
  | "news_article_view"
  | "news_index_view"
  | "outbound_product_click"
  | "project_open";

export type AnalyticsProperties = Record<
  string,
  boolean | number | string | null | undefined
>;

let postHogReady = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const allowedProperties: Record<AnalyticsEventName, ReadonlySet<string>> = {
  contact_cta_click: new Set(["placement"]),
  contact_form_error: new Set(["reason"]),
  contact_form_start: new Set(),
  generate_lead: new Set(),
  news_article_open: new Set(["placement", "slug"]),
  news_article_view: new Set(["slug"]),
  news_index_view: new Set(),
  outbound_product_click: new Set(["destination", "project"]),
  project_open: new Set(["placement", "project"]),
};

function subscribeToDoNotTrack() {
  return () => {};
}

function getDoNotTrackSnapshot() {
  return navigator.doNotTrack === "1";
}

export function useDoNotTrack() {
  return useSyncExternalStore(
    subscribeToDoNotTrack,
    getDoNotTrackSnapshot,
    // Do not render third-party scripts until the browser preference is known.
    () => true
  );
}

export function setPostHogReady(ready: boolean) {
  postHogReady = ready;
}

export function trackEvent(
  name: AnalyticsEventName,
  properties: AnalyticsProperties = {}
) {
  const safeProperties = Object.fromEntries(
    Object.entries(properties).filter(
      ([key, value]) => allowedProperties[name].has(key) && value != null
    )
  );

  if (typeof window !== "undefined" && window.gtag) {
    try {
      window.gtag("event", name, {
        ...safeProperties,
        ...analyticsPageContext(window.location.href, document.referrer),
      });
    } catch {
      // Analytics must never interfere with navigation or form submission.
    }
  }

  if (!postHogReady) return;

  try {
    posthog.capture(name, safeProperties);
  } catch {
    // PostHog may be blocked by the browser; the site should still work.
  }
}
