// Worship tech trees & Minerva quest chain — sourced from romestead.wiki.gg
// (verified against the in-game altar screens, 2026-08).
// Node/effect text stays in English: these are game-data strings, consistent
// with blessings/resources elsewhere on the site. UI labels around them are i18n.

export interface WorshipNode {
  name: string;
  effect: string;
  cost: number; // Worship Points
  tier: string; // I | II | IV | VI
  prereq?: string;
}

export interface GodQuest {
  title: string;
  offer: string; // item to offer at the altar ('' when not item-based)
  reward: string;
}

export const WORSHIP_TREES: Record<string, WorshipNode[]> = {
  ceres: [
    { tier: 'I', name: 'Plentiful Harvests', effect: '+10% Crop harvest', cost: 1 },
    { tier: 'I', name: 'Dolium — Olive Oil', effect: 'Unlocks construction: Olive Oil Dolium', cost: 1 },
    { tier: 'I', name: 'Faster Manual Mill', effect: '+50% Manual Mill speed', cost: 1 },
    { tier: 'I', name: 'Proficient Baker', effect: '+20% Baker experience gain', cost: 1 },
    { tier: 'I', name: 'Beehive', effect: 'Unlocks Carpenter recipe: Beehive', cost: 1 },
    { tier: 'II', name: 'Farmstead — Level 2', effect: 'Unlocks construction: Farmstead Lv. 2', cost: 2 },
    { tier: 'II', name: 'Bakery — Level 2', effect: 'Unlocks construction: Bakery Lv. 2', cost: 2 },
    { tier: 'II', name: 'Watering Farmstead', effect: 'A Well near a Farmstead makes the farmer auto-water farmland', cost: 2 },
    { tier: 'IV', name: 'Farmstead — Level 3', effect: 'Unlocks construction: Farmstead Lv. 3', cost: 2, prereq: 'Farmstead — Level 2' },
    { tier: 'IV', name: 'Blessing of Ceres', effect: 'Altar blessing: +25% overall Health (one blessing active at a time)', cost: 2 },
    { tier: 'VI', name: 'Watermill — Level 2', effect: 'Unlocks construction: Watermill Lv. 2 (S/W/E/N)', cost: 3 },
    { tier: 'VI', name: 'Proficient Farmer', effect: '+20% Farmer experience gain', cost: 3 },
  ],
  diana: [
    { tier: 'I', name: 'Encroaching Wilds', effect: '+10% Wildlife spawn', cost: 1 },
    { tier: 'I', name: 'Camping Tent', effect: 'Unlocks Leatherworker recipe: Camping Tent', cost: 1 },
    { tier: 'I', name: 'Scavenger', effect: '+50% Seeds from wild crops', cost: 1 },
    { tier: 'I', name: 'Lumber Yard — Level 2', effect: 'Unlocks construction: Lumber Yard Lv. 2', cost: 1 },
    { tier: 'I', name: 'Rare Finds — Lumber Yard', effect: 'Lumberjacks can find special items based on expertise', cost: 1 },
    { tier: 'I', name: 'Abstemious Citizens', effect: '-50% Citizen hunger penalty', cost: 1 },
    { tier: 'II', name: 'Plentiful Mushrooms', effect: '+30% Mushrooms', cost: 2 },
    { tier: 'IV', name: 'Lumber Yard — Level 3', effect: 'Unlocks construction: Lumber Yard Lv. 3', cost: 2, prereq: 'Lumber Yard — Level 2' },
    { tier: 'IV', name: 'Proficient Leatherworker', effect: '+20% Leatherworker experience gain', cost: 2 },
    { tier: 'IV', name: 'Blessing of Diana', effect: 'Altar blessing: +10% overall Ranged Attack Power (one blessing active at a time)', cost: 2 },
    { tier: 'VI', name: 'Firescale Satchel', effect: 'Unlocks Leatherworker recipe: Firescale Satchel', cost: 3 },
  ],
  mars: [
    { tier: 'I', name: 'Battle Plan', effect: '+10% Total town defence', cost: 1 },
    { tier: 'I', name: 'Fortified Armaments', effect: '+50% Catapult and Scorpio damage resistance', cost: 1 },
    { tier: 'I', name: 'Catapult — Level 2', effect: 'Unlocks construction: Stationary Catapult Lv. 2', cost: 1 },
    { tier: 'I', name: 'Rare Finds — Clay Pit', effect: 'Diggers can find special items based on expertise', cost: 1 },
    { tier: 'II', name: 'Clay Pit — Level 2', effect: 'Unlocks construction: Clay Pit Lv. 2', cost: 2 },
    { tier: 'II', name: 'Intimidating Presence', effect: '-25% Chance for raids', cost: 2 },
    { tier: 'IV', name: 'Catapult — Level 3', effect: 'Unlocks construction: Stationary Catapult Lv. 3', cost: 2, prereq: 'Catapult — Level 2' },
    { tier: 'IV', name: 'Blessing of Mars', effect: 'Altar blessing: +10% overall Melee Attack Power (one blessing active at a time)', cost: 2 },
    { tier: 'VI', name: 'Clay Pit — Level 3', effect: 'Unlocks construction: Clay Pit Lv. 3', cost: 3, prereq: 'Clay Pit — Level 2' },
    { tier: 'VI', name: 'Forceful Armaments', effect: '+20% Catapult and Scorpio damage', cost: 3 },
  ],
  mercury: [
    { tier: 'I', name: 'Basic Scrolls', effect: 'Unlocks Leatherworker recipes: Scroll of the Novice, Woolbound, Feathered & Linen-wrapped Scrolls', cost: 1 },
    { tier: 'I', name: 'Better Roads', effect: '+5% Road movement speed', cost: 1 },
    { tier: 'I', name: 'Extra Goods', effect: 'The Market sells additional goods', cost: 1 },
    { tier: 'I', name: 'Cheaper Prices', effect: '-5% Vendor price', cost: 1 },
    { tier: 'II', name: 'Altar Teleport', effect: 'Teleport between Altars upgraded to level 2', cost: 2 },
    { tier: 'II', name: 'Proficient Merchant', effect: '+20% Merchant experience gain', cost: 2 },
    { tier: 'II', name: 'Brick Roads', effect: 'Unlocks Carpenter recipes: Brick & Orange Brick Road Upgrade', cost: 2, prereq: 'Better Roads' },
    { tier: 'IV', name: 'Intermediate Scrolls', effect: 'Unlocks Philosopher recipes: Volumen Vitae, Ember, Mirage & Tectonic Scrolls', cost: 2 },
    { tier: 'IV', name: 'Market — Level 2', effect: 'Unlocks construction: Market Lv. 2', cost: 2 },
    { tier: 'IV', name: 'Blessing of Mercury', effect: 'Altar blessing: +10% overall Magic Attack Power (one blessing active at a time)', cost: 2 },
    { tier: 'VI', name: 'Faster Trades', effect: '+20% Trade Routes speed', cost: 3 },
    { tier: 'VI', name: 'Increased Cart Capacity', effect: '+1 capacity for all carts', cost: 3 },
  ],
  venus: [
    { tier: 'I', name: 'Big Tree Decoration', effect: 'Unlocks construction: Big Tree Decoration', cost: 1 },
    { tier: 'I', name: 'Healthy Ideals', effect: '+25% Citizen damage resistance', cost: 1 },
    { tier: 'I', name: 'Faster Doliums', effect: '+25% Dolium speed', cost: 1 },
    { tier: 'I', name: 'Fountain', effect: 'Unlocks construction: Fountain', cost: 1 },
    { tier: 'I', name: 'Decorative Ideals', effect: '+10% Max building appeal', cost: 1 },
    { tier: 'II', name: 'Big Tree Decoration — Level 2', effect: 'Unlocks construction: Big Tree Decoration Lv. 2', cost: 2, prereq: 'Big Tree Decoration' },
    { tier: 'II', name: 'Proficient Carpenter', effect: '+20% Carpenter experience gain', cost: 2 },
    { tier: 'IV', name: 'The Spirit of Giving', effect: '+10% Citizen loyalty from gifts', cost: 2 },
    { tier: 'IV', name: 'Fountain — Level 2', effect: 'Unlocks construction: Fountain Lv. 2', cost: 2, prereq: 'Fountain' },
    { tier: 'IV', name: 'Blessing of Venus', effect: 'Altar blessing: +10% overall Health, +10% overall Energy (one blessing active at a time)', cost: 2 },
    { tier: 'VI', name: 'Prosperous Ideals', effect: 'All citizens gain +1 Expertise', cost: 3, prereq: 'Big Tree Decoration — Level 2' },
  ],
  vulcan: [
    { tier: 'I', name: 'Stronger Walls', effect: '+25% Wall damage resistance', cost: 1 },
    { tier: 'I', name: 'Extra Arrows', effect: '+25% Scorpio arrow saving', cost: 1 },
    { tier: 'I', name: 'Stone Wall Upgrade', effect: 'Unlocks construction: Stone Wall', cost: 1 },
    { tier: 'I', name: 'Rare Finds — Quarry', effect: 'Miners can find special items based on expertise', cost: 1 },
    { tier: 'I', name: 'Proficient Blacksmith', effect: '+20% Blacksmith experience gain', cost: 1 },
    { tier: 'II', name: 'Automatic Scorpio — Level 2', effect: 'Unlocks construction: Automatic Scorpio Lv. 2', cost: 2 },
    { tier: 'II', name: 'Quarry — Level 2', effect: 'Unlocks construction: Quarry Lv. 2', cost: 2 },
    { tier: 'II', name: 'Longer Lasting Furnaces', effect: '-50% Furnace fuel consumption', cost: 2 },
    { tier: 'IV', name: 'Blessing of Vulcan', effect: 'Altar blessing: +10% overall Armor (one blessing active at a time)', cost: 2 },
    { tier: 'IV', name: 'Quarry — Level 3', effect: 'Unlocks construction: Quarry Lv. 3', cost: 2, prereq: 'Quarry — Level 2' },
    { tier: 'IV', name: 'Volcanic Furnaces', effect: 'Furnace buildings in the Volcano biome use no fuel', cost: 2 },
    { tier: 'VI', name: 'Automatic Scorpio — Level 3', effect: 'Unlocks construction: Automatic Scorpio Lv. 3', cost: 3, prereq: 'Automatic Scorpio — Level 2' },
  ],
};

