// One-off: insert 404-page (notfound) UI keys into each locale block of ui.ts.
// Anchors: the unique footer.disclaimer sentence of each language.
import fs from 'node:fs';

const path = 'C:/Users/Administrator/WorkBuddy/Claw/romestead-astro/src/i18n/ui.ts';
let raw = fs.readFileSync(path, 'utf8');
const ap = '\u2019';

const blocks = {
  en: {
    anchor: "Disclaimer: This is an unofficial fan site.",
    keys: [
      `    'notfound.title': 'This page was lost in the Fall.',`,
      `    'notfound.desc': 'The path you followed leads nowhere ${ap} the page may have moved or never existed. Return to the safety of the town.',`,
    ],
  },
  fr: {
    anchor: "Avertissement : ce site est non officiel",
    keys: [
      `    'notfound.title': 'Cette page a \u00e9t\u00e9 perdue dans la Chute.',`,
      `    'notfound.desc': 'Le chemin que vous avez suivi ne m\u00e8ne nulle part ${ap} la page a peut-\u00eatre \u00e9t\u00e9 d\u00e9plac\u00e9e ou n${ap}a jamais exist\u00e9. Revenez \u00e0 la s\u00e9curit\u00e9 de la ville.',`,
    ],
  },
  de: {
    anchor: "Hinweis: Dies ist eine inoffizielle Fanseite.",
    keys: [
      `    'notfound.title': 'Diese Seite ging beim Fall verloren.',`,
      `    'notfound.desc': 'Der Pfad, dem du gefolgt bist, f\u00fchrt ins Nichts ${ap} die Seite wurde vielleicht verschoben oder existierte nie. Kehre in die Sicherheit der Stadt zur\u00fcck.',`,
    ],
  },
  es: {
    anchor: "Aviso: este es un sitio de fans no oficial.",
    keys: [
      `    'notfound.title': 'Esta p\u00e1gina se perdi\u00f3 en la Ca\u00edda.',`,
      `    'notfound.desc': 'El camino que seguiste no lleva a ninguna parte ${ap} puede que la p\u00e1gina se haya movido o que nunca existiera. Vuelve a la seguridad de la ciudad.',`,
    ],
  },
  it: {
    anchor: "Avvertenza: questo \u00e8 un sito di fan non ufficiale.",
    keys: [
      `    'notfound.title': 'Questa pagina \u00e8 andata perduta nella Caduta.',`,
      `    'notfound.desc': 'Il sentiero che hai seguito non porta da nessuna parte ${ap} la pagina potrebbe essere stata spostata o non essere mai esistita. Torna alla sicurezza della citt\u00e0.',`,
    ],
  },
};

let done = 0;
for (const [lang, { anchor, keys }] of Object.entries(blocks)) {
  const idx = raw.indexOf(anchor);
  if (idx === -1) { console.log(`MISS ${lang}: anchor not found`); continue; }
  const lineEnd = raw.indexOf('\n', idx);
  if (lineEnd === -1) { console.log(`MISS-EOL ${lang}`); continue; }
  raw = raw.slice(0, lineEnd + 1) + keys.join('\n') + '\n' + raw.slice(lineEnd + 1);
  done++;
  console.log(`OK ${lang}`);
}

fs.writeFileSync(path, raw, 'utf8');
console.log(`inserted blocks: ${done}/5`);
