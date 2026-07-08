import type { Locale } from '../i18n/utils';
import type { L10n } from '../i18n/utils';

export type GuideCategory = 'beginner' | 'tier' | 'event';

export interface Guide {
  slug: string;
  category: GuideCategory;
  updated: string; // ISO date
  title: L10n<string>;
  description: L10n<string>;
  // Body as ordered sections: each section = { h2, paragraphs[] }
  sections: L10n<{ h: string; p: string[] }[]>;
}

export const GUIDES: Guide[] = [
  {
    slug: 'beginners-guide',
    category: 'beginner',
    updated: '2026-06-20',
    title: {
      en: 'Beginner’s Guide to Romestead (2026)'
    },
    description: {
      en: 'Seven days to a standing stead — where to build, whom to recruit, and the mistakes that erase new governors.'
    },
    sections: {
      en: [
        {
          h: 'Day 1 — Claim the Stead',
          p: [
            'Land at The Stead and raise the Principia first; it unlocks every other building and sets your daily command point cap.',
            'Spend your first 200 stone on the Granary, not the wall. A fed garrison outlasts a pretty one.',
          ],
        },
        {
          h: 'Day 2–3 — Secure the Verge',
          p: [
            'Send scouts into The Verge for farmland. Crops convert to the food buffer that powers all training.',
            'Recruit one Infantry commander (Titus or Lucia) before any cavalry — infantry holds the line while you learn.',
          ],
        },
        {
          h: 'Day 4–5 — First Beast',
          p: [
            'Tame a Verge Hound from The Greywood edge. It scouts fog faster than any hero and survives ambushes.',
            'Do not over-invest in a single beast; the Verge Wyrm raid will demand a balanced pack.',
          ],
        },
        {
          h: 'Day 6–7 — The Border Raid',
          p: [
            'Join a border raid rally. Even a support march earns you Veyn shards used for the first S-tier pull.',
            'Save gems for the Founders banner, not hourly speed-ups. Patience compounds.',
          ],
        },
      ]
    },
  },
  {
    slug: 'hero-tier-list',
    category: 'tier',
    updated: '2026-07-01',
    title: {
      en: 'Hero Tier List (2026)'
    },
    description: {
      en: 'Every commander ranked S–D with element, role and the pairing that unlocks their kit.'
    },
    sections: {
      en: [
        {
          h: 'S-Tier',
          p: [
            'Aurelia (Infantry, Light) — the anchor of any front line; her shield wall scales with garrison size.',
            'Drusus (Cavalry, Fire) — best rally leader for border raids; pairs with Octavia for burn-stacking.',
            'Octavia (Marksman, Shadow) — single-target delete button; weakest vs. spread formations.',
          ],
        },
        {
          h: 'A-Tier',
          p: [
            'Titus (Infantry, Earth) — budget Aurelia, excellent early game and faction-boss tank.',
            'Cornelia (Marksman, Wind) — AoE clear for beast hunts; edges Octavia on swarm content.',
            'Maximus (Cavalry, Light) — durable flanker that hard-counters Frost Confederacy cavalry.',
          ],
        },
      ]
    },
  },
  {
    slug: 'beast-tier-list',
    category: 'tier',
    updated: '2026-06-28',
    title: {
      en: 'Beast Partners Tier List (2026)'
    },
    description: {
      en: 'From the Verge Hound to the Verge Wyrm — which beast to invest in and why.'
    },
    sections: {
      en: [
        {
          h: 'Top Picks',
          p: [
            'Verge Hound — unmatched scout speed and ambush survival; every account wants one.',
            'Greywood Stag — healing aura that turns attrition raids into free wins.',
            'Verge Wyrm — the raid boss itself, tameable at late game for a screen-wide AoE.',
          ],
        },
      ]
    },
  },
  {
    slug: 'border-raid-event',
    category: 'event',
    updated: '2026-07-05',
    title: {
      en: 'Border Raid: Maximize Your Damage (2026)'
    },
    description: {
      en: 'The math behind rally damage, trap timing and the beast pack that tops the leaderboard.'
    },
    sections: {
      en: [
        {
          h: 'Rally Timing',
          p: [
            'Launch the rally exactly when the Bear Trap is placed; the bonus window is 8 seconds.',
            'Stack Drusus + Octavia in the lead march — burn then execute scales with remaining HP.',
          ],
        },
        {
          h: 'Beast Pack',
          p: [
            'One Greywood Stag for sustain, two Verge Hounds for scouting the spawn, and your strongest Wyrm for the nuke.',
          ],
        },
      ]
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function guidesByLocale(locale: Locale): Guide[] {
  return GUIDES;
}
