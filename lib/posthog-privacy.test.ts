import { describe, expect, it } from "vitest";
import {
  sanitizePostHogEvent,
  sanitizePostHogProperties,
} from "@/lib/posthog-privacy";

describe("PostHog privacy boundary", () => {
  it("removes current, initial, and session campaign properties", () => {
    expect(
      sanitizePostHogProperties({
        utm_source: "newsletter",
        ph_keyword: "private search terms",
        $initial_gclid: "personal-click-id",
        $session_entry_utm_campaign: "launch",
        $session_entry_ph_keyword: "more private search terms",
        placement: "homepage",
      })
    ).toEqual({ placement: "homepage" });
  });

  it("sanitizes direct and nested URL/referrer properties", () => {
    expect(
      sanitizePostHogProperties({
        $current_url: "https://37.technology/contact?email=person@example.com",
        $initial_person_info: {
          r: "https://example.com/story?token=secret",
          u: "https://37.technology/contact?name=Pat",
        },
        $session_entry_referrer: "https://example.com/story?person=Pat",
      })
    ).toEqual({
      $current_url: "https://37.technology/contact",
      $initial_person_info: {
        r: "https://example.com/story",
        u: "https://37.technology/contact",
      },
      $session_entry_referrer: "https://example.com/story",
    });
  });

  it("applies the boundary to event and person properties", () => {
    const event = sanitizePostHogEvent({
      event: "generate_lead",
      uuid: "00000000-0000-4000-8000-000000000000",
      properties: { fbclid: "click-id", safe: true },
      $set_once: { $initial_utm_source: "private-source", safe: "value" },
    });

    expect(event?.properties).toEqual({ safe: true });
    expect(event?.$set_once).toEqual({ safe: "value" });
  });
});
