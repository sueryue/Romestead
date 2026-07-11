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
      en: 'Beginner’s Guide to Romestead (2026)',
      fr: 'Guide de débutant pour Romestead (2026)',
      de: 'Anfänger-Guide für Romestead (2026)',
      es: 'Guía para principiantes de Romestead (2026)',
      it: 'Guida per principianti di Romestead (2026)',
    },
    description: {
      en: 'Seven days to a standing stead — where to build, whom to recruit, and the mistakes that erase new governors.',
      fr: 'Sept jours pour bâtir une stronghold — où construire, qui recruter et les erreurs qui perdent les nouveaux gouverneurs.',
      de: 'Sieben Tage bis zur stehenden Festung — wo bauen, wen rekrutieren und welche Fehler neue Gouverneure das Leben kosten.',
      es: 'Siete días para levantar una stead — dónde construir, a quién reclutar y los errores que borran a los gobernadores nuevos.',
      it: 'Sette giorni per erigere una stead — dove costruire, chi reclutare e gli errori che cancellano i nuovi governatori.',
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
      ],
      fr: [
        {
          h: 'Jour 1 — Revendiquez la Stead',
          p: [
            'Débarquez à The Stead et élevez la Principia en premier ; elle débloque tous les autres bâtiments et fixe votre plafond quotidien de points de commandement.',
            'Dépensez vos 200 premières pierres dans la Grange, pas dans le mur. Une garnison nourrie tient plus longtemps qu’une garnison jolie.',
          ],
        },
        {
          h: 'Jours 2–3 — Sécurisez la Verge',
          p: [
            'Envoyez des éclaireurs dans The Verge à la recherche de terres cultivables. Les récoltes alimentent le buffer de nourriture qui alimente tout l’entraînement.',
            'Recrutez un commandant d’infanterie (Titus ou Lucia) avant toute cavalerie — l’infanterie tient la ligne pendant que vous apprenez.',
          ],
        },
        {
          h: 'Jours 4–5 — Première bête',
          p: [
            'Apprivoisez un Verge Hound depuis la lisière de The Greywood. Il explore le brouillard plus vite que n’importe quel héros et survit aux embuscades.',
            'N’investissez pas trop dans une seule bête ; la raid de la Verge Wyrm exigera un pack équilibré.',
          ],
        },
        {
          h: 'Jours 6–7 — La Border Raid',
          p: [
            'Rejoignez un rally de border raid. Même une marche de soutien vous rapporte des éclats de Veyn, utilisés pour le premier tirage S-tier.',
            'Économisez vos gemmes pour la bannière des Founders, pas pour les boosts horaires. La patience compose.',
          ],
        },
      ],
      de: [
        {
          h: 'Tag 1 — Ergreift die Stead',
          p: [
            'Landet in The Stead und errichtet zuerst die Principia; sie schaltet alle anderen Gebäude frei und legt euer tägliches Limit an Befehlspunkten fest.',
            'Gibt eure ersten 200 Stein in die Speicher (Granary), nicht in die Mauer aus. Eine versorgte Garnison hält länger als eine hübsche.',
          ],
        },
        {
          h: 'Tag 2–3 — Sichert die Verge',
          p: [
            'Schickt Kundschafter in The Verge auf der Suche nach Ackerland. Ernten füllen den Nahrungspuffer, der alles Training antreibt.',
            'Rekrutiert einen Infanterie-Kommandanten (Titus oder Lucia), bevor ihr Kavallerie nehmt — die Infanterie hält die Linie, während ihr lernt.',
          ],
        },
        {
          h: 'Tag 4–5 — Erste Bestie',
          p: [
            'Zähmt einen Verge Hound am Rand von The Greywood. Er erkundet Nebel schneller als jeder Held und überlebt Hinterhalte.',
            'Investiert nicht zu viel in eine einzelne Bestie; der Verge-Wyrm-Raid verlangt ein ausgewogenes Rudel.',
          ],
        },
        {
          h: 'Tag 6–7 — Die Border Raid',
          p: [
            'Schließt euch einem Grenzraid-Rally an. Selbst ein Unterstützungsmarsch bringt euch Veyn-Scherben, die für den ersten S-Tier-Zug genutzt werden.',
            'Spart Edelsteine für das Founders-Banner, nicht für stündliche Beschleunigungen. Geduld zahlt sich aus.',
          ],
        },
      ],
      es: [
        {
          h: 'Día 1 — Reclama la Stead',
          p: [
            'Llega a The Stead y levanta la Principia primero; desbloquea todos los demás edificios y fija tu tope diario de puntos de mando.',
            'Gasta tus primeras 200 piedras en el Granero, no en el muro. Una guarnición bien alimentada aguanta más que una bonita.',
          ],
        },
        {
          h: 'Día 2–3 — Asegura la Verge',
          p: [
            'Envía exploradores a The Verge en busca de tierras de cultivo. Las cosechas alimentan la reserva de comida que impulsa todo el entrenamiento.',
            'Recluta un comandante de infantería (Titus o Lucia) antes que ninguna caballería — la infantería sostiene la línea mientras aprendes.',
          ],
        },
        {
          h: 'Día 4–5 — Primera bestia',
          p: [
            'Domesticar un Verge Hound desde el borde de The Greywood. Explora la niebla más rápido que cualquier héroe y sobrevive a las emboscadas.',
            'No inviertas demasiado en una sola bestia; la incursión de la Verge Wyrm exigirá una piara equilibrada.',
          ],
        },
        {
          h: 'Día 6–7 — La Border Raid',
          p: [
            'Únete a un rally de incursión fronteriza. Incluso una marcha de apoyo te da esquirlas de Veyn, útiles para el primer gachapon S-tier.',
            'Ahorra gemas para el estandarte de los Founders, no para aceleraciones por hora. La paciencia compone.',
          ],
        },
      ],
      it: [
        {
          h: 'Giorno 1 — Rivendica la Stead',
          p: [
            'Approda a The Stead e innalza prima la Principia; sblocca tutti gli altri edifici e fissa il tuo limite giornaliero di punti comando.',
            'Spendi le prime 200 pietre nel Granaio, non nel muro. Una guarnigione sfamata resiste più a lungo di una bella.',
          ],
        },
        {
          h: 'Giorni 2–3 — Metti in sicurezza la Verge',
          p: [
            'Manda esploratori in The Verge alla ricerca di terreni coltivabili. I raccolti alimentano il buffer di cibo che alimenta ogni addestramento.',
            'Recluta un comandante di fanteria (Titus o Lucia) prima di qualsiasi cavalleria — la fanteria regge la linea mentre impari.',
          ],
        },
        {
          h: 'Giorni 4–5 — Prima bestia',
          p: [
            'Addomestica un Verge Hound dal limite di The Greywood. Esplora la nebbia più velocemente di qualsiasi eroe e sopravvive alle imboscate.',
            'Non investire troppo in una singola bestia; la raid della Verge Wyrm richiederà un branco bilanciato.',
          ],
        },
        {
          h: 'Giorni 6–7 — La Border Raid',
          p: [
            'Unisciti a un rally di incursione di confine. Anche una marcia di supporto ti frutta frammenti di Veyn, utili per la prima estrazione S-tier.',
            'Risparmia le gemme per il vessillo dei Founders, non per i bonus orari. La pazienza dà i suoi frutti.',
          ],
        },
      ],
    },
  },
  {
    slug: 'hero-tier-list',
    category: 'tier',
    updated: '2026-07-01',
    title: {
      en: 'Hero Tier List (2026)',
      fr: 'Classement des héros (2026)',
      de: 'Helden-Tier-Liste (2026)',
      es: 'Ranking de héroes (2026)',
      it: 'Tier list degli eroi (2026)',
    },
    description: {
      en: 'Every commander ranked S–D with element, role and the pairing that unlocks their kit.',
      fr: 'Chaque commandant classé S–D avec élément, rôle et le duo qui débloque son kit.',
      de: 'Jeder Kommandant von S–D eingestuft, mit Element, Rolle und der Kombination, die sein Kit freischaltet.',
      es: 'Cada comandante rankeado S–D con elemento, rol y la combinación que desbloquea su kit.',
      it: 'Ogni comandante classificato da S a D con elemento, ruolo e l’abbinamento che sblocca il suo kit.',
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
      ],
      fr: [
        {
          h: 'Tier S',
          p: [
            'Aurelia (Infanterie, Lumière) — l’ancre de toute ligne de front ; son mur de boucliers scale avec la taille de la garnison.',
            'Drusus (Cavalerie, Feu) — meilleur meneur de rally pour les border raids ; se marie avec Octavia pour empiler les brûlures.',
            'Octavia (Tireuse d’élite, Ombre) — bouton supprimer à cible unique ; la plus faible contre les formations étalées.',
          ],
        },
        {
          h: 'Tier A',
          p: [
            'Titus (Infanterie, Terre) — Aurelia low-cost, excellent en early game et tanque de boss de faction.',
            'Cornelia (Tireuse d’élite, Vent) — clear AoE pour les chasses de bêtes ; dépasse Octavia sur le contenu swarm.',
            'Maximus (Cavalerie, Lumière) — flanqueur durable qui hard-counter la cavalerie de la Frost Confederacy.',
          ],
        },
      ],
      de: [
        {
          h: 'Tier S',
          p: [
            'Aurelia (Infanterie, Licht) — der Anker jeder Frontlinie; ihre Schildmauer skaliert mit der Garnisonsgröße.',
            'Drusus (Kavallerie, Feuer) — bester Rally-Anführer für Grenzraids; kombiniert mit Octavia für Brennstapel.',
            'Octavia (Schützin, Schatten) — Löschtaste für Einzelziele; am schwächsten gegen verteilte Formationen.',
          ],
        },
        {
          h: 'Tier A',
          p: [
            'Titus (Infanterie, Erde) — günstige Aurelia, exzellent im frühen Spiel und als Fraktionsboss-Tank.',
            'Cornelia (Schützin, Wind) — AoE-Säuberung für Bestienjagden; schlägt Octavia bei Schwarm-Inhalten.',
            'Maximus (Kavallerie, Licht) — robuster Flanker, der die Kavallerie der Frost Confederacy hart kontert.',
          ],
        },
      ],
      es: [
        {
          h: 'Tier S',
          p: [
            'Aurelia (Infantería, Luz) — el ancla de cualquier línea frontal; su muro de escudos escala con el tamaño de la guarnición.',
            'Drusus (Caballería, Fuego) — el mejor líder de rally para incursiones fronterizas; combina con Octavia para apilar quemaduras.',
            'Octavia (Francotiradora, Sombra) — botón de borrar de objetivo único; la más débil contra formaciones dispersas.',
          ],
        },
        {
          h: 'Tier A',
          p: [
            'Titus (Infantería, Tierra) — Aurelia de presupuesto, excelente en early game y tanque de jefe de facción.',
            'Cornelia (Francotiradora, Viento) — limpieza AoE para cacerías de bestias; supera a Octavia en contenido swarm.',
            'Maximus (Caballería, Luz) — flanqueador resistente que hace hard-counter a la caballería de la Frost Confederacy.',
          ],
        },
      ],
      it: [
        {
          h: 'Tier S',
          p: [
            'Aurelia (Fanteria, Luce) — l’ancora di ogni linea del fronte; la sua barriera di scudi scala con la dimensione della guarnigione.',
            'Drusus (Cavalleria, Fuoco) — il miglior leader di rally per le incursioni di confine; si abbina a Octavia per impilare bruciature.',
            'Octavia (Cecchina, Ombra) — pulsante di eliminazione a bersaglio singolo; la più debole contro le formazioni sparse.',
          ],
        },
        {
          h: 'Tier A',
          p: [
            'Titus (Fanteria, Terra) — l’Aurelia economica, eccellente nelle fasi iniziali e come tank contro i boss di fazione.',
            'Cornelia (Cecchina, Vento) — pulizia AoE per le cacce alle bestie; batte Octavia sui contenuti swarm.',
            'Maximus (Cavalleria, Luce) — incursore resistente che hard-countera la cavalleria della Frost Confederacy.',
          ],
        },
      ],
    },
  },
  {
    slug: 'beast-tier-list',
    category: 'tier',
    updated: '2026-06-28',
    title: {
      en: 'Beast Partners Tier List (2026)',
      fr: 'Classement des partenaires bêtes (2026)',
      de: 'Tier-Liste der Bestien-Partner (2026)',
      es: 'Ranking de bestias compañeras (2026)',
      it: 'Tier list dei compagni bestia (2026)',
    },
    description: {
      en: 'From the Verge Hound to the Verge Wyrm — which beast to invest in and why.',
      fr: 'Du Verge Hound à la Verge Wyrm — quelle bête investir et pourquoi.',
      de: 'Vom Verge Hound bis zur Verge Wyrm — in welche Bestie ihr investieren solltet und warum.',
      es: 'Del Verge Hound a la Verge Wyrm — qué bestia invertir y por qué.',
      it: 'Dal Verge Hound alla Verge Wyrm — in quale bestia investire e perché.',
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
      ],
      fr: [
        {
          h: 'Meilleurs choix',
          p: [
            'Verge Hound — vitesse de scout imbattable et survie en embuscade ; chaque compte en veut un.',
            'Greywood Stag — aura de soin qui transforme les raids d’usure en victoires gratuites.',
            'Verge Wyrm — le raid boss lui-même, apprivoisable en late game pour un AoE plein écran.',
          ],
        },
      ],
      de: [
        {
          h: 'Top-Wahl',
          p: [
            'Verge Hound — unübertroffene Spähergeschwindigkeit und Hinterhalt-Überleben; jeder Account will einen.',
            'Greywood Stag — Heil-Aura, die Abnutzungsraids in Gratis-Siege verwandelt.',
            'Verge Wyrm — der Raid-Boss selbst, spät im Spiel zähmbar für ein bildschirmweites AoE.',
          ],
        },
      ],
      es: [
        {
          h: 'Mejores elecciones',
          p: [
            'Verge Hound — velocidad de exploración inigualable y supervivencia en emboscadas; toda cuenta quiere uno.',
            'Greywood Stag — aura de sanación que convierte las incursiones de desgaste en victorias gratis.',
            'Verge Wyrm — el jefe de la raid en sí, domesticable a final de partida para un AoE a pantalla completa.',
          ],
        },
      ],
      it: [
        {
          h: 'Scelte top',
          p: [
            'Verge Hound — velocità di esplorazione ineguagliabile e sopravvivenza alle imboscate; ogni account ne vuole uno.',
            'Greywood Stag — aura curativa che trasforma le raid di logoramento in vittorie gratuite.',
            'Verge Wyrm — il raid boss stesso, addomesticabile nel late game per un AoE su tutto lo schermo.',
          ],
        },
      ],
    },
  },
  {
    slug: 'border-raid-event',
    category: 'event',
    updated: '2026-07-05',
    title: {
      en: 'Border Raid: Maximize Your Damage (2026)',
      fr: 'Border Raid : maximiser vos dégâts (2026)',
      de: 'Border Raid: Maximiere deinen Schaden (2026)',
      es: 'Border Raid: maximiza tu daño (2026)',
      it: 'Border Raid: massimizza i tuoi danni (2026)',
    },
    description: {
      en: 'The math behind rally damage, trap timing and the beast pack that tops the leaderboard.',
      fr: 'Les maths derrière les dégâts de rally, le timing du trap et le pack de bêtes qui domine le leaderboard.',
      de: 'Die Mathematik hinter Rally-Schaden, Fallen-Timing und dem Bestien-Rudel, das die Bestenliste anführt.',
      es: 'Las matemáticas tras el daño del rally, el timing de la trampa y la piara de bestias que lidera la tabla.',
      it: 'La matematica dietro il danno del rally, il tempismo della trappola e il branco di bestie che guida la classifica.',
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
      ],
      fr: [
        {
          h: 'Timing du rally',
          p: [
            'Lancez le rally exactement quand le Bear Trap est posé ; la fenêtre de bonus dure 8 secondes.',
            'Empilez Drusus + Octavia dans la marche de tête — brûlure puis exécution scale avec les PV restants.',
          ],
        },
        {
          h: 'Pack de bêtes',
          p: [
            'Un Greywood Stag pour le sustain, deux Verge Hounds pour scout le spawn, et votre plus fort Wyrm pour le nuke.',
          ],
        },
      ],
      de: [
        {
          h: 'Rally-Timing',
          p: [
            'Startet das Rally genau, wenn die Bear Trap platziert wird; das Bonusfenster beträgt 8 Sekunden.',
            'Stapelt Drusus + Octavia im Führungsmarsch — Brennen, dann Execute skaliert mit verbleibendem HP.',
          ],
        },
        {
          h: 'Bestien-Rudel',
          p: [
            'Ein Greywood Stag für Sustain, zwei Verge Hounds zum Erkunden des Spawns und euer stärkster Wyrm für den Nuke.',
          ],
        },
      ],
      es: [
        {
          h: 'Timing del rally',
          p: [
            'Lanza el rally justo cuando se coloca el Bear Trap; la ventana de bonificación son 8 segundos.',
            'Apila Drusus + Octavia en la marcha principal — quemadura y luego ejecución escalan con el HP restante.',
          ],
        },
        {
          h: 'Piara de bestias',
          p: [
            'Un Greywood Stag para el sustain, dos Verge Hounds para explorar el spawn y tu Wyrm más fuerte para el nuke.',
          ],
        },
      ],
      it: [
        {
          h: 'Tempismo del rally',
          p: [
            'Lancia il rally esattamente quando viene piazzata la Bear Trap; la finestra bonus dura 8 secondi.',
            'Impila Drusus + Octavia nella marcia di testa — bruciatura poi esecuzione scala con gli HP rimanenti.',
          ],
        },
        {
          h: 'Branco di bestie',
          p: [
            'Un Greywood Stag per il sustain, due Verge Hounds per esplorare lo spawn e il tuo Wyrm più forte per il nuke.',
          ],
        },
      ],
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function guidesByLocale(locale: Locale): Guide[] {
  return GUIDES;
}
