import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import {
  LOCALES,
  LOCALE_HREFLANG,
  localize,
} from '../i18n/utils';
import { GUIDES } from '../content/guides';
import { ENTRIES } from '../content/heroes';

export const prerender = true;

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export const GET: APIRoute = () => {
  // Static route paths (without locale prefix)
  const paths: string[] = [
    '',
    '/guides',
    ...GUIDES.map((g) => `/guides/${g.slug}`),
    '/heroes',
    ...ENTRIES.map((e) => `/heroes/${e.slug}`),
    '/world',
  ];

  const urls: string[] = [];
  for (const loc of LOCALES) {
    for (const p of paths) {
      // localize() → `/<loc><path>`; ensure trailing slash for directory build
      const u = (SITE.url + localize(loc, p)).replace(/\/?$/, '/');

      // hreflang alternates: one per locale + x-default (canonical English)
      const alts = LOCALES.map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${LOCALE_HREFLANG[l]}" href="${(SITE.url + localize(l, p)).replace(/\/?$/, '/')}" />`
      ).join('\n');
      const xdefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${(SITE.url + localize('en', p)).replace(/\/?$/, '/')}" />`;

      urls.push(`  <url>\n    <loc>${esc(u)}</loc>\n${alts}\n${xdefault}\n  </url>`);
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
