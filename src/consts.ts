// Central site configuration — single source of truth.
// Replace the STORE URLs below with your real app links; everything else reads from here.

export const SITE = {
  name: 'Romestead',
  tagline: 'Build a Roman outpost from the wild.',
  // Canonical production domain (used for absolute URLs, canonical, OG, sitemap)
  url: 'https://sueryue.github.io/Romestead',
  description:
    'Romestead strategy guides, hero tier lists, beast partners and border-raid tactics for the Roman frontier colony survival game.',
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

// Guard / rate-limit tuning (client-side frequency detection)
export const GUARD = {
  windowMs: 60_000, // rolling window
  maxRequests: 40, // max page-interactions per window before flagged
  cooldownMs: 30_000, // how long the challenge overlay stays
  reportEndpoint: '/api/guard',
} as const;
