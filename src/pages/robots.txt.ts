import type { APIRoute } from 'astro';
import { SITE } from '../consts';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\nAllow: /\nAllow: /llms.txt\nDisallow: /api/\n\n# Machine-readable knowledge file for AI engines (GEO)\n# See https://llmstxt.org/\nSitemap: ${SITE.url}/sitemap.xml\n`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
