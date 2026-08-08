const WINDOW_MS = 15 * 60 * 1_000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, number[]>();

export function hasExceededContactRateLimit(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );
  recent.push(now);
  attempts.set(key, recent);

  if (attempts.size > 1_000) {
    for (const [entryKey, timestamps] of attempts) {
      if (timestamps.every((timestamp) => now - timestamp >= WINDOW_MS)) {
        attempts.delete(entryKey);
      }
    }
  }

  return recent.length > MAX_ATTEMPTS;
}
