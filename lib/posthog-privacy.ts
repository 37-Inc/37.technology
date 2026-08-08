import type { BeforeSendFn, Properties } from "posthog-js";
import { withoutQuery } from "@/lib/analytics-url";

const campaignProperties = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gad_source",
  "mc_cid",
  "ph_keyword",
  "gclid",
  "gclsrc",
  "dclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "twclid",
  "li_fat_id",
  "igshid",
  "ttclid",
  "rdt_cid",
  "epik",
  "qclid",
  "sccid",
  "irclid",
  "_kx",
]);

function basePropertyName(key: string) {
  return key.replace(/^\$(?:initial|session_entry)_/, "");
}

function isUrlProperty(key: string) {
  return (
    key === "r" ||
    key === "u" ||
    key === "url" ||
    key === "$current_url" ||
    key.endsWith("_url") ||
    key.endsWith("referrer")
  );
}

export function sanitizePostHogProperties(
  properties: Properties
): Properties {
  return Object.fromEntries(
    Object.entries(properties).flatMap(([key, value]) => {
      if (campaignProperties.has(basePropertyName(key))) return [];

      if (isUrlProperty(key) && typeof value === "string") {
        return [[key, withoutQuery(value)]];
      }
      if (Array.isArray(value)) {
        return [
          [
            key,
            value.map((entry) =>
              entry && typeof entry === "object"
                ? sanitizePostHogProperties(entry as Properties)
                : entry
            ),
          ],
        ];
      }
      if (value && typeof value === "object") {
        return [
          [key, sanitizePostHogProperties(value as Properties)],
        ];
      }

      return [[key, value]];
    })
  );
}

export const sanitizePostHogEvent: BeforeSendFn = (event) => {
  if (!event) return null;

  return {
    ...event,
    ...(event.properties
      ? { properties: sanitizePostHogProperties(event.properties) }
      : {}),
    ...(event.$set ? { $set: sanitizePostHogProperties(event.$set) } : {}),
    ...(event.$set_once
      ? { $set_once: sanitizePostHogProperties(event.$set_once) }
      : {}),
  };
};
