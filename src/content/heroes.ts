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
  tip: L10n<string>; // gods: how to use · bosses: weakness / strategy
}

export const ENTRIES: LoreEntry[] = [
  // ---------------- GODS (the Roman pantheon you restore) ----------------
  {
    slug: 'jupiter',
    kind: 'god',
    name: 'Jupiter',
    role: { en: 'God of the Sky', fr: 'Dieu du Ciel', de: 'Gott des Himmels', es: 'Dios del Cielo', it: 'Dio del Cielo' },
    lead: { en: 'Crash the heavens on your foes.', fr: 'Abattez les cieux sur vos ennemis.', de: 'Lass die Himmel auf die Feinde krachen.', es: 'Desploma el cielo sobre tus enemigos.', it: 'Abbatti il cielo sui tuoi nemici.' },
    bio: {
      en: 'Lord of storm and thunder, Jupiter empowers your strikes with lightning. Restore him to unlock weather-themed technology and chain-damage talents.',
      fr: 'Maître de l’orage et du tonnerre, Jupiter renforce vos coups d’éclairs. Restaurez-le pour débloquer une technologie climatique et des talents de dégâts en chaîne.',
      de: 'Herr von Sturm und Donner, Jupiter verstärkt eure Schläge mit Blitz. Stellt ihn wieder her, um wetterbasierte Technologie und Ketten-Schadens-Talente freizuschalten.',
      es: 'Señor de la tormenta y el trueno, Júpiter potencia tus golpes con rayos. Restáuralo para desbloquear tecnología climática y talentos de daño en cadena.',
      it: 'Signore di tempesta e tuono, Giove potenzia i tuoi colpi con fulmini. Ripristinalo per sbloccare tecnologia meteorica e talenti di danno a catena.',
    },
    tip: {
      en: 'Pair Jupiter’s buffs with ranged units to clear clustered husks.',
      fr: 'Associez les buffs de Jupiter aux unités à distance pour nettoyer les carcasses groupées.',
      de: 'Kombiniert Jupiters Buffs mit Fernkampf-Einheiten, um gruppierte Hüllen zu räumen.',
      es: 'Combina los buffs de Júpiter con unidades a distancia para limpiar cáscaras agrupadas.',
      it: 'Abbina i buff di Giove alle unità a distanza per ripulire gli involucri raggruppati.',
    },
  },
  {
    slug: 'mars',
    kind: 'god',
    name: 'Mars',
    role: { en: 'God of War', fr: 'Dieu de la Guerre', de: 'Gott des Krieges', es: 'Dios de la Guerra', it: 'Dio della Guerra' },
    lead: { en: 'The blade that never dulls.', fr: 'La lame qui ne s’émousse jamais.', de: 'Das Schwert, das nie stumpf wird.', es: 'La hoja que nunca se embota.', it: 'La lama che non si ottunde mai.' },
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
    slug: 'venus',
    kind: 'god',
    name: 'Venus',
    role: { en: 'Goddess of Harmony', fr: 'Déesse de l’Harmonie', de: 'Göttin der Harmonie', es: 'Diosa de la Armonía', it: 'Dea dell’Armonia' },
    lead: { en: 'A happy camp is a strong camp.', fr: 'Un camp heureux est un camp fort.', de: 'Ein glückliches Lager ist ein starkes Lager.', es: 'Un campamento feliz es un campamento fuerte.', it: 'Un accampamento felice è un accampamento forte.' },
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
    role: { en: 'God of the Forge', fr: 'Dieu de la Forge', de: 'Gott der Schmiede', es: 'Dios de la Forja', it: 'Dio della Fucina' },
    lead: { en: 'What the fire shapes, the enemy fears.', fr: 'Ce que le feu façonne, l’ennemi le craint.', de: 'Was das Feuer formt, fürchtet der Feind.', es: 'Lo que el fuego forja, el enemigo lo teme.', it: 'Ciò che il fuoco plasma, il nemico lo teme.' },
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
  {
    slug: 'ceres',
    kind: 'god',
    name: 'Ceres',
    role: { en: 'Goddess of the Harvest', fr: 'Déesse des Moissons', de: 'Göttin der Ernte', es: 'Diosa de la Cosecha', it: 'Dea del Raccolto' },
    lead: { en: 'Bread before banners.', fr: 'Le pain avant les bannières.', de: 'Brot vor Bannern.', es: 'Pan antes que banderas.', it: 'Pane prima delle bandiere.' },
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
    slug: 'mercury',
    kind: 'god',
    name: 'Mercury',
    role: { en: 'God of Trade', fr: 'Dieu du Commerce', de: 'Gott des Handels', es: 'Dios del Comercio', it: 'Dio del Commercio' },
    lead: { en: 'Swift feet, fuller coffers.', fr: 'Pieds légers, coffres pleins.', de: 'Schnelle Füße, volle Kassen.', es: 'Pies ligeros, arcas llenas.', it: 'Piedi veloci, forzieri pieni.' },
    bio: {
      en: 'Mercury speeds travel and trade. His favors improve logistics, cart speed and resource exchange.',
      fr: 'Mercure accélère voyages et commerce. Ses faveurs améliorent logistique, vitesse des chariots et échange de ressources.',
      de: 'Mercur beschleunigt Reisen und Handel. Seine Gunst verbessert Logistik, Karrengeschwindigkeit und Ressourcentausch.',
      es: 'Mercurio acelera viajes y comercio. Sus favores mejoran logística, velocidad de carros e intercambio de recursos.',
      it: 'Mercurio accelera viaggi e commercio. I suoi favori migliorano logistica, velocità dei carri e scambio di risorse.',
    },
    tip: {
      en: 'Lean on Mercury when your base sprawls and hauls get long.',
      fr: 'Comptez sur Mercure quand votre base s’étend et les transports s’allongent.',
      de: 'Verlasst euch auf Mercury, wenn eure Basis wächst und die Transporte lang werden.',
      es: 'Apóyate en Mercurio cuando tu base se extiende y los traslados se alargan.',
      it: 'Appoggiati a Mercurio quando la base si espande e i trasporti si allungano.',
    },
  },

  // ---------------- BOSSES (real, from official media) ----------------
  {
    slug: 'cyclops',
    kind: 'boss',
    name: 'Cyclops',
    role: { en: 'Dungeon Boss', fr: 'Boss de Donjon', de: 'Dungeon-Boss', es: 'Jefe de Mazmorra', it: 'Boss di Dungeon' },
    image: 'screens/fight-cyclops.png',
    lead: { en: 'One eye, endless rage.', fr: 'Un œil, une rage sans fin.', de: 'Ein Auge, endlose Wut.', es: 'Un ojo, furia sin fin.', it: 'Un occhio, rabbia infinita.' },
    bio: {
      en: 'A mountain of a brute that guards a hidden lair. Slow but devastating — its club shake can flatten a careless party.',
      fr: 'Une montagne de brute qui garde un repaire caché. Lent mais dévastateur — son secousse de massue aplatit une équipe imprudente.',
      de: 'Ein berggleicher Brutalo, der ein verstecktes Lair bewacht. Langsam, doch verheerend — sein Keulenschlag kann eine unvorsichtige Gruppe plattmachen.',
      es: 'Una mole de bruto que guarda una guarida oculta. Lento pero devastador — su golpe de maza aplasta a un grupo descuidado.',
      it: 'Una mole di bruto che custodisce un covo nascosto. Lento ma devastante — la sua mazzata può schiacciare un gruppo distratto.',
    },
    tip: {
      en: 'Aim for the eye when it rears back; dodge the overhead slam, then unload.',
      fr: 'Visez l’œil quand il se redresse ; esquivez la massue verticale, puis déversez vos dégâts.',
      de: 'Zielt aufs Auge, wenn es sich aufbäumt; weicht dem Senkschlag aus, dann entladet alles.',
      es: 'Apunta al ojo cuando se yergue; esquiva el mazazo y luego descarga.',
      it: 'Mira all’occhio quando si rizza; schiva la mazzata dall’alto, poi scarica tutto.',
    },
  },
  {
    slug: 'owl',
    kind: 'boss',
    name: 'Owl Sentinel',
    role: { en: 'Sky Boss', fr: 'Boss Céleste', de: 'Himmels-Boss', es: 'Jefe Aéreo', it: 'Boss del Cielo' },
    image: 'screens/owl-fight.jpg',
    lead: { en: 'Silent wings, deadly talons.', fr: 'Ailes silencieuses, serres mortelles.', de: 'Stille Schwingen, tödliche Krallen.', es: 'Alas silenciosas, garras mortales.', it: 'Ali silenti, artigli letali.' },
    bio: {
      en: 'A nocturnal raptor that strikes from above and vanishes into the dark. It controls the air over forest ruins.',
      fr: 'Un rapace nocturne qui frappe d’en haut et disparaît dans l’ombre. Il domine les airs au-dessus des ruines forestières.',
      de: 'Ein nächtlicher Raubvogel, der von oben zuschlägt und in der Dunkelheit verschwindet. Er beherrscht die Luft über Waldruinen.',
      es: 'Una rapaz nocturna que golpea desde arriba y desaparece en la oscuridad. Controla el aire sobre las ruinas del bosque.',
      it: 'Un rapace notturno che colpisce dall’alto e svanisce nel buio. Comanda l’aria sulle rovine della foresta.',
    },
    tip: {
      en: 'Break line of sight and strike the moment it lands; ranged fire brings it down fastest.',
      fr: 'Coupez la ligne de vue et frappez dès son atterrissage ; le feu à distance l’abat le plus vite.',
      de: 'Unterbrecht die Sichtlinie und schlagt zu, sobald es landet; Fernkampf holt es am schnellsten runter.',
      es: 'Corta la línea de visión y golpea al aterrizar; el fuego a distancia lo derriba más rápido.',
      it: 'Spezza la linea di vista e colpisci appena atterra; il fuoco a distanza lo abbatte più in fretta.',
    },
  },
  {
    slug: 'phoenix',
    kind: 'boss',
    name: 'Phoenix',
    role: { en: 'Volcanic Boss', fr: 'Boss Volcanique', de: 'Vulkan-Boss', es: 'Jefe Volcánico', it: 'Boss Vulcanico' },
    image: 'screens/phoenix-fight.jpg',
    lead: { en: 'Reborn from ash.', fr: 'Renaît de la cendre.', de: 'Aus Asche wiedergeboren.', es: 'Renace de la ceniza.', it: 'Rinasce dalla cenere.' },
    bio: {
      en: 'A flame-bound avian that ignites the volcano biome. Each death feeds a faster, fiercer rebirth.',
      fr: 'Un volatile lié au feu qui embrase le biome volcanique. Chaque mort nourrit une renaissance plus rapide et féroce.',
      de: 'Ein feuergebundener Vogel, der das Vulkan-Biom entflammt. Jeder Tod nährt eine schnellere, wildere Wiedergeburt.',
      es: 'Una ave unida al fuego que incendia el bioma volcánico. Cada muerte alimenta un renacer más rápido y feroz.',
      it: 'Un uccello legato al fuoco che incendia il bioma vulcanico. Ogni morte nutre una rinascita più rapida e fiera.',
    },
    tip: {
      en: 'Burst it down during its vulnerable phase before it can resurrect.',
      fr: 'Burstez-la pendant sa phase vulnérable avant qu’elle ne ressuscite.',
      de: 'Burstet sie in ihrer verwundbaren Phase, bevor sie wiederaufersteht.',
      es: 'Hazle burst durante su fase vulnerable antes de que resucite.',
      it: 'Scaricale un burst nella fase vulnerabile prima che risorga.',
    },
  },
  {
    slug: 'volcano-tendril',
    kind: 'boss',
    name: 'Volcano Tendril',
    role: { en: 'Volcano Boss', fr: 'Boss du Volcan', de: 'Vulkan-Boss', es: 'Jefe del Volcán', it: 'Boss del Vulcano' },
    image: 'screens/volcanic-tendril.jpg',
    lead: { en: 'The mountain’s reaching hand.', fr: 'La main tendue de la montagne.', de: 'Die greifende Hand des Berges.', es: 'La mano que se extiende de la montaña.', it: 'La mano che si protende dalla montagna.' },
    bio: {
      en: 'A colossal appendage that tears from the volcano itself, sweeping the arena with molten strikes.',
      fr: 'Un appendice colossal qui jaillit du volcan même, balayant l’arène de frappes en fusion.',
      de: 'Ein kolossaler Anhängsel, das sich aus dem Vulkan selbst reißt und die Arena mit glühenden Schlägen fegt.',
      es: 'Un apéndice colosal que se desgarra del volcán, barriendo la arena con golpes fundidos.',
      it: 'Un appendice colossale che si squarcia dal vulcano stesso, spazzando l’arena con colpi fusi.',
    },
    tip: {
      en: 'Avoid the telegraphed sweep, then hit the exposed core for heavy damage.',
      fr: 'Évitez le balayage télégraphié, puis frappez le cœur exposé pour de lourds dégâts.',
      de: 'Weicht dem angedeuteten Feger aus, dann trefft den freigelegten Kern für schweren Schaden.',
      es: 'Evita el barrido telegrafiado, luego golpea el núcleo expuesto para gran daño.',
      it: 'Evita la spazzata telegrafata, poi colpisci il nucleo esposto per danni pesanti.',
    },
  },
  {
    slug: 'pyzifax',
    kind: 'boss',
    name: 'Pyzifax',
    role: { en: 'Dungeon Boss', fr: 'Boss de Donjon', de: 'Dungeon-Boss', es: 'Jefe de Mazmorra', it: 'Boss di Dungeon' },
    image: 'screens/fight-pyzifax.png',
    lead: { en: 'Ancient and ravenous.', fr: 'Ancien et ravageur.', de: 'Antik und gefräßig.', es: 'Antiguo y voraz.', it: 'Antico e vorace.' },
    bio: {
      en: 'A primeval worm-thing that lurks in the deepest dungeons, devouring light and hope alike.',
      fr: 'Une chose-ver antique qui rôde dans les donjons les plus profonds, dévorant lumière et espoir.',
      de: 'Ein urtümliches Wurmwesen, das in den tiefsten Dungeons lauert und Licht wie Hoffnung verschlingt.',
      es: 'Una cosa-gusano primigenia que acecha en las mazmorras más profundas, devorando luz y esperanza.',
      it: 'Un essere-verme primordiale che si nasconde nei dungeon più profondi, divorando luce e speranza.',
    },
    tip: {
      en: 'Bait its charge, then flank the exposed side while it recovers.',
      fr: 'Provquez sa charge, puis flanquez le flanc exposé pendant sa récupération.',
      de: 'Ködert seinen Ansturm, dann flankt die freigelegte Seite, während er sich erholt.',
      es: 'Provoca su embestida, luego flanquea el costado expuesto mientras recupera.',
      it: 'Provoca la sua carica, poi attaccane il fianco esposto mentre recupera.',
    },
  },
];

export function getEntry(slug: string): LoreEntry | undefined {
  return ENTRIES.find((e) => e.slug === slug);
}

export function entriesByKind(kind: EntryKind): LoreEntry[] {
  return ENTRIES.filter((e) => e.kind === kind);
}
