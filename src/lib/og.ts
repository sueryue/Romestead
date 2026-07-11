import type { Locale } from '../i18n/utils';

/** Path to a generated per-page OG image, relative to the site root (with base). */
export function ogPath(locale: Locale, name: string): string {
  return `/og/${locale}/${name}.png`;
}
