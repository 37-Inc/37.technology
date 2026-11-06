import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Preserve bookmarks and backlinks after the Stupid Gifts rebrand.
      {
        source: "/goose-gifts",
        destination: "/stupid-gifts",
        permanent: true,
      },
      // Keep legacy links working even after store listings use the shared policies.
      {
        source: "/legal/privacy/faxit",
        destination: "/legal/privacy",
        permanent: true,
      },
      {
        source: "/legal/terms/faxit",
        destination: "/legal/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
