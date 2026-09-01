// One-off: add width/height to all media images by swapping media() -> mediaProps() spread.
// Hand-edit the Figure.astro afterwards (it receives src as a prop).
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

const IMPORT_LINE = "import { mediaProps } from '../content/image-dims';";

for (const rel of files) {
  const full = path.join(src, rel);
  let raw = fs.readFileSync(full, 'utf8');
  const before = raw;

  // depth for relative import of content/image-dims
  const depth = rel.split('/').length - 1; // pages/[locale]/x.astro -> 2 dirs below src? compute:
  // pages/[locale]/index.astro: from src/pages/[locale] -> '../../content/image-dims'
  // pages/[locale]/heroes/index.astro -> '../../../content/image-dims'
  // pages/[locale]/guides/index.astro -> '../../../content/image-dims'
  // components/RelatedCards.astro -> '../content/image-dims'
  const imp = IMPORT_LINE.replace("'../content/image-dims'", `'${'../'.repeat(depth)}content/image-dims'`);

  if (!raw.includes('mediaProps')) {
    // insert after last import line in frontmatter
    const fmEnd = raw.indexOf('---');
    const fm = raw.slice(0, fmEnd);
    const lastImport = Math.max(...[...fm.matchAll(/^import .*$/gm)].map((m) => m.index + m[0].length));
    raw = raw.slice(0, lastImport) + '\n' + imp + raw.slice(lastImport);
  }

  // swap src={media(EXPR)} -> {...mediaProps(EXPR)}
  raw = raw.replace(/src=\{media\(([^)]+)\)\}/g, '{...mediaProps($1)}');

  if (raw !== before) {
    fs.writeFileSync(full, raw, 'utf8');
    console.log(`OK ${rel}`);
  } else {
    console.log(`SKIP ${rel}`);
  }
}
console.log('done');
