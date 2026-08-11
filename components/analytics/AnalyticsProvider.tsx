"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import { setPostHogReady, useDoNotTrack } from "@/lib/analytics";
import { shouldEnableBrowserAnalytics } from "@/lib/analytics-host";
import { routeAnalyticsEvents } from "@/lib/analytics-routes";
import { sanitizePostHogEvent } from "@/lib/posthog-privacy";

const postHogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const postHogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
const allowLocalhost =
  process.env.NEXT_PUBLIC_ANALYTICS_ALLOW_LOCALHOST === "true";

let initialized = false;

export function AnalyticsProvider() {
  const pathname = usePathname();
  const doNotTrack = useDoNotTrack();
  const lastTrackedPath = useRef("");

  useEffect(() => {
    if (
      !postHogKey ||
      doNotTrack ||
      !shouldEnableBrowserAnalytics(window.location.hostname, allowLocalhost)
    ) {
      setPostHogReady(false);
      return;
    }

    if (!initialized) {
      posthog.init(postHogKey, {
        api_host: postHogHost,
        autocapture: false,
        before_send: sanitizePostHogEvent,
        capture_pageview: false,
        capture_pageleave: false,
        disable_capture_url_hashes: true,
        disable_external_dependency_loading: true,
        disable_session_recording: true,
        person_profiles: "identified_only",
        persistence: "memory",
        respect_dnt: true,
        save_campaign_params: false,
        save_referrer: false,
      });
      initialized = true;
      setPostHogReady(true);
    }

    if (pathname === lastTrackedPath.current) return;

    lastTrackedPath.current = pathname;
    posthog.capture("$pageview", {
      path: pathname,
    });
    for (const event of routeAnalyticsEvents(pathname)) {
      posthog.capture(event.name, event.properties);
    }
  }, [doNotTrack, pathname]);

  return null;
}