// Minerva grants no worship tree — her progression is a quest chain.
export const MINERVA_QUESTS: GodQuest[] = [
  {
    title: 'The Giant Owl',
    offer: 'Guardian’s Eye',
    reward:
      'Unlocks Material Storage, Blacksmith, Carpenter’s Workshop, Empty House Lv. 2, Material Storage Lv. 2 and Altar Lv. 2; Leatherworker recipes: Feathered Hood, Feathered Armor, Feathered Boots; bonus recipes Feathered Effigy & Cooked Scorpion Meat.',
  },
  {
    title: 'Worshipping the Gods',
    offer: '',
    reward: 'Discover another god at the Altar — restored gods grant permanent blessings.',
  },
  {
    title: 'The Malformed Satyr Horn',
    offer: 'Malformed Satyr Horn',
    reward: 'Reveals the location of Pyzifax’s hideout in the Desert.',
  },
  {
    title: 'Virgil’s Poem',
    offer: 'Granite Tooth',
    reward:
      'Unlocks Brick Oven, Carpenter’s Workshop Lv. 2 and Altar Lv. 3; Blacksmith recipes: Tectonic Helmet, Armor, Boots & Maul; Leatherworker recipe: Tectonic Arcuballista; bonus recipes Granite Effigy, Declaration of War (Gorgons), Salamander Jerky & Phoenix Wing.',
  },
  {
    title: 'Profane Artifice',
    offer: 'Core Vessel',
    reward:
      'Unlocks the Temple, Carpenter’s Workshop Lv. 3 and Altar Lv. 3; Leatherworker recipes: Flamen Volcanalis Hood, Robe, Boots & Bow; Blacksmith recipes: Malleus Mechanicus & Flamen Volcanis Spellblade; bonus recipes Declaration of War (Burning Fallen, Cyclopelli).',
  },
];
