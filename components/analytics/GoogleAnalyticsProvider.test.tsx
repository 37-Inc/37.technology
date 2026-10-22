import { runInNewContext } from "node:vm";
import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { GoogleAnalyticsProvider } from "./GoogleAnalyticsProvider";

const { route } = vi.hoisted(() => ({ route: { pathname: "/" } }));
vi.mock("next/navigation", () => ({ usePathname: () => route.pathname }));
vi.mock("@/lib/analytics", () => ({ useDoNotTrack: () => false }));
vi.mock("next/script", () => ({
  default: ({ id, src, dangerouslySetInnerHTML }: {
    id?: string; src?: string; dangerouslySetInnerHTML?: { __html: string };
  }) => <script id={id} src={src} async dangerouslySetInnerHTML={dangerouslySetInnerHTML} />,
}));

describe("invitation analytics privacy", () => {
  beforeEach(() => { route.pathname = "/"; });

  it.each(["/faxit/invite", "/faxit/invite/", "/faxit/stage-invite"])(
    "does not load Google scripts on %s", (pathname) => {
      route.pathname = pathname;
      expect(renderToStaticMarkup(<GoogleAnalyticsProvider measurementId="G-TEST" />)).toBe("");
    }
  );

  it("blocks already-loaded automatic collection synchronously after client navigation", () => {
    const html = renderToStaticMarkup(<GoogleAnalyticsProvider measurementId="G-TEST" />);
    const initializer = html.match(/<script id="ga-init"[^>]*>([\s\S]*?)<\/script>/)?.[1];
    expect(initializer).toBeTruthy();
    const window = {
      location: { origin: "https://37.technology", pathname: "/faxit", search: "" },
    } as unknown as Window;
    runInNewContext(initializer!, {
      window,
      document: { referrer: "https://37.technology/faxit/invite?code=ABCD7K9M&offer=v1" },
      URL,
    });
    const disabled = () => (window as unknown as Record<string, unknown>)["ga-disable-G-TEST"];
    expect(disabled()).toBe(false);
    for (const path of ["/faxit/invite", "/faxit/invite/", "/faxit/stage-invite"]) {
      window.location.pathname = path;
      window.location.search = "?code=ABCD7K9M&offer=v1";
      expect(disabled()).toBe(true);
    }
    window.location.pathname = "/faxit";
    expect(disabled()).toBe(true);
    expect(JSON.stringify(window.dataLayer)).not.toContain("ABCD7K9M");
  });
});
