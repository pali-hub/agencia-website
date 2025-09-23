# Agência Website

A modern, high-performance agency website built with Next.js, featuring smooth animations, responsive design, and optimized for static deployment on Cloudflare Pages.

## 🚀 Technology Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion + Lenis Smooth Scroll
- **Language**: TypeScript
- **Build Output**: Static Export (JAMstack)
- **Deployment**: Cloudflare Pages

## 📦 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd agencia-website

# Install dependencies
npm install
```

### Development

```bash
# Start development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page auto-reloads when you edit files.

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts development server with Turbopack for faster builds |
| `npm run build` | Creates production build and exports static files to `/out` |
| `npm run start` | Runs production server (not used with static export) |
| `npm run lint` | Runs ESLint to check code quality and formatting |

### Script Details

- **`dev`**: Uses Next.js with Turbopack for faster development builds and hot reloading
- **`build`**: Generates optimized static files in the `/out` directory, ready for deployment
- **`lint`**: Validates code against ESLint rules configured for Next.js and TypeScript

## 🌐 Cloudflare Pages Deployment

This project is optimized for Cloudflare Pages deployment with static export configuration.

### Automatic Deployment

1. **Connect Repository**: 
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project" → "Connect to Git"
   - Select your repository

2. **Build Configuration**:
   ```
   Framework preset: Next.js (Static HTML Export)
   Build command: npm run build
   Build output directory: out
   Root directory: (leave empty)
   ```

