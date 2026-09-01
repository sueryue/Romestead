// One-off: backfill answer / quickFacts / drops into guides.ts (spec §6 rules).
// - answer: 5 languages (player-facing prose)
// - quickFacts / drops: English only (game-data strings; pick() falls back to en),
//   matching the existing guardian-minerva backfill style.
// - No fabricated numbers: only facts already present in the guide bodies.
import fs from 'node:fs';

const path = 'C:/Users/Administrator/WorkBuddy/Claw/romestead-astro/src/content/guides.ts';
const raw = fs.readFileSync(path, 'utf8');
const lines = raw.split('\n');

// ---------------------------------------------------------------------------
// Backfill data (all facts extracted from the existing guide bodies)
// ---------------------------------------------------------------------------
const DATA = {
  'survive-night': {
    // answer exists (en) — append 4 translations
    answerAppend: {
      fr: 'Forgez une torche avant le crépuscule et gardez un cercle de feu autour du camp — torches et braseros repoussent les Déchus, et une simple palissade canalise la horde vers des points de blocage.',
      de: 'Schmiedet vor der Dämmerung eine Fackel und haltet einen Feuerring ums Lager — Fackeln und Feuerschalen drängen die Gefallenen zurück, und ein einfacher Palisadenzaun lenkt die Horde in Engpässe.',
      es: 'Forja una antorcha antes del anochecer y mantén un anillo de fuego alrededor del campamento — antorchas y braseros repelen a los Caídos, y una empalizada simple canaliza la horda hacia puntos de estrangulamiento.',
      it: 'Forgia una torcia prima del crepuscolo e mantieni un cerchio di fuoco attorno all’accampamento — torce e bracieri respingono i Caduti, e una semplice palizzata incanala l’orda nei punti di strozzatura.',
    },
    quickFacts: {
      location: 'Plains — wherever you spawn',
      prereq: 'None — your first day',
    },
  },
  'guardian-minerva': {
    // fully backfilled already — only append 4 answer translations
    answerAppend: {
      fr: 'Entourez le nid de pièges à charbon et marchez en cercle — les pièges brûlent la chouette pendant que vous esquivez son plongeon et sa foudre.',
      de: 'Umkranzt das Nest mit Kohlefallen und lauft im Kreis — die Fallen verbrennen die Eule, während ihr ihrem Sturzflug und Blitz ausweicht.',
      es: 'Rodea el nido con trampas de carbón y camina en círculos — las trampas queman al búho mientras esquivas su picado y su rayo.',
      it: 'Circonda il nido con trappole di carbone e cammina in cerchio — le trappole bruciano il gufo mentre schivi il suo tuffo e il suo fulmine.',
    },
  },
  'build-town': {
    answer: {
      en: 'Stand up a Blacksmith, Leatherworker and Farmstead first, recruit citizens for their recipes, and keep everyone fed and housed — a starving town collapses.',
      fr: 'Montez d’abord un Forgeron, un Travailleur du cuir et une Ferme, recrutez des citoyens pour leurs recettes et gardez tout le monde nourri et logé — une ville affamée s’effondre.',
      de: 'Errichte zuerst Schmied, Gerber und Farm, rekrutiere Bürger für ihre Rezepte und halte alle satt und untergebracht — eine hungernde Stadt bricht zusammen.',
      es: 'Monta primero un Herrero, un Trabajador del cuero y una Granja, recluta ciudadanos por sus recetas y mantén a todos alimentados y con techo — una ciudad hambrienta colapsa.',
      it: 'Costruisci prima Fabbro, Conciatore e Fattoria, recluta cittadini per le loro ricette e tieni tutti nutriti e alloggiati — una città affamata collassa.',
    },
    quickFacts: {
      location: 'Any spot with clay and water',
      prereq: 'Housing slots for new citizens',
    },
  },
  'haul-throw': {
    answer: {
      en: 'There is no inventory — walk up to resources, carry them by hand, and throw stones or lumber to stagger enemies or block paths.',
      fr: 'Pas d’inventaire — approchez-vous des ressources, portez-les à la main et lancez pierres ou bois pour étourrir les ennemis ou bloquer les chemins.',
      de: 'Kein Inventar — geh zu Ressourcen, trag sie von Hand und wirf Steine oder Holz, um Feinde zu betäuben oder Wege zu blockieren.',
      es: 'No hay inventario — acércate a los recursos, cárgalos a mano y lanza piedras o madera para aturdir enemigos o bloquear caminos.',
      it: 'Nessun inventario — avvicinati alle risorse, trasportale a mano e lancia pietre o legno per stordire i nemici o bloccare i passaggi.',
    },
  },
  'gods-favors': {
    answer: {
      en: 'Offer items at the Altar to restore each god — every restored god grants a permanent blessing and its own tech branch, and favors can be reset later with the Canteen of Youth.',
      fr: 'Offrez des objets à l’Autel pour restaurer chaque dieu — chaque dieu restauré accorde une bénédiction permanente et sa propre branche tech, et les faveurs se réinitialisent plus tard avec la Gourde de Jouvence.',
      de: 'Opfere Gegenstände am Altar, um jeden Gott wiederherzustellen — jeder restaurierte Gott gewährt einen permanenten Segen und eigenen Tech-Zweig; Favors lassen sich später mit dem Jugendkrug zurücksetzen.',
      es: 'Ofrece objetos en el Altar para restaurar a cada dios — cada dios restaurado otorga una bendición permanente y su propia rama tecnológica, y los favores se reinician después con la Cantimplora de la Juventud.',
      it: 'Offri oggetti all’Altare per ripristinare ogni dio — ogni dio ripristinato concede una benedizione permanente e il proprio ramo tecnologico, e i favori si resettano poi con la Borraccia della Giovinezza.',
    },
    quickFacts: {
      location: 'Your Altar',
      prereq: 'An Altar (3 Stone at the Workbench)',
    },
  },
  'dungeons-bosses': {
    answer: {
      en: 'Bosses hide in lairs across the biomes — some roam, others must be summoned — and each demands its own tactic, so gear up on the Leather → Copper → Bronze/Iron path before you go.',
      fr: 'Les boss se cachent dans des repaires à travers les biomes — certains errent, d’autres doivent être invoqués — et chacun exige sa propre tactique ; équipez-vous sur le chemin Cuir → Cuivre → Bronze/Fer avant d’y aller.',
      de: 'Bosse verstecken sich in Lagern quer durch die Biome — manche streifen umher, andere müssen beschworen werden — und jeder verlangt seine eigene Taktik; rüstet euch vorher über den Pfad Leder → Kupfer → Bronze/Eisen aus.',
      es: 'Los jefes se esconden en guaridas por los biomas — algunos deambulan, otros deben invocarse — y cada uno exige su propia táctica; equípate por el camino Cuero → Cobre → Bronce/Hierro antes de ir.',
      it: 'I boss si nascondono in covi nei vari biomi — alcuni vagano, altri vanno evocati — e ciascuno richiede la propria tattica; attrezzati sul percorso Cuoio → Rame → Bronzo/Ferro prima di andare.',
    },
    quickFacts: {
      level: 'Leather → Copper → Bronze/Iron gear path',
      location: 'Plains, Desert and Volcano lairs',
    },
  },
  'co-op': {
    answer: {
      en: 'Host a world or join a friend’s — split roles (scout, farm, build, defend), and use SaveSync so anyone can take over as host when the original host is offline.',
      fr: 'Hébergez un monde ou rejoignez celui d’un ami — répartissez les rôles (explorer, cultiver, construire, défendre) et utilisez SaveSync pour que chacun puisse devenir hôte quand l’hôte original est hors ligne.',
      de: 'Hoste eine Welt oder tritt der eines Freundes bei — teilt die Rollen (erkunden, farmen, bauen, verteidigen) und nutzt SaveSync, damit jeder den Host übernehmen kann, wenn der Original-Host offline ist.',
      es: 'Aloja un mundo o únete al de un amigo — reparte roles (explorar, farmear, construir, defender) y usa SaveSync para que cualquiera pueda ser anfitrión cuando el original esté desconectado.',
      it: 'Ospita un mondo o unisciti a quello di un amico — dividete i ruoli (esplorare, coltivare, costruire, difendere) e usate SaveSync così chiunque può fare da host quando l’originale è offline.',
    },
    quickFacts: {
      prereq: 'None — host or join from character creation',
    },
  },
  'professions': {
    answer: {
      en: 'Pick any of the eight professions at creation — each grants +5 to one skill, and skills keep growing by use, so the choice never locks you out of anything.',
      fr: 'Choisissez l’une des huit professions à la création — chacune donne +5 à une compétence, et les compétences progressent à l’usage, donc ce choix ne vous bloque jamais.',
      de: 'Wähle bei der Erstellung einen von acht Berufen — jeder gewährt +5 auf eine Fertigkeit, und Fertigkeiten wachsen durch Nutzung, sodass dich die Wahl nie aussperrt.',
      es: 'Elige una de las ocho profesiones al crear — cada una da +5 a una habilidad, y las habilidades crecen con el uso, así que la elección nunca te bloquea.',
      it: 'Scegli una delle otto professioni alla creazione — ciascuna dà +5 a un’abilità, e le abilità crescono con l’uso, quindi la scelta non ti preclude nulla.',
    },
    quickFacts: {
      prereq: 'Chosen at character creation',
    },
  },
  'armor-gear': {
    answer: {
      en: 'Armor climbs Civilian → Leather → Copper → Bronze → Iron → Legendary (expertise 20+); every crafted piece can roll a named suffix with extra stats.',
      fr: 'L’armure grimpe Civil → Cuir → Cuivre → Bronze → Fer → Légendaire (expertise 20+) ; chaque pièce fabriquée peut tirer un suffixe nommé avec des stats bonus.',
      de: 'Rüstung steigt Zivil → Leder → Kupfer → Bronze → Eisen → Legendär (Expertise 20+); jedes gefertigte Teil kann ein benanntes Suffix mit Extra-Stats erhalten.',
      es: 'La armadura sube Civil → Cuero → Cobre → Bronce → Hierro → Legendaria (pericia 20+); cada pieza fabricada puede traer un sufijo con estadísticas extra.',
      it: 'L’armatura sale Civile → Cuoio → Rame → Bronzo → Ferro → Leggendaria (perizia 20+); ogni pezzo creato può avere un suffisso con statistiche extra.',
    },
    quickFacts: {
      level: 'Civilian → Leather → Copper → Bronze → Iron → Legendary',
      prereq: 'Blacksmith or Leatherworker; some pieces need recipe scrolls',
    },
  },
  'bosses': {
    answer: {
      en: 'Five bosses, five ways to find them — the Owl in the Plains, Cyclops and Pyzifax in the Desert, Phoenix and Talos in the Volcano; expect several runs each to collect every drop.',
      fr: 'Cinq boss, cinq façons de les trouver — la Chouette dans les Plaines, le Cyclope et Pyzifax dans le Désert, la Phénix et le Talos dans le Volcan ; prévoyez plusieurs runs pour récupérer tous les drops.',
      de: 'Fünf Bosse, fünf Wege sie zu finden — die Eule in den Ebenen, Zyklop und Pyzifax in der Wüste, Phönix und Talos im Vulkan; plant mehrere Runs, um alle Drops zu sammeln.',
      es: 'Cinco jefes, cinco formas de encontrarlos — el Búho en las Llanuras, el Cíclope y Pyzifax en el Desierto, la Fénix y el Talos en el Volcán; cuenta con varias rondas para conseguir todos los drops.',
      it: 'Cinque boss, cinque modi per trovarli — il Gufo nelle Pianure, il Ciclope e Pyzifax nel Deserto, la Fenice e il Talos nel Vulcano; metti in conto più run per ottenere tutti i drop.',
    },
    quickFacts: {
      location: 'Plains, Desert and Volcano',
    },
  },
  'gods': {
    answer: {
      en: 'Offerings at the Altar earn Worship Points — six gods grant permanent stat blessings (Ceres’ +25% Health is the biggest), while Minerva guides you through quests instead.',
      fr: 'Les offrandes à l’Autel rapportent des Points de Culte — six dieux accordent des bénédictions permanentes (+25 % Santé pour Cérès, la plus forte), tandis que Minerve vous guide par des quêtes.',
      de: 'Opfergaben am Altar bringen Kultpunkte — sechs Götter gewähren permanente Status-Segen (Ceres’ +25 % Leben ist der größte), während Minerva dich durch Quests führt.',
      es: 'Las ofrendas en el Altar dan Puntos de Culto — seis dioses otorgan bendiciones permanentes (+25 % Salud de Ceres, la mayor), mientras Minerva te guía con misiones.',
      it: 'Le offerte all’Altare danno Punti di Culto — sei dei concedono benedizioni permanenti (+25 % Salute di Cerere, la più alta), mentre Minerva ti guida con le quest.',
    },
    quickFacts: {
      prereq: 'An Altar and offerings',
    },
  },
  'city-tips': {
    answer: {
      en: 'Scout toward the map center before settling, never recruit Gluttonous or Disloyal citizens, reset favors freely with the Canteen of Youth, and beat the Cyclops for the Logistics Tent.',
      fr: 'Explorez vers le centre de la carte avant de vous installer, ne recrutez jamais de citoyens Gloutons ou Déloyaux, réinitialisez vos faveurs avec la Gourde de Jouvence et battez le Cyclope pour la Tente de Logistique.',
      de: 'Kundschaftet zur Kartenmitte, bevor ihr euch niederlasst, rekrutiert nie gefräßige oder unloyale Bürger, setzt Favors mit dem Jugendkrug zurück und besiegt den Zyklopen für das Logistik-Zelt.',
      es: 'Explora hacia el centro del mapa antes de asentarte, nunca reclutes ciudadanos Glotones o Desleales, reinicia favores con la Cantimplora de la Juventud y vence al Cíclope por la Tienda de Logística.',
      it: 'Esplora verso il centro della mappa prima di stabilirti, non reclutare mai cittadini Golosi o Disleali, resetta i favori con la Borraccia della Giovinezza e sconfiggi il Ciclope per la Tendola Logistica.',
    },
  },
  'base-locations': {
    answer: {
      en: 'Settle at a biome border with clay plus a 4×2 stretch of water — Town Center, Altar and Granary near the clay finishes the settle task fast, and tier-2 Altars teleport between bases.',
      fr: 'Installez-vous à une frontière de biome avec de l’argile et une étendue d’eau de 4×2 — Centre-ville, Autel et Grenier près de l’argile terminent vite la tâche d’installation, et les Autels niveau 2 téléportent entre les bases.',
      de: 'Siedelt an einer Biom-Grenze mit Ton plus einer 4×2-Wasserfläche — Stadtzentrum, Altar und Granarium nahe dem Ton schließt die Siedlungsaufgabe schnell ab, und Stufe-2-Altäre teleportieren zwischen Basen.',
      es: 'Asiéntate en un borde de bioma con arcilla y un tramo de agua de 4×2 — Centro urbano, Altar y Granero cerca de la arcilla completan rápido la tarea de asentamiento, y los Altares nivel 2 teletransportan entre bases.',
      it: 'Stabilisciti al confine di un bioma con argilla e uno specchio d’acqua 4×2 — Centro cittadino, Altare e Granaio vicino all’argilla completano in fretta il compito di insediamento, e gli Altari livello 2 teletrasportano tra le basi.',
    },
    quickFacts: {
      location: 'Biome borders with clay + 4×2 water',
    },
  },
  'world-seeds': {
    answer: {
      en: 'Seed 945359837 on a Small map spawns two square ponds that fit four water mills — treat it as a head start, not a requirement.',
      fr: 'La graine 945359837 sur une petite carte génère deux étangs carrés pouvant accueillir quatre moulins à eau — considérez-la comme un avantage, pas une obligation.',
      de: 'Seed 945359837 auf einer kleinen Karte spawnt zwei quadratische Teiche für vier Wassermühlen — seht es als Starthilfe, nicht als Pflicht.',
      es: 'La semilla 945359837 en un mapa Pequeño genera dos estanques cuadrados para cuatro molinos de agua — tómalo como ventaja inicial, no como requisito.',
      it: 'Il seme 945359837 su mappa Piccola genera due stagni quadrati per quattro mulini ad acqua — consideralo un vantaggio iniziale, non un obbligo.',
    },
    quickFacts: {
      location: 'Seed 945359837 (Small map, community-sourced)',
    },
  },
  'fortifications': {
    answer: {
      en: 'Outermost ring of flowerbeds (enemies ignore them, only you can remove them), normal walls inside for defense value, and a wood-and-stone gate you shift one block to pass.',
      fr: 'Anneau extérieur de plates-bandes (les ennemis les ignorent, seul vous pouvez les retirer), murs normaux à l’intérieur pour la valeur de défense, et une porte de bois et pierre à décaler d’un bloc pour passer.',
      de: 'Äußerster Ring aus Blumenbeeten (Feinde ignorieren sie, nur ihr könnt sie entfernen), normale Mauern dahinter für den Verteidigungswert und ein Holz-Stein-Tor, das ihr um einen Block verschiebt.',
      es: 'Anillo exterior de parterres (los enemigos los ignoran, solo tú puedes retirarlos), muros normales dentro para el valor de defensa y una puerta de madera y piedra que desplazas un bloque para pasar.',
      it: 'Anello esterno di aiuole (i nemici le ignorano, solo tu puoi rimuoverle), muri normali all’interno per il valore di difesa e un cancello di legno e pietra da spostare di un blocco per passare.',
    },
    quickFacts: {
      location: 'Your town perimeter',
      prereq: 'Build mode with walls and flowerbeds',
    },
  },
  'holy-javelin': {
    answer: {
      en: 'Farm three parts from the largest variants of specific enemies — shaft from yellow satyrs in raids, pole from green satyrs in Plains/Forest, head from fire elementals in Cyclops raids — then forge it at a tier-2 Forge with Smithing 7.',
      fr: 'Farmez trois pièces sur les plus grandes variantes d’ennemis précis — le fût des satyres jaunes en raid, la hampe des satyres verts dans les Plaines/Forêts, la pointe des élémentaires de feu dans les raids du Cyclope — puis forgez le tout à une Forge niveau 2 avec Forge 7.',
      de: 'Farmt drei Teile von den größten Varianten bestimmter Feinde — Schaft von gelben Satyrn in Raids, Stange von grünen Satyrn in Ebenen/Wald, Kopf von Feuerelementaren in Zyklop-Raids — und schmiedet es an einer Schmiede Stufe 2 mit Schmieden 7.',
      es: 'Farmea tres piezas de las variantes más grandes de enemigos concretos — el asta de los sátiros amarillos en incursiones, la pértiga de los sátiros verdes en Llanuras/Bosques, la punta de los elementales de fuego en incursiones del Cíclope — y fórgialo todo en una Fragua nivel 2 con Herrería 7.',
      it: 'Farma tre parti dalle varianti più grandi di nemici specifici — l’asta dai satiri gialli nei raid, il palo dai satiri verdi nelle Pianure/Foreste, la punta dagli elementali del fuoco nei raid del Ciclope — poi forgia il tutto a una Fucina livello 2 con Forgiatura 7.',
    },
    quickFacts: {
      level: 'Tier-2 Forge + Smithing Lv.7',
      prereq: 'Tier-2 Forge unlocked at the Altar',
    },
    drops: [
      { name: 'Shaft', note: 'largest yellow satyr in satyr raids — drop chance reportedly very low, community-tested' },
      { name: 'Pole', note: 'largest green satyr roaming Plains and Forest — drop chance reportedly very low, community-tested' },
      { name: 'Head', note: 'fire elementals in Cyclops raids — drop chance reportedly very low, community-tested' },
    ],
  },
  'pyzifax': {
    answer: {
      en: 'Offer the Malformed Satyr Horn to mark his camp, lure the catapult to smash its own gate, commandeer it against the ballistas, then circle-strafe the boss through three bullet-hell phases.',
      fr: 'Offrez la Corne de Satyre Difforme pour marquer son camp, attirez la catapulte pour qu’elle détruise sa propre porte, réquisitionnez-la contre les balistes, puis tournez autour du boss pendant trois phases bullet-hell.',
      de: 'Opfere das missgebildete Satyr-Horn, um sein Lager zu markieren, locke das Katapult, damit es sein eigenes Tor zertrümmert, kapert es gegen die Ballisten und umkreist den Boss durch drei Bullet-Hell-Phasen.',
      es: 'Ofrece el Cuerno de Sátiro Deforme para marcar su campamento, atrae la catapulta para que destroce su propia puerta, requisala contra las balistas y luego orbita al jefe durante tres fases bullet-hell.',
      it: 'Offri il Corno di Satiro Deforme per segnare il suo campo, attira la catapulta perché sfondi il suo stesso cancello, requisiscila contro le baliste e poi orbita il boss per tre fasi bullet-hell.',
    },
    quickFacts: {
      location: 'Desert — the Desert Satyr’s Base',
      prereq: 'Offer the Malformed Satyr Horn at the Altar',
      rewards: 'Gear and blueprints (the Logistics Tent now drops from the Owl, not Pyzifax)',
    },
  },
  'cyclops': {
    answer: {
      en: 'Breach the temple with explosive jars or clay-golem blasts, then fight five phases: bomb the eye, dodge the hands, pound the eyeball, and empty one hand’s HP before the clap.',
      fr: 'Franchissez le temple avec des jarres explosives ou des explosions de golems d’argile, puis affrontez cinq phases : bombardez l’œil, esquivez les mains, martelez le globe oculaire et videz la vie d’une main avant qu’elles ne claquent.',
      de: 'Brecht mit explosiven Krügen oder Ton-Golem-Explosionen in den Tempel ein, dann fünf Phasen: bombardiert das Auge, weicht den Händen aus, hämmert auf den Augapfel und leert die LP einer Hand, bevor sie zusammenklatschen.',
      es: 'Abre el templo con jarras explosivas o explosiones de gólems de arcilla, luego cinco fases: bombardea el ojo, esquiva las manos, golpea el globo ocular y vacía la vida de una mano antes de que aplaudan.',
      it: 'Apri il tempio con giare esplosive o esplosioni di golem d’argilla, poi cinque fasi: bombarda l’occhio, schiva le mani, colpisci il bulbo oculare e svuota la vita di una mano prima che si chiudano.',
    },
    quickFacts: {
      location: 'Desert — the satyr high-temple',
      prereq: 'Bronze gear recommended',
      rewards: 'Granite Tooth (quest material for Virgil’s Poem)',
    },
    drops: [
      { name: 'Granite Tooth', note: 'quest material — offer at the Altar to complete Virgil’s Poem' },
    ],
  },
  'phoenix-arabia': {
    answer: {
      en: 'Stay behind the phoenix at all times — its fire breath and the Phase-2 falling rocks are front-facing; about four breaths of free-hits wins.',
      fr: 'Restez toujours derrière le phénix — son souffle de feu et les rochers de la phase 2 frappent devant ; environ quatre souffles de coups libres suffisent.',
      de: 'Bleibt immer hinter dem Phönix — sein Feueratem und die fallenden Felsen in Phase 2 treffen nach vorn; etwa vier Atemzüge freier Treffer reichen.',
      es: 'Quédate siempre detrás del fénix — su aliento de fuego y las rocas de la fase 2 golpean de frente; unas cuatro respiraciones de golpes libres bastan.',
      it: 'Resta sempre dietro la fenice — il suo respiro di fuoco e le rocce della fase 2 colpiscono frontalmente; bastano circa quattro respiri di colpi liberi.',
    },
    quickFacts: {
      location: 'Volcano — the burned shrines',
      prereq: 'Build a Volcano base; accept the Desert Phoenix quest',
    },
    drops: [
      { name: 'Phoenix Ash Sample', note: 'per this guide’s reward section' },
      { name: 'Phoenix cloak', note: 'mentioned in the Volcano walkthrough — sources differ' },
    ],
  },
  'talos-prototype': {
    answer: {
      en: 'Free Vulcan first, deliver his building materials on a bronze cart (wooden ones get smashed), then hammer the blue-glowing notches through four phases while killing the one-eyed healer add fast.',
      fr: 'Libérez d’abord Vulcain, livrez ses matériaux de construction sur un chariot en bronze (les chariots en bois se font détruire), puis martelez les encoches luminescentes bleues pendant quatre phases en tuant vite l’add guérisseur borgne.',
      de: 'Befreit zuerst Vulcan, liefert seine Baumaterialien mit einer Bronzekarre (Holzkarren werden zerstört) und hämmert dann durch vier Phasen auf die blau leuchtenden Kerben, während ihr den einäugigen Heiler-Add schnell tötet.',
      es: 'Libera primero a Vulcano, entrega sus materiales de construcción en un carro de bronce (los de madera los destruyen) y luego golpea las muescas con brillo azul durante cuatro fases mientras matas rápido al add sanador tuerto.',
      it: 'Libera prima Vulcano, consegna i suoi materiali da costruzione con un carro di bronzo (quelli di legno vengono distrutti), poi colpisci le tacche luminose blu per quattro fasi uccidendo in fretta l’add guaritore guercio.',
    },
    quickFacts: {
      location: 'Volcano — the Temple of Vulcan',
      prereq: 'Free Vulcan (4 steles + iron rods + 4 levers) and deliver the building-material offering',
      rewards: 'Core Container — completes the main quest line',
    },
    drops: [
      { name: 'Core Container', note: 'offer at the Altar to complete all main quests' },
    ],
  },
  'walkthrough': {
    answer: {
      en: 'Loop the Owl first for the Logistics Tent blueprint (patch 0.25.1_7), settle the Plains, leather up in the Forest, Bronze up for the Desert’s Cyclops and Pyzifax, then automate bread and take Phoenix and Vulcan in the Volcano.',
      fr: 'Bouclez d’abord la Chouette pour le plan de la Tente de Logistique (patch 0.25.1_7), installez-vous dans les Plaines, faites le plein de cuir en Forêt, passez au Bronze pour le Cyclope et Pyzifax du Désert, puis automatisez le pain et affrontez la Phénix et le Talos au Volcan.',
      de: 'Erledigt zuerst die Eule für den Logistik-Zelt-Bauplan (Patch 0.25.1_7), siedelt in den Ebenen, holt Leder im Wald, steigt auf Bronze für den Zyklopen und Pyzifax in der Wüste, automatisiert dann Brot und holt Phönix und Talos im Vulkan.',
      es: 'Primero vence al Búho por el plano de la Tienda de Logística (parche 0.25.1_7), asiéntate en las Llanuras, consigue cuero en el Bosque, sube a Bronce para el Cíclope y Pyzifax del Desierto, luego automatiza el pan y ve a por la Fénix y Vulcano en el Volcán.',
      it: 'Prima il Gufo per il progetto della Tendola Logistica (patch 0.25.1_7), insediati nelle Pianure, fai scorta di cuoio nella Foresta, passa al Bronzo per il Ciclope e Pyzifax nel Deserto, poi automatizza il pane e affronta Fenice e Vulcano nel Vulcano.',
    },
    quickFacts: {
      gameVersion: '0.25.1_7',
    },
  },
  'completion-run': {
    answer: {
      en: 'Pick the Shield profession and a Small map, cheese the Owl with coal traps, take Mercury → Ceres → Diana → Vulcan in the tech tree, and automate bread before the Volcano.',
      fr: 'Choisissez la profession Bouclier et une petite carte, piégez la Chouette avec des pièges à charbon, prenez Mercure → Cérès → Diane → Vulcain dans l’arbre tech et automatisez le pain avant le Volcan.',
      de: 'Wählt den Beruf Schild und eine kleine Karte, legt die Eule mit Kohlefallen rein, nehmt Merkur → Ceres → Diana → Vulcan im Tech-Baum und automatisiert Brot vor dem Vulkan.',
      es: 'Elige la profesión Escudo y un mapa Pequeño, vence al Búho con trampas de carbón, toma Mercurio → Ceres → Diana → Vulcano en el árbol tecnológico y automatiza el pan antes del Volcán.',
      it: 'Scegli la professione Scudo e una mappa Piccola, supera il Gufo con trappole di carbone, prendi Mercurio → Cerere → Diana → Vulcano nell’albero tecnologico e automatizza il pane prima del Vulcano.',
    },
    quickFacts: {
      level: 'Shield profession, Small map (solo)',
    },
  },
  'resource-map': {
    answer: {
      en: 'Plains give food and copper, the Forest is your leather engine, the Desert adds tin for Bronze, and the Volcano hides ember orchids, geodes and iron.',
      fr: 'Les Plaines donnent nourriture et cuivre, la Forêt est votre moteur à cuir, le Désert ajoute l’étain pour le Bronze et le Volcan cache orchidées de braise, géodes et fer.',
      de: 'Die Ebenen liefern Nahrung und Kupfer, der Wald ist euer Leder-Motor, die Wüste bringt Zinn für Bronze, und der Vulkan versteckt Glutorchideen, Geoden und Eisen.',
      es: 'Las Llanuras dan comida y cobre, el Bosque es tu motor de cuero, el Desierto añade estaño para el Bronce y el Volcán esconde orquídeas de brasa, geodas y hierro.',
      it: 'Le Pianure danno cibo e rame, la Foresta è il tuo motore di cuoio, il Deserto aggiunge stagno per il Bronzo e il Vulcano nasconde orchidee di brace, geodi e ferro.',
    },
    quickFacts: {
      location: 'All four biomes',
    },
  },
  'food-buffs': {
    answer: {
      en: 'Food grants real combat buffs — automate bread first (farm → watermill → bakery → food storage), then build one hero dish like Isicia Marina for health plus Nature and Poison resistance.',
      fr: 'La nourriture donne de vrais buffs de combat — automatisez d’abord le pain (ferme → moulin → boulangerie → stockage), puis montez un plat héroïque comme l’Isicia Marina pour la santé et les résistances Nature et Poison.',
      de: 'Essen gibt echte Kampf-Buffs — automatisiert zuerst Brot (Farm → Mühle → Bäckerei → Lager) und baut dann ein Helden-Gericht wie Isicia Marina für Leben plus Natur- und Giftresistenz.',
      es: 'La comida da buffs de combate reales — automatiza primero el pan (granja → molino → panadería → almacén) y luego monta un plato estrella como la Isicia Marina para salud y resistencia a Naturaleza y Veneno.',
      it: 'Il cibo dà veri buff di combattimento — automatizza prima il pane (fattoria → mulino → forno → dispensa) e poi prepara un piatto eroico come l’Isicia Marina per salute e resistenza a Natura e Veleno.',
    },
    quickFacts: {
      prereq: 'Watermill needs a 4×2 water source; repeat baking needs a tier-2 Bakery',
    },
  },
  'bestiary': {
    answer: {
      en: 'The Fallen hunt by sound at night, wolves and bears are your leather engine, satyrs drop the Declaration of War, and clay golems can be lured into blasting walls open.',
      fr: 'Les Déchus chassent au son la nuit, les loups et ours sont votre moteur à cuir, les satyres lâchent la Déclaration de Guerre et les golems d’argile peuvent être attirés pour faire sauter les murs.',
      de: 'Die Gefallenen jagen nachts nach Laut, Wölfe und Bären sind euer Leder-Motor, Satyrn lassen die Kriegserklärung fallen und Ton-Golems lassen sich ködern, um Mauern zu sprengen.',
      es: 'Los Caídos cazan por sonido de noche, los lobos y osos son tu motor de cuero, los sátiros sueltan la Declaración de Guerra y los gólems de arcilla pueden atraerse para derribar muros.',
      it: 'I Caduti cacciano per suono di notte, lupi e orsi sono il tuo motore di cuoio, i satiri lasciano cadere la Dichiarazione di Guerra e i golem d’argilla possono essere attirati per far saltare i muri.',
    },
    quickFacts: {
      location: 'All biomes — see the dedicated Bestiary page',
    },
  },
  'walkthrough-plains': {
    answer: {
      en: 'Loop the Owl with coal traps for the Logistics Tent blueprint, settle a Plains town on clay and a 4×2 lake edge, then run the Forest for leather, antidotes and Meticulous captives.',
      fr: 'Bouclez la Chouette avec des pièges à charbon pour le plan de la Tente de Logistique, installez une ville des Plaines sur argile et un bord de lac 4×2, puis écumez la Forêt pour cuir, antidotes et captifs Méticuleux.',
      de: 'Legt die Eule mit Kohlefallen rein für den Logistik-Zelt-Bauplan, siedelt eine Ebenen-Stadt an Ton und einem 4×2-Seeufer und holt im Wald Leder, Gegengifte und sorgfältige Gefangene.',
      es: 'Vence al Búho con trampas de carbón por el plano de la Tienda de Logística, asienta un pueblo de las Llanuras sobre arcilla y un borde de lago 4×2, y luego recorre el Bosque por cuero, antídotos y cautivos Meticulosos.',
      it: 'Supera il Gufo con trappole di carbone per il progetto della Tendola Logistica, insedia una città delle Pianure su argilla e un bordo di lago 4×2, poi percorri la Foresta per cuoio, antidoti e prigionieri Meticolosi.',
    },
    quickFacts: {
      location: 'Plains, then Forest',
    },
  },
  'walkthrough-desert': {
    answer: {
      en: 'Clear the satyr pass with a Camp Tent for respawn, Bronze up at a clay-and-water border base, bomb the Cyclops’ eye across five phases for the Granite Tooth, then commandeer Pyzifax’s catapult.',
      fr: 'Nettoyez le col des satyres avec une Tente de Camp pour réapparaître, passez au Bronze sur une base frontière argile-eau, bombardez l’œil du Cyclope en cinq phases pour la Dent de Granit, puis réquisitionnez la catapulte de Pyzifax.',
      de: 'Räumt den Satyr-Pass mit einem Camp-Zelt als Respawn, steigt an einer Ton-Wasser-Grenzbasis auf Bronze, bombardiert das Zyklopen-Auge über fünf Phasen für den Granit-Zahn und kapert dann Pyzifax’ Katapult.',
      es: 'Limpia el paso de los sátiros con una Tienda de Campamento para reaparecer, sube a Bronce en una base fronteriza con arcilla y agua, bombardea el ojo del Cíclope en cinco fases por el Colmillo de Granito y luego requisala la catapulta a Pyzifax.',
      it: 'Ripulisci il passo dei satiri con una Tenda da Campo per il respawn, passa al Bronzo in una base al confine con argilla e acqua, bombarda l’occhio del Ciclope in cinque fasi per il Dente di Granito, poi requisisce la catapulta di Pyzifax.',
    },
    quickFacts: {
      location: 'Desert',
      prereq: 'Bronze gear (copper + tin)',
    },
  },
  'walkthrough-volcano': {
    answer: {
      en: 'Base on clay, water and volcanic ash, automate bread with the Logistics Tent, stay behind the Phoenix for four breaths of free hits, and free Vulcan to claim the Core Container and finish the main quest.',
      fr: 'Basez-vous sur argile, eau et cendre volcanique, automatisez le pain avec la Tente de Logistique, restez derrière la Phénix pour quatre souffles de coups libres et libérez Vulcain pour obtenir le Récipient du Cœur et finir la quête principale.',
      de: 'Baut eure Basis auf Ton, Wasser und Vulkanasche, automatisiert Brot mit dem Logistik-Zelt, bleibt hinter dem Phönix für vier Atemzüge freier Treffer und befreit Vulcan, um das Kerngefäß zu holen und die Hauptquest abzuschließen.',
      es: 'Asienta tu base en arcilla, agua y ceniza volcánica, automatiza el pan con la Tienda de Logística, quédate detrás de la Fénix para cuatro respiraciones de golpes libres y libera a Vulcano para conseguir el Recipiente del Núcleo y terminar la misión principal.',
      it: 'Fonda la base su argilla, acqua e cenere vulcanica, automatizza il pane con la Tendola Logistica, resta dietro la Fenice per quattro respiri di colpi liberi e libera Vulcano per ottenere il Contenitore del Nucleo e finire la quest principale.',
    },
    quickFacts: {
      location: 'Volcano',
      prereq: 'Iron gear recommended; Aloe Gel buff before exploring',
    },
  },
  'buildings-guide': {
    answer: {
      en: 'The Altar (3 Stone) is your progression core, the Blacksmith and Carpenter unlock after the Owl, and the Logistics Tent — dropped by the Owl — is the automation hub that chains your production lines.',
      fr: 'L’Autel (3 Pierres) est le cœur de votre progression, le Forgeron et le Charpentier se débloquent après la Chouette, et la Tente de Logistique — lâchée par la Chouette — est le hub d’automatisation qui relie vos chaînes de production.',
      de: 'Der Altar (3 Stein) ist euer Fortschrittskern, Schmied und Zimmermann schalten nach der Eule frei, und das Logistik-Zelt — von der Eule fallengelassen — ist der Automatisierungs-Hub, der eure Produktionsketten verbindet.',
      es: 'El Altar (3 Piedras) es el núcleo de tu progresión, el Herrero y el Carpintero se desbloquean tras el Búho, y la Tienda de Logística — que suelta el Búho — es el centro de automatización que encadena tus líneas de producción.',
      it: 'L’Altare (3 Pietre) è il cuore della tua progressione, il Fabbro e il Falegname si sbloccano dopo il Gufo, e la Tendola Logistica — lasciata dal Gufo — è il centro di automazione che collega le tue linee di produzione.',
    },
    quickFacts: {
      prereq: 'Most buildings need the Workbench; advanced ones need quests or god worship',
    },
  },
  'faq-guide': {
    answer: {
      en: 'Progression runs through the Altar, the first hard gate is the Guardian of Minerva, four biomes are live in Early Access with the Swamp on the roadmap, and the signature twist is a world with no inventory.',
      fr: 'La progression passe par l’Autel, la première porte dure est le Gardien de Minerve, quatre biomes sont disponibles en Accès Anticipé avec le Marécage sur la feuille de route, et la particularité signature est un monde sans inventaire.',
      de: 'Der Fortschritt läuft über den Altar, das erste harte Tor ist der Wächter der Minerva, vier Biome sind im Early Access live (der Sumpf auf der Roadmap), und das Markenzeichen ist eine Welt ohne Inventar.',
      es: 'La progresión pasa por el Altar, la primera puerta dura es el Guardián de Minerva, cuatro biomas están disponibles en Acceso Anticipado con el Pantano en la hoja de ruta, y el giro característico es un mundo sin inventario.',
      it: 'La progressione passa dall’Altare, la prima porta dura è il Guardiano di Minerva, quattro biomi sono disponibili in Early Access con la Palude in roadmap, e la caratteristica unica è un mondo senza inventario.',
    },
  },
  'walkthrough-forest': {
    answer: {
      en: 'Treat the Forest as your leather engine — wolves and bears feed the Leatherworker — and grab antidotes, Bee Queens and Meticulous captives from camps and dungeons along the way.',
      fr: 'Considérez la Forêt comme votre moteur à cuir — loups et ours nourrissent le Travailleur du cuir — et récupérez antidotes, Reines des Abeilles et captifs Méticuleux dans les camps et donjons en chemin.',
      de: 'Seht den Wald als euren Leder-Motor — Wölfe und Bären füttern den Gerber — und schnappt unterwegs Gegengifte, Bienenköniginnen und sorgfältige Gefangene aus Lagern und Dungeons.',
      es: 'Trata el Bosque como tu motor de cuero — lobos y osos alimentan al Trabajador del cuero — y consigue antídotos, Reinas Abeja y cautivos Meticulosos en campamentos y mazmorras por el camino.',
      it: 'Considera la Foresta come il tuo motore di cuoio — lupi e orsi alimentano il Conciatore — e prendi antidoti, Api Regine e prigionieri Meticolosi da campi e dungeon lungo la strada.',
    },
    quickFacts: {
      location: 'Forest — a forward camp, not your main town',
      prereq: 'A Camping Tent for quick re-entry',
    },
  },
  'biomes-guide': {
    answer: {
      en: 'Progress Plains → Forest → Desert → Volcano: settle centrally so every biome stays a short haul, Bronze up before the Desert, and treat the Volcano as staged expeditions with Aloe Salve and Antidotes.',
      fr: 'Progressez Plaines → Forêt → Désert → Volcan : installez-vous au centre pour que chaque biome reste à courte distance, passez au Bronze avant le Désert et traitez le Volcan comme des expéditions par étapes avec Baume d’Aloès et Antidotes.',
      de: 'Fortschritt Ebenen → Wald → Wüste → Vulkan: siedelt zentral, damit jedes Biom kurz erreichbar bleibt, steigt vor der Wüste auf Bronze und behandelt den Vulkan als gestaffelte Expeditionen mit Aloe-Salbe und Gegengiften.',
      es: 'Progresa Llanuras → Bosque → Desierto → Volcán: asiéntate céntrico para que cada bioma quede a tiro, sube a Bronce antes del Desierto y trata el Volcán como expediciones por etapas con Bálsamo de Aloe y Antídotos.',
      it: 'Progredisci Pianure → Foresta → Deserto → Vulcano: insediati in posizione centrale così ogni bioma resta vicino, passa al Bronzo prima del Deserto e tratta il Vulcano come spedizioni a tappe con Unguento d’Aloe e Antidoti.',
    },
    quickFacts: {
      location: 'Four biomes in EA; Swamp and Ruined City on the roadmap',
    },
  },
  'automation-guide': {
    answer: {
      en: 'Automation is partial: Wooden Carts from day one, but the real unlock is the Logistics Tent (from the Owl since patch 0.25.1_7) — pipe buildings together and set Repeat work orders, then let the town feed itself.',
      fr: 'L’automatisation est partielle : des Charrettes en bois dès le premier jour, mais la vraie avancée est la Tente de Logistique (depuis la Chouette au patch 0.25.1_7) — reliez les bâtiments et cochez Répéter, puis laissez la ville se nourrir.',
      de: 'Automatisierung ist teilweise: Holzkarren ab Tag eins, aber der echte Freischalt ist das Logistik-Zelt (seit Patch 0.25.1_7 von der Eule) — verbindet Gebäude und setzt Wiederholen-Aufträge, dann versorgt sich die Stadt selbst.',
      es: 'La automatización es parcial: Carros de Madera desde el primer día, pero el verdadero desbloqueo es la Tienda de Logística (del Búho desde el parche 0.25.1_7) — conecta edificios y marca Repetir, y deja que la ciudad se alimente sola.',
      it: 'L’automazione è parziale: Carri di Legno dal primo giorno, ma il vero sblocco è la Tendola Logistica (dal Gufo dalla patch 0.25.1_7) — collega gli edifici e imposta Ripeti, poi lascia che la città si nutra da sola.',
    },
    quickFacts: {
      gameVersion: '0.25.1_7 (June 1, 2026)',
    },
  },
};

