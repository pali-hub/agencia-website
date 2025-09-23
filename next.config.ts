import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Otimizações para Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Cloudflare Pages não suporta Image Optimization API
  },
  
  // Garante que não há APIs incompatíveis
  // OBSERVAÇÃO TÉCNICA: Este projeto está configurado para export estático
  // Não utilize API Routes (/pages/api/* ou /app/api/*) nem SSR/ISR features
  // pois são incompatíveis com 'output: export'
};

export default nextConfig;
