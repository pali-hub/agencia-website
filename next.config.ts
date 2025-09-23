import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Cloudflare Pages compatibility
  env: {
    CUSTOM_KEY: "value",
  },
};

export default nextConfig;
