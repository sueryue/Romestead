// One-off fix: add-image-dims.mjs inserted the mediaProps import BEFORE the opening
// frontmatter fence on files that start with '---'. Move it inside the frontmatter.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'src');

const files = [
  'pages/[locale]/world.astro',
  'pages/[locale]/index.astro',
  'pages/[locale]/heroes/[slug].astro',
  'pages/[locale]/heroes/index.astro',
  'components/RelatedCards.astro',
  'pages/[locale]/guides/[slug].astro',
  'pages/[locale]/guides/index.astro',
];

for (const rel of files) {
  const full = path.join(src, rel);
  let raw = fs.readFileSync(full, 'utf8');
  // pattern: leading whitespace + misplaced import + the frontmatter fence
  const re = /^\s*\nimport \{ mediaProps \} from '([^']+)';\s*---\n/;
  const m = raw.match(re);
  if (!m) { console.log(`SKIP ${rel} (pattern not found)`); continue; }
  raw = raw.replace(re, `---\nimport { mediaProps } from '${m[1]}';\n`);
  fs.writeFileSync(full, raw, 'utf8');
  console.log(`FIXED ${rel}`);
}
console.log('done');
