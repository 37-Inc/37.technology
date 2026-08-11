const localHostnames = new Set(["127.0.0.1", "::1", "localhost"]);

export function shouldEnableBrowserAnalytics(
  hostname: string,
  allowLocalhost = false
) {
  return allowLocalhost || !localHostnames.has(hostname.toLowerCase());
}
