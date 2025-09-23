This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts.

## Cloudflare Pages Deployment

This project is optimized for deployment on Cloudflare Pages with support for SSR and dynamic routes.

### Build Commands

```bash
# Standard build for static export
npm run build

# Development with Cloudflare Pages emulation
npm run dev:cloudflare
```

### Cloudflare Pages Setup

1. **Build Configuration**:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node.js version: 18 or higher

2. **Environment Variables**: 
   - No special environment variables required for basic deployment

3. **Custom Domain**: 
   - Configure your custom domain in the Cloudflare Pages dashboard

### File Structure for Cloudflare Pages

- `next.config.ts`: Configured for static export with image optimization disabled
- `wrangler.toml`: Cloudflare Worker configuration for local development
- `_worker.js`: Custom worker for handling dynamic routes and SPA behavior
- `out/`: Generated static files (created after build)

### Local Development with Cloudflare

To test your site locally with Cloudflare Pages behavior:

```bash
# Build the static export first
npm run build

# Start Cloudflare Pages development server
npm run dev:cloudflare
```

This will run your site on `http://localhost:8788` with Cloudflare Pages functionality.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Pages

This project is optimized for [Cloudflare Pages](https://pages.cloudflare.com/) deployment.

### Quick Deploy

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `out`
4. Deploy!

### Features Supported

- ✅ Static Site Generation (SSG)
- ✅ Dynamic Routes
- ✅ Client-side Routing
- ✅ Image Optimization (using Next.js built-in unoptimized mode)
- ✅ Fast CDN Distribution
- ✅ Custom Worker for SPA behavior

### Alternative: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
