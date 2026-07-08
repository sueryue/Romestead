# Romestead — Guides

Official strategy guide hub for the game **Romestead** (Roman frontier colony-builder),
rebuilt as a modern, SEO/GEO-optimized static site.

## Stack

- **Astro** (static output) — content-first, ships near-zero JS by default
- **Tailwind CSS** — utility styling with a Roman parchment design system
- **Astro i18n routing** — per-locale static URLs (`/en`, `/zh`, `/fr`, `/ja`, `/ko`, `/de`, `/es`, `/it`)
  with `hreflang`, `canonical`, per-locale OG and JSON-LD
- **i18next (client)** — instant in-page language switch without a full reload
- **@astrojs/sitemap** — `sitemap-index.xml` for crawlers
- **FingerprintJS** — visitor fingerprint + frequency guard (see `src/scripts/guard.ts`)
- **JS-enhanced key data** — live counters render client-side via an Astro island
  while all SEO-critical copy stays in static HTML

## Scripts

```bash
npm install      # install deps
npm run dev      # local dev at http://127.0.0.1:4321
npm run build    # static build to ./dist
npm run preview  # preview the build
```

## Project layout

```
src/
  consts.ts              # site config, locale list, download URLs
  i18n/utils.ts          # locale helpers (ui.ts = UI chrome strings)
  content/               # guide / hero / world data (en + zh, others fall back)
  layouts/Base.astro     # <head> SEO/GEO, JSON-LD, fonts, guard + protect scripts
  components/            # Header (lang switcher), Footer, LiveStats island
  pages/[locale]/        # localized routes: index, guides, heroes, world
  pages/robots.txt.ts    # robots with sitemap reference
  scripts/
    i18n-client.ts       # i18next dynamic switch
    guard.ts             # FingerprintJS frequency guard
    protect.ts           # contextmenu + DevTools (F12) protection
```

## Content protection

`src/scripts/protect.ts` combines a CSS overlay mask with event listeners to deter
casual right-click / DevTools snooping on protected media, while leaving normal
reading and selection intact.

## Deployment — GitHub Pages

1. Create a repo and push `main`.
2. In **Settings → Pages**, set Source = *GitHub Actions*.
3. Update `site` in `astro.config.mjs` to your Pages URL
   (e.g. `https://<user>.github.io/<repo>/`); if deploying as a **project page**,
   also set `base: '/<repo>/'`.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

> Note: FingerprintJS Pro requires an API key for the full backend; the bundled
> client uses the open-source `agent` (local confidence score) and is toggleable
> via `window.__GUARD_ENABLED__` for testing.
