import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Invitation } from "../invite/Invitation";
import { metadata as invitationMetadata } from "../invite/page";

const title = "Fax It Staging Invitation";
const description = "Test invitation. Use the staging Fax It build, not the App Store build.";
const canonical = `${siteConfig.url}/faxit/stage-invite`;

export const metadata: Metadata = {
  ...invitationMetadata,
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: { ...invitationMetadata.openGraph, title, description, url: canonical },
  twitter: { ...invitationMetadata.twitter, title, description },
};

export default function StagingInvitationPage() {
  return <Invitation staging />;
}