// ---------------------------------------------------------------------------
// Emitter helpers
// ---------------------------------------------------------------------------
const q = (s) => `'${s}'`; // strings contain typographic apostrophes, safe in single quotes

function emitAnswer(a) {
  const out = ['    answer: {'];
  for (const [lang, text] of Object.entries(a)) out.push(`      ${lang}: ${q(text)},`);
  out.push('    },');
  return out;
}

function emitFacts(f) {
  const out = ['    quickFacts: {', '      en: {'];
  for (const [k, v] of Object.entries(f)) out.push(`        ${k}: ${q(v)},`);
  out.push('      },', '    },');
  return out;
}

function emitDrops(drops) {
  const out = ['    drops: {', '      en: ['];
  for (const d of drops) {
    const fields = [`name: ${q(d.name)}`];
    if (d.qty) fields.push(`qty: ${q(d.qty)}`);
    if (d.rarity) fields.push(`rarity: ${q(d.rarity)}`);
    if (d.note) fields.push(`note: ${q(d.note)}`);
    out.push(`        { ${fields.join(', ')} },`);
  }
  out.push('      ],', '    },');
  return out;
}

// ---------------------------------------------------------------------------
// Insertion pass
// ---------------------------------------------------------------------------
const slugIdx = []; // { slug, line }
lines.forEach((l, i) => {
  const m = l.match(/^    slug: '([^']+)',\s*$/);
  if (m) slugIdx.push({ slug: m[1], line: i });
});
console.log(`found ${slugIdx.length} guides`);

