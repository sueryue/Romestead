// Bestiary — sourced from romestead.wiki.gg "Creatures" page (verified 2026-08).
// Creature/drop names stay in English (game-data strings); labels around the
// table are i18n in ui.ts.
// Spawning rule: creatures can spawn anywhere more than 15 tiles from a
// player-built structure (workbench tab buildings, wells, doliums, manual
// mill, food storage, beehives).

export interface Creature {
  name: string;
  kind: 'hostile' | 'passive';
  hp?: number;
  drops?: string;
  note?: string;
}

export interface BestiaryGroup {
  key: 'anywhere' | 'plains' | 'forest' | 'desert' | 'volcano';
  creatures: Creature[];
}

export const SPAWN_RULE = {
  en: 'Creatures spawn anywhere more than 15 tiles from your buildings — workbench constructions, wells, doliums, the manual mill, food storage and beehives all count.',
  fr: 'Les créatures apparaissent partout à plus de 15 tuiles de vos bâtiments — constructions de l’établi, puits, doliums, moulin manuel, stockage de nourriture et ruches compris.',
  de: 'Kreaturen spawnen überall mehr als 15 Kacheln von euren Gebäuden entfernt — Werkbank-Bauten, Brunnen, Dolien, Handmühle, Lager und Bienenkörbe zählen mit.',
  es: 'Las criaturas aparecen a más de 15 casillas de tus edificios: cuentan construcciones del banco de trabajo, pozos, dolia, molino manual, almacén de comida y colmenas.',
  it: 'Le creature appaiono ovunque a più di 15 caselle dai tuoi edifici — valgono costruzioni del banco, pozzi, dolia, mulino manuale, deposito cibo e arnie.',
};

