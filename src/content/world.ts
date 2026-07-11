import type { L10n } from '../i18n/utils';

export const WORLD = {
  intro: {
    en: 'Rome has fallen. In this action-adventure survival game for 1–8 players you rebuild civilization from the wild — fight the husks, raise towns and earn the favor of the Roman gods. Or just farm your crops.',
    fr: 'Rome est tombée. Dans ce jeu de survie action-aventure pour 1 à 8 joueurs, vous rebâtissez la civilisation depuis la nature sauvage — combattez les carcasses, élevez des villes et gagnez la faveur des dieux romains. Ou contentez-vous de cultiver.',
    de: 'Rom ist gefallen. In diesem Action-Adventure-Überlebensspiel für 1–8 Spieler baut ihr die Zivilisation aus der Wildnis neu auf — bekämpft die Hüllen, errichtet Städte und erringt die Gunst der römischen Götter. Oder ihr farmt einfach eure Felder.',
    es: 'Roma ha caído. En este juego de supervivencia de acción y aventura para 1 a 8 jugadores reconstruyes la civilización desde la naturaleza — combate las cáscaras, levanta pueblos y gana el favor de los dioses romanos. O simplemente cultiva.',
    it: 'Roma è caduta. In questo gioco di sopravvivenza action-adventure per 1–8 giocatori ricostruisci la civiltà dalla natura selvaggia — combatti gli involucri, erigi città e ottieni il favore degli dèi romani. O coltivi e basta.',
  },
  biomes: [
    {
      name: { en: 'The Fallen Empire', fr: 'L’Empire Déchu', de: 'Das Gefallene Imperium', es: 'El Imperio Caído', it: 'L’Impero Caduto' },
      image: 'screens/shot3.jpg',
      desc: {
        en: 'The apocalypse left Rome in ruins and its citizens reanimated as the Fallen — walking husks that hunt at night. Your story begins among the rubble.',
        fr: 'L’apocalypse a laissé Rome en ruines et ses citoyens réanimés en Déchus — des carcasses qui chassent la nuit. Votre histoire commence dans les décombres.',
        de: 'Die Apokalypse ließ Rom in Trümmern und seine Bürger als Gefallene wieder — wandelnde Hüllen, die nachts jagen. Eure Geschichte beginnt im Schutt.',
        es: 'El apocalipsis dejó Roma en ruinas y a sus ciudadanos reanimados como los Caídos — cáscaras que cazan de noche. Tu historia empieza entre los escombros.',
        it: 'L’apocalisse ha lasciato Roma in rovine e i suoi cittadini rianimati come i Caduti — involucri che danno la caccia di notte. La tua storia inizia tra le macerie.',
      },
      threats: {
        en: 'The Fallen — reanimated citizens that hunt by sound and movement after dark.',
        fr: 'Les Déchus — citoyens réanimés qui chassent au son et au mouvement après la tombée de la nuit.',
        de: 'Die Gefallenen — reanimierte Bürger, die nach Einbruch der Dunkelheit nach Laut und Bewegung jagen.',
        es: 'Los Caídos — ciudadanos reanimados que cazan por sonido y movimiento tras el anochecer.',
        it: 'I Caduti — cittadini rianimati che cacciano per suono e movimento dopo il buio.',
      },
    },
    {
      name: { en: 'The Wilds & Forests', fr: 'Les Lieux Sauvages & Forêts', de: 'Die Wildnis & Wälder', es: 'La Naturaleza y los Bosques', it: 'I Luoghi Selvaggi e le Foreste' },
      image: 'screens/woods-night.jpg',
      desc: {
        en: 'Dense woods rich in lumber, beasts and hidden ruins. The canopy hides both bounty and the owl that rules the night sky.',
        fr: 'Des bois denses riches en bois, bêtes et ruines cachées. La canopée cache autant de butin que la chouette qui règne sur la nuit.',
        de: 'Dichte Wälder voller Holz, Bestien und verborgener Ruinen. Das Blätterdach birgt Beute und die Eule, die den Nachthimmel beherrscht.',
        es: 'Bosques densos ricos en madera, bestias y ruinas ocultas. El dosel esconde tanto botín como al búho que manda en la noche.',
        it: 'Boschi fitti ricchi di legna, bestie e rovine nascoste. La chioma nasconde sia bottino sia il gufo che comanda il cielo notturno.',
      },
      threats: {
        en: 'Night husks and the Owl Sentinel patrol the treeline.',
        fr: 'Les carcasses nocturnes et la Chouette-Sentinelle patrouillent la lisière.',
        de: 'Nacht-Hüllen und der Eulen-Wächter patrouillieren am Waldrand.',
        es: 'Las cáscaras nocturnas y el Búho Centinela patrullan el bosque.',
        it: 'Gli involucri notturni e la Sentinella Gufo pattugliano il limitare.',
      },
    },
    {
      name: { en: 'The Desert', fr: 'Le Désert', de: 'Die Wüste', es: 'El Desierto', it: 'Il Deserto' },
      image: 'screens/desert.jpg',
      desc: {
        en: 'A sun-scorched expanse of dunes and lost caravans. Scarce water, scattered oases and the bones of older settlements.',
        fr: 'Un étendue brûlée par le soleil de dunes et de caravanes perdues. Eau rare, oasis dispersées et os d’anciennes colonies.',
        de: 'Ein sonnenversengtes Meer aus Dünen und verlorenen Karawanen. Knappes Wasser, verstreute Oasen und die Knochen älterer Siedlungen.',
        es: 'Una extensión quemada por el sol de dunas y caravanas perdidas. Agua escasa, oasis dispersos y huesos de viejos asentamientos.',
        it: 'Un’estensione bruciata dal sole di dune e carovane perdute. Acqua scarsa, oasi sparse e ossa di vecchi insediamenti.',
      },
      threats: {
        en: 'Heat, sandstorms and roaming raiders.',
        fr: 'Chaleur, tempêtes de sable et raiders errants.',
        de: 'Hitze, Sandstürme und umherziehende Plünderer.',
        es: 'Calor, tormentas de arena y saqueadores errantes.',
        it: 'Caldo, tempeste di sabbia e razziatori vaganti.',
      },
    },
    {
      name: { en: 'The Volcano', fr: 'Le Volcan', de: 'Der Vulkan', es: 'El Volcán', it: 'Il Vulcano' },
      image: 'screens/volcano-poi.png',
      desc: {
        en: 'A smoldering peak where fire meets stone. The Phoenix is reborn in its crater and a colossal tendril tears from its heart.',
        fr: 'Un pic fumant où le feu rencontre la pierre. Le Phénix renaît dans son cratère et un tendacle colossal déchire son cœur.',
        de: 'Ein glossender Gipfel, wo Feuer auf Stein trifft. Der Phönix wird im Krater wiedergeboren und ein kolossaler Tentakel reißt aus seinem Herzen.',
        es: 'Un pico humeante donde el fuego encuentra la piedra. El Fénix renace en su cráter y un tentáculo colosal se desgarra en su corazón.',
        it: 'Un picco fumante dove il fuoco incontra la pietra. La Fenice rinasce nel cratere e un tentacolo colossale si squarcia nel suo cuore.',
      },
      threats: {
        en: 'The Phoenix, the Volcano Tendril and rivers of magma.',
        fr: 'Le Phénix, le Tentacule Volcanique et des rivières de magma.',
        de: 'Der Phönix, der Vulkan-Tentakel und Magmaströme.',
        es: 'El Fénix, el Tentáculo Volcánico y ríos de magma.',
        it: 'La Fenice, il Tentacolo Vulcanico e fiumi di magma.',
      },
    },
    {
      name: { en: 'Dungeons & Lairs', fr: 'Donjons & Repaires', de: 'Dungeons & Lair', es: 'Mazmorras y Guaridas', it: 'Dungeon e Covi' },
      image: 'screens/dungeon.jpg',
      desc: {
        en: 'Beneath the world lie trap-laden dungeons and the hidden lairs of brutal bosses like the Cyclops and Pyzifax. Loot and puzzles await the bold.',
        fr: 'Sous le monde gisent des donjons piégés et les repaires cachés de boss brutaux comme le Cyclope et Pyzifax. Butin et énigmes attendent les audacieux.',
        de: 'Unter der Welt liegen fallengespickte Dungeons und die versteckten Lair brutaler Bosse wie Zyklop und Pyzifax. Beute und Rätsel warten auf die Mutigen.',
        es: 'Bajo el mundo yacen mazmorras llenas de trampas y las guaridas ocultas de jefes brutales como el Cíclope y Pyzifax. Botín y acertijos aguardan a los audaces.',
        it: 'Sotto il mondo giacciono dungeon trapoletti e i covi nascosti di boss brutali come Ciclope e Pyzifax. Bottino ed enigmi attendono i coraggiosi.',
      },
      threats: {
        en: 'Bosses, traps and tough enemies in the dark.',
        fr: 'Boss, pièges et ennemis coriaces dans l’obscurité.',
        de: 'Bosse, Fallen und harte Feinde in der Dunkelheit.',
        es: 'Jefes, trampas y enemigos duros en la oscuridad.',
        it: 'Boss, trappole e nemici duri nel buio.',
      },
    },
  ] as { name: L10n<string>; desc: L10n<string>; image?: string; threats?: L10n<string> }[],
};
