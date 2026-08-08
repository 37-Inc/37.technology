"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useDoNotTrack } from "@/lib/analytics";
import { analyticsPageContext } from "@/lib/analytics-url";

interface GoogleAnalyticsProviderProps {
  measurementId: string;
}

export function GoogleAnalyticsProvider({
  measurementId,
}: GoogleAnalyticsProviderProps) {
  const pathname = usePathname();
  const doNotTrack = useDoNotTrack();
  const [scriptReady, setScriptReady] = useState(false);
  const lastTrackedPath = useRef("");

  useEffect(() => {
    if (
      doNotTrack ||
      !scriptReady ||
      !window.gtag ||
      pathname === lastTrackedPath.current
    ) {
      return;
    }

    lastTrackedPath.current = pathname;
    const pageContext = analyticsPageContext(
      window.location.href,
      document.referrer
    );
    window.gtag("set", pageContext);
    window.gtag("event", "page_view", {
      ...pageContext,
      page_path: pathname,
      page_title: document.title,
    });
  }, [doNotTrack, pathname, scriptReady]);

  if (doNotTrack) return null;

  const serializedId = JSON.stringify(measurementId);
  return (
    <>
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            var cleanPageLocation = window.location.origin + window.location.pathname;
            var cleanPageReferrer = '';
            try {
              var referrerUrl = new URL(document.referrer);
              cleanPageReferrer = referrerUrl.origin + referrerUrl.pathname;
            } catch (_) {}
            gtag('set', {
              page_location: cleanPageLocation,
              page_referrer: cleanPageReferrer
            });
            gtag('config', ${serializedId}, {
              anonymize_ip: true,
              send_page_view: false
            });
          `,
        }}
      />
      <Script
        id="ga-library"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
    </>
  );
}
