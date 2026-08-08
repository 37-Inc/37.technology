"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import {
  trackEvent,
  type AnalyticsEventName,
  type AnalyticsProperties,
} from "@/lib/analytics";

interface TrackingProps {
  eventName: AnalyticsEventName;
  eventProperties?: AnalyticsProperties;
}

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "href"> &
  TrackingProps & {
    children: ReactNode;
  };

export function TrackedLink({
  eventName,
  eventProperties,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackEvent(eventName, eventProperties);
    onClick?.(event);
  }

  return <Link {...props} onClick={handleClick} />;
}

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  TrackingProps & {
    href: string;
  };

export function TrackedAnchor({
  eventName,
  eventProperties,
  onClick,
  ...props
}: TrackedAnchorProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackEvent(eventName, eventProperties);
    onClick?.(event);
  }

  return <a {...props} onClick={handleClick} />;
}
