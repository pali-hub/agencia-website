import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Configuração compatível com Cloudflare Pages
  // ✅ Verificado: Não utiliza API routes, SSR ou server actions incompatíveis
  // ✅ Aplicação usa apenas Client Components e static generation
  
  // Para Cloudflare Pages, use output: 'export' se quiser static export
  // ou mantenha padrão para SSG híbrido
  // output: 'export', // Descomente para export estático completo
};

export default nextConfig;
