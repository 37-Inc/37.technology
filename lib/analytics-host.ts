const localHostnames = new Set(["127.0.0.1", "::1", "localhost"]);

export function shouldEnableBrowserAnalytics(
  hostname: string,
  allowLocalhost = false
) {
  const normalizedHostname = hostname.replace(/^\[|\]$/g, "").toLowerCase();
  return allowLocalhost || !localHostnames.has(normalizedHostname);
}
