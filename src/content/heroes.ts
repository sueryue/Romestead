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
      en: 'Diana governs the hunt, the creatures of the wild, and the moon that lights the night. Offer foraged goods and game to win her favor — her blessings aid survival, tracking and the beasts you recruit.',
      fr: 'Diane gouverne la chasse, les créatures sauvages et la lune qui éclaire la nuit. Offrez cueillette et gibier pour gagner sa faveur — ses bénédictions aident survie, pistage et bêtes recrutées.',
      de: 'Diana herrscht über die Jagd, die Wesen der Wildnis und den Mond der Nacht. Biete gesammelte Güter und Wild, um ihre Gunst zu gewinnen — ihre Segnungen helfen bei Überleben, Spurenlesen und rekrutierten Bestien.',
      es: 'Diana gobierna la caza, las criaturas salvajes y la luna que ilumina la noche. Ofrece recolección y caza para ganar su favor — sus bendiciones ayudan a sobrevivir, rastrear y a las bestias que reclutas.',
      it: 'Diana governa la caccia, le creature selvagge e la luna che illumina la notte. Offri raccolto e selvaggina per ottenere il suo favore — le sue benedizioni aiutano sopravvivenza, tracciamento e le bestie che recluti.',
    },
    tip: {
      en: 'Sacrifice foraged items and hunted game to please Diana early; her boons help you thrive between raids.',
      fr: 'Sacrifiez cueillette et gibier pour plaire à Diane tôt ; ses dons aident à prospérer entre les raids.',
      de: 'Biete gesammelte Güter und Wild, um Diana früh zu gefallen; ihre Segnungen helfen zwischen den Raids.',
      es: 'Sacrifica recolección y caza para complacer a Diana pronto; sus dones ayudan entre incursiones.',
      it: 'Sacrifica raccolto e selvaggina per compiacere Diana presto; i suoi doni aiutano tra un raid e l’altro.',
    },
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
      en: 'Minerva is the patron of wisdom and craft. She is often the first god players invest in — honoring her unlocks the altar’s deeper technology tree and the progression that gates later crafting.',
      fr: 'Minerve est la patronne de la sagesse et de l’artisanat. C’est souvent la première déesse investie — l’honorer débloque l’arbre technologique profond de l’autel et la progression qui verrouille l’artisanat avancé.',
      de: 'Minerva ist die Patronin von Weisheit und Handwerk. Sie ist oft der erste Gott, in den man investiert — ihre Ehrung schaltet den tieferen Technologiezweig des Altars und die Progression frei, die späteres Basteln freischaltet.',
      es: 'Minerva es la patrona de la sabiduría y el arte. Suelve ser la primera diosa en la que se invierte — honrarla desbloquea el árbol tecnológico profundo del altar y la progresión que limita la elaboración avanzada.',
      it: 'Minerva è la patrona di sapienza e artigianato. È spesso la prima dea in cui si investe — onorarla sblocca il ramo tecnologico profondo dell’altare e la progressione che blocca la lavorazione avanzata.',
    },
    tip: {
      en: 'Many players favor Minerva first: defeating her Guardian opens the altar tree that gates later crafting.',
      fr: 'Beaucoup privilégient Minerve en premier : vaincre son Gardien ouvre l’arbre de l’autel qui verrouille l’artisanat.',
      de: 'Viele setzen zuerst auf Minerva: Ihr Wächter freizuschalten öffnet den Altar-Baum, der späteres Basteln freischaltet.',
      es: 'Muchos prefieren Minerva primero: vencer a su Guardián abre el árbol del altar que limita la elaboración.',
      it: 'Molti scelgono prima Minerva: sconfiggere la sua Guardiana apre l’albero dell’altare che blocca la lavorazione avanzata.',
    },
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
      en: 'Ceres governs fields and food. Restoring her stabilizes your food buffer so citizens never starve.',
      fr: 'Cérès gouverne champs et nourriture. La restaurer stabilise votre buffer de nourriture pour que les citoyens ne meurent jamais de faim.',
      de: 'Ceres herrscht über Felder und Nahrung. Ihre Wiederherstellung stabilisiert euren Nahrungspuffer, damit Bürger nie verhungern.',
      es: 'Ceres gobierna campos y comida. Restaurarla estabiliza tu reserva de alimentos para que nadie pase hambre.',
      it: 'Cerere governa campi e cibo. Ripristinarla stabilizza la scorta di cibo così i cittadini non patiscono la fame.',
    },
    tip: {
      en: 'Secure Ceres early if your town keeps running out of food.',
      fr: 'Sécurisez Cérès tôt si votre ville manque souvent de nourriture.',
      de: 'Sichert Ceres früh, wenn eure Stadt ständig Essen ausgeht.',
      es: 'Asegura a Ceres pronto si tu pueblo se queda sin comida.',
      it: 'Assicurati Cerere presto se la tua città resta spesso senza cibo.',
    },
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
      en: 'The patron of soldiers, Mars sharpens every edge and rewards aggressive play. His tech tree favors frontline assaults and rally bonuses.',
      fr: 'Protecteur des soldats, Mars aiguise chaque lame et récompense l’agression. Son arbre penche pour assauts frontaliers et bonus de rally.',
      de: 'Der Patron der Soldaten, Mars schärft jede Klinge und belohnt aggressives Spiel. Sein Techbaum begünstigt Frontalangriffe und Rally-Boni.',
      es: 'Patrón de los soldados, Marte afila cada filo y premia el juego agresivo. Su árbol favorece asaltos frontales y bonos de rally.',
      it: 'Patrono dei soldati, Marte affila ogni lama e premia il gioco aggressivo. Il suo albero favorisce assalti in prima linea e bonus di rally.',
    },
    tip: {
      en: 'Stack Mars with your toughest frontline for a brutal assault bonus.',
      fr: 'Superposez Mars à votre frontline la plus dure pour un bonus d’assaut brutal.',
      de: 'Stapelt Mars mit eurer härtesten Frontline für einen brutalen Assault-Bonus.',
      es: 'Apila Marte con tu frente más dura para un bono de asalto brutal.',
      it: 'Impila Marte con la tua prima linea più solida per un bonus d’assalto brutale.',
    },
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
      en: 'Mercury speeds travel and trade. His favors improve logistics, cart speed and resource exchange — and unlock fast travel between linked altars.',
      fr: 'Mercure accélère voyages et commerce. Ses faveurs améliorent logistique, vitesse des chariots et échange de ressources — et débloquent le voyage rapide entre autels liés.',
      de: 'Mercur beschleunigt Reisen und Handel. Seine Gunst verbessert Logistik, Karrengeschwindigkeit und Ressourcentausch — und schaltet schnelles Reisen zwischen verlinkten Altären frei.',
      es: 'Mercurio acelera viajes y comercio. Sus favores mejoran logística, velocidad de carros e intercambio de recursos — y desbloquean el viaje rápido entre altares enlazados.',
      it: 'Mercurio accelera viaggi e commercio. I suoi favori migliorano logistica, velocità dei carri e scambio di risorse — e sbloccano il viaggio rapido tra altari collegati.',
    },
    tip: {
      en: 'Lean on Mercury when your base sprawls and hauls get long — he unlocks fast travel.',
      fr: 'Comptez sur Mercure quand votre base s’étend et les transports s’allongent — il débloque le voyage rapide.',
      de: 'Verlasst euch auf Mercury, wenn eure Basis wächst und die Transporte lang werden — er schaltet schnelles Reisen frei.',
      es: 'Apóyate en Mercurio cuando tu base se extiende y los traslados se alargan — desbloquea el viaje rápido.',
      it: 'Appoggiati a Mercurio quando la base si espande e i trasporti si allungano — sblocca il viaggio rapido.',
    },
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
      en: 'Venus blesses growth and contentment. Her favors raise citizen happiness and birth rate, keeping your settlement productive.',
      fr: 'Vénus bénit la croissance et le contentement. Ses faveurs élèvent le bonheur et la natalité des citoyens, gardant votre colonie productive.',
      de: 'Venus segnet Wachstum und Zufriedenheit. Ihre Gunst hebt Bürgerglück und Geburtenrate und hält die Siedlung produktiv.',
      es: 'Venus bendice el crecimiento y el contento. Sus favores suben la felicidad y natalidad, manteniendo productiva la colonia.',
      it: 'Venere benedice crescita e contentezza. I suoi favori alzano felicità e natalità, tenendo produttivo l’insediamento.',
    },
    tip: {
      en: 'Build her altar early — steady happiness compounds into a larger workforce.',
      fr: 'Élevez son autel tôt — un bonheur stable se compose en une main-d’œuvre plus large.',
      de: 'Baut ihren Altar früh — stetige Zufriedenheit wächst zur größeren Belegschaft.',
      es: 'Alza su altar pronto — la felicidad estable se compone en más mano de obra.',
      it: 'Costruisci il suo altare presto — la felicità costante si compile in più forza lavoro.',
    },
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
      en: 'The divine smith, Vulcan accelerates crafting and improves gear quality. His tree unlocks advanced metallurgy and tool talents.',
      fr: 'Le forgeron divin, Vulcain accélère l’artisanat et améliore la qualité de l’équipement. Son arbre débloque métallurgie et outils avancés.',
      de: 'Der göttliche Schmied, Vulcan beschleunigt das Basteln und verbessert die Ausrüstung. Sein Baum schaltet fortgeschrittene Metallurgie und Werkzeug-Talente frei.',
      es: 'El herrero divino, Vulcano acelera la elaboración y mejora la calidad del equipo. Su árbol desbloquea metalurgia y herramientas avanzadas.',
      it: 'Il divino fabbro, Vulcano accelera l’artigianato e migliora la qualità dell’equipaggiamento. Il suo albero sblocca metallurgia e talenti da officina.',
    },
    tip: {
      en: 'Prioritize Vulcan for gear-heavy, boss-killing builds.',
      fr: 'Priorisez Vulcain pour les builds lourds en équipement et tueurs de boss.',
      de: 'Priorisiert Vulcan für Ausrüstungs-lastige, Boss-tötende Builds.',
      es: 'Prioriza Vulcano para builds pesados en equipo y mataboss.',
      it: 'Dai priorità a Vulcano per build pesanti di equipaggiamento e boss-killer.',
    },
  },

  // ---------------- BOSSES (real, from official media + guides) ----------------
  {
    slug: 'owl',
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
      en: 'A colossal owl and the first hard gate of the campaign. No amount of base-building bypasses it — defeat it, then offer its Eye at the Altar to unlock new crafting recipes and push deeper into the game.',
      fr: 'Une chouette colossale et la première porte difficile de la campagne. Aucune construction ne contourne ça — vainquez-la, puis offrez son Œil à l’Autel pour débloquer de nouvelles recettes.',
      de: 'Eine kolossale Eule und das erste harte Tor der Kampagne. Kein Basenbau umgeht es — besiege sie und opfere ihr Auge am Altar, um neue Rezepte freizuschalten.',
      es: 'Una lechuza colosal y la primera puerta dura de la campaña. Ninguna construcción la esquiva — véncela y ofrece su Ojo en el Altar para desbloquear recetas.',
      it: 'Un gufo colossale e la prima porta dura della campagna. Nessuna costruzione la aggira — sconfiggila e offri il suo Occhio all’Altare per sbloccare nuove ricette.',
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
    slug: 'phoenix',
    kind: 'boss',
    name: 'Phoenix',
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
    slug: 'volcano-tendril',
    kind: 'boss',
    name: 'Volcano Tendril',
    role: {
      en: 'Volcano Boss',
      fr: 'Boss du Volcan',
      de: 'Vulkan-Boss',
      es: 'Jefe del Volcán',
      it: 'Boss del Vulcano',
    },
    image: 'screens/volcanic-tendril.jpg',
    lead: {
      en: 'The mountain’s reaching hand.',
      fr: 'La main tendue de la montagne.',
      de: 'Die greifende Hand des Berges.',
      es: 'La mano que se extiende de la montaña.',
      it: 'La mano che si protende dalla montagna.',
    },
    bio: {
      en: 'A colossal appendage that tears from the volcano itself, sweeping the arena with molten strikes. Avoid the telegraphed sweep, then hit the exposed core for heavy damage.',
      fr: 'Un appendice colossal qui jaillit du volcan même, balayant l’arène de frappes en fusion. Évitez le balayage télégraphié, puis frappez le cœur exposé.',
      de: 'Ein kolossaler Anhängsel, das sich aus dem Vulkan selbst reißt und die Arena mit glühenden Schlägen fegt. Weicht dem angedeuteten Feger aus, dann trefft den freigelegten Kern.',
      es: 'Un apéndice colosal que se desgarra del volcán, barriendo la arena con golpes fundidos. Evita el barrido telegrafiado, luego golpea el núcleo expuesto.',
      it: 'Un appendice colossale che si squarcia dal vulcano stesso, spazzando l’arena con colpi fusi. Evita la spazzata telegrafata, poi colpisci il nucleo esposto.',
    },
    tip: {
      en: 'Avoid the telegraphed sweep, then hit the exposed core for heavy damage.',
      fr: 'Évitez le balayage télégraphié, puis frappez le cœur exposé pour de lourds dégâts.',
      de: 'Weicht dem angedeuteten Feger aus, dann trefft den freigelegten Kern für schweren Schaden.',
      es: 'Evita el barrido telegrafiado, luego golpea el núcleo expuesto para gran daño.',
      it: 'Evita la spazzata telegrafata, poi colpisci il nucleo esposto per danni pesanti.',
    },
    meta: [{ label: 'Biome', value: 'Volcano' }],
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
      en: 'A primeval worm-thing that lurks in the deepest dungeons, devouring light and hope alike. Bait its charge, then flank the exposed side while it recovers.',
      fr: 'Une chose-ver antique qui rôde dans les donjons les plus profonds, dévorant lumière et espoir. Provoquez sa charge, puis flanquez le flanc exposé.',
      de: 'Ein urtümliches Wurmwesen, das in den tiefsten Dungeons lauert und Licht wie Hoffnung verschlingt. Ködert seinen Ansturm, dann flankt die freigelegte Seite.',
      es: 'Una cosa-gusano primigenia que acecha en las mazmorras más profundas, devorando luz y esperanza. Provoca su embestida, luego flanquea el costado expuesto.',
      it: 'Un essere-verme primordiale che si nasconde nei dungeon più profondi, divorando luce e speranza. Provoca la sua carica, poi attaccane il fianco esposto mentre recupera.',
    },
    tip: {
      en: 'Bait its charge, then flank the exposed side while it recovers.',
      fr: 'Provquez sa charge, puis flanquez le flanc exposé pendant sa récupération.',
      de: 'Ködert seinen Ansturm, dann flankt die freigelegte Seite, während er sich erholt.',
      es: 'Provoca su embestida, luego flanquea el costado expuesto mientras recupera.',
      it: 'Provoca la sua carica, poi attaccane il fianco esposto mentre recupera.',
    },
    meta: [{ label: 'Location', value: 'Deep Dungeons' }],
  },
];

export function getEntry(slug: string): LoreEntry | undefined {
  return ENTRIES.find((e) => e.slug === slug);
}

export function entriesByKind(kind: EntryKind): LoreEntry[] {
  return ENTRIES.filter((e) => e.kind === kind);
}
