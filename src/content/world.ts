import type { L10n } from '../i18n/utils';

export const WORLD = {
  intro: {
    en: 'When the Republic collapsed, you were named Magister Limitum — governor of the frontier. Your charge: carve a Rome from the wild Valcra valley, beyond the Rhine.',
    fr: 'Quand la République s’est effondrée, vous avez été nommé Magister Limitum — gouverneur de la frontière. Votre charge : tailler une Rome dans la vallée sauvage de Valcra, au-delà du Rhin.',
    de: 'Als die Republik fiel, wurdet Ihr zum Magister Limitum ernannt — Gouverneur der Grenze. Euer Auftrag: meißelt ein Rom aus dem wilden Valcra-Tal jenseits des Rheins.',
    es: 'Cuando la República colapsó, fuiste nombrado Magister Limitum — gobernador de la frontera. Tu cargo: esculpir una Roma en el valle salvaje de Valcra, más allá del Rin.',
    it: 'Quando la Repubblica crollò, fosti nominato Magister Limitum — governatore del confine. Il tuo compito: scolpire una Roma dalla selvaggia valle di Valcra, oltre il Reno.',
  },
  regions: [
    {
      name: { en: 'The Stead' },
      desc: {
        en: 'Your fortress heartland. Every building unlocks from the Principia here.',
        fr: 'Votre cœur de forteresse. Chaque bâtiment se débloque depuis la Principia ici.',
        de: 'Euer Festungs-Herzland. Jedes Gebäude schaltet hier von der Principia frei.',
        es: 'Tu corazón de fortaleza. Cada edificio se desbloquea desde la Principia aquí.',
        it: 'Il cuore della tua fortezza. Ogni edificio si sblocca dalla Principia qui.',
      },
    },
    {
      name: { en: 'The Verge' },
      desc: {
        en: 'Fog-wrapped farmland. Crops feed the buffer that powers all training.',
        fr: 'Terres cultivables enveloppées de brouillard. Les récoltes alimentent le buffer qui alimente tout l’entraînement.',
        de: 'Nebelumhülltes Ackerland. Ernten füllen den Puffer, der alles Training antreibt.',
        es: 'Tierras de cultivo envueltas en niebla. Las cosechas alimentan la reserva que impulsa todo el entrenamiento.',
        it: 'Terreni coltivabili avvolti dalla nebbia. I raccolti alimentano il buffer che alimenta ogni addestramento.',
      },
    },
    {
      name: { en: 'The Greywood' },
      desc: {
        en: 'A beast-haunted forest. Tame hounds and stags at its edge.',
        fr: 'Une forêt hantée par les bêtes. Apprivoisez des hounds et des stags à sa lisière.',
        de: 'Ein von Bestien heimgesuchter Wald. Zähmt Hounds und Stags an seinem Rand.',
        es: 'Un bosque infestado de bestias. Domestica hounds y stags en su borde.',
        it: 'Una foresta infestata dalle bestie. Addomestica hounds e stags al suo limite.',
      },
    },
    {
      name: { en: 'Frostmarch / Ember Steppe / Saltreach' },
      desc: {
        en: 'The three enemy heartlands you will eventually raid.',
        fr: 'Les trois cœurs ennemis que vous raidrez éventuellement.',
        de: 'Die drei feindlichen Herzlande, die ihr schließlich raidet.',
        es: 'Los tres corazones enemigos que eventualmente incursionarás.',
        it: 'I tre cuori nemici che raiderai alla fine.',
      },
    },
  ] as { name: L10n<string>; desc: L10n<string> }[],
  factions: [
    {
      name: { en: 'Frost Confederacy' },
      element: 'Ice (Veyn)',
      counter: {
        en: 'Counter with Light cavalry (Maximus); their slow is ignored by light charge.',
        fr: 'Contrez avec de la cavalerie Lumière (Maximus) ; leur lent est ignoré par la charge lumière.',
        de: 'Kontert mit Licht-Kavallerie (Maximus); ihre Verlangsamung wird von Licht-Aufladung ignoriert.',
        es: 'Contra con caballería de Luz (Maximus); su lentitud es ignorada por la carga de luz.',
        it: 'Contra con cavalleria di Luce (Maximus); la loro lentezza è ignorata dalla carica di luce.',
      },
    },
    {
      name: { en: 'Ember Khanate' },
      element: 'Fire',
      counter: {
        en: 'Counter with Earth infantry (Titus/Aurelia); earth resists burn.',
        fr: 'Contrez avec de l’infanterie Terre (Titus/Aurelia) ; la terre résiste aux brûlures.',
        de: 'Kontert mit Erd-Infanterie (Titus/Aurelia); Erde widersteht Brennen.',
        es: 'Contra con infantería de Tierra (Titus/Aurelia); la tierra resiste las quemaduras.',
        it: 'Contra con fanteria di Terra (Titus/Aurelia); la terra resiste alle bruciature.',
      },
    },
    {
      name: { en: 'Salt-Born' },
      element: 'Water',
      counter: {
        en: 'Counter with Wind marksmen (Cornelia); wind disperses their tides.',
        fr: 'Contrez avec des tireurs d’élite Vent (Cornelia) ; le vent disperse leurs marées.',
        de: 'Kontert mit Wind-Schützen (Cornelia); Wind verweht ihre Fluten.',
        es: 'Contra con francotiradores de Viento (Cornelia); el viento dispersa sus mareas.',
        it: 'Contra con cecchini di Vento (Cornelia); il vento disperde le loro maree.',
      },
    },
    {
      name: { en: 'Rival Magistrates' },
      element: 'Mixed',
      counter: {
        en: 'PvP — scout their lead march, then hard-counter the element.',
        fr: 'PvP — scout leur marche de tête, puis hard-counter l’élément.',
        de: 'PvP — kundschaftet ihren Führungsmarsch aus, dann hard-countert das Element.',
        es: 'PvP — explora su marcha principal, luego hard-counter al elemento.',
        it: 'PvP — esplora la loro marcia di testa, poi hard-countera l’elemento.',
      },
    },
  ] as { name: L10n<string>; element: string; counter: L10n<string> }[],
};
