// One-off: insert hero screenshot caption keys (hero.shot.*) into ui.ts, anchored after notfound.desc.
import fs from 'node:fs';

const path = 'C:/Users/Administrator/WorkBuddy/Claw/romestead-astro/src/i18n/ui.ts';
let raw = fs.readFileSync(path, 'utf8');
const ap = '\u2019';

const blocks = {
  en: {
    anchor: "The path you followed leads nowhere",
    keys: [
      `    'hero.shot.town': 'A settled town at dusk ${ap} walls holding the line.',`,
      `    'hero.shot.fight': 'Bombing the Cyclops ${ap} five phases deep.',`,
    ],
  },
  fr: {
    anchor: "Le chemin que vous avez suivi ne m\u00e8ne nulle part",
    keys: [
      `    'hero.shot.town': 'Une ville \u00e9tablie au cr\u00e9puscule ${ap} les murs tiennent.',`,
      `    'hero.shot.fight': 'Bombarder le Cyclope ${ap} cinq phases au compteur.',`,
    ],
  },
  de: {
    anchor: "Der Pfad, dem du gefolgt bist, f\u00fchrt ins Nichts",
    keys: [
      `    'hero.shot.town': 'Eine eingesessene Stadt in der Abendd\u00e4mmerung ${ap} die Mauern halten.',`,
      `    'hero.shot.fight': 'Den Zyklopen bombardieren ${ap} mitten in Phase f\u00fcnf.',`,
    ],
  },
  es: {
    anchor: "El camino que seguiste no lleva a ninguna parte",
    keys: [
      `    'hero.shot.town': 'Una ciudad asentada al anochecer ${ap} los muros aguantan.',`,
      `    'hero.shot.fight': 'Bombardeando al C\u00edclope ${ap} cinco fases superadas.',`,
    ],
  },
  it: {
    anchor: "Il sentiero che hai seguito non porta da nessuna parte",
    keys: [
      `    'hero.shot.town': 'Una citt\u00e0 stabile al tramonto ${ap} le mura reggono.',`,
      `    'hero.shot.fight': 'Bombardare il Ciclope ${ap} cinque fasi superate.',`,
    ],
  },
};

let done = 0;
for (const [lang, { anchor, keys }] of Object.entries(blocks)) {
  const idx = raw.indexOf(anchor);
  if (idx === -1) { console.log(`MISS ${lang}`); continue; }
  const lineEnd = raw.indexOf('\n', idx);
  if (lineEnd === -1) { console.log(`MISS-EOL ${lang}`); continue; }
  raw = raw.slice(0, lineEnd + 1) + keys.join('\n') + '\n' + raw.slice(lineEnd + 1);
  done++;
  console.log(`OK ${lang}`);
}

fs.writeFileSync(path, raw, 'utf8');
console.log(`inserted: ${done}/5`);