export const BESTIARY: BestiaryGroup[] = [
  {
    key: 'anywhere',
    creatures: [
      { name: 'Potmen', kind: 'hostile', hp: 10, note: 'All biomes, dungeons or raids.' },
      { name: 'Fallen Crawler', kind: 'hostile', hp: 10, drops: 'Bone', note: 'All biomes at night, dungeons or raids.' },
      { name: 'Fallen', kind: 'hostile', hp: 10, drops: 'Bone', note: 'All biomes at night, dungeons or raids.' },
      { name: 'Walker', kind: 'hostile', hp: 10, drops: 'Bone', note: 'All biomes at night, dungeons or raids.' },
      { name: 'Fallen Sword', kind: 'hostile', hp: 10, drops: 'Bone, Fallen Sword', note: 'All biomes at night, dungeons or raids.' },
      { name: 'Fallen Spear', kind: 'hostile', hp: 10, drops: 'Bone, Fallen Pilum', note: 'All biomes at night, dungeons or raids.' },
      { name: 'Fallen Bloat', kind: 'hostile', hp: 20, drops: 'Bone', note: 'All biomes at night, dungeons or raids.' },
      { name: 'Fallen Centurion', kind: 'hostile', hp: 20, drops: 'Coal', note: 'All biomes at night, dungeons or raids.' },
    ],
  },
  {
    key: 'plains',
    creatures: [
      { name: 'Squirrel', kind: 'passive', hp: 2, drops: 'Raw Small Game' },
      { name: 'Mouse', kind: 'passive', hp: 2, drops: 'Raw Small Game' },
      { name: 'Deer (Female)', kind: 'passive', hp: 20, drops: 'Raw Meat Haunch, Leather' },
      { name: 'Deer (Male)', kind: 'passive', hp: 20, drops: 'Raw Meat Haunch, Leather' },
      { name: 'White Deer (Female)', kind: 'passive', hp: 20, drops: 'Raw Meat Haunch, Leather, Cured Hide, Torn Pelt' },
      { name: 'White Deer (Male)', kind: 'passive', hp: 20, drops: 'Raw Meat Haunch, Leather, Cured Hide, Torn Pelt' },
      { name: 'Rat', kind: 'hostile', hp: 7, drops: 'Raw Small Game' },
      { name: 'Goat', kind: 'hostile', hp: 10, drops: 'Wool' },
      { name: 'Bush Crab', kind: 'hostile', hp: 15, drops: 'Strange Crab Meat, Wheat Seeds, Bay Seeds' },
      { name: 'Boar', kind: 'hostile', hp: 20, drops: 'Raw Meat Cut, Leather' },
      { name: 'Wolf', kind: 'hostile', hp: 25, drops: 'Raw Meat Cut, Leather' },
    ],
  },
  {
    key: 'forest',
    creatures: [
      { name: 'Frog', kind: 'passive', hp: 2 },
      { name: 'Bear Cub', kind: 'passive', hp: 25, drops: 'Leather' },
      { name: 'Rabbit', kind: 'passive', drops: 'Raw Small Game' },
      { name: 'Grey Satyr Tiny', kind: 'hostile', hp: 10, drops: 'Quadrans' },
      { name: 'Bear', kind: 'hostile', hp: 50, drops: 'Raw Meat Haunch, Leather, Cured Hide' },
      { name: 'Grey Satyr Brute', kind: 'hostile' },
      { name: 'Grey Satyr Ranger', kind: 'hostile', drops: 'Flint Arrows' },
      { name: 'Grey Satyr Barbarian', kind: 'hostile', drops: 'Cooked Meat Cut, Quadrans' },
    ],
  },
  {
    key: 'desert',
    creatures: [
      { name: 'Lizard', kind: 'passive', hp: 5 },
      { name: 'Scarab', kind: 'passive', hp: 5 },
      { name: 'Turtle', kind: 'passive', hp: 50 },
      { name: 'Jumping Skull', kind: 'hostile', hp: 10, drops: 'Bone' },
      { name: 'Snake', kind: 'hostile', hp: 20, drops: 'Poison Gland, Snakeskin Scroll' },
      { name: 'Small Scorpion', kind: 'hostile', hp: 20, drops: 'Chitin' },
      { name: 'Rock Crab', kind: 'hostile', hp: 20, drops: 'Strange Crab Meat, Chitin' },
      { name: 'Large Scorpion', kind: 'hostile', hp: 45, drops: 'Chitin, Poison Gland, Raw Scorpion Meat, Scorpion Stinger' },
      { name: 'Skeleton', kind: 'hostile', hp: 50, drops: 'Skeleton Sword' },
      { name: 'Skeleton Archer', kind: 'hostile', hp: 50, drops: 'Skeleton Bow' },
      { name: 'Magus Mercury', kind: 'hostile', hp: 55, drops: 'Linen', note: 'Wears grey robes.' },
      { name: 'Vulture', kind: 'hostile', hp: 80, drops: 'Egg' },
      { name: 'Gorgon', kind: 'hostile', hp: 110, drops: 'Quadrans, Medusa’s Head' },
      { name: 'Satyr Tiny', kind: 'hostile', drops: 'Grapes, Quadrans, Wine, Cooked Meat Cut' },
      { name: 'Satyr Barbarian', kind: 'hostile', drops: 'Grapes, Quadrans, Wine, Cooked Meat Cut' },
      { name: 'Satyr Ranger', kind: 'hostile', drops: 'Grapes, Quadrans, Wine, Cooked Meat Cut' },
      { name: 'Satyr Brute', kind: 'hostile', drops: 'Grapes, Quadrans, Wine, Cooked Meat Cut' },
    ],
  },
  {
    key: 'volcano',
    creatures: [
      { name: 'Salamander', kind: 'passive', hp: 5, drops: 'Raw Salamander Meat' },
      { name: 'Volcanic Turtle', kind: 'passive', hp: 50 },
      { name: 'Engineer', kind: 'hostile', hp: 45, drops: 'Quadrans, Salamander Jerky, Cyclopelli Hammer' },
      { name: 'Master Engineer', kind: 'hostile', hp: 45, drops: 'Quadrans, Salamander Jerky, Cyclopelli Hammer', note: 'Builds an Automatic Scorpio that attacks you.' },
      { name: 'Lava Snake', kind: 'hostile', hp: 60, drops: 'Firescale' },
      { name: 'Burning Crawler', kind: 'hostile', hp: 60, drops: 'Coal, Bone' },
      { name: 'Burning Fallen', kind: 'hostile', hp: 60, drops: 'Burning Fallen Cape, Coal, Bone' },
      { name: 'Lava Lake Monster', kind: 'hostile', hp: 65 },
      { name: 'Phoenix', kind: 'hostile', hp: 70, drops: 'Raw Phoenix Wing, Old Phoenix Feather' },
      { name: 'Bone Crab', kind: 'hostile', hp: 70, drops: 'Strange Crab Meat, Bone' },
      { name: 'Ashen Jumping Skull', kind: 'hostile', hp: 70 },
      { name: 'Magus Vulcan', kind: 'hostile', hp: 80, drops: 'Denarius, Ember Cloth, Magus Vulcan Cape', note: 'Wears red robes.' },
      { name: 'Burning Centurion', kind: 'hostile', hp: 80, drops: 'Coal' },
      { name: 'Ashen Skeleton Warrior', kind: 'hostile', hp: 100, drops: 'Coal, Ashen Sword', note: 'Spawns an Ashen Jumping Skull on death.' },
      { name: 'Ashen Skeleton Archer', kind: 'hostile', hp: 100, drops: 'Coal, Ashen Bow, Flaming Bowstring, Iron Arrow', note: 'Spawns an Ashen Jumping Skull on death.' },
      { name: 'Fire Elemental', kind: 'hostile', hp: 100, drops: 'Elemental Core, Radiant Pilum Tip' },
      { name: 'Magus (Black)', kind: 'hostile', hp: 100, drops: 'Denarius, Magus Ceres Scroll, Mystic Potion', note: 'Wears black robes.' },
      { name: 'Lava Construct', kind: 'hostile', hp: 200, drops: 'Bronze Bar, Construct Shield' },
      { name: 'Burning Bloat', kind: 'hostile', drops: 'Coal, Bone' },
    ],
  },
];
