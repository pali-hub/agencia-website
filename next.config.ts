import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Cloudflare Pages doesn't support API Routes or SSR
  // All pages will be statically generated at build time
};

export default nextConfig;
