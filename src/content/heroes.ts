import type { L10n } from '../i18n/utils';

export type Element = 'Earth' | 'Wind' | 'Fire' | 'Light' | 'Shadow';
export type Tier = 'S' | 'A' | 'B' | 'C';

export interface Hero {
  slug: string;
  name: string;
  role: L10n<string>;
  tier: Tier;
  element: Element;
  lead: L10n<string>; // short tagline
  bio: L10n<string>;
  bestBeast: L10n<string>;
  tip: L10n<string>;
}

export const HEROES: Hero[] = [
  {
    slug: 'aurelia',
    name: 'Aurelia',
    role: { en: 'Infantry Commander'},
    tier: 'S',
    element: 'Light',
    lead: {
      en: 'The shield wall that never breaks.'
    },
    bio: {
      en: 'Aurelia turns a frightened levy into a living wall. Her shield scales with garrison size, so she gets stronger the more you invest in the Stead.'
    },
    bestBeast: { en: 'Greywood Stag'},
    tip: {
      en: 'Front-load garrison buildings; her value is multiplicative with population.'
    },
  },
  {
    slug: 'drusus',
    name: 'Drusus',
    role: { en: 'Cavalry Commander'},
    tier: 'S',
    element: 'Fire',
    lead: {
      en: 'The rally leader who burns the line.'
    },
    bio: {
      en: 'Drusus leads the border-raid rally better than anyone. Pair him with Octavia to stack burn, then execute for bonus damage on low HP.'
    },
    bestBeast: { en: 'Verge Wyrm'},
    tip: {
      en: 'Always lead the rally with Drusus + Octavia in the same march.'
    },
  },
  {
    slug: 'octavia',
    name: 'Octavia',
    role: { en: 'Marksman'},
    tier: 'S',
    element: 'Shadow',
    lead: {
      en: 'One arrow. One corpse.'
    },
    bio: {
      en: 'Octavia deletes single targets. She struggles against spread formations but is the best boss-and-rally finisher in the game.'
    },
    bestBeast: { en: 'Verge Hound'},
    tip: {
      en: 'Save her for the execute window; never open with her into a swarm.'
    },
  },
  {
    slug: 'titus',
    name: 'Titus',
    role: { en: 'Infantry Commander'},
    tier: 'A',
    element: 'Earth',
    lead: { en: 'The reliable wall.'},
    bio: {
      en: 'Titus is the budget Aurelia — superb early game and a faction-boss tank you will use for months.'
    },
    bestBeast: { en: 'Greywood Stag'},
    tip: { en: 'Your first 5-star; do not skip him for shinier S-tier.'},
  },
  {
    slug: 'cornelia',
    name: 'Cornelia',
    role: { en: 'Marksman'},
    tier: 'A',
    element: 'Wind',
    lead: { en: 'Wind that clears the swarm.'},
    bio: {
      en: 'Cornelia’s AoE outshines Octavia on beast hunts and swarm content where single-target falls flat.'
    },
    bestBeast: { en: 'Verge Hound'},
    tip: { en: 'Swap to Cornelia whenever the enemy comes in numbers.'},
  },
  {
    slug: 'maximus',
    name: 'Maximus',
    role: { en: 'Cavalry Commander'},
    tier: 'A',
    element: 'Light',
    lead: { en: 'The Frost-counter flank.'},
    bio: {
      en: 'Maximus hard-counters Frost Confederacy cavalry with a light-charged flank that ignores their slow.'
    },
    bestBeast: { en: 'Verge Wyrm'},
    tip: { en: 'Deploy him specifically against Frost PvP marches.'},
  },
  {
    slug: 'lucia',
    name: 'Lucia',
    role: { en: 'Infantry Commander'},
    tier: 'B',
    element: 'Earth',
    lead: { en: 'Steady and cheap.'},
    bio: {
      en: 'Lucia is the free starter infantry. She carries you to your first S-tier pull and then retires gracefully.'
    },
    bestBeast: { en: 'Verge Hound'},
    tip: { en: 'Train her only to unlock the infantry tree.'},
  },
  {
    slug: 'brutus',
    name: 'Brutus',
    role: { en: 'Cavalry Commander'},
    tier: 'B',
    element: 'Fire',
    lead: { en: 'Burst, then gone.'},
    bio: {
      en: 'Brutus trades durability for a one-time fire burst. Fun, but outclassed by Drusus in every raid.'
    },
    bestBeast: { en: 'Verge Wyrm'},
    tip: { en: 'Use him only if Drusus is unavailable.'},
  },
  {
    slug: 'servilia',
    name: 'Servilia',
    role: { en: 'Marksman'},
    tier: 'C',
    element: 'Wind',
    lead: { en: 'Training wheels.'},
    bio: {
      en: 'Servilia is the starter marksman. Keep her for the collection and move to Cornelia fast.'
    },
    bestBeast: { en: 'Verge Hound'},
    tip: { en: 'Do not invest resources; she is a placeholder.'},
  },
  {
    slug: 'decimus',
    name: 'Decimus',
    role: { en: 'Infantry Commander'},
    tier: 'C',
    element: 'Shadow',
    lead: { en: 'A shadow of better men.'},
    bio: {
      en: 'Decimus is a shadow-element infuser with no standout stat. Skip unless you collect them all.'
    },
    bestBeast: { en: 'Greywood Stag'},
    tip: { en: 'Fodder for hero upgrades.'},
  },
  {
    slug: 'pomponia',
    name: 'Pomponia',
    role: { en: 'Cavalry Commander'},
    tier: 'C',
    element: 'Light',
    lead: { en: 'Bright, but shallow.'},
    bio: {
      en: 'Pomponia shines in the tutorial and nowhere else. A light-cavalry intro unit.'
    },
    bestBeast: { en: 'Verge Hound'},
    tip: { en: 'Retire after day 3.'},
  },
];

export function getHero(slug: string): Hero | undefined {
  return HEROES.find((h) => h.slug === slug);
}
