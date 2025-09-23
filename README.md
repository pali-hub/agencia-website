This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Gera o build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o ESLint para verificar o código

## Deploy na Cloudflare Pages

### Configuração Automática via Git

1. Acesse o [painel da Cloudflare](https://dash.cloudflare.com/)
2. Vá para **Pages** > **Create a project**
3. Conecte seu repositório GitHub
4. Configure as seguintes opções:
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (deixar vazio)
   - **Environment variables**: Configure conforme necessário (veja seção abaixo)

### Variáveis de Ambiente

Configure as seguintes variáveis no painel da Cloudflare Pages (**Settings** > **Environment variables**):

#### Checklist de Variáveis Obrigatórias:
- [ ] `NODE_VERSION` = `20` (ou versão LTS mais recente)
- [ ] `NPM_FLAGS` = `--production=false` (para incluir devDependencies)
- [ ] `NEXT_TELEMETRY_DISABLED` = `1` (opcional, desabilita telemetria)

#### Variáveis Específicas do Projeto (configure conforme sua aplicação):
- [ ] Chaves de API externas
- [ ] URLs de serviços
- [ ] Configurações de autenticação
- [ ] Outras configurações específicas da aplicação

### Configuração Manual

Se preferir fazer deploy manual:

1. Execute o build localmente:
```bash
npm run build
```

2. Faça upload da pasta `.next` para Cloudflare Pages

### Verificações Pré-Deploy

Antes de fazer deploy, certifique-se de que:

- [ ] `npm run build` executa sem erros
- [ ] `npm run lint` não retorna problemas
- [ ] Todas as variáveis de ambiente estão configuradas
- [ ] Assets estáticos estão na pasta `public/`
- [ ] Não há dependências de Node.js server-side incompatíveis com edge runtime

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/) - learn about Cloudflare Pages deployment.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
