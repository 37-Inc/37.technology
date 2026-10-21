import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Invitation } from "./Invitation";

const title = "A little credit. An easier fax.";
const description = "An invitation to Fax It for iPhone, iPad and Mac.";
const canonical = `${siteConfig.url}/faxit/invite`;
const image = `${siteConfig.url}/assets/projects/faxit/invitation-share.png`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: { index: false, follow: false },
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "website",
    url: canonical,
    images: [{ url: image, width: 1200, height: 630, alt: description }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function InvitationPage() {
  return <Invitation />;
}
