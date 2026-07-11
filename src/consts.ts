// Central site configuration — single source of truth.
// Replace the STORE URLs below with your real app links; everything else reads from here.

import type { L10n } from './i18n/utils';

export const SITE = {
  name: 'Romestead',
  tagline: {
    en: 'Build a Roman outpost from the wild.',
    fr: 'Bâtissez un avant-poste romain à partir de la nature sauvage.',
    de: 'Errichtet einen römischen Außenposten aus der Wildnis.',
    es: 'Construye un puesto avanzado romano desde la naturaleza salvaje.',
    it: 'Costruisci un avamposto romano dalle terre selvagge.',
  } as L10n<string>,
  // Canonical production domain (used for absolute URLs, canonical, OG, sitemap)
  url: 'https://sueryue.github.io/Romestead',
  description: {
    en: 'Romestead strategy guides, hero tier lists, beast partners and border-raid tactics for the Roman frontier colony survival game.',
    fr: 'Guides stratégiques Romestead, classements de héros, compagnons bêtes et tactiques de raid frontalier pour le jeu de survie de colonie frontière romaine.',
    de: 'Romestead-Strategie-Guides, Helden-Tier-Listen, Bestien-Partner und Grenzüberfall-Taktiken für das römische Grenzkolonie-Überlebensspiel.',
    es: 'Guías de estrategia de Romestead, listas de héroes, compañeros bestia y tácticas de raid fronterizo para el juego de supervivencia de colonia frontalera romana.',
    it: 'Guide strategiche di Romestead, tier list degli eroi, compagni bestia e tattiche di raid di frontiera per il gioco di sopravvivenza della colonia di confine romana.',
  } as L10n<string>,
  author: 'Romestead Studio',
  ogImage: '/og-image.png',
  // GEO: default region + localized regions for hreflang/geo meta
  geo: {
    default: { region: 'GLOBAL', placename: 'Global', position: '0;0' },
    fr: { region: 'FR', placename: 'France', position: '48.85;2.35' },
    de: { region: 'DE', placename: 'Germany', position: '52.52;13.40' },
    es: { region: 'ES', placename: 'Spain', position: '40.42;-3.70' },
    it: { region: 'IT', placename: 'Italy', position: '41.90;12.50' },
  },
} as const;

// Store links — edit once here to update everywhere.
// Using store *search* URLs by default; swap for your real product URLs.
export const STORE = {
  googlePlay: 'https://play.google.com/store/search?q=Romestead&c=apps',
  appStore: 'https://www.appstore.com/search?term=Romestead',
} as const;
