import type { L10n } from '../i18n/utils';

export interface FaqItem {
  id: string;
  q: L10n<string>;
  a: L10n<string>;
}

export const FAQ: FaqItem[] = [
  {
    id: 'what-is',
    q: {
      en: 'What is Romestead?',
      fr: 'Qu’est-ce que Romestead ?',
      de: 'Was ist Romestead?',
      es: '¿Qué es Romestead?',
      it: 'Cos’è Romestead?',
    },
    a: {
      en: 'A 2D survival town-builder from Beartwigs and Three Friends. Rome has fallen to a zombie plague and you rebuild it from the ground up — fight the husks, raise towns and earn the favor of the Roman gods. Supports 1–8 players in co-op.',
      fr: 'Un city-builder de survie 2D de Beartwigs et Three Friends. Rome est tombée sous une peste zombie et vous la rebâtissez — combattez les Déchus, élevez des villes et gagnez la faveur des dieux romains. De 1 à 8 joueurs en co-op.',
      de: 'Ein 2D-Überlebens-Stadtbauer von Beartwigs und Three Friends. Rom fiel einer Zombie-Seuche zum Opfer und du baust es neu auf — bekämpfe die Hüllen, errichte Städte und erringe die Gunst der römischen Götter. 1–8 Spieler im Ko-op.',
      es: 'Un city-builder de supervivencia 2D de Beartwigs y Three Friends. Roma cayó por una plaga zombie y la reconstruyes — combate los Caídos, levanta pueblos y gana el favor de los dioses romanos. De 1 a 8 jugadores en co-op.',
      it: 'Un city-builder di sopravvivenza 2D di Beartwigs e Three Friends. Roma è caduta per una piaga zombie e la ricostruisci — combatti i Caduti, erigi città e ottieni il favore degli dèi romani. Da 1 a 8 giocatori in co-op.',
    },
  },
  {
    id: 'platforms',
    q: {
      en: 'What platforms is it on?',
      fr: 'Sur quelles plateformes ?',
      de: 'Auf welchen Plattformen?',
      es: '¿En qué plataformas?',
      it: 'Su quali piattaforme?',
    },
    a: {
      en: 'PC via Steam Early Access (launched May 26, 2026, $13.99). No consoles or Mac build yet.',
      fr: 'PC via Steam Early Access (lançement le 26 mai 2026, 13,99 $). Pas encore de console ni de Mac.',
      de: 'PC über Steam Early Access (Start 26. Mai 2026, 13,99 $). Noch keine Konsole oder Mac.',
      es: 'PC por Steam Early Access (lanzamiento 26 may 2026, 13,99 $). Aún sin consolas ni Mac.',
      it: 'PC via Steam Early Access (dal 26 maggio 2026, 13,99 $). Niente console o Mac per ora.',
    },
  },
  {
    id: 'progression',
    q: {
      en: 'How does progression work?',
      fr: 'Comment fonctionne la progression ?',
      de: 'Wie funktioniert der Fortschritt?',
      es: '¿Cómo funciona la progresión?',
      it: 'Come funziona la progressione?',
    },
    a: {
      en: 'Your Altar is the main progression gate. Offer items to the gods to earn Worship Points and permanent buffs. The first hard gate is the Guardian of Minerva — a giant owl; defeat it to unlock new crafting.',
      fr: 'L’Autel est la porte de progression. Offrez des objets aux dieux pour gagner des Points de Culte et des buffs permanents. La première porte dure est le Gardien de Minerve — une chouette géante ; vainquez-la pour débloquer l’artisanat.',
      de: 'Dein Altar ist das Haupt-Tor. Biete den Göttern Gegenstände an, um Kult-Punkte und dauerhafte Buffs zu erhalten. Das erste harte Tor ist der Wächter der Minerva — eine Rieseneule; besiege sie, um das Basteln freizuschalten.',
      es: 'El Altar es la puerta principal. Ofrece objetos a los dioses para ganar Puntos de Culto y buffs permanentes. La primera puerta dura es el Guardián de Minerva — una lechuza gigante; véncela para desbloquear la elaboración.',
      it: 'L’Altare è la porta principale. Offri oggetti agli dèi per ottenere Punti di Culto e buff permanenti. La prima porta dura è la Guardiana di Minerva — un gufo gigante; sconfiggila per sbloccare la lavorazione.',
    },
  },
  {
    id: 'solo',
    q: {
      en: 'Can I play solo?',
      fr: 'Puis-je jouer seul ?',
      de: 'Kann ich allein spielen?',
      es: '¿Puedo jugar en solitario?',
      it: 'Posso giocare da solo?',
    },
    a: {
      en: 'Yes. Solo is punishing if your gear falls behind — work through the armor tiers (Leather → Copper → Bronze/Iron) and aim for legendary gear, which is close to mandatory for the Volcano biome. In co-op, SaveSync lets any player take over as host when the original host is offline.',
      fr: 'Oui. Le solo punit si l’équipement traîne — montez les tiers (Cuir → Cuivre → Bronze/Fer) et visez le légendaire, quasi obligatoire au Volcan. En co-op, SaveSync permet à chacun de devenir hôte hors ligne.',
      de: 'Ja. Solo bestraft dich bei schwacher Ausrüstung — steige durch die Rüstungsstufen (Leder → Kupfer → Bronze/Eisen) und ziele auf legendär, am Vulkan fast Pflicht. Im Ko-op lässt SaveSync jeden als Host übernehmen, wenn der Ursprungs-Host offline ist.',
      es: 'Sí. El solo castiga si el equipo falla — sube los tiers (Cuero → Cobre → Bronce/Hierro) y apunta a legendario, casi obligatorio en el Volcán. En co-op, SaveSync deja a cualquiera ser anfitrión si el original está desconectado.',
      it: 'Sì. Il solo punisce se l’armatura arranca — sali di livello (Cuoio → Rame → Bronzo/Ferro) e punta al leggendario, quasi obbligatorio al Vulcano. In co-op, SaveSync fa diventare chiunque host se l’originale è offline.',
    },
  },
  {
    id: 'biomes',
    q: {
      en: 'What are the biomes?',
      fr: 'Quels sont les biomes ?',
      de: 'Welche Biome gibt es?',
      es: '¿Cuáles son los biomas?',
      it: 'Quali sono i biomi?',
    },
    a: {
      en: 'Every world has the same five biomes in roughly rising difficulty: Plains (your start), Forest, Desert, Volcano (the current Early Access endgame) and the Swamp, which arrives after Early Access.',
      fr: 'Chaque monde a les mêmes cinq biomes, difficulté croissante : Plaines (départ), Forêts, Désert, Volcan (fin de l’EA) et le Marécage, prévu après l’EA.',
      de: 'Jede Welt hat dieselben fünf Biome, steigende Schwierigkeit: Ebenen (Start), Wald, Wüste, Vulkan (EA-Endgame) und den Sumpf nach dem EA.',
      es: 'Cada mundo tiene los mismos cinco biomas en dificultad creciente: Llanuras (inicio), Bosques, Desierto, Volcán (final del EA) y el Pantano, tras el EA.',
      it: 'Ogni mondo ha gli stessi cinque biomi in difficoltà crescente: Pianure (inizio), Foreste, Deserto, Vulcano (endgame dell’EA) e la Palude, prevista dopo l’EA.',
    },
  },
  {
    id: 'carry',
    q: {
      en: 'Why is there no inventory?',
      fr: 'Pourquoi n’y a-t-il pas d’inventaire ?',
      de: 'Warum gibt es kein Inventar?',
      es: '¿Por qué no hay inventario?',
      it: 'Perché non c’è inventario?',
    },
    a: {
      en: 'Romestead’s signature twist is physicalized resources: you pick up rocks and lumber by hand and even throw them at enemies. It feels awkward for the first hour, then becomes second nature — and doubles as a combat tool.',
      fr: 'La touche signature de Romestead : ressources physiques. Vous portez pierres et bois à la main, et les lancez même sur les ennemis. Awkward la première heure, puis naturel — et utile au combat.',
      de: 'Romesteads Markenzeichen sind physische Ressourcen: Du trägst Steine und Holz von Hand und wirfst sie sogar auf Feinde. Awkward in der ersten Stunde, dann Selbstverständlich — und eine Kampfhilfe.',
      es: 'El giro de Romestead son los recursos físicos: llevas piedras y madera a mano y las lanzas a los enemigos. Raro la primera hora, luego natural — y útil en combate.',
      it: 'La caratteristica di Romestead sono le risorse fisiche: trasporti pietre e legna a mano e le lanci persino ai nemici. Strano la prima ora, poi naturale — e utile in combattimento.',
    },
  },
];
