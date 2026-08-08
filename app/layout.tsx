import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { GoogleAnalyticsProvider } from "@/components/analytics/GoogleAnalyticsProvider";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const isProductionDeployment = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";
const gaMeasurementId = isProductionDeployment
  ? (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? siteConfig.gaMeasurementId)
  : "";
const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "iOS app development",
    "iOS consultant",
    "iOS app studio",
    "app studio",
    "mobile app development",
    "Android app development",
    "backend development",
    "AI integration",
  ],
  applicationName: siteConfig.name,
  icons: {
    icon: [
      {
        url: "/assets/brand/thirty-seven-favicon-v2.png",
        sizes: "64x64",
        type: "image/png",
      },
    ],
    shortcut: "/assets/brand/thirty-seven-favicon-v2.png",
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/api/og"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
    other: {
      "facebook-domain-verification": "xekoqtndf94hxrzinxltwyk89xbx7z",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#fdfbf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
        <AnalyticsProvider />
        {gaMeasurementId ? (
          <GoogleAnalyticsProvider measurementId={gaMeasurementId} />
        ) : null}
      </body>
    </html>
  );
}
