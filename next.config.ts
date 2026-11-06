import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Firebase Hosting (writes to /out)
  output: "export",
  images: { unoptimized: true },
  experimental: {
    agentFeedback: true,
  },
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
