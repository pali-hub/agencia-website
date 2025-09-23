# Agência Website

This is a [Next.js](https://nextjs.org) project optimized for deployment on Cloudflare Pages.

## 🚀 Deploy on Cloudflare Pages

This project is fully compatible with Cloudflare Pages and configured for static export.

### Quick Deploy

1. Push your code to a GitHub repository
2. Connect your repository to Cloudflare Pages
3. Use these build settings in the Cloudflare Pages dashboard:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/`
   - **Node.js version**: `20` (or latest LTS)

### Environment Variables

Configure these environment variables in your Cloudflare Pages dashboard if needed:

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_VERSION` | Node.js version (default: 20) | No |

### Build Configuration

The project is configured with:
- ✅ **Static Export**: `output: 'export'` in `next.config.ts`
- ✅ **Optimized Images**: `unoptimized: true` for compatibility
- ✅ **TailwindCSS 4**: With proper configuration
- ✅ **TypeScript**: Full type checking
- ✅ **ESLint**: Code quality validation
- ✅ **Autoprefixer**: Cross-browser CSS compatibility

## 🛠 Development

### Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start production server (not needed for Cloudflare Pages) |
| `npm run lint` | Run ESLint for code quality checks |

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── lib/                 # Utility functions and hooks
└── fonts/              # Custom fonts (if any)
```

## 📊 Build Output

The build generates 18 static pages optimized for Cloudflare Pages:
- Sizes range from ~102-144kB per page
- All pages are statically generated at build time
- No server-side rendering or API routes (Cloudflare Pages limitation)

## 🔧 Technical Notes

### Static Export Limitations

Since this project uses `output: 'export'` for Cloudflare Pages compatibility:
- No API Routes supported
- No Server-Side Rendering (SSR)
- No Incremental Static Regeneration (ISR)
- Images are unoptimized for static hosting

### Font Configuration

The project uses system fonts for better compatibility:
- **Sans**: `system-ui`, `-apple-system`, `'Segoe UI'`, `Roboto`, `sans-serif`
- **Mono**: `'SF Mono'`, `Monaco`, `'Cascadia Code'`, `'Roboto Mono'`, `Consolas`, `'Courier New'`, `monospace`

## 🔄 CI/CD

The project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that:
- Runs ESLint for code quality
- Performs TypeScript type checking
- Builds the application
- Uploads build artifacts

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Cloudflare Pages](https://pages.cloudflare.com/) - deployment platform documentation
- [TailwindCSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/docs/) - typed JavaScript
