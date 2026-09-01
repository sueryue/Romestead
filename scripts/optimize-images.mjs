// One-off: compress oversized images to WebP (sharp is available in node_modules).
// Keeps originals aside in wiki-dump/backup-screens (already gitignored) before converting.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const mediaDir = path.join(root, 'public/media/screens');
const backupDir = path.join(root, 'wiki-dump/backup-screens');
fs.mkdirSync(backupDir, { recursive: true });

const targets = [
  'town-start.png',
  'volcano-poi.png',
  'desert-town.png',
  'ui.jpg',
  'fight-pyzifax.png',
  'forest-raid.png',
  'fight-cyclops.png',
];

for (const name of targets) {
  const src = path.join(mediaDir, name);
  if (!fs.existsSync(src)) { console.log(`SKIP ${name} (missing)`); continue; }
  const before = fs.statSync(src).size;
  const outName = name.replace(/\.(png|jpg|jpeg)$/, '.webp');
  const out = path.join(mediaDir, outName);
  try {
    await sharp(src)
      .webp({ quality: 82 })
      .toFile(out);
    // backup original, then replace with webp naming: keep BOTH files (original stays for safety; references switch to .webp)
    fs.copyFileSync(src, path.join(backupDir, name));
    const after = fs.statSync(out).size;
    console.log(`OK   ${name} -> ${outName}: ${(before/1024).toFixed(0)} KB -> ${(after/1024).toFixed(0)} KB`);
  } catch (e) {
    console.log(`ERR  ${name}: ${e.message}`);
  }
}
console.log('done');
