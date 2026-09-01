// One-off: insert redesigned-footer UI keys into each locale block of ui.ts.
// Anchors: the unique footer.community.note sentence of each language.
import fs from 'node:fs';

const path = 'C:/Users/Administrator/WorkBuddy/Claw/romestead-astro/src/i18n/ui.ts';
let raw = fs.readFileSync(path, 'utf8');
const ap = '\u2019';

const blocks = {
  en: {
    anchor: "This is a static guide with no in-page comments yet.",
    keys: [
      `    'footer.about.title': 'About this site',`,
      `    'footer.about.text': 'An unofficial fan-made guide hub for Romestead, the 2D co-op survival town-builder by Beartwigs and Three Friends. Guides, bestiary data and worship trees are written and kept up to date by a small crew of governors, cross-checked against the community wiki.',`,
      `    'footer.feedback.title': 'Spotted an error?',`,
      `    'footer.feedback.text': 'Game data changes with every patch. If something here is outdated or wrong, tell us on Discord so we can fix it fast.',`,
      `    'footer.feedback.cta': 'Report on Discord',`,
      `    'footer.disclaimer': 'Disclaimer: This is an unofficial fan site. Romestead and all related assets are trademarks of Beartwigs and Three Friends. We are not affiliated with or endorsed by the developers.',`,
      `    'footer.nav.explore': 'Explore',`,
      `    'footer.nav.reference': 'Reference',`,
      `    'footer.nav.community': 'Community',`,
    ],
  },
  fr: {
    anchor: "Ceci est un guide statique sans commentaires int\u00e9gr\u00e9s pour l\u2019instant.",
    keys: [
      `    'footer.about.title': '\u00c0 propos de ce site',`,
      `    'footer.about.text': 'Un hub de guides non officiel cr\u00e9\u00e9 par des fans pour Romestead, le city-builder de survie coop 2D de Beartwigs et Three Friends. Guides, donn\u00e9es du bestiaire et arbres de culte sont r\u00e9dig\u00e9s et tenus \u00e0 jour par une petite \u00e9quipe de gouverneurs, v\u00e9rifi\u00e9s avec le wiki communautaire.',`,
      `    'footer.feedback.title': 'Une erreur ?',`,
      `    'footer.feedback.text': 'Les donn\u00e9es changent \u00e0 chaque patch. Si quelque chose ici est obsol\u00e8te ou faux, dites-le-nous sur Discord pour une correction rapide.',`,
      `    'footer.feedback.cta': 'Signaler sur Discord',`,
      `    'footer.disclaimer': 'Avertissement : ce site est non officiel et cr\u00e9\u00e9 par des fans. Romestead et tous les \u00e9l\u00e9ments associ\u00e9s sont des marques de Beartwigs et Three Friends. Nous ne sommes ni affili\u00e9s ni approuv\u00e9s par les d\u00e9veloppeurs.',`,
      `    'footer.nav.explore': 'Explorer',`,
      `    'footer.nav.reference': 'R\u00e9f\u00e9rences',`,
      `    'footer.nav.community': 'Communaut\u00e9',`,
    ],
  },
  de: {
    anchor: "Dies ist ein statischer Guide ohne In-Page-Kommentare bisher.",
    keys: [
      `    'footer.about.title': '\u00dcber diese Seite',`,
      `    'footer.about.text': 'Ein inoffizieller Fan-Guide-Hub f\u00fcr Romestead, den 2D-Ko-op-\u00dcberlebens-Stadtbauer von Beartwigs und Three Friends. Guides, Bestiarium-Daten und Kult-B\u00e4ume werden von einer kleinen Gruppe Governors geschrieben und aktuell gehalten, mit dem Community-Wiki abgeglichen.',`,
      `    'footer.feedback.title': 'Fehler gefunden?',`,
      `    'footer.feedback.text': 'Spieldaten \u00e4ndern sich mit jedem Patch. Ist hier etwas veraltet oder falsch, sag es uns im Discord, damit wir es schnell korrigieren.',`,
      `    'footer.feedback.cta': 'Im Discord melden',`,
      `    'footer.disclaimer': 'Hinweis: Dies ist eine inoffizielle Fanseite. Romestead und alle zugeh\u00f6rigen Inhalte sind Marken von Beartwigs und Three Friends. Wir sind weder verbunden noch von den Entwicklern empfohlen.',`,
      `    'footer.nav.explore': 'Erkunden',`,
      `    'footer.nav.reference': 'Nachschlagewerk',`,
      `    'footer.nav.community': 'Community',`,
    ],
  },
  es: {
    anchor: "Esta es una gu\u00eda est\u00e1tica sin comentarios en la p\u00e1gina por ahora.",
    keys: [
      `    'footer.about.title': 'Sobre este sitio',`,
      `    'footer.about.text': 'Un hub de gu\u00edas no oficial creado por fans para Romestead, el city-builder de supervivencia coop 2D de Beartwigs y Three Friends. Gu\u00edas, datos del bestiario y \u00e1rboles de culto escritos y mantenidos por un peque\u00f1o grupo de gobernadores, cotejados con la wiki comunitaria.',`,
      `    'footer.feedback.title': '\u00bfEncontraste un error?',`,
      `    'footer.feedback.text': 'Los datos del juego cambian con cada parche. Si algo aqu\u00ed est\u00e1 desactualizado o mal, cu\u00e9ntanoslo en Discord para corregirlo r\u00e1pido.',`,
      `    'footer.feedback.cta': 'Reportar en Discord',`,
      `    'footer.disclaimer': 'Aviso: este es un sitio de fans no oficial. Romestead y todos los activos relacionados son marcas de Beartwigs y Three Friends. No estamos afiliados ni respaldados por los desarrolladores.',`,
      `    'footer.nav.explore': 'Explorar',`,
      `    'footer.nav.reference': 'Referencias',`,
      `    'footer.nav.community': 'Comunidad',`,
    ],
  },
  it: {
    anchor: "Questa \u00e8 una guida statica senza commenti in pagina per ora.",
    keys: [
      `    'footer.about.title': 'Informazioni su questo sito',`,
      `    'footer.about.text': 'Un hub di guide non ufficiale creato dai fan per Romestead, il city-builder di sopravvivenza coop 2D di Beartwigs e Three Friends. Guide, dati del bestiario e alberi di culto scritti e tenuti aggiornati da un piccolo gruppo di governatori, verificati con la wiki della community.',`,
      `    'footer.feedback.title': 'Trovato un errore?',`,
      `    'footer.feedback.text': 'I dati del gioco cambiano a ogni patch. Se qualcosa qui \u00e8 obsoleto o sbagliato, segnalamo su Discord per una correzione rapida.',`,
      `    'footer.feedback.cta': 'Segnala su Discord',`,
      `    'footer.disclaimer': 'Avvertenza: questo \u00e8 un sito di fan non ufficiale. Romestead e tutti gli asset correlati sono marchi di Beartwigs e Three Friends. Non siamo affiliati n\u00e9 approvati dagli sviluppatori.',`,
      `    'footer.nav.explore': 'Esplora',`,
      `    'footer.nav.reference': 'Riferimenti',`,
      `    'footer.nav.community': 'Community',`,
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
