import type { Locale } from './utils';

// UI chrome strings — used by i18next for client-side dynamic switching.
// Page *content* is rendered statically per-locale (SEO-friendly); these
// strings power the instant in-place language switch of nav/buttons/footer.

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.guides': 'Guides',
    'nav.heroes': 'Heroes',
    'nav.world': 'World',
    'nav.download': 'Download',
    'cta.play': 'Play Now',
    'cta.read': 'Read Guide',
    'lang.label': 'Language',
    'footer.tagline': 'From the wild, a Rome.',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Unofficial strategy companion.',
    'live.online': 'Pioneers online',
    'live.updated': 'Guides refreshed',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.guides': 'Guides',
    'nav.heroes': 'Héros',
    'nav.world': 'Univers',
    'nav.download': 'Télécharger',
    'cta.play': 'Jouer',
    'cta.read': 'Lire',
    'lang.label': 'Langue',
    'footer.tagline': 'De la nature sauvage, une Rome.',
    'footer.rights': 'Tous droits réservés.',
    'footer.built': 'Compagnon de stratégie non officiel.',
    'live.online': 'Pionniers en ligne',
    'live.updated': 'Guides mis à jour',
  },
  de: {
    'nav.home': 'Start',
    'nav.guides': 'Guides',
    'nav.heroes': 'Helden',
    'nav.world': 'Welt',
    'nav.download': 'Herunterladen',
    'cta.play': 'Jetzt spielen',
    'cta.read': 'Guide lesen',
    'lang.label': 'Sprache',
    'footer.tagline': 'Aus der Wildnis, ein Rom.',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.built': 'Inoffizieller Strategie-Begleiter.',
    'live.online': 'Pioniere online',
    'live.updated': 'Guides aktualisiert',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.guides': 'Guías',
    'nav.heroes': 'Héroes',
    'nav.world': 'Mundo',
    'nav.download': 'Descargar',
    'cta.play': 'Jugar ahora',
    'cta.read': 'Leer guía',
    'lang.label': 'Idioma',
    'footer.tagline': 'De la naturaleza, una Roma.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Compañero de estrategia no oficial.',
    'live.online': 'Pioneros en línea',
    'live.updated': 'Guías actualizadas',
  },
  it: {
    'nav.home': 'Home',
    'nav.guides': 'Guide',
    'nav.heroes': 'Eroi',
    'nav.world': 'Mondo',
    'nav.download': 'Scarica',
    'cta.play': 'Gioca ora',
    'cta.read': 'Leggi la guía',
    'lang.label': 'Lingua',
    'footer.tagline': 'Dalla natura selvaggia, una Roma.',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.built': 'Compagno strategico non ufficiale.',
    'live.online': 'Pionieri online',
    'live.updated': 'Guide aggiornate',
  },
} as const;

export function getUi(locale: Locale) {
  return ui[locale] as Record<keyof (typeof ui)['en'], string>;
}
