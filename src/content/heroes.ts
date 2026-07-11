import type { L10n } from '../i18n/utils';

export type EntryKind = 'god' | 'boss';

export interface LoreEntry {
  slug: string;
  kind: EntryKind;
  name: string;
  role: L10n<string>;
  image?: string; // path inside public/media (bosses have screenshots)
  lead: L10n<string>;
  bio: L10n<string>;
  tip: L10n<string>; // gods: how to use · bosses: strategy
  // Compact "at a glance" stat rows (factual, language-neutral)
  meta?: { label: string; value: string }[];
  // In-game flavor line (the god's own words) — English source
  flavor?: string;
}

export const ENTRIES: LoreEntry[] = [
  // ---------------- GODS (the Roman pantheon you restore) ----------------
  {
    slug: 'diana',
    kind: 'god',
    name: 'Diana',
    role: {
      en: 'Goddess of Nature, Hunting & the Moon',
      fr: 'Déesse de la Nature, de la Chasse et de la Lune',
      de: 'Göttin der Natur, der Jagd und des Mondes',
      es: 'Diosa de la Naturaleza, la Caza y la Luna',
      it: 'Dea della Natura, della Caccia e della Luna',
    },
    lead: {
      en: 'The wild answers those who listen.',
      fr: 'La nature répond à qui sait l’écouter.',
      de: 'Die Wildnis antwortet denen, die zuhören.',
      es: 'La naturaleza responde a quien sabe escuchar.',
      it: 'La natura risponde a chi sa ascoltare.',
    },
    bio: {
      en: "Diana is the goddess of nature, hunters, wildlife and the Moon. Her worship unlocks buildings and feats centred on ranged weaponry, gathering and hunting — ideal for a settlement that lives off the land. Offer foraged goods and hunted game at her altar to earn her favor, and her blessing sharpens every arrow you loose.",
      fr: "Diane est la déesse de la nature, des chasseurs, de la faune et de la Lune. Son culte débloque des bâtiments et des aptitudes centrés sur l'armement à distance, la cueillette et la chasse — parfaits pour une cité qui vit de la terre. Offrez-lui récoltes et gibier pour gagner sa faveur, et sa bénédiction aiguise chaque flèche.",
      de: "Diana ist die Göttin der Natur, der Jäger, der Wildtiere und des Mondes. Ihr Kult schaltet Gebäude und Talente frei, die auf Fernkampf, Sammeln und Jagd ausgerichtet sind — ideal für eine Siedlung, die von der Erde lebt. Biete gesammelte Güter und Wild an ihrem Altar, um ihre Gunst zu gewinnen; ihr Segen schärft jeden Pfeil, den du abschießt.",
      es: "Diana es la diosa de la naturaleza, los cazadores, la fauna y la Luna. Su culto desbloquea edificios y destrezas centrados en armas a distancia, recolección y caza — perfectos para un poblado que vive de la tierra. Ofrécele recolección y caza en su altar para ganar su favor, y su bendición afila cada flecha que disparas.",
      it: "Diana è la dea della natura, dei cacciatori, della fauna e della Luna. Il suo culto sblocca edifici e talenti incentrati su armi a distanza, raccolta e caccia — perfetti per un insediamento che vive di ciò che la terra offre. Offrile raccolto e selvaggina al suo altare per ottenere il favore, e la sua benedizione affila ogni freccia che scocchi.",
    },
    tip: {
      en: 'Sacrifice foraged items and hunted game to please Diana early; her boons help you thrive between raids.',
      fr: 'Sacrifiez cueillette et gibier pour plaire à Diane tôt ; ses dons aident à prospérer entre les raids.',
      de: 'Biete gesammelte Güter und Wild, um Diana früh zu gefallen; ihre Segnungen helfen zwischen den Raids.',
      es: 'Sacrifica recolección y caza para complacer a Diana pronto; sus dones ayudan entre incursiones.',
      it: 'Sacrifica raccolto e selvaggina per compiacere Diana presto; i suoi doni aiutano tra un raid e l’altro.',
    },
    meta: [
      { label: 'Blessing', value: '+10% Ranged Attack Power' },
      { label: 'Focus', value: 'Ranged weaponry, gathering & hunting' },
    ],
    flavor: "You have survived so far by your own efforts. Admirable, but remember you are one mortal in a world that is not your friend. Respect it, but never submit to it and you may yet prevail.",
  },
  {
    slug: 'minerva',
    kind: 'god',
    name: 'Minerva',
    role: {
      en: 'Goddess of Wisdom',
      fr: 'Déesse de la Sagesse',
      de: 'Göttin der Weisheit',
      es: 'Diosa de la Sabiduría',
      it: 'Dea della Sapienza',
    },
    lead: {
      en: 'Strategy before strength.',
      fr: 'La stratégie avant la force.',
      de: 'Strategie vor Stärke.',
      es: 'Estrategia antes que fuerza.',
      it: 'Strategia prima della forza.',
    },
    bio: {
      en: "Minerva is the goddess of wisdom, justice and law. She grants no combat blessing of her own — instead she guides you, offering counsel and a steady stream of tasks that push Rome's restoration forward. Her owl, the Guardian of Minerva, is the first gate you must overcome; its defeat returns part of her memory and unlocks deeper crafting.",
      fr: "Minerve est la déesse de la sagesse, de la justice et de la loi. Elle n'accorde aucune bénédiction de combat — elle vous guide plutôt, dispensant conseils et tâches qui font avancer la restauration de Rome. Sa chouette, le Gardien de Minerve, est la première porte à vaincre ; sa défaite rend une partie de sa mémoire et débloque l'artisanat avancé.",
      de: "Minerva ist die Göttin der Weisheit, der Gerechtigkeit und des Gesetzes. Sie gewährt keinen eigenen Kampfsegen — stattdessen führt sie dich, mit Rat und einer Kette von Aufgaben, die Roms Wiederaufbau vorantreiben. Ihre Eule, der Wächter der Minerva, ist das erste zu bezwingende Tor; sein Sieg gibt Teile ihres Gedächtnisses zurück und schaltet tieferes Handwerk frei.",
      es: "Minerva es la diosa de la sabiduría, la justicia y la ley. No concede bendición de combate — en su lugar te guía, ofreciendo consejos y tareas que impulsan la restauración de Roma. Su lechuza, el Guardián de Minerva, es la primera puerta que debes vencer; al derrotarla recupera parte de su memoria y desbloquea la elaboración avanzada.",
      it: "Minerva è la dea della sapienza, della giustizia e della legge. Non concede alcuna benedizione di combattimento — ti guida invece, offrendo consigli e incarichi che fanno avanzare il restauro di Roma. La sua gufo, il Guardiano di Minerva, è la prima porta da sconfiggere; con la sua sconfitta riacquista parte della memoria e sblocca l'artigianato avanzato.",
    },
    tip: {
      en: 'Minerva gives no combat bonus herself — but her Guardian is the first boss; overcome it to open the path to later crafting.',
      fr: 'Minerve n’accorde aucun bonus de combat — mais son Gardien est le premier boss ; vainquez-le pour ouvrir la voie à l’artisanat avancé.',
      de: 'Minerva gewährt selbst keinen Kampfbonus — aber ihr Wächter ist der erste Boss; bezwinge ihn, um den Weg zum späteren Basteln zu öffnen.',
      es: 'Minerva no da bonus de combate — pero su Guardián es el primer jefe; véncelo para abrir el camino a la elaboración avanzada.',
      it: 'Minerva non concede bonus di combattimento — ma la sua Guardiana è il primo boss; sconfiggila per aprire la via alla lavorazione avanzata.',
    },
    meta: [
      { label: 'Blessing', value: 'No direct stat bonus — guidance & tasks' },
      { label: 'Focus', value: 'Guidance, quests & tasks (no direct stat)' },
    ],
    flavor: "Your offering demonstrates insight and action, qualities that will serve you well. Always observe, think, and act with purpose. The gods always respond to devotion.",
  },
  {
    slug: 'ceres',
    kind: 'god',
    name: 'Ceres',
    role: {
      en: 'Goddess of Agriculture & Crops',
      fr: 'Déesse de l’Agriculture et des Récoltes',
      de: 'Göttin von Ackerbau und Ernte',
      es: 'Diosa de la Agricultura y las Cosechas',
      it: 'Dea dell’Agricoltura e dei Raccolti',
    },
    lead: {
      en: 'Bread before banners.',
      fr: 'Le pain avant les bannières.',
      de: 'Brot vor Bannern.',
      es: 'Pan antes que banderas.',
      it: 'Pane prima delle bandiere.',
    },
    bio: {
      en: "Ceres is the goddess of agriculture and fertility. Her worship unlocks buildings and feats centred on feeding your citizens — farms, granaries and the routines that keep a town from starving. Her blessing is the single largest health boost in the pantheon, making your people sturdier against the night.",
      fr: "Cérès est la déesse de l'agriculture et de la fertilité. Son culte débloque des bâtiments et aptitudes centrés sur la nourriture de vos citoyens — fermes, greniers et routines qui évitent la famine. Sa bénédiction est la plus grande hausse de vie du panthéon, rendant votre peuple plus solide la nuit.",
      de: "Ceres ist die Göttin des Ackerbaus und der Fruchtbarkeit. Ihr Kult schaltet Gebäude und Talente frei, die auf die Ernährung eurer Bürger ausgerichtet sind — Höfe, Speicher und Routinen gegen den Hunger. Ihr Segen ist der größte Lebens-Bonus des Pantheons und macht euer Volk widerstandsfähiger.",
      es: "Ceres es la diosa de la agricultura y la fertilidad. Su culto desbloquea edificios y destrezas centrados en alimentar a tus ciudadanos — granjas, graneros y rutinas que evitan el hambre. Su bendición es el mayor aumento de vida del panteón, haciendo a tu gente más resistente.",
      it: "Cerere è la dea dell'agricoltura e della fertilità. Il suo culto sblocca edifici e talenti incentrati sul nutrire i cittadini — fattorie, granai e routine che tengono lontana la fame. La sua benedizione è il maggior aumento di vita del pantheon, rendendo il popolo più robusto.",
    },
    tip: {
      en: 'Secure Ceres early if your town keeps running out of food.',
      fr: 'Sécurisez Cérès tôt si votre ville manque souvent de nourriture.',
      de: 'Sichert Ceres früh, wenn eure Stadt ständig Essen ausgeht.',
      es: 'Asegura a Ceres pronto si tu pueblo se queda sin comida.',
      it: 'Assicurati Cerere presto se la tua città resta spesso senza cibo.',
    },
    meta: [
      { label: 'Blessing', value: '+25% Overall Health' },
      { label: 'Focus', value: 'Food, farms & citizen sustenance' },
    ],
    flavor: "Flourish with my blessings, child.",
  },
  {
    slug: 'mars',
    kind: 'god',
    name: 'Mars',
    role: {
      en: 'God of War',
      fr: 'Dieu de la Guerre',
      de: 'Gott des Krieges',
      es: 'Dios de la Guerra',
      it: 'Dio della Guerra',
    },
    lead: {
      en: 'The blade that never dulls.',
      fr: 'La lame qui ne s’émousse jamais.',
      de: 'Das Schwert, das nie stumpf wird.',
      es: 'La hoja que nunca se embota.',
      it: 'La lama che non si ottunde mai.',
    },
    bio: {
      en: "Mars is the god of war and soldiers. His worship unlocks buildings and feats built for the front line — town defenses and the melee weaponry that holds the line when the dead come calling. His blessing hardens every blade you swing.",
      fr: "Mars est le dieu de la guerre et des soldats. Son culte débloque des bâtiments et aptitudes faits pour le front — défenses de ville et armes de mêlée qui tiennent la ligne quand les morts frappent. Sa bénédiction endurcit chaque lame.",
      de: "Mars ist der Gott des Krieges und der Soldaten. Sein Kult schaltet Gebäude und Talente für die Front frei — Stadtverteidigung und Nahkampfwaffen, die die Linie halten, wenn die Toten kommen. Sein Segen härtet jede Klinge, die du schwingst.",
      es: "Marte es el dios de la guerra y los soldados. Su culto desbloquea edificios y destrezas hechos para el frente — defensas urbanas y armas cuerpo a cuerpo que mantienen la línea cuando llegan los muertos. Su bendición endurece cada hoja que blandes.",
      it: "Marte è il dio della guerra e dei soldati. Il suo culto sblocca edifici e talenti fatti per il fronte — difese cittadine e armi da mischia che tengono la linea quando arrivano i morti. La sua benedizione indurisce ogni lama che impugni.",
    },
    tip: {
      en: 'Stack Mars with your toughest frontline for a brutal assault bonus.',
      fr: 'Superposez Mars à votre frontline la plus dure pour un bonus d’assaut brutal.',
      de: 'Stapelt Mars mit eurer härtesten Frontline für einen brutalen Assault-Bonus.',
      es: 'Apila Marte con tu frente más dura para un bono de asalto brutal.',
      it: 'Impila Marte con la tua prima linea più solida per un bonus d’assalto brutale.',
    },
    meta: [
      { label: 'Blessing', value: '+10% Melee Attack Power' },
      { label: 'Focus', value: 'Town defenses & melee weaponry' },
    ],
    flavor: "You are now the tip of the spear against Rome's enemies. Remember that win or lose, as long as you keep fighting you are never truly conquered. Roma invicta!",
  },
  {
    slug: 'mercury',
    kind: 'god',
    name: 'Mercury',
    role: {
      en: 'God of Speed, Innovation & Trade',
      fr: 'Dieu de la Vitesse, de l’Innovation et du Commerce',
      de: 'Gott der Geschwindigkeit, Innovation und des Handels',
      es: 'Dios de la Velocidad, la Innovación y el Comercio',
      it: 'Dio della Velocità, dell’Innovazione e del Commercio',
    },
    lead: {
      en: 'Swift feet, fuller coffers.',
      fr: 'Pieds légers, coffres pleins.',
      de: 'Schnelle Füße, volle Kassen.',
      es: 'Pies ligeros, arcas llenas.',
      it: 'Piedi veloci, forzieri pieni.',
    },
    bio: {
      en: "Mercury is the god of commerce, travellers and merchants. His worship unlocks buildings and feats around transportation, trade and magic — from faster carts to the spells that tip a fight. As Rome's roads once were its veins, his favor keeps your economy moving.",
      fr: "Mercure est le dieu du commerce, des voyageurs et des marchands. Son culte débloque des bâtiments et aptitudes autour du transport, du négoce et de la magie — chars plus rapides et sorts qui font basculer un combat. Comme les routes furent le sang de Rome, sa faveur garde l'économie en mouvement.",
      de: "Mercur ist der Gott des Handels, der Reisenden und der Kaufleute. Sein Kult schaltet Gebäude und Talente um Transport, Handel und Magie frei — von schnelleren Karren bis zu Kampfzaubern. Wie Roms Straßen einst ihre Adern waren, hält sein Segen die Wirtschaft in Bewegung.",
      es: "Mercurio es el dios del comercio, los viajeros y los mercaderes. Su culto desbloquea edificios y destrezas en torno al transporte, el comercio y la magia — de carros más rápidos a hechizos que decantan una batalla. Como las rutas fueron la sangre de Roma, su favor mantiene la economía en marcha.",
      it: "Mercurio è il dio del commercio, dei viaggiatori e dei mercanti. Il suo culto sblocca edifici e talenti attorno a trasporto, commercio e magia — da carri più veloci agli incantesimi che voltano una battaglia. Come le strade furono il sangue di Roma, il suo favore tiene l'economia in moto.",
    },
    tip: {
      en: 'Lean on Mercury when your base sprawls and hauls get long — he unlocks fast travel.',
      fr: 'Comptez sur Mercure quand votre base s’étend et les transports s’allongent — il débloque le voyage rapide.',
      de: 'Verlasst euch auf Mercury, wenn eure Basis wächst und die Transporte lang werden — er schaltet schnelles Reisen frei.',
      es: 'Apóyate en Mercurio cuando tu base se extiende y los traslados se alargan — desbloquea el viaje rápido.',
      it: 'Appoggiati a Mercurio quando la base si espande e i trasporti si allungano — sblocca il viaggio rapido.',
    },
    meta: [
      { label: 'Blessing', value: '+10% Magic Attack Power' },
      { label: 'Focus', value: 'Transportation, trade & magic' },
    ],
    flavor: "An empire's veins are roads and the blood is trade and coin. Rome died, no heart beat. We've got to get that heart started again or Rome will stay dead.",
  },
  {
    slug: 'venus',
    kind: 'god',
    name: 'Venus',
    role: {
      en: 'Goddess of Love & Beauty',
      fr: 'Déesse de l’Amour et de la Beauté',
      de: 'Göttin der Liebe und Schönheit',
      es: 'Diosa del Amor y la Belleza',
      it: 'Dea dell’Amore e della Bellezza',
    },
    lead: {
      en: 'A happy camp is a strong camp.',
      fr: 'Un camp heureux est un camp fort.',
      de: 'Ein glückliches Lager ist ein starkes Lager.',
      es: 'Un campamento feliz es un campamento fuerte.',
      it: 'Un accampamento felice è un accampamento forte.',
    },
    bio: {
      en: "Venus is the goddess of love, beauty and prosperity. Her worship unlocks buildings and feats around town decoration and the happiness of your citizens — a contented people work harder, breed faster and stay. Her blessing lifts both health and energy across the settlement.",
      fr: "Vénus est la déesse de l'amour, de la beauté et de la prospérité. Son culte débloque des bâtiments et aptitudes autour de la décoration et du bonheur des citoyens — un peuple content travaille plus, procrée plus et reste. Sa bénédiction élève santé et énergie dans la cité.",
      de: "Venus ist die Göttin der Liebe, der Schönheit und des Wohlstands. Ihr Kult schaltet Gebäude und Talente um Stadtschmuck und Bürgerglück frei — zufriedene Menschen arbeiten mehr, mehren sich und bleiben. Ihr Segen hebt Gesundheit und Energie in der Siedlung.",
      es: "Venus es la diosa del amor, la belleza y la prosperidad. Su culto desbloquea edificios y destrezas en torno a la decoración y la felicidad de tus ciudadanos — un pueblo contento trabaja más, se reproduce más y permanece. Su bendición eleva salud y energía en el poblado.",
      it: "Venere è la dea dell'amore, della bellezza e della prosperità. Il suo culto sblocca edifici e talenti attorno alla decorazione e alla felicità dei cittadini — un popolo contento lavora di più, si moltiplica e resta. La sua benedizione innalza salute ed energia nell'insediamento.",
    },
    tip: {
      en: 'Build her altar early — steady happiness compounds into a larger workforce.',
      fr: 'Élevez son autel tôt — un bonheur stable se compose en une main-d’œuvre plus large.',
      de: 'Baut ihren Altar früh — stetige Zufriedenheit wächst zur größeren Belegschaft.',
      es: 'Alza su altar pronto — la felicidad estable se compone en más mano de obra.',
      it: 'Costruisci il suo altare presto — la felicità costante si compile in più forza lavoro.',
    },
    meta: [
      { label: 'Blessing', value: '+10% Health, +10 Energy' },
      { label: 'Focus', value: 'Town decoration & citizen happiness' },
    ],
    flavor: "Save people from loneliness and they will thank you for it. Give them a life where they can desire more than a full belly and live rather than survive, they will love you for it.",
  },
  {
    slug: 'vulcan',
    kind: 'god',
    name: 'Vulcan',
    role: {
      en: 'God of Fire & the Forge',
      fr: 'Dieu du Feu et de la Forge',
      de: 'Gott des Feuers und der Schmiede',
      es: 'Dios del Fuego y la Forja',
      it: 'Dio del Fuoco e della Fucina',
    },
    lead: {
      en: 'What the fire shapes, the enemy fears.',
      fr: 'Ce que le feu façonne, l’ennemi le craint.',
      de: 'Was das Feuer formt, fürchtet der Feind.',
      es: 'Lo que el fuego forja, el enemigo lo teme.',
      it: 'Ciò che il fuoco plasma, il nemico lo teme.',
    },
    bio: {
      en: "Vulcan is the god of blacksmiths, volcanoes and fire. His worship unlocks buildings and feats around fuel use, town defenses and resource gathering — the forge-work that arms a growing Rome. Long ago his priests tried to build a metal colossus, the Talos Prototype, to save the city; the attempt failed and the unfinished machine now guards the volcano's endgame.",
      fr: "Vulcain est le dieu des forgerons, des volcans et du feu. Son culte débloque des bâtiments et aptitudes autour du combustible, des défenses et de la récolte de ressources — le travail de forge qui arme Rome. Jadis, ses prêtres tentèrent de bâtir un colosse de métal, le Talos Prototype, pour sauver la ville ; l'échec laissa la machine inachevée qui garde désormais la fin du volcan.",
      de: "Vulcan ist der Gott der Schmiede, Vulkane und des Feuers. Sein Kult schaltet Gebäude und Talente um Brennstoff, Stadtverteidigung und Ressourcen frei — die Schmiedearbeit, die ein wachsendes Rom bewaffnet. Einst versuchten seine Priester einen metallenen Koloss, den Talos-Protyp, die Stadt zu retten; der Fehlschlag ließ die unvollendete Maschine die Vulkan-Endgame bewachen.",
      es: "Vulcano es el dios de los herreros, los volcanes y el fuego. Su culto desbloquea edificios y destrezas en torno al combustible, las defensas y la recolección de recursos — la forja que arma una Roma en crecimiento. Ante sus sacerdotes intentaron construir un coloso de metal, el Talos Prototype, para salvar la ciudad; el intento falló y la máquina inacabada ahora custodia el final del volcán.",
      it: "Vulcano è il dio dei fabbri, dei vulcani e del fuoco. Il suo culto sblocca edifici e talenti attorno a combustibile, difese cittadine e raccolta di risorse — il lavoro di fucina che arma una Roma che cresce. Un tempo i suoi sacerdoti tentarono di costruire un colosso di metallo, il Talos Prototype, per salvare la città; il tentativo fallì e la macchina incompiuta ora custodisce la fase finale del vulcano.",
    },
    tip: {
      en: 'Prioritize Vulcan for gear-heavy, boss-killing builds.',
      fr: 'Priorisez Vulcain pour les builds lourds en équipement et tueurs de boss.',
      de: 'Priorisiert Vulcan für Ausrüstungs-lastige, Boss-tötende Builds.',
      es: 'Prioriza Vulcano para builds pesados en equipo y mataboss.',
      it: 'Dai priorità a Vulcano per build pesanti di equipaggiamento e boss-killer.',
    },
    meta: [
      { label: 'Blessing', value: '+10% Armor' },
      { label: 'Focus', value: 'Fuel use, defenses & resource gathering' },
    ],
    flavor: "I feel nothing, I see nothing. Even in the deepest bowels of Tartarus I could feel something. You are my only tether to the world, what has happened?",
  },
// ---------------- BOSSES (real, from official media + guides) ----------------
  {
    slug: 'guardian-of-minerva',
    kind: 'boss',
    name: 'Guardian of Minerva',
    role: {
      en: 'First Gate — Plains',
      fr: 'Première Porte — Plaines',
      de: 'Erstes Tor — Ebenen',
      es: 'Primera Puerta — Llanuras',
      it: 'Prima Porta — Pianure',
    },
    image: 'screens/owl-fight.jpg',
    lead: {
      en: 'Silent wings, deadly talons.',
      fr: 'Ailes silencieuses, serres mortelles.',
      de: 'Stille Schwingen, tödliche Krallen.',
      es: 'Alas silenciosas, garras mortales.',
      it: 'Ali silenti, artigli letali.',
    },
    bio: {
      en: 'A colossal owl and the first hard gate of the campaign — the physical manifestation of Minerva’s wisdom, acting without purpose until defeated. The divine flame reveals its ruin on your map. No base-building bypasses it: defeat it to restore Minerva’s memory and unlock new crafting recipes.',
      fr: 'Une chouette colossale et la première porte difficile de la campagne — la manifestation physique de la sagesse de Minerve, agissant sans but tant qu’elle n’est pas vaincue. La flamme divine révèle sa ruine sur la carte. Aucune construction ne contourne ça : vainquez-la pour restaurer la mémoire de Minerve et débloquer de nouvelles recettes.',
      de: 'Eine kolossale Eule und das erste harte Tor der Kampagne — die physische Manifestation von Minervas Weisheit, die zwecklos handelt, bis sie besiegt wird. Die göttliche Flamme enthüllt ihre Ruine auf der Karte. Kein Basenbau umgeht es: Besiege sie, um Minervas Gedächtnis wiederherzustellen und neue Rezepte freizuschalten.',
      es: 'Una lechuza colosal y la primera puerta dura de la campaña — la manifestación física de la sabiduría de Minerva, que actúa sin propósito hasta ser vencida. La llama divina revela su ruina en el mapa. Ninguna construcción la esquiva: véncela para restaurar la memoria de Minerva y desbloquear recetas.',
      it: 'Un gufo colossale e la prima porta dura della campagna — la manifestazione fisica della saggezza di Minerva, che agisce senza scopo finché non viene sconfitta. La fiamma divina rivela la sua rovina sulla mappa. Nessuna costruzione la aggira: sconfiggila per ripristinare la memoria di Minerva e sbloccare nuove ricette.',
    },
    tip: {
      en: 'Do not attempt it in starter gear. Upgrade to at least Copper armor and stock health potions from the merchant first.',
      fr: 'Ne tentez pas en équipement de départ. Passez au moins à l’armure de Cuivre et stockez des potions de soin du marchand.',
      de: 'Nicht in Starter-Ausrüstung versuchen. Steigt mindestens auf Kupfer-Rüstung auf und hortet Heiltränke vom Händler.',
      es: 'No lo intentes con equipo inicial. Sube al menos a armadura de Cobre y guarda pociones de salud del mercader.',
      it: 'Non affrontarla con l’equipaggiamento iniziale. Sali almeno a armatura di Rame e fai scorta di pozioni dal mercante.',
    },
    meta: [
      { label: 'Biome', value: 'Plains' },
      { label: 'Health', value: '225 HP' },
      { label: 'Reward', value: 'Unlocks crafting recipes' },
    ],
  },
  {
    slug: 'cyclops',
    kind: 'boss',
    name: 'Cyclops',
    role: {
      en: 'Desert Boss',
      fr: 'Boss du Désert',
      de: 'Wüsten-Boss',
      es: 'Jefe del Desierto',
      it: 'Boss del Deserto',
    },
    image: 'screens/fight-cyclops.png',
    lead: {
      en: 'One eye, endless rage.',
      fr: 'Un œil, une rage sans fin.',
      de: 'Ein Auge, endlose Wut.',
      es: 'Un ojo, furia sin fin.',
      it: 'Un occhio, rabbia infinita.',
    },
    bio: {
      en: 'A mountain of a brute that guards the desert. Slow but devastating — its club shake can flatten a careless party. Defeating it drops the Logistics Tent, which automates production lines between your buildings.',
      fr: 'Une montagne de brute qui garde le désert. Lent mais dévastateur — sa secousse de massue aplatit une équipe imprudente. Le vaincre donne la Tente de Logistique, qui automatise les chaînes de production.',
      de: 'Ein berggleicher Brutalo, der die Wüste bewacht. Langsam, doch verheerend — sein Keulenschlag kann eine unvorsichtige Gruppe plattmachen. Sein Sieg fällt die Logistik-Zelt, die Produktionsketten automatisiert.',
      es: 'Una mole de bruto que guarda el desierto. Lento pero devastador — su golpe de maza aplasta a un grupo descuidado. Vencerlo suelta la Tienda de Logística, que automatiza las líneas de producción.',
      it: 'Una mole di bruto che custodisce il deserto. Lento ma devastante — la sua mazzata può schiacciare un gruppo distratto. Sconfiggerlo fa cadere la Tendola Logistica, che automatizza le catene di produzione.',
    },
    tip: {
      en: 'Aim for the eye when it rears back; dodge the overhead slam, then unload.',
      fr: 'Visez l’œil quand il se redresse ; esquivez la massue verticale, puis déversez vos dégâts.',
      de: 'Zielt aufs Auge, wenn es sich aufbäumt; weicht dem Senkschlag aus, dann entladet alles.',
      es: 'Apunta al ojo cuando se yergue; esquiva el mazazo y luego descarga.',
      it: 'Mira all’occhio quando si rizza; schiva la mazzata dall’alto, poi scarica tutto.',
    },
    meta: [
      { label: 'Biome', value: 'Desert' },
      { label: 'Drops', value: 'Logistics Tent' },
    ],
  },
  {
    slug: 'great-phoenix-of-arabia',
    kind: 'boss',
    name: 'Great Phoenix of Arabia',
    role: {
      en: 'Volcanic Boss',
      fr: 'Boss Volcanique',
      de: 'Vulkan-Boss',
      es: 'Jefe Volcánico',
      it: 'Boss Vulcanico',
    },
    image: 'screens/phoenix-fight.jpg',
    lead: {
      en: 'Reborn from ash.',
      fr: 'Renaît de la cendre.',
      de: 'Aus Asche wiedergeboren.',
      es: 'Renace de la ceniza.',
      it: 'Rinasce dalla cenere.',
    },
    bio: {
      en: 'A flame-bound avian that ignites the volcano biome. Each death feeds a faster, fiercer rebirth — burst it down during its vulnerable phase before it can resurrect.',
      fr: 'Un volatile lié au feu qui embrase le biome volcanique. Chaque mort nourrit une renaissance plus rapide et féroce — burstez-la en phase vulnérable avant qu’elle ne ressuscite.',
      de: 'Ein feuergebundener Vogel, der das Vulkan-Biom entflammt. Jeder Tod nährt eine schnellere, wildere Wiedergeburt — burstet sie in ihrer verwundbaren Phase, bevor sie wiederaufersteht.',
      es: 'Una ave unida al fuego que incendia el bioma volcánico. Cada muerte alimenta un renacer más rápido y feroz — hazle burst en su fase vulnerable antes de que resucite.',
      it: 'Un uccello legato al fuoco che incendia il bioma vulcanico. Ogni morte nutre una rinascita più rapida e fiera — scaricale un burst nella fase vulnerabile prima che risorga.',
    },
    tip: {
      en: 'Burst it down during its vulnerable phase before it can resurrect.',
      fr: 'Burstez-la pendant sa phase vulnérable avant qu’elle ne ressuscite.',
      de: 'Burstet sie in ihrer verwundbaren Phase, bevor sie wiederaufersteht.',
      es: 'Hazle burst durante su fase vulnerable antes de que resucite.',
      it: 'Scaricale un burst nella fase vulnerabile prima che risorga.',
    },
    meta: [{ label: 'Biome', value: 'Volcano' }],
  },
  {
    slug: 'talos-prototype',
    kind: 'boss',
    name: 'Talos Prototype',
    role: {
      en: 'Volcano Boss — Temple of Vulcan',
      fr: 'Boss du Volcan — Temple de Vulcain',
      de: 'Vulkan-Boss — Tempel des Vulcan',
      es: 'Jefe del Volcán — Templo de Vulcano',
      it: 'Boss Vulcanico — Tempio di Vulcano',
    },
    image: 'screens/volcanic-tendril.jpg',
    lead: {
      en: 'Vulcan’s unfinished colossus.',
      fr: 'Le colosse inachevé de Vulcain.',
      de: 'Vulcans unvollendeter Koloss.',
      es: 'El coloso inacabado de Vulcano.',
      it: 'Il colosso incompiuto di Vulcano.',
    },
    bio: {
      en: 'A mechanical guardian built by Vulcan and his worshippers in a failed attempt to save Rome. The divine flame reveals the Temple of Vulcan on your map. This hulking automaton guards the volcano endgame — bring heavy firepower and don’t fight it alone.',
      fr: 'Un gardien mécanique construit par Vulcain et ses fidèles lors d’une tentative avortée de sauver Rome. La flamme divine révèle le Temple de Vulcain sur la carte. Cet automate massif garde la fin du jeu du volcan — amenez une forte puissance de feu et ne le combattez pas seul.',
      de: 'Ein mechanischer Wächter, den Vulcan und seine Anhänger in einem gescheiterten Versuch bauten, Rom zu retten. Die göttliche Flamme enthüllt den Tempel des Vulcan auf der Karte. Dieser massive Automat bewacht das Vulkan-Endgame — bringe schwere Feuerkraft und kämpfe nicht allein.',
      es: 'Un guardián mecánico construido por Vulcano y sus fieles en un intento fallido por salvar Roma. La llama divina revela el Templo de Vulcano en el mapa. Este autómata enorme custodia el final del volcán — lleva mucho poder de fuego y no lo enfrentes solo.',
      it: 'Un guardiano meccanico costruito da Vulcano e i suoi fedeli in un tentativo fallito di salvare Roma. La fiamma divina rivela il Tempio di Vulcano sulla mappa. Questo automa massiccio sorveglia la fase finale del vulcano — porta grande potenza di fuoco e non affrontarlo da solo.',
    },
    tip: {
      en: 'A slow, armored automaton: flank it, target its joints, and keep healing ready for the long fight.',
      fr: 'Un automate lent et blindé : encerclez-le, visez ses articulations et gardez des soins prêts pour le long combat.',
      de: 'Ein langsamer, gepanzerter Automat: Flanke ihn, ziele auf seine Gelenke und habe Heilung für den langen Kampf bereit.',
      es: 'Un autómata lento y blindado: flanquéalo, apunta a sus articulaciones y ten curación lista para la larga batalla.',
      it: 'Un automa lento e corazzato: attaccalo sui fianchi, mira alle giunture e tieni la cura pronta per il lungo scontro.',
    },
    meta: [
      { label: 'Biome', value: 'Volcano' },
      { label: 'Location', value: 'Temple of Vulcan' },
    ],
  },
  {
    slug: 'pyzifax',
    kind: 'boss',
    name: 'Pyzifax',
    role: {
      en: 'Dungeon Boss',
      fr: 'Boss de Donjon',
      de: 'Dungeon-Boss',
      es: 'Jefe de Mazmorra',
      it: 'Boss di Dungeon',
    },
    image: 'screens/fight-pyzifax.png',
    lead: {
      en: 'Ancient and ravenous.',
      fr: 'Ancien et ravageur.',
      de: 'Antik und gefräßig.',
      es: 'Antiguo y voraz.',
      it: 'Antico e vorace.',
    },
    bio: {
      en: 'A terrifying entity that commands the desert satyrs who have taken up arms against Rome. Track down its base in the Desert to draw it out and break the rebellion. Defeating it yields random gear, accessories, weapons and materials.',
      fr: 'Une entité terrifiante qui commande les satyres du désert ayant pris les armes contre Rome. Traquez sa base dans le Désert pour le faire sortir et briser la rébellion. Le vaincre donne au hasard équipement, accessoires, armes et matériaux.',
      de: 'Ein furchterregendes Wesen, das die Wüsten-Satyrn befehligt, die gegen Rom die Waffen erhoben haben. Spüre seine Basis in der Wüste auf, um ihn hervorzulocken und den Aufstand zu brechen. Sein Sieg gibt zufällige Ausrüstung, Accessoires, Waffen und Materialien.',
      es: 'Una entidad terrorífica que manda a los sátiros del desierto que tomaron las armas contra Roma. Rastrea su base en el Desierto para sacarlo y romper la rebelión. Vencerlo da equipo, accesorios, armas y materiales al azar.',
      it: 'Un’entità terrorizzante che comanda i satiri del deserto che hanno preso le armi contro Roma. Rintraccia la sua base nel Deserto per stanarlo e spezzare la ribellione. Sconfiggerlo dà equipaggiamento, accessori, armi e materiali casuali.',
    },
    tip: {
      en: 'Bait its charge, then flank the exposed side while it recovers.',
      fr: 'Provquez sa charge, puis flanquez le flanc exposé pendant sa récupération.',
      de: 'Ködert seinen Ansturm, dann flankt die freigelegte Seite, während er sich erholt.',
      es: 'Provoca su embestida, luego flanquea el costado expuesto mientras recupera.',
      it: 'Provoca la sua carica, poi attaccane il fianco esposto mentre recupera.',
    },
    meta: [{ label: 'Biome', value: 'Desert' }],
  },
];

export function getEntry(slug: string): LoreEntry | undefined {
  return ENTRIES.find((e) => e.slug === slug);
}

export function entriesByKind(kind: EntryKind): LoreEntry[] {
  return ENTRIES.filter((e) => e.kind === kind);
}
