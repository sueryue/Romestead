import type { L10n } from '../i18n/utils';

export const WORLD = {
  intro: {
    en: 'Rome fell to a zombie plague. Now it’s your job to rebuild it from the ground up in this 2D survival town-builder for 1–8 players. Physicalized resources, nightly undead raids, Roman gods and brutal bosses — with minimal hand-holding.',
    fr: 'Rome est tombée sous une peste zombie. Votre tâche : la rebâtir de zéro dans ce jeu de construction de survie 2D pour 1 à 8 joueurs. Ressources physiques, raids de morts-vivants, dieux romains et boss brutaux — avec un minimum de aide.',
    de: 'Rom fiel einer Zombie-Seuche zum Opfer. Nun musst du es in diesem 2D-Überlebens-Stadtbauer für 1–8 Spieler neu aufbauen. Physische Ressourcen, nächtliche Untote, römische Götter und brute Bossgegner — bei minimaler Anleitung.',
    es: 'Roma cayó ante una plaga zombi. Ahora debes reconstruirla desde cero en este builder de supervivencia 2D para 1 a 8 jugadores. Recursos físicos, incursiones de no-muertos, dioses romanos y jefes brutales — con mínimas ayudas.',
    it: 'Roma è caduta per una piaga zombie. Ora devi ricostruirla da zero in questo city-builder di sopravvivenza 2D per 1–8 giocatori. Risorse fisiche, raid di non-morti, dèi romani e boss brutali — con minime istruzioni.',
  },
  biomes: [
    {
      name: { en: 'Plains', fr: 'Plaines', de: 'Ebenen', es: 'Llanuras', it: 'Pianure' },
      stage: { en: 'Starting area', fr: 'Zone de départ', de: 'Startgebiet', es: 'Zona inicial', it: 'Area iniziale' },
      difficulty: 'easy',
      image: 'screens/town-start.png',
      desc: {
        en: 'Your starting biome. Essential resources, tutorial content and the first villagers are all here. Scout toward the center of the map before you settle — a central spot near coal, water and several biome borders saves hundreds of trips later.',
        fr: 'Votre biome de départ. Ressources essentielles, tutoriel et premiers villageois s’y trouvent. Explorez vers le centre de la carte avant de vous installer — un point central près du charbon, de l’eau et de plusieurs biomes évite des centaines de trajets.',
        de: 'Dein Start-Biom. Wesentliche Ressourcen, Tutorial und die ersten Bürger sind hier. Kundschafte zur Kartenmitte, bevor du dich niederlässt — ein zentraler Platz nahe Kohle, Wasser und mehreren Biom-Grenzen spart später hunderte Fahrten.',
        es: 'Tu biome inicial. Recursos esenciales, tutorial y los primeros aldeanos están aquí. Explora hacia el centro del mapa antes de asentarte — un punto central cerca de carbón, agua y varios biomas ahorra cientos de viajes.',
        it: 'Il tuo biomi iniziale. Risorse essenziali, tutorial e i primi cittadini sono qui. Esplora verso il centro della mappa prima di stabilirti — un punto centrale vicino a carbone, acqua e diversi biomi risparmia centinaia di viaggi.',
      },
      threats: {
        en: 'Gentle by day; the first Fallen husks stir after dark.',
        fr: 'Calme le jour ; les premiers Déchus s’agitent la nuit.',
        de: 'Tagsüber ruhig; die ersten Gefallenen regen sich nachts.',
        es: 'Tranquilo de día; los primeros Caídos se mueven de noche.',
        it: 'Tranquillo di giorno; i primi Caduti si agitano di notte.',
      },
      resources: ['Wood', 'Stone', 'Coal', 'Plant Fiber', 'Flint', 'Clay', 'Berries', 'Water'],
      creatures: ['Fallen husks', 'Wildlife (deer, rabbits)'],
      notes: {
        en: [
          'You always spawn at the center of the map, inside a Plains tile.',
          'The Guardian of Minerva’s nest sits in a ruin, in a random direction from the center.',
        ],
      },
    },
    {
      name: { en: 'Forest', fr: 'Forêts', de: 'Wald', es: 'Bosques', it: 'Foreste' },
      stage: { en: 'Early expansion', fr: 'Expansion précoce', de: 'Frühe Expansion', es: 'Expansión temprana', it: 'Espansione iniziale' },
      difficulty: 'medium',
      image: 'screens/woods-night.jpg',
      desc: {
        en: 'Denser and more claustrophobic than the Plains, rich in lumber, beasts and hidden ruins. The Lumberyard can only be built here, so keep a forest foothold or risk a late-game wood famine.',
        fr: 'Plus dense et claustrophobe que les Plaines, riche en bois, bêtes et ruines cachées. La Scierie ne peut s’y construire — gardez un pied dans la forêt sous peine de disette de bois tardive.',
        de: 'Dichter und bedrückender als die Ebenen, reich an Holz, Bestien und verborgenen Ruinen. Die Holzfäller-Hütte lässt sich nur hier bauen — behaltet Wald, sonst droht Holzhunger.',
        es: 'Más denso y claustrofóbico que las Llanuras, rico en madera, bestias y ruinas ocultas. El Aserradero solo se construye aquí: conserva bosque o paga escasez de madera tarde.',
        it: 'Più fitta e claustrofobica delle Pianure, ricca di legna, bestie e rovine nascoste. La Segheria si costruisce solo qui: mantieni bosco o rischi carestia di legna.',
      },
      threats: {
        en: 'Tougher nocturnal encounters and roaming beasts.',
        fr: 'Rencontres nocturnes plus dures et bêtes errantes.',
        de: 'Härtere nächtliche Begegnungen und streunende Bestien.',
        es: 'Encuentros nocturnos más duros y bestias errantes.',
        it: 'Incontri notturni più duri e bestie vaganti.',
      },
      resources: ['Wood', 'Resin', 'Mushrooms', 'Herbs', 'Bones', 'Clay'],
      creatures: ['Wolves', 'Bears', 'Boars', 'Bark-back'],
      notes: {
        en: [
          'The Lumberyard can only be built on Forest tiles — keep a forest foothold.',
          'Some buildings gain bonuses or behave differently on Forest tiles; buildable space is tight.',
        ],
      },
    },
    {
      name: { en: 'Desert', fr: 'Désert', de: 'Wüste', es: 'Desierto', it: 'Deserto' },
      stage: { en: 'Difficulty spike', fr: 'Saut de difficulté', de: 'Schwierigkeitssprung', es: 'Salto de dificultad', it: 'Salto di difficoltà' },
      difficulty: 'hard',
      image: 'screens/desert.jpg',
      desc: {
        en: 'A noticeable difficulty spike. Resources thin out and most enemies are aggressive on sight. Home of the Cyclops — defeating it drops the Logistics Tent that automates your production lines.',
        fr: 'Un saut de difficulté net. Les ressources se raréfient et la plupart des ennemis attaquent à vue. Repaire du Cyclope — le vaincre donne la Tente de Logistique qui automatise vos chaînes.',
        de: 'Ein deutlicher Schwierigkeitssprung. Ressourcen werden knapp und die meisten Feinde greifen bei Sicht an. Heimat des Zyklopen — sein Sieg fällt die Logistik-Zelt.',
        es: 'Un salto de dificultad claro. Los recursos escasean y la mayoría ataca al verte. Hogar del Cíclope — vencerlo suelta la Tienda de Logística.',
        it: 'Un netto salto di difficoltà. Le risorse si diradano e molti nemici attaccano a vista. Casa del Ciclope — sconfiggerlo fa cadere la Tendola Logistica.',
      },
      threats: {
        en: 'Heat, sandstorms and aggressive raiders.',
        fr: 'Chaleur, tempêtes de sable et raiders agressifs.',
        de: 'Hitze, Sandstürme und aggressive Plünderer.',
        es: 'Calor, tormentas de arena y saqueadores agresivos.',
        it: 'Caldo, tempeste di sabbia e razziatori aggressivi.',
      },
      resources: ['Sand', 'Clay', 'Copper Ore', 'Aureus (gold)', 'Stone', 'Sulphur'],
      creatures: ['Desert Satyrs', 'Scorpions', 'Pyzifax’s raiders'],
      notes: {
        en: [
          'The Desert appears in roughly the same area every world — the first major difficulty spike.',
          'Resources are scarce and some buildings have limited or no function on Desert tiles.',
        ],
      },
    },
    {
      name: { en: 'Volcano', fr: 'Volcan', de: 'Vulkan', es: 'Volcán', it: 'Vulcano' },
      stage: { en: 'Endgame (Early Access)', fr: 'Fin de partie (Accès Anticipé)', de: 'Endgame (Early Access)', es: 'Final (Acceso Anticipado)', it: 'Endgame (Early Access)' },
      difficulty: 'hard',
      image: 'screens/volcano-poi.png',
      desc: {
        en: 'The current endgame of Early Access. Extremely hostile NPCs that demand serious preparation — especially solo. The Great Phoenix of Arabia is reborn in its crater, and the Talos Prototype guards the Temple of Vulcan.',
        fr: 'Le bout de l’Accès Anticipé. Des PNJ extrêmement hostiles exigeant une vraie préparation — surtout en solo. La Grande Phénix d’Arabie renaît dans son cratère et le Talos Prototype garde le Temple de Vulcain.',
        de: 'Das aktuelle Endgame des Early Access. Extrem feindselige NPCs, die ernste Vorbereitung verlangen — besonders solo. Der Große Phönix von Arabien wird im Krater wiedergeboren, und der Talos Prototype bewacht den Tempel des Vulcan.',
        es: 'El final del Acceso Anticipado. PNJ extremadamente hostiles que exigen preparación — sobre todo en solitario. La Gran Fénix de Arabia renace en su cráter y el Talos Prototype custodia el Templo de Vulcano.',
        it: 'L’endgame attuale dell’Early Access. NPC estremamente ostili che richiedono preparazione — soprattutto in solo. La Grande Fenice d’Arabia rinasce nel cratere e il Talos Prototype sorveglia il Tempio di Vulcano.',
      },
      threats: {
        en: 'The Great Phoenix of Arabia, the Talos Prototype and rivers of magma.',
        fr: 'La Grande Phénix d’Arabie, le Talos Prototype et des rivières de magma.',
        de: 'Der Große Phönix von Arabien, der Talos Prototype und Magmaströme.',
        es: 'La Gran Fénix de Arabia, el Talos Prototype y ríos de magma.',
        it: 'La Grande Fenice d’Arabia, il Talos Prototype e fiumi di magma.',
      },
      resources: ['Obsidian', 'Sulphur', 'Coal', 'Ore', 'Lava Rock'],
      creatures: ['Fire Elementals', 'Great Phoenix of Arabia', 'Talos Prototype'],
      notes: {
        en: [
          'Extremely hostile: new hazards and construction challenges at a much higher level.',
          'Do not approach unprepared — bring serious gear, food buffs and Worship bonuses.',
        ],
      },
    },
    {
      name: { en: 'Swamp', fr: 'Marécage', de: 'Sumpf', es: 'Pantano', it: 'Palude' },
      stage: { en: 'Coming post-EA', fr: 'Après l’EA', de: 'Nach dem EA', es: 'Tras el EA', it: 'Dopo l’EA' },
      difficulty: 'medium',
      image: 'screens/owl-1.jpg',
      desc: {
        en: 'Divided into two areas connected by a river. Resources and enemies overlap with other biomes, making it a transitional, unpredictable region rich in hidden loot.',
        fr: 'Divisé en deux zones reliées par une rivière. Ressources et ennemis chevauchent d’autres biomes, région de transition imprévisible riche en butin caché.',
        de: 'In zwei Gebiete geteilt, verbunden durch einen Fluss. Ressourcen und Feinde überschneiden sich mit anderen Biomen — eine unvorhersehbare Übergangsregion voller verborgener Beute.',
        es: 'Dividido en dos zonas unidas por un río. Recursos y enemigos se solapan con otros biomas, región de transición impredecible rica en botín oculto.',
        it: 'Diviso in due aree collegate da un fiume. Risorse e nemici si sovrappongono ad altri biomi, regione di transizione imprevedibile ricca di bottino nascosto.',
      },
      threats: {
        en: 'Mixed dangers from every other biome.',
        fr: 'Dangers mêlés de tous les autres biomes.',
        de: 'Gemischte Gefahren aus allen anderen Biomen.',
        es: 'Peligros mezclados de todos los demás biomas.',
        it: 'Pericoli misti da tutti gli altri biomi.',
      },
      resources: ['Clay', 'Water', 'Reeds', 'Mushrooms', 'Bones'],
      creatures: ['Wraiths', 'Bog wildlife'],
      notes: {
        en: [
          'Still unfinished: two areas joined by a river, mixing resources and creatures from other biomes.',
          'High Wraith spawn rate makes it dangerous despite the familiar loot.',
        ],
      },
    },
  ] as {
    name: L10n<string>;
    stage?: L10n<string>;
    difficulty?: 'easy' | 'medium' | 'hard';
    desc: L10n<string>;
    image?: string;
    threats?: L10n<string>;
    resources?: string[];
    creatures?: string[];
    notes?: L10n<string[]>;
  }[],
};
