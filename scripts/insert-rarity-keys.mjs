// One-off: insert the 5 rarity.* keys into each locale block of ui.ts (spec §7).
// Strategy: locales appear in fixed order en, fr, de, es, it; insert each
// language's rarity block right after its 'dropNote': line (in file order).
import fs from 'node:fs';

const path = 'C:/Users/Administrator/WorkBuddy/Claw/romestead-astro/src/i18n/ui.ts';
const raw = fs.readFileSync(path, 'utf8');
const lines = raw.split('\n');

const rarityBlocks = [
  // en
  [
    "    'rarity.common': 'Common',",
    "    'rarity.uncommon': 'Uncommon',",
    "    'rarity.rare': 'Rare',",
    "    'rarity.epic': 'Epic',",
    "    'rarity.legendary': 'Legendary',",
  ],
  // fr
  [
    "    'rarity.common': 'Commun',",
    "    'rarity.uncommon': 'Peu commun',",
    "    'rarity.rare': 'Rare',",
    "    'rarity.epic': '\u00c9pique',",
    "    'rarity.legendary': 'L\u00e9gendaire',",
  ],
  // de
  [
    "    'rarity.common': 'Gew\u00f6hnlich',",
    "    'rarity.uncommon': 'Ungew\u00f6hnlich',",
    "    'rarity.rare': 'Selten',",
    "    'rarity.epic': 'Episch',",
    "    'rarity.legendary': 'Legend\u00e4r',",
  ],
  // es
  [
    "    'rarity.common': 'Com\u00fan',",
    "    'rarity.uncommon': 'Poco com\u00fan',",
    "    'rarity.rare': 'Raro',",
    "    'rarity.epic': '\u00c9pico',",
    "    'rarity.legendary': 'Legendario',",
  ],
  // it
  [
    "    'rarity.common': 'Comune',",
    "    'rarity.uncommon': 'Non comune',",
    "    'rarity.rare': 'Raro',",
    "    'rarity.epic': 'Epico',",
    "    'rarity.legendary': 'Leggendario',",
  ],
];

// collect dropNote line indices (in file order = locale order)
const dropNoteIdx = [];
lines.forEach((l, i) => {
  if (l.includes("'dropNote':")) dropNoteIdx.push(i);
});
if (dropNoteIdx.length !== 5) {
  console.log(`unexpected dropNote count: ${dropNoteIdx.length}`);
  process.exit(1);
}
if (raw.includes("'rarity.common'")) {
  console.log('rarity keys already present — skipping');
  process.exit(0);
}

// insert from bottom to top so indices stay valid
for (let k = 4; k >= 0; k--) {
  lines.splice(dropNoteIdx[k] + 1, 0, ...rarityBlocks[k]);
  console.log(`inserted ${['en','fr','de','es','it'][k]} after line ${dropNoteIdx[k] + 1}`);
}

fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log('done');
