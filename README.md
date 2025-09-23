# Agência Website

Este é um projeto [Next.js](https://nextjs.org) criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), otimizado para deploy no **Cloudflare Pages**.

## 🚀 Getting Started

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `src/app/page.tsx`. A página é atualizada automaticamente conforme você edita o arquivo.

Este projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente [Geist](https://vercel.com/font), uma nova família de fontes da Vercel.

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Cria build de produção otimizado (output estático)
- `npm run start` - Inicia o servidor de produção (não usado no Cloudflare Pages)
- `npm run lint` - Executa ESLint para verificação de código

## ☁️ Deploy no Cloudflare Pages

### Configuração Inicial

1. **Conecte seu repositório** ao Cloudflare Pages
2. **Configure as configurações de build:**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node.js version: `18` ou superior

### Checklist de Variáveis de Ambiente

Antes do deploy, configure as seguintes variáveis no painel do Cloudflare Pages:

- [ ] `NODE_ENV=production`
- [ ] `NEXT_TELEMETRY_DISABLED=1` (opcional, desabilita telemetria)
- [ ] Adicione outras variáveis específicas do projeto conforme necessário

### Configuração de Variáveis no Cloudflare Pages

1. Acesse o **Cloudflare Dashboard**
2. Vá para **Pages** > Seu projeto
3. Clique na aba **Settings**
4. Role até **Environment variables**
5. Clique em **Add variable**
6. Configure:
   - **Variable name**: Nome da variável (ex: `NODE_ENV`)
   - **Value**: Valor da variável (ex: `production`)
   - **Environment**: Escolha `Production`, `Preview` ou ambos
7. Clique em **Save**

### Características Técnicas

- ✅ **Static Export**: Configurado com `output: 'export'`
- ✅ **Image Optimization**: Desabilitado (`unoptimized: true`)
- ⚠️ **Limitações**: Não suporta API Routes nem SSR/ISR
- ✅ **TailwindCSS 4**: Configurado com PostCSS
- ✅ **CI/CD**: Workflow automático com lint, typecheck e build

## 🛠️ Tecnologias

- **Framework**: Next.js 15.5.3
- **React**: 19.1.0
- **Styling**: TailwindCSS 4 + PostCSS
- **Animations**: Framer Motion
- **Scroll**: Lenis (Smooth Scroll)
- **TypeScript**: Configurado com paths absolutos
- **Linting**: ESLint com regras do Next.js

## 📚 Learn More

Para aprender mais sobre Next.js, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre recursos e API do Next.js
- [Learn Next.js](https://nextjs.org/learn) - tutorial interativo do Next.js
- [Documentação do Cloudflare Pages](https://developers.cloudflare.com/pages/) - guias de deploy e configuração

Confira o [repositório do Next.js no GitHub](https://github.com/vercel/next.js) - seu feedback e contribuições são bem-vindos!
