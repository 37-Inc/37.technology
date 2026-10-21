import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const asset = readFileSync(
  new URL("../public/.well-known/apple-app-site-association", import.meta.url),
  "utf8",
);
const association = JSON.parse(asset);

describe("Fax It Apple association", () => {
  it("associates only the production invitation path for the shared Apple app ID", () => {
    const faxItDetails = association.applinks.details.filter(
      (detail: { appIDs?: string[]; appID?: string }) =>
        detail.appIDs?.includes("842K77RHSG.technology.37.Fax") ||
        detail.appID === "842K77RHSG.technology.37.Fax",
    );

    expect(faxItDetails).toEqual([
      {
        appIDs: ["842K77RHSG.technology.37.Fax"],
        components: [{ "/": "/faxit/invite" }],
      },
    ]);
  });

  it("fits Apple's uncompressed AASA size limit", () => {
    expect(Buffer.byteLength(asset)).toBeLessThan(128 * 1024);
  });
});
