import type { L10n } from '../i18n/utils';

export const WORLD = {
  intro: {
    en: 'When the Republic collapsed, you were named Magister Limitum — governor of the frontier. Your charge: carve a Rome from the wild Valcra valley, beyond the Rhine.'
  },
  regions: [
    {
      name: { en: 'The Stead'},
      desc: {
        en: 'Your fortress heartland. Every building unlocks from the Principia here.'
      },
    },
    {
      name: { en: 'The Verge'},
      desc: {
        en: 'Fog-wrapped farmland. Crops feed the buffer that powers all training.'
      },
    },
    {
      name: { en: 'The Greywood'},
      desc: {
        en: 'A beast-haunted forest. Tame hounds and stags at its edge.'
      },
    },
    {
      name: { en: 'Frostmarch / Ember Steppe / Saltreach'},
      desc: {
        en: 'The three enemy heartlands you will eventually raid.'
      },
    },
  ] as { name: L10n<string>; desc: L10n<string> }[],
  factions: [
    {
      name: { en: 'Frost Confederacy'},
      element: 'Ice (Veyn)',
      counter: {
        en: 'Counter with Light cavalry (Maximus); their slow is ignored by light charge.'
      },
    },
    {
      name: { en: 'Ember Khanate'},
      element: 'Fire',
      counter: {
        en: 'Counter with Earth infantry (Titus/Aurelia); earth resists burn.'
      },
    },
    {
      name: { en: 'Salt-Born'},
      element: 'Water',
      counter: {
        en: 'Counter with Wind marksmen (Cornelia); wind disperses their tides.'
      },
    },
    {
      name: { en: 'Rival Magistrates'},
      element: 'Mixed',
      counter: {
        en: 'PvP — scout their lead march, then hard-counter the element.'
      },
    },
  ] as { name: L10n<string>; element: string; counter: L10n<string> }[],
};
