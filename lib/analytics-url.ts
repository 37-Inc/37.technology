export const REFERRAL_INVITE_PATHS = ["/faxit/invite", "/faxit/stage-invite"];

export function isReferralInvitationPath(pathname: string) {
  return REFERRAL_INVITE_PATHS.includes(pathname.replace(/\/$/, ""));
}

export function withoutQuery(value: unknown) {
  if (typeof value !== "string") return value;
  if (!value) return value;

  try {
    const url = new URL(value);
    return `${url.origin}${url.pathname}`;
  } catch {
    return value.split(/[?#]/, 1)[0];
  }
}

export function analyticsPageContext(
  currentUrl: string,
  referrer: string
) {
  return {
    page_location: withoutQuery(currentUrl),
    page_referrer: withoutQuery(referrer),
  };
}
