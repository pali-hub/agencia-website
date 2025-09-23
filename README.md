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
