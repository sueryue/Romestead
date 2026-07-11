/**
 * Local OG image generator (run once, output committed to public/og).
 *
 * Renders a branded 1200x630 PNG per page/locale using @resvg/resvg-js with the
 * system Times font, then compresses with sharp. The generated PNGs live in
 * public/og and are deployed as static assets — CI never needs a font.
 *
 *   node_modules/.bin/tsx scripts/gen-og.ts
 */
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import { LOCALES, type Locale, pick } from '../src/i18n/utils';
import { GUIDES } from '../src/content/guides';
import { ENTRIES } from '../src/content/heroes';
import { WORLD } from '../src/content/world';
import { getUi } from '../src/i18n/ui';
import { SITE } from '../src/consts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const FONT = 'C:/Windows/Fonts/times.ttf';
const FONT_BOLD = 'C:/Windows/Fonts/timesbd.ttf';
const OUT = resolve(ROOT, 'public/og');
const W = 1200;
const H = 630;

const ACCENT = {
  gold: '#e0b15e',
  violet: '#b98cff',
  red: '#e07a6b',
  green: '#6fbf8e',
} as const;

type Page = { locale: Locale; name: string; eyebrow: string; title: string; accent: string; footer: string };

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrap(title: string, max: number): string[] {
  const words = title.split(/\s+/);
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    if (!cur) cur = w;
    else if ((cur + ' ' + w).length <= max) cur += ' ' + w;
    else {
      lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function buildSvg(p: Page): string {
  let lines = wrap(p.title, 30);
  let size = 60;
  if (lines.length > 3) {
    size = 46;
    lines = wrap(p.title, 42);
  }
  if (lines.length > 3) lines = lines.slice(0, 3).map((l, i) => (i === 2 && lines.length > 3 ? l + '…' : l));

  const lh = Math.round(size * 1.16);
  const first = 330 - ((lines.length - 1) * lh) / 2;
  const titleSpans = lines
    .map(
      (l, i) =>
        `<text x="60" y="${first + i * lh}" font-family="Times New Roman" font-weight="700" font-size="${size}" fill="#f3ead6">${esc(
          l
        )}</text>`
    )
    .join('\n    ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#241f19"/>
      <stop offset="1" stop-color="#141009"/>
    </linearGradient>
    <radialGradient id="glow" cx="84%" cy="14%" r="62%">
      <stop offset="0" stop-color="${p.accent}" stop-opacity="0.34"/>
      <stop offset="1" stop-color="${p.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="22" y="22" width="${W - 44}" height="${H - 44}" rx="12" fill="none" stroke="${p.accent}" stroke-opacity="0.5" stroke-width="2"/>
  <text x="60" y="92" font-family="Times New Roman" font-weight="700" font-size="30" letter-spacing="7" fill="${p.accent}">ROMESTEAD</text>
  <text x="62" y="198" font-family="Times New Roman" font-size="25" letter-spacing="4" fill="#c9b48a">${esc(
    p.eyebrow.toUpperCase()
  )}</text>
  <rect x="62" y="216" width="120" height="4" rx="2" fill="${p.accent}"/>
  ${titleSpans}
  <text x="62" y="582" font-family="Times New Roman" font-size="22" fill="#9b8f78">${esc(p.footer)}</text>
</svg>`;
}

async function render(p: Page): Promise<Buffer> {
  const svg = buildSvg(p);
  const resvg = new Resvg(svg, {
    fonts: [{ path: FONT }, { path: FONT_BOLD }],
    logLevel: 'off',
  });
  const png = resvg.render().asPng();
  return sharp(png).png({ compressionLevel: 9 }).toBuffer();
}

function pages(): Page[] {
  const out: Page[] = [];
  for (const l of LOCALES) {
    const ui = getUi(l);
    const footer = ui['footer.built'];
    // Home
    out.push({
      locale: l,
      name: 'home',
      eyebrow: 'Romestead',
      title: pick(SITE.tagline, l),
      accent: ACCENT.gold,
      footer,
    });
    // Section indexes
    out.push({ locale: l, name: 'guides', eyebrow: ui['nav.guides'], title: ui['allGuides'], accent: ACCENT.gold, footer });
    out.push({
      locale: l,
      name: 'heroes',
      eyebrow: `${ui['heroes.gods']} · ${ui['heroes.bosses']}`,
      title: ui['nav.heroes'],
      accent: ACCENT.violet,
      footer,
    });
    out.push({
      locale: l,
      name: 'world',
      eyebrow: ui['nav.world'],
      title: ui['world.biomes'],
      accent: ACCENT.green,
      footer,
    });
    out.push({
      locale: l,
      name: 'faq',
      eyebrow: ui['nav.faq'],
      title: ui['faq.title'],
      accent: ACCENT.gold,
      footer,
    });
    // Guides
    for (const g of GUIDES) {
      out.push({
        locale: l,
        name: g.slug,
        eyebrow: ui[`cat.${g.category}` as keyof typeof ui] ?? ui['nav.guides'],
        title: pick(g.title, l),
        accent: ACCENT.gold,
        footer,
      });
    }
    // Heroes (gods + bosses)
    for (const e of ENTRIES) {
      out.push({
        locale: l,
        name: e.slug,
        eyebrow: e.kind === 'god' ? ui['heroes.gods'] : ui['heroes.bosses'],
        title: e.name,
        accent: e.kind === 'god' ? ACCENT.violet : ACCENT.red,
        footer,
      });
    }
  }
  return out;
}

(async () => {
  const all = pages();
  let n = 0;
  for (const p of all) {
    const buf = await render(p);
    const dir = resolve(OUT, p.locale);
    await mkdir(dir, { recursive: true });
    await writeFile(resolve(dir, `${p.name}.png`), buf);
    n++;
  }
  console.log(`Generated ${n} OG images into public/og/`);
})();
