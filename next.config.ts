import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // API Routes e SSR não são compatíveis com static export
  // Para usar esses recursos, remova a opção 'output: export'
};

export default nextConfig;