let insertedAnswers = 0, appendedAnswers = 0, insertedFacts = 0, insertedDrops = 0;

// process bottom-up so line numbers stay valid
for (let s = slugIdx.length - 1; s >= 0; s--) {
  const { slug, line } = slugIdx[s];
  const data = DATA[slug];
  if (!data) { console.log(`skip ${slug} (no data)`); continue; }
  const end = s + 1 < slugIdx.length ? slugIdx[s + 1].line : lines.length;

  // 1) append translations to an existing answer block
  if (data.answerAppend) {
    let ansLine = -1;
    for (let i = line; i < end; i++) if (lines[i].includes('    answer: {')) { ansLine = i; break; }
    if (ansLine === -1) { console.log(`WARN ${slug}: answerAppend but no answer block`); continue; }
    let closeLine = -1;
    for (let i = ansLine + 1; i < end; i++) if (/^\s*\},?\s*$/.test(lines[i])) { closeLine = i; break; }
    const newLines = Object.entries(data.answerAppend).map(([lang, text]) => `      ${lang}: ${q(text)},`);
    lines.splice(closeLine, 0, ...newLines);
    appendedAnswers++;
    console.log(`appended answer langs to ${slug}`);
  }

  // 2) insert full blocks right after the `updated:` line (skip if already present)
  const block = [];
  const scopeText = lines.slice(line, end).join('\n');
  if (data.answer && !scopeText.includes('    answer: {')) {
    block.push(...emitAnswer(data.answer));
    insertedAnswers++;
  }
  if (data.quickFacts && !scopeText.includes('    quickFacts: {')) {
    block.push(...emitFacts(data.quickFacts));
    insertedFacts++;
  }
  if (data.drops && !scopeText.includes('    drops: {')) {
    block.push(...emitDrops(data.drops));
    insertedDrops++;
  }
  if (block.length === 0) continue;

  let updLine = -1;
  for (let i = line; i < end; i++) if (/^    updated: '\d{4}-\d{2}-\d{2}',\s*$/.test(lines[i])) { updLine = i; break; }
  if (updLine === -1) { console.log(`WARN ${slug}: no updated line, blocks not inserted`); continue; }
  lines.splice(updLine + 1, 0, ...block);
  console.log(`inserted ${block.length} lines into ${slug}`);
}

fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log(`---- done: ${insertedAnswers} answers inserted, ${appendedAnswers} answers appended, ${insertedFacts} quickFacts, ${insertedDrops} drops ----`);