3. **Environment Variables**: See [Environment Variables](#environment-variables) section below

### Manual Deployment

```bash
# Build the project
npm run build

# The /out directory contains your static files
# Upload the contents of /out to Cloudflare Pages
```

### Deployment Verification

After deployment, verify:
- [ ] All pages load correctly
- [ ] Images and assets are served properly
- [ ] Animations work smoothly
- [ ] Mobile responsiveness
- [ ] SEO meta tags are present

## 🔧 Environment Variables

### Required Variables

Create a `.env.local` file in the project root:

```env
# Example environment variables
CUSTOM_KEY=your_value_here

# Add any API keys or configuration needed
# NEXT_PUBLIC_API_URL=https://api.example.com
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Environment Files

- `.env.local` - Local development (gitignored)
- `.env.example` - Template for required variables
- Environment variables in `next.config.ts` - Build-time variables

### Cloudflare Pages Environment Variables

In Cloudflare Pages dashboard:
1. Go to your project → Settings → Environment variables
2. Add production variables:
   - `CUSTOM_KEY`: Your production value
   - Add any API keys or configuration

### Public vs Private Variables

- **Public** (`NEXT_PUBLIC_*`): Exposed to the browser
- **Private**: Server-side only (build-time with static export)

## 📁 Project Structure

```
agencia-website/
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── page.tsx       # Homepage
│   │   ├── layout.tsx     # Root layout
│   │   ├── services/      # Service pages
│   │   ├── retainer/      # Retainer service pages
│   │   ├── ready-made/    # Ready-made solutions pages
│   │   └── other-creative-services/ # Additional services
│   ├── components/        # Reusable React components
│   │   ├── Marquee.tsx    # Animated text marquee
│   │   ├── ServicesList.tsx # Services listing
│   │   └── FeaturedProjects.tsx
│   ├── lib/              # Utility functions and data
│   │   └── menuData.ts   # Navigation menu configuration
│   └── fonts/            # Custom font files
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

### Key Directories

- **`/src/app`**: Page components using Next.js App Router
- **`/src/components`**: Reusable UI components with animations
- **`/src/lib`**: Utilities, data, and configuration
- **`/public`**: Static assets served directly
- **`/out`**: Generated static build (after `npm run build`)

## 🎨 Customization

### Adding New Pages

1. Create new page in `/src/app/your-page/page.tsx`:
```tsx
export default function YourPage() {
  return (
    <main className="px-4 py-16">
      <h1 className="text-3xl font-semibold">Your Page Title</h1>
      <p className="mt-2 text-gray-600">Your page content.</p>
    </main>
  );
}
```

2. Add to navigation in `/src/lib/menuData.ts` if needed

### Styling

- **Global styles**: Tailwind utility classes
- **Components**: CSS-in-JS with Tailwind
- **Animations**: Framer Motion variants
- **Smooth scrolling**: Lenis integration

### Menu Configuration

Edit `/src/lib/menuData.ts` to modify navigation menus:
- `aboutMenu`: About section links
- `projectsMenu`: Projects and case studies
- `servicesMenu`: Service offerings

## 🎭 Componentes e Animações

### CreativeLabSection Component

O `CreativeLabSection` é um componente que exibe um grid responsivo de cards com animações suaves. Este componente serve como exemplo do padrão de design e animação adotado no projeto.

#### Como utilizar

1. **Importar o componente**:
```tsx
import CreativeLabSection from "@/components/CreativeLabSection";
```

2. **Adicionar na página**:
```tsx
export default function YourPage() {
  return (
    <main>
      {/* Outros componentes */}
      <CreativeLabSection />
    </main>
  );
}
```

#### Personalização

Para personalizar o componente, edite `/src/components/CreativeLabSection.tsx`:

```tsx
// Personalize os cards
const cards = [
  {
    title: "Seu Título",
    description: "Sua descrição personalizada aqui.",
    image: "/images/projects/sua-imagem.png",
    alt: "Texto alternativo descritivo"
  },
  // Adicione mais cards...
];
```

**Estrutura do card:**
- `title`: Título do card
- `description`: Descrição do serviço/projeto
- `image`: Caminho para a imagem (deve estar em `/public/images/`)
- `alt`: Texto alternativo para acessibilidade

#### Estrutura Visual

O componente utiliza:
- **Grid responsivo**: 1 coluna (mobile) → 2 colunas (tablet) → 3 colunas (desktop)
- **Cards glassmorphic**: `bg-white/70 backdrop-blur` para efeito de vidro
- **Hover effects**: Escala da imagem e mudança de background
- **Aspectos**: `aspect-video` para proporção 16:9 nas imagens

### Padrão de Animação com Framer Motion

O projeto utiliza um padrão consistente de animações de scroll reveal para criar uma experiência moderna e dinâmica.

#### Variants Principais

```tsx
// Animação básica de fade up
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

// Variant para imagens (movimento maior)
const imageVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};
```

#### Implementação do Scroll Reveal

```tsx
<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
  transition={{ staggerChildren: 0.08 }}
>
  <motion.h2 variants={fadeUp}>
    Seu Título
  </motion.h2>
  
  <motion.p variants={fadeUp}>
    Sua descrição
  </motion.p>
  
  <motion.div variants={fadeUp}>
    {/* Conteúdo animado */}
  </motion.div>
</motion.div>
```

#### Propriedades Importantes

- **`initial="hidden"`**: Estado inicial invisível
- **`whileInView="show"`**: Ativa animação quando elemento entra na viewport
- **`viewport={{ once: true }}`**: Anima apenas uma vez
- **`margin: "-10% 0% -10% 0%"`**: Margem da viewport para trigger da animação
- **`staggerChildren: 0.08`**: Delay entre animações de filhos (80ms)
- **`easeOut`**: Curva de animação suave

#### Animações de Hover

```tsx
// CSS classes para hover effects
className="group hover:bg-white transition"

// Imagem com hover
className="transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
```

### Padrão do Grid Editorial

#### Sistema de Grid Responsivo

O projeto utiliza Tailwind CSS para criar grids responsivos consistentes:

```tsx
// Padrão usado no CreativeLabSection e Services
className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"

// Variação com gap menor
className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
```

#### Breakpoints

- **Mobile** (`default`): 1 coluna
- **Small** (`sm: 640px+`): 2 colunas
- **Large** (`lg: 1024px+`): 3 colunas

#### Espaçamento e Ritmo Visual

```tsx
// Seção externa
className="px-4 py-16 md:py-24"

// Container centralizado
className="mx-auto max-w-6xl"

// Espaçamento entre elementos
className="mt-3"  // Pequeno
className="mt-10" // Grande
```

#### Consistência Editorial

- **Cards**: `rounded-2xl border bg-white/70 backdrop-blur`
- **Padding interno**: `p-5` ou `p-6`
- **Gap entre cards**: `gap-4` ou `gap-6`
- **Aspect ratio**: `aspect-video` para imagens

### Boas Práticas de Componentização

#### Estrutura Recomendada

1. **Declarações no topo**:
```tsx
"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";

// Variants de animação
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

// Dados do componente
const items = [...];
```

2. **Componente funcional com JSX consistente**:
```tsx
export default function YourComponent() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          transition={{ staggerChildren: 0.08 }}
        >
          {/* Conteúdo animado */}
        </motion.div>
      </div>
    </section>
  );
}
```

#### Diretrizes para Novos Componentes

1. **Siga o padrão de animação estabelecido**:
   - Use `fadeUp` para elementos de texto
   - Use `imageVariant` para imagens e cards
   - Mantenha `staggerChildren` entre 0.06-0.08

2. **Mantenha consistência visual**:
   - Use a mesma estrutura de seção (`px-4 py-16 md:py-24`)
   - Container centralizado com `max-w-6xl`
   - Cards com glassmorphic effect

3. **Responsividade**:
   - Teste em todos os breakpoints
   - Use grids flexíveis (`sm:grid-cols-2 lg:grid-cols-3`)
   - Ajuste espaçamentos para mobile

4. **Acessibilidade**:
   - Sempre inclua `alt` text em imagens
   - Use tags semânticas (`<section>`, `<h2>`, `<h3>`)
   - Teste navegação por teclado

5. **Performance**:
   - Use `next/image` para imagens
   - Configure `sizes` apropriado
   - Use `viewport={{ once: true }}` para animações

#### Exemplos de Reutilização

Para criar uma nova seção similar ao CreativeLabSection:

1. Copie a estrutura base
2. Modifique os dados (`cards` array)
3. Ajuste textos e imagens
4. Mantenha o mesmo padrão de animação
5. Teste responsividade

## 🐛 Troubleshooting

### Common Issues

#### Build Errors

**Issue**: `Error: Static export cannot use dynamic server features`
```bash
# Solution: Check for server-side features in components
# Remove or replace with static alternatives
```

**Issue**: `Module not found` errors
```bash
npm install  # Reinstall dependencies
rm -rf node_modules package-lock.json
npm install  # Clean reinstall
```

#### Development Issues

**Issue**: Styles not loading
```bash
# Restart development server
npm run dev
```

**Issue**: TypeScript errors
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

#### Deployment Issues

**Issue**: Assets not loading on Cloudflare Pages
- Verify build output directory is set to `out`
- Check that all asset paths are relative
- Ensure `trailingSlash: true` in next.config.ts

**Issue**: Environment variables not working
- Double-check variable names in Cloudflare Pages dashboard
- Ensure public variables use `NEXT_PUBLIC_` prefix
- Rebuild after adding new variables

### Performance Optimization

- Use `next/image` component for images (configured for static export)
- Minimize bundle size with dynamic imports
- Optimize animations with `transform` and `opacity`
- Test with Lighthouse for performance metrics

### Getting Help

1. Check [Next.js Documentation](https://nextjs.org/docs)
2. Review [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
3. Search issues in the repository
4. Check browser developer tools for console errors

## 📞 Support

For issues specific to this project:
1. Check the troubleshooting section above
2. Review recent commits for breaking changes
3. Ensure all dependencies are up to date
4. Test in a clean environment

---

Built with ❤️ using Next.js and optimized for Cloudflare Pages deployment.
