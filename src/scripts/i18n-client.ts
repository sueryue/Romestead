import i18next from 'i18next';
import { ui } from '../i18n/ui';

// Build i18next resources from the UI chrome catalogs.
const resources: Record<string, { translation: Record<string, string> }> = {};
for (const [lng, strings] of Object.entries(ui)) {
  resources[lng] = { translation: strings as Record<string, string> };
}

await i18next.init({
  lng: document.documentElement.lang || 'en',
  fallbackLng: 'en',
  resources,
  interpolation: { escapeValue: false },
});

/** Translate every [data-i18n] element to `lng` in place (no reload). */
export function applyI18n(lng: string): void {
  i18next.changeLanguage(lng);
  document.documentElement.lang = lng;
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const t = i18next.t(key);
    if (t) el.textContent = t;
  });
  // reflect choice in the <select> if present
  const sel = document.querySelector<HTMLSelectElement>('#lang-select');
  if (sel) sel.value = lng;
  document.documentElement.setAttribute('data-i18n-current', lng);
}

// Expose for the language switcher (cross-script global, since Astro bundles
// each <script> separately).
(window as unknown as { applyI18n: typeof applyI18n }).applyI18n = applyI18n;
