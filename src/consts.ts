// Central site configuration — single source of truth.
// Replace the STORE URLs below with your real app links; everything else reads from here.

import type { L10n } from './i18n/utils';

export const SITE = {
  name: 'Romestead',
  tagline: {
    en: 'Rome has fallen. Rebuild it together.',
    fr: 'Rome est tombée. Rebâtissez-la ensemble.',
    de: 'Rom ist gefallen. Baut es gemeinsam wieder auf.',
    es: 'Roma ha caído. Reconstruye junto a otros.',
    it: 'Roma è caduta. Ricostruiscila insieme.',
  } as L10n<string>,
  // Canonical production domain (used for absolute URLs, canonical, OG, sitemap)
  url: 'https://sueryue.github.io/Romestead',
  description: {
    en: 'Romestead guides, co-op survival tips, base-building walkthroughs, Roman gods, dungeons and boss strategies for the 1–8 player action-adventure survival game.',
    fr: 'Guides Romestead, astuces de survie co-op, tutoriels de construction, dieux romains, donjons et stratégies de boss pour le jeu de survie action-aventure à 1–8 joueurs.',
    de: 'Romestead-Guides, Ko-op-Überlebenstipps, Basisbau-Walkthroughs, römische Götter, Dungeons und Boss-Strategien für das Action-Adventure-Überlebensspiel für 1–8 Spieler.',
    es: 'Guías de Romestead, trucos de supervivencia co-op, tutoriales de construcción, dioses romanos, mazmorras y estrategias de jefes para el juego de supervivencia de acción y aventura para 1–8 jugadores.',
    it: 'Guide di Romestead, consigli di sopravvivenza co-op, walkthrough di costruzione, dèi romani, dungeon e strategie boss per il gioco di sopravvivenza action-adventure per 1–8 giocatori.',
  } as L10n<string>,
  author: 'Romestead Studio',
  ogImage: '/media/screens/town-nice.jpg',
  // GEO: default region + localized regions for hreflang/geo meta
  geo: {
    default: { region: 'GLOBAL', placename: 'Global', position: '0;0' },
    fr: { region: 'FR', placename: 'France', position: '48.85;2.35' },
    de: { region: 'DE', placename: 'Germany', position: '52.52;13.40' },
    es: { region: 'ES', placename: 'Spain', position: '40.42;-3.70' },
    it: { region: 'IT', placename: 'Italy', position: '41.90;12.50' },
  },
} as const;

// Store / community links — edit once here to update everywhere.
export const STORE = {
  steam: 'https://store.steampowered.com/app/1805320',
  youtube: 'https://www.youtube.com/@BeartwigsOfficial',
  discord: 'https://discord.gg/BDgRY2WFDS',
} as const;
