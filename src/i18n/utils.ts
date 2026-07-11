export const LOCALES = ['en', 'fr', 'de', 'es', 'it'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
};

// BCP-47 / hreflang codes
export const LOCALE_HREFLANG: Record<Locale, string> = {
  en: 'en',
  fr: 'fr',
  de: 'de',
  es: 'es',
  it: 'it',
};

// OG locale format (en_US, zh_CN, ...)
export const LOCALE_OG: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  de: 'de_DE',
  es: 'es_ES',
  it: 'it_IT',
};

export function isLocale(x: string): x is Locale {
  return (LOCALES as readonly string[]).includes(x);
}

/**
 * Locales with fully translated content. Only these are submitted to search
 * engines via the sitemap; the rest are English fallbacks and would otherwise
 * create near-duplicate URLs. Every language version is still reachable through
 * hreflang alternates emitted inside each indexed URL.
 */
export const INDEXED_LOCALES: Locale[] = ['en'];

/** Build a localized path. `path` should start with '/' or be '' for home. */
export function localize(locale: Locale, path = ''): string {
  const clean = path && path !== '/' ? path.replace(/\/+$/, '') : '';
  return `/${locale}${clean}`;
}

/**
 * Prepend the Astro `base` path (e.g. `/Romestead`) so in-site links resolve
 * correctly when the site is published under a sub-path on GitHub Pages.
 * Without this, `/en/guides` is treated as root-relative and 404s.
 */
export function withBase(p: string): string {
  const base = import.meta.env.BASE_URL || '';
  return base.replace(/\/?$/, '/') + p.replace(/^\//, '');
}

/** Localized, base-aware href for in-site `<a href>` / `<option value>`. */
export function link(locale: Locale, path = ''): string {
  return withBase(localize(locale, path));
}

/** Strip the leading /<locale> segment from a pathname. */
export function stripLocale(pathname: string): string {
  const seg = pathname.split('/')[1];
  if (isLocale(seg)) return pathname.replace(`/${seg}`, '') || '/';
  return pathname;
}

/** Localized record with required `en` and optional other locales. */
export type L10n<T> = { en: T } & Partial<Record<Locale, T>>;

/** Resolve a localized value, falling back to English. */
export function pick<T>(rec: L10n<T>, locale: Locale): T {
  return (rec[locale] ?? rec.en) as T;
}
