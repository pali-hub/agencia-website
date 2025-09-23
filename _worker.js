// _worker.js for Cloudflare Pages
// This file enables dynamic functionality in Cloudflare Pages

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle API routes and dynamic functionality
    if (url.pathname.startsWith('/api/')) {
      // Handle API routes if you have any
      return new Response('API endpoint', { status: 200 });
    }
    
    // For other requests, try to serve static files
    try {
      // Let Cloudflare Pages handle static file serving
      return await env.ASSETS.fetch(request);
    } catch {
      // Fallback to index.html for client-side routing
      try {
        const indexResponse = await env.ASSETS.fetch(new Request(url.origin + '/index.html'));
        return new Response(indexResponse.body, {
          ...indexResponse,
          headers: {
            ...Object.fromEntries(indexResponse.headers.entries()),
            'Content-Type': 'text/html',
          },
        });
      } catch {
        return new Response('Not found', { status: 404 });
      }
    }
  },
};

export default worker;