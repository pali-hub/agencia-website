# Agência Website

Este projeto Next.js foi construído com foco em performance e compatibilidade com deploy estático no Cloudflare Pages.

## Tecnologias

- **Next.js 15** com static export
- **TailwindCSS 4** para estilização
- **Framer Motion** para animações
- **TypeScript** para tipagem estática

## Scripts Disponíveis

### `npm run dev`
Inicia o servidor de desenvolvimento com Turbopack:
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) no navegador.

### `npm run build`
Cria o build otimizado para produção e exporta arquivos estáticos:
```bash
npm run build
```
Gera a pasta `out/` com todos os arquivos estáticos prontos para deploy.

### `npm run lint`
Executa o ESLint para verificar qualidade do código:
```bash
npm run lint
```

### `npm run start`
Inicia o servidor de produção (funciona apenas em modo padrão do Next.js, não em static export):
```bash
npm run start
```

## Deploy no Cloudflare Pages

### 1. Configuração no Painel do Cloudflare Pages

1. **Conecte seu repositório** ao Cloudflare Pages
2. **Configure as seguintes opções**:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (deixe vazio se o projeto está na raiz)

### 2. Variáveis de Ambiente

Configure as seguintes variáveis no painel do Cloudflare Pages (Environment variables):

#### Variáveis Obrigatórias
Atualmente não há variáveis de ambiente obrigatórias para este projeto.

#### Variáveis Opcionais
- `NODE_VERSION`: `18` (especifica a versão do Node.js)
- `NPM_VERSION`: `latest` (especifica a versão do npm)

### 3. Configurações Avançadas

#### Build Settings
- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Install command:** `npm ci`

#### Redirects e Headers
Não são necessários redirects especiais, pois o projeto usa static export.

### 4. Checklist de Deploy

- [ ] Repositório conectado ao Cloudflare Pages
- [ ] Build command configurado como `npm run build`
- [ ] Output directory configurado como `out`
- [ ] Variáveis de ambiente (se necessárias) configuradas
- [ ] Primeiro deploy executado com sucesso
- [ ] Custom domain configurado (opcional)
- [ ] SSL/TLS configurado automaticamente pelo Cloudflare

## Desenvolvimento Local

1. **Clone o repositório**:
```bash
git clone <repository-url>
cd agencia-website
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**:
```bash
npm run dev
```

4. **Edite os arquivos** em `src/` e veja as mudanças em tempo real.

## Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   └── [services]/        # Páginas de serviços
├── components/            # Componentes React reutilizáveis
├── lib/                   # Utilitários e helpers
│   ├── menuData.ts        # Dados do menu
│   └── useOnClickOutside.ts # Hook customizado
└── fonts/                 # Fontes locais (se houver)
```

## Configurações Importantes

### Next.js (next.config.ts)
```typescript
const nextConfig: NextConfig = {
  output: 'export',           // Habilita static export
  trailingSlash: true,        # URLs com barra final
  images: {
    unoptimized: true,        # Imagens não otimizadas (necessário para static)
  },
};
```

### TailwindCSS (tailwind.config.js)
Configurado para TailwindCSS 4 com paths otimizados para o diretório `src/`.

### PostCSS (postcss.config.mjs)
```javascript
const config = {
  plugins: {
    '@tailwindcss/postcss': {},  // Plugin oficial do TailwindCSS 4
    autoprefixer: {},            # Adiciona prefixes CSS automaticamente
  },
};
```

## Limitações do Static Export

⚠️ **Importante**: Com `output: 'export'` habilitado, as seguintes funcionalidades não funcionam:
- API Routes (`/api/*`)
- Server-Side Rendering (SSR)
- Incremental Static Regeneration (ISR)
- Middleware avançado
- Dynamic routing com `generateStaticParams` limitado

Para usar essas funcionalidades, remova `output: 'export'` do `next.config.ts`.

## CI/CD Pipeline

O projeto inclui um workflow GitHub Actions (`.github/workflows/ci.yml`) que:
- Executa lint e verificação de tipos
- Faz o build do projeto
- Gera artifacts para deploy
- Comenta em Pull Requests com status do build

## Troubleshooting

### Build falha com erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erro de TypeScript
```bash
npx tsc --noEmit
```

### Problemas com TailwindCSS
Verifique se os paths estão corretos no `tailwind.config.js` e se o PostCSS está configurado adequadamente.

## Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Suporte

Para problemas relacionados ao deploy no Cloudflare Pages, consulte a [documentação oficial](https://developers.cloudflare.com/pages/).
