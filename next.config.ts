import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Frend previews the dev server from a Sprite URL; let it load dev assets and HMR.
  allowedDevOrigins: ["**.sprites.app"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
