import type { Locale } from '../i18n/utils';
import type { L10n } from '../i18n/utils';

export type GuideCategory = 'survival' | 'building' | 'mechanic' | 'gods' | 'boss' | 'coop';

export interface Guide {
  slug: string;
  category: GuideCategory;
  updated: string;
  title: L10n<string>;
  description: L10n<string>;
  tip?: L10n<string>;
  cover?: string; // path inside public/media, e.g. 'screens/woods-night.jpg'
  video?: { id: string; title: L10n<string> };
  gallery?: string[];
  // Body as ordered sections; each section may carry an inline screenshot.
  sections: L10n<{ h: string; p: string[]; media?: string }[]>;
}

export const GUIDES: Guide[] = [
  {
    slug: 'survive-night',
    category: 'survival',
    updated: '2026-07-10',
    tip: {
      en: 'Scout toward the map center before you settle — a spot near coal, water and several biome borders saves hundreds of trips later.',
      fr: 'Explorez vers le centre de la carte avant de vous installer — un point près du charbon, de l’eau et de plusieurs biomes évite des centaines de trajets.',
      de: 'Kundschafte zur Kartenmitte, bevor du dich niederlässt — ein Platz nahe Kohle, Wasser und mehreren Biom-Grenzen spart später hunderte Fahrten.',
      es: 'Explora hacia el centro del mapa antes de asentarte — un punto cerca de carbón, agua y varios biomas ahorra cientos de viajes.',
      it: 'Esplora verso il centro della mappa prima di stabilirti — un punto vicino a carbone, acqua e diversi biomi risparmia centinaia di viaggi.',
    },
    title: {
      en: 'Survive the Fall: Your First Night',
      fr: 'Survivre à la Chute : votre première nuit',
      de: 'Überlebe den Fall: Deine erste Nacht',
      es: 'Sobrevive a la Caída: tu primera noche',
      it: 'Sopravvivi alla Caduta: la tua prima notte',
    },
    description: {
      en: 'Rome has fallen and the husks hunt at night. Light your torches, raise a wall, and live to see dawn.',
      fr: 'Rome est tombée et les carcasses chassent la nuit. Allumez vos torches, élevez un mur et vivez jusqu’à l’aube.',
      de: 'Rom ist gefallen und die Hüllen jagen nachts. Entzünde deine Fackeln, errichte eine Mauer und erlebe den Morgen.',
      es: 'Roma ha caído y las cáscaras cazan de noche. Enciende tus antorchas, levanta un muro y vive hasta el amanecer.',
      it: 'Roma è caduta e gli involucri danno la caccia di notte. Accendi le torce, erigi un muro e vivi fino all’alba.',
    },
    cover: 'screens/woods-night.jpg',
    video: {
      id: 'JAnaIQkwYOo',
      title: { en: 'Romestead — Official Launch Trailer', fr: 'Romestead — Bande-annonce de lancement', de: 'Romestead — Launch-Trailer', es: 'Romestead — Tráiler de lanzamiento', it: 'Romestead — Trailer di lancio ufficiale' },
    },
    gallery: ['screens/woods-night.jpg', 'screens/forest-combat.jpg', 'screens/town-start.png'],
    sections: {
      en: [
        { h: 'Light the dark', p: ['When night falls the reanimated citizens of Rome — the Fallen — leave their husks and hunt by sound and movement.', 'Torches and braziers push them back; keep a ring of fire around your camp and craft a torch before dusk.'] },
        { h: 'Build a wall, not a palace', p: ['Your first structure should be defensible, not pretty. A simple palisade funnels the horde into choke points.', 'Wood is everywhere in the early wilds — harvest it before you worry about stone.'] },
        { h: 'Craft, then fight', p: ['A sharpened spear or axe turns a frightened refugee into a survivor; prioritize a weapon bench early.', 'Fallen husks are slow — kite them around obstacles and let your wall finish the job.'] },
      ],
      fr: [
        { h: 'Éclairez l’obscurité', p: ['Quand la nuit tombe, les citoyens réanimés de Rome — les Déchus — quittent leurs dépouilles et chassent au son et au mouvement.', 'Torches et braseros les repoussent ; gardez un cercle de feu autour du camp et forgez une torche avant le crépuscule.'] },
        { h: 'Élevez un mur, pas un palais', p: ['Votre première structure doit se défendre, pas être belle. Une palissade simple canalise la horde vers des points de blocage.', 'Le bois abonde dans les premiers lieux sauvages — récoltez-le avant de vous soucier de la pierre.'] },
        { h: 'Forgez, puis combattez', p: ['Une lance ou une hache aiguisée transforme un réfugié effrayé en survivant ; priorisez un établi d’armes tôt.', 'Les carcasses déchues sont lentes — attirez-les autour d’obstacles et laissez votre mur finir le travail.'] },
      ],
      de: [
        { h: 'Erhelle die Dunkelheit', p: ['Wenn die Nacht fällt, verlassen die reanimierten Bürger Roms — die Gefallenen — ihre Hüllen und jagen nach Laut und Bewegung.', 'Fackeln und Feuerschalen drängen sie zurück; haltet einen Feuerring ums Lager und schmiedet vor der Dämmerung eine Fackel.'] },
        { h: 'Baue eine Mauer, keinen Palast', p: ['Deine erste Struktur soll verteidigbar sein, nicht hübsch. Ein einfacher Palisadenzaun lenkt die Horde in Engpässe.', 'Holz gibt es überall in der frühen Wildnis — erntet es, bevor ihr euch um Stein sorgt.'] },
        { h: 'Schmiede, dann kämpfe', p: ['Ein geschärfter Speer oder Beil macht aus einem verängstigten Flüchtling einen Überlebenden; baut früh eine Waffenbank.', 'Gefallene Hüllen sind langsam — zirkelt sie um Hindernisse und lasst eure Mauer den Rest erledigen.'] },
      ],
      es: [
        { h: 'Ilumina la oscuridad', p: ['Cuando cae la noche, los ciudadanos reanimados de Roma — los Caídos — dejan sus cáscaras y cazan por sonido y movimiento.', 'Antorchas y braseros los repelen; mantén un anillo de fuego y forja una antorcha antes del anochecer.'] },
        { h: 'Levanta un muro, no un palacio', p: ['Tu primera estructura debe defenderse, no ser bonita. Una empalizada simple canaliza la horda hacia puntos de estrangulamiento.', 'La madera abunda en la primera naturaleza — recógela antes de preocuparte por la piedra.'] },
        { h: 'Forja, luego lucha', p: ['Una lanza o hacha afilada convierte a un refugiado aterrorizado en superviviente; prioriza una banca de armas pronto.', 'Las cáscaras caídas son lentas — atráelas por obstáculos y deja que tu muro termine el trabajo.'] },
      ],
      it: [
        { h: 'Illumina il buio', p: ['Quando cala la notte, i cittadini rianimati di Roma — i Caduti — lasciano i loro involucri e cacciano per suono e movimento.', 'Torce e bracieri li respingono; mantieni un cerchio di fuoco attorno all’accampamento e forgia una torcia prima del crepuscolo.'] },
        { h: 'Ergi un muro, non un palazzo', p: ['La tua prima struttura deve difendersi, non essere bella. Una semplice palizzata incanala l’orda nei punti di strozzatura.', 'Il legno abbonda nei primi luoghi selvaggi — raccoglilo prima di preoccuparti della pietra.'] },
        { h: 'Forgia, poi combatti', p: ['Una lancia o un’ascia affilata trasforma un rifugiato spaventato in un sopravvissuto; costruisci presto un banco da lavoro per armi.', 'Gli involucri caduti sono lenti — attirali tra ostacoli e lascia che il tuo muro finisca il lavoro.'] },
      ],
    },
  },
  {
    slug: 'build-town',
    category: 'building',
    updated: '2026-07-10',
    tip: {
      en: 'Two citizen perks are quietly dangerous: Gluttonous (more food) and Disloyal (50% slower expertise). Avoid them when recruiting.',
      fr: 'Deux perks de citoyens sont sournoisement dangereux : Glouton (plus de nourriture) et Déloyal (expertise 50% plus lente). À éviter au recrutement.',
      de: 'Zwei Bürger-Perks sind heimlich gefährlich: Gefräßig (mehr Essen) und Unloyale (50% langsamere Expertise). Beim Rekrutieren meiden.',
      es: 'Dos perks de ciudadanos son peligrosos en silencio: Glotón (más comida) y Desleal (expertise 50% más lenta). Evítalos al reclutar.',
      it: 'Due perk dei cittadini sono subdolamente pericolosi: Goloso (più cibo) e Disleale (expertise 50% più lenta). Evitali al reclutamento.',
    },
    title: {
      en: 'Rebuild Civilization: Your First Settlement',
      fr: 'Rebâtir la civilisation : votre premier établissement',
      de: 'Zivilisation neu aufbauen: Deine erste Siedlung',
      es: 'Reconstruye la civilización: tu primer asentamiento',
      it: 'Ricostruisci la civiltà: il tuo primo insediamento',
    },
    description: {
      en: 'From a lonely stead to a thriving colony — Blacksmiths, Farmsteads, happy citizens and the logistics that feed them.',
      fr: 'D’un stead solitaire à une colonie florissante — Forgerons, Fermes, citoyens heureux et la logistique qui les nourrit.',
      de: 'Von einer einsamen Stead zu einer blühenden Kolonie — Schmiede, Farmen, zufriedene Bürger und die Logistik, die sie ernährt.',
      es: 'De un stead solitario a una colonia próspera — Herreros, Granjas, ciudadanos felices y la logística que los alimenta.',
      it: 'Da una stead solitaria a una colonia fiorente — Fabbro, Fattoria, cittadini felici e la logistica che li nutre.',
    },
    cover: 'screens/community.jpg',
    video: {
      id: 'ALzGWccYmt0',
      title: { en: 'Community Town Showcase #1 — a 160-hour player city', fr: 'Community Town Showcase #1 — une ville de 160 h', de: 'Community Town Showcase #1 — eine 160-Stunden-Stadt', es: 'Community Town Showcase #1 — una ciudad de 160 h', it: 'Community Town Showcase #1 — una città di 160 ore' },
    },
    gallery: ['screens/town-nice.jpg', 'screens/construct-sites.jpg', 'screens/desert-town.png'],
    sections: {
      en: [
        { h: 'Core buildings', p: ['Establish a Blacksmith, Leatherworker and Farmstead to unlock the basics of crafting, gear and food.', 'Each artisan you recruit opens new recipes — gather folks from all walks of life.'] },
        { h: 'Keep citizens happy and fed', p: ['Hungry or unhappy citizens stop working. Build homes and decorations to raise happiness, and protect your food buffer.', 'A content town automates itself; a starving one collapses.'] },
        { h: 'Expand and colonize', p: ['Once stable, send colonists to new areas of the world to secure resources and treasure.', 'Advanced buildings and logistics chains let you automate production lines.'] },
      ],
      fr: [
        { h: 'Bâtiments essentiels', p: ['Établissez un Forgeron, un Travailleur du cuir et une Ferme pour débloquer l’artisanat, l’équipement et la nourriture.', 'Chaque artisan recruté ouvre de nouvelles recettes — rassemblez des gens de tous horizons.'] },
        { h: 'Gardez les citoyens heureux et nourris', p: ['Les citoyens affamés ou malheureux cessent de travailler. Construisez maisons et décorations pour la félicité, et protégez votre buffer de nourriture.', 'Une ville contente s’automatise ; une ville affamée s’effondre.'] },
        { h: 'Étendez et colonisez', p: ['Une fois stable, envoyez des colons vers de nouvelles zones du monde pour sécuriser ressources et trésors.', 'Bâtiments avancés et chaînes logistiques automatisent vos lignes de production.'] },
      ],
      de: [
        { h: 'Kerngebäude', p: ['Errichte einen Schmied, einen Gerber und eine Farm, um das Basteln, Ausrüstung und Nahrung freizuschalten.', 'Jeder rekrutierte Handwerker öffnet neue Rezepte — holt Leute aus allen Lebenslagen.'] },
        { h: 'Bürger satt und zufrieden halten', p: ['Hungrige oder unglückliche Bürger hören auf zu arbeiten. Baut Häuser und Dekorationen für die Zufriedenheit und schützt euren Nahrungspuffer.', 'Eine zufriedene Stadt automatisiert sich selbst; eine hungernde bricht zusammen.'] },
        { h: 'Erweitern und kolonisieren', p: ['Sobald stabil, schickt Kolonisten in neue Weltgegenden, um Ressourcen und Schätze zu sichern.', 'Fortgeschrittene Gebäude und Logistikketten automatisieren eure Produktionslinien.'] },
      ],
      es: [
        { h: 'Edificios básicos', p: ['Establece un Herrero, un Trabajador del cuero y una Granja para desbloquear la elaboración, el equipo y la comida.', 'Cada artesano que reclutas abre nuevas recetas — reúne gente de todos los ámbitos.'] },
        { h: 'Mantén ciudadanos felices y alimentados', p: ['Los ciudadanos hambrientos o infelices dejan de trabajar. Construye hogares y decoraciones para la felicidad, y protege tu reserva de comida.', 'Una ciudad contenta se automatiza; una hambrienta colapsa.'] },
        { h: 'Expande y coloniza', p: ['Una vez estable, envía colonos a nuevas zonas del mundo para asegurar recursos y tesoros.', 'Edificios avanzados y cadenas logísticas automatizan tus líneas de producción.'] },
      ],
      it: [
        { h: 'Edifici essenziali', p: ['Costruisci un Fabbro, un Conciatore e una Fattoria per sbloccare artigianato, equipaggiamento e cibo.', 'Ogni artigiano reclutato apre nuove ricette — raduna persone di ogni estrazione.'] },
        { h: 'Cittadini felici e sazi', p: ['Cittadini affamati o infelici smettono di lavorare. Costruisci case e decorazioni per l’allegria e proteggi la scorta di cibo.', 'Una città contenta si automatizza; una affamata collassa.'] },
        { h: 'Espandi e colonizza', p: ['Una volta stabili, invia coloni in nuove zone del mondo per assicurare risorse e tesori.', 'Edifici avanzati e catene logistiche automatizzano le linee di produzione.'] },
      ],
    },
  },
  {
    slug: 'haul-throw',
    category: 'mechanic',
    updated: '2026-07-09',
    tip: {
      en: 'Always carry a Tent — drop it outside a dungeon or boss and you respawn right at the entrance instead of trekking back.',
      fr: 'Emportez toujours une Tente — posez-la devant un donjon ou boss et vous réapparaissez à l’entrée au lieu de revenir.',
      de: 'Trag immer ein Zelt — stell es vor einem Dungeon oder Boss auf und du spawns direkt am Eingang statt zurückzulaufen.',
      es: 'Lleva siempre una Tienda — déjala fuera de un dungeon o jefe y reapareces en la entrada en vez de volver.',
      it: 'Porta sempre una Tendola — lasciala fuori da un dungeon o boss e rispawni all’ingresso invece di tornare.',
    },
    title: {
      en: 'No Inventory: Pick Up, Carry, Throw',
      fr: 'Pas d’inventaire : ramassez, portez, lancez',
      de: 'Kein Inventar: Aufheben, Tragen, Werfen',
      es: 'Sin inventario: recoge, carga, lanza',
      it: 'Nessin inventario: raccogli, trasporta, lancia',
    },
    description: {
      en: 'Romestead’s signature twist — there is no inventory. Grab rocks and lumber by hand, and yes, throw them at enemies.',
      fr: 'La touche signature de Romestead — pas d’inventaire. Saisissez pierres et bois à la main, et oui, jetez-les sur les ennemis.',
      de: 'Romesteads Markenzeichen — es gibt kein Inventar. Greift Steine und Holz von Hand, und ja, werft sie auf Feinde.',
      es: 'El giro característico de Romestead — no hay inventario. Agarra piedras y madera a mano, y sí, lánzalas a los enemigos.',
      it: 'La caratteristica di Romestead — non c’è inventario. Prendi pietre e legna a mano, e sì, lanciarle ai nemici.',
    },
    cover: 'screens/ui.jpg',
    video: {
      id: 'i3mv0HHyHIg',
      title: { en: 'Romestead — Official Demo Trailer', fr: 'Romestead — Bande-annonce de la démo', de: 'Romestead — Demo-Trailer', es: 'Romestead — Tráiler de la demo', it: 'Romestead — Trailer della demo ufficiale' },
    },
    gallery: ['screens/ui.jpg', 'screens/shot3.jpg', 'screens/construct-sites.jpg'],
    sections: {
      en: [
        { h: 'Hands, not menus', p: ['Forget inventory management. Walk up to a rock or log, pick it up, and carry it where it is needed.', 'Every resource stays a physical object in the world, keeping you in the action.'] },
        { h: 'Throw rocks in their face', p: ['An enemy closing in? Heft that stone and lob it — a well-placed throw staggers husks and buys space.', 'Thrown lumber can block a path or become a quick barricade.'] },
        { h: 'Logistics by footsteps', p: ['Early hauling is you on foot; later, advanced buildings and carts automate the flow of materials.', 'Plan your layout so workshops sit close to their inputs.'] },
      ],
      fr: [
        { h: 'Les mains, pas les menus', p: ['Oubliez la gestion d’inventaire. Approchez une pierre ou une bûche, ramassez-la et portez-la où elle sert.', 'Chaque ressource reste un objet physique dans le monde, vous gardant dans l’action.'] },
        { h: 'Jetez des pierres en pleine face', p: ['Un ennemi approche ? Soulevez la pierre et lancez-la — un jet bien placé étourdit les carcasses et donne de l’espace.', 'Le bois lancé bloque un chemin ou devient une barricade rapide.'] },
        { h: 'Logistique à pas de porte', p: ['Le transport commence à pied ; plus tard, bâtiments avancés et chariots automatisent le flux de matériaux.', 'Placez vos ateliers près de leurs entrées pour gagner du temps.'] },
      ],
      de: [
        { h: 'Hände, keine Menüs', p: ['Vergiss Inventarverwaltung. Geh zu einem Stein oder Balken, heb ihn auf und trag ihn dorthin, wo er gebraucht wird.', 'Jede Ressource bleibt ein physisches Objekt in der Welt und hält dich im Geschehen.'] },
        { h: 'Wirf Steine ins Gesicht', p: ['Ein Feind rückt näher? Heb den Stein und schleudere ihn — ein guter Wurf betäubt Hüllen und verschafft Raum.', 'Geworfenes Holz blockiert einen Pfad oder wird zur schnellen Barrikade.'] },
        { h: 'Logistik zu Fuß', p: ['Das frühe Schleppen geht zu Fuß; später automatisieren Gebäude und Karren den Materialfluss.', 'Plant euer Layout, sodass Werkstätten nahe ihrer Zulieferer stehen.'] },
      ],
      es: [
        { h: 'Manos, no menús', p: ['Olvida gestionar inventario. Acércate a una piedra o tronco, recógelo y llévalo adonde hace falta.', 'Cada recurso sigue siendo un objeto físico en el mundo, manteniéndote en la acción.'] },
        { h: 'Lanza piedras a la cara', p: ['¿Un enemigo se acerca? Empuja esa piedra y lánzala — un tiro bien puesto aturde las cáscaras y da espacio.', 'La madera lanzada bloquea un camino o se vuelve una barricada rápida.'] },
        { h: 'Logística a paso', p: ['El transporte empieza a pie; más tarde, edificios y carros automatizan el flujo de materiales.', 'Diseña el trazado para que los talleres estén cerca de sus insumos.'] },
      ],
      it: [
        { h: 'Mani, non menu', p: ['Dimentica la gestione dell’inventario. Avvicinati a una pietra o a un tronco, raccoglilo e trasportalo dove serve.', 'Ogni risorsa resta un oggetto fisico nel mondo, tenendoti nell’azione.'] },
        { h: 'Lancia pietre in faccia', p: ['Un nemico si avvicina? Solleva la pietra e scagliala — un lancio azzeccato stordisce gli involucri e compra spazio.', 'Il legno lanciato blocca un sentiero o diventa una barriera rapida.'] },
        { h: 'Logistica a piedi', p: ['All’inizio trasporti a piedi; poi edifici avanzati e carri automatizzano il flusso dei materiali.', 'Disponi la disposizione in modo che le officine stiano vicino ai loro input.'] },
      ],
    },
  },
  {
    slug: 'gods-favors',
    category: 'gods',
    updated: '2026-07-08',
    tip: {
      en: 'Favors can be reset later by drinking the Canteen of Youth from a level-2 merchant, so experiment early without fear.',
      fr: 'Les faveurs peuvent être réinitialisées en buvant la Gourde de Jouvence d’un marchand niveau 2 — expérimentez tôt sans crainte.',
      de: 'Favors lassen sich später mit dem Jugendkrug eines Händlers Stufe 2 zurücksetzen — experimentiere früh ohne Angst.',
      es: 'Los favores se pueden reiniciar bebiendo la Cantimplora de la Juventud de un mercader nivel 2 — experimenta pronto sin miedo.',
      it: 'I favori si possono resettare bevendo la Borraccia della Giovinezza di un mercante livello 2 — sperimenta presto senza paura.',
    },
    title: {
      en: 'Choose Your Gods: Favors & Tech Trees',
      fr: 'Choisissez vos Dieux : faveurs et arbres technologiques',
      de: 'Wähle deine Götter: Gunst & Techbäume',
      es: 'Elige a tus Dioses: favores y árboles tecnológicos',
      it: 'Scegli i tuoi Dei: favori e alberi tecnologici',
    },
    description: {
      en: 'The pantheon lost its worshippers and its power. Offer, sacrifice, and decide together which gods return to glory.',
      fr: 'Le panthéon a perdu ses fidèles et son pouvoir. Offrez, sacrifiez et décidez ensemble quels dieux reviennent à la gloire.',
      de: 'Der Pantheon verlor seine Anhänger und seine Macht. Opfert, bringt dar und entscheidet gemeinsam, welche Götter zurückkehren.',
      es: 'El panteón perdió a sus fieles y su poder. Ofrece, sacrifica y decidid juntos qué dioses vuelven a la gloria.',
      it: 'Il pantheon ha perso i suoi fedeli e il suo potere. Offri, sacrifica e decidete insieme quali dei tornano alla gloria.',
    },
    cover: 'screens/altar.jpg',
    video: {
      id: '2nO5gRyMz68',
      title: { en: 'Romestead Dev Update: Controller, Steam Deck & new biome', fr: 'Romestead Dev Update', de: 'Romestead Dev-Update', es: 'Romestead Dev Update', it: 'Romestead Dev Update' },
    },
    gallery: ['screens/altar.jpg', 'screens/volcano-poi.png', 'screens/phoenix-fight.jpg'],
    sections: {
      en: [
        { h: 'The fallen pantheon', p: ['After Rome fell, the gods faded with their followers. Restoring them is the heart of your progression.', 'Each god grants a distinct set of buffs once honored.'] },
        { h: 'Offerings & sacrifices', p: ['Perform offerings and sacrifices to earn favor. What you give shapes what you get back.', 'Coordinate with friends — in co-op the whole party benefits from restored gods.'] },
        { h: 'Unlock technology', p: ['Every god carries its own branch of technology and talents to unlock as you rise.', 'Pick gods that match your playstyle: war, harvest, craft or trade.'] },
      ],
      fr: [
        { h: 'Le panthéon déchu', p: ['Après la chute de Rome, les dieux ont pâli avec leurs fidèles. Les restaurer est le cœur de votre progression.', 'Chaque dieu accorde un ensemble distinct de buffs une fois honoré.'] },
        { h: 'Offrandes et sacrifices', p: ['Effectuez des offrandes et sacrifices pour gagner de la faveur. Ce que vous donnez façonne ce que vous recevez.', 'Coordonnez avec vos amis — en co-op, tout le groupe profite des dieux restaurés.'] },
        { h: 'Débloquez la technologie', p: ['Chaque dieu porte sa propre branche technologique et ses talents à débloquer en progressant.', 'Choisissez des dieux selon votre style : guerre, récolte, artisanat ou commerce.'] },
      ],
      de: [
        { h: 'Der gefallene Pantheon', p: ['Nach Roms Fall verblassten die Götter mit ihren Anhängern. Ihre Wiederherstellung ist das Herz eures Fortschritts.', 'Jeder Gott gewährt einen eigenen Satz Buffs, sobald er geehrt wird.'] },
        { h: 'Opfer & Darbringungen', p: ['Bringt Opfer und Gaben, um Gunst zu erwerben. Was ihr gebt, formt, was ihr zurückerhaltet.', 'Koordiniert euch mit Freunden — im Ko-op profitiert die ganze Gruppe von wiederhergestellten Göttern.'] },
        { h: 'Technologie freischalten', p: ['Jeder Gott trägt seinen eigenen Technologiezweig und Talente, die ihr mit dem Aufstieg freischaltet.', 'Wählt Götter passend zu eurem Stil: Krieg, Ernte, Handwerk oder Handel.'] },
      ],
      es: [
        { h: 'El panteón caído', p: ['Tras la caída de Roma, los dioses se apagaron con sus fieles. Restaurarlos es el corazón de tu progresión.', 'Cada dios otorga un conjunto distinto de buffs una vez honrado.'] },
        { h: 'Ofrendas y sacrificios', p: ['Realiza ofrendas y sacrificios para ganar favor. Lo que das moldea lo que recibes.', 'Coordina con amigos — en co-op todo el grupo beneficia de los dioses restaurados.'] },
        { h: 'Desbloquea tecnología', p: ['Cada dios trae su propia rama tecnológica y talentos por desbloquear al avanzar.', 'Elige dioses según tu estilo: guerra, cosecha, artesanía o comercio.'] },
      ],
      it: [
        { h: 'Il pantheon caduto', p: ['Dopo la caduta di Roma, i dei sfumarono con i loro fedeli. Ripristinarli è il cuore della tua progressione.', 'Ogni dio concede un proprio insieme di buff una volta onorato.'] },
        { h: 'Offerte e sacrifici', p: ['Compie offerte e sacrifici per ottenere favore. Ciò che doni plasma ciò che ricevi.', 'Coordinati con gli amici — in co-op tutto il gruppo trae beneficio dai dei ripristinati.'] },
        { h: 'Sblocca la tecnologia', p: ['Ogni dio porta il proprio ramo tecnologico e talenti da sbloccare salendo di livello.', 'Scegli dei adatti al tuo stile: guerra, raccolto, artigianato o commercio.'] },
      ],
    },
  },
  {
    slug: 'dungeons-bosses',
    category: 'boss',
    updated: '2026-07-07',
    tip: {
      en: 'Gear up steadily: Leather → Copper → Bronze/Iron, then legendary. The Volcano biome is close to mandatory in solo play.',
      fr: 'Montez en armure régulièrement : Cuir → Cuivre → Bronze/Fer, puis légendaire. Le Volcan est quasi obligatoire en solo.',
      de: 'Bessere stetig deine Ausrüstung: Leder → Kupfer → Bronze/Eisen, dann legendär. Der Vulkan ist solo fast Pflicht.',
      es: 'Mejora el equipo poco a poco: Cuero → Cobre → Bronce/Hierro, luego legendario. El Volcán es casi obligatorio en solitario.',
      it: 'Migliora l’armatura costantemente: Cuoio → Rame → Bronzo/Ferro, poi leggendaria. Il Vulcano in solo è quasi obbligatorio.',
    },
    title: {
      en: 'Dungeons & Bosses: Raid the Hidden Lairs',
      fr: 'Donjons & Boss : envahissez les repaires cachés',
      de: 'Dungeons & Bosse: Überfall die versteckten Lair',
      es: 'Mazmorras y Jefes: asalta las guaridas ocultas',
      it: 'Dungeon e Boss: razzia i covi nascosti',
    },
    description: {
      en: 'Gather your party and descend. Loot, puzzles and brutal bosses like the Cyclops, Owl, Phoenix and Pyzifax await.',
      fr: 'Rassemblez votre groupe et descendez. Butin, énigmes et boss brutaux comme le Cyclope, la Chouette, le Phénix et Pyzifax vous attendent.',
      de: 'Versammelt eure Gruppe und steigt hinab. Beute, Rätsel und brutale Bosse wie Zyklop, Eule, Phönix und Pyzifax warten.',
      es: 'Reúne a tu grupo y desciende. Botín, acertijos y jefes brutales como el Cíclope, el Búho, el Fénix y Pyzifax aguardan.',
      it: 'Raduna il gruppo e scendi. Bottino, enigmi e boss brutali come Ciclope, Gufo, Fenice e Pyzifax ti attendono.',
    },
    cover: 'screens/dungeon.jpg',
    video: {
      id: 'qH0l3VLKIIA',
      title: { en: 'Romestead — Official Announcement Trailer', fr: 'Romestead — Bande-annonce de présentation', de: 'Romestead — Ankündigungs-Trailer', es: 'Romestead — Tráiler de presentación', it: 'Romestead — Trailer di annuncio ufficiale' },
    },
    gallery: ['screens/dungeon.jpg', 'screens/fight-cyclops.png', 'screens/owl-fight.jpg', 'screens/phoenix-fight.jpg', 'screens/volcano-poi.png', 'screens/fight-pyzifax.png'],
    sections: {
      en: [
        { h: 'Find the hidden locations', p: ['Challenging bosses lurk in dungeons filled with tough enemies and trap-laden puzzles.', 'Explore the wilds and unique biomes to uncover their lairs.'] },
        { h: 'Bring your build', p: ['Every boss demands a different approach. Use your party’s unique builds and buffs to succeed.', 'The Cyclops, Owl Sentinel, Phoenix, Volcano Tendril and Pyzifax each reward different tactics.'] },
        { h: 'Loot and learn', p: ['Clear a dungeon and you walk out with gear, recipes and the confidence to go deeper.', 'Practice runs teach attack patterns better than any guide.'] },
      ],
      fr: [
        { h: 'Trouvez les lieux cachés', p: ['Des boss redoutables se cachent dans des donjons pleins d’ennemis coriaces et de puzzles piégés.', 'Explorez les lieux sauvages et les biomes uniques pour découvrir leurs repaires.'] },
        { h: 'Amenez votre build', p: ['Chaque boss exige une approche différente. Utilisez les builds uniques de votre groupe et vos buffs.', 'Le Cyclope, la Chouette, le Phénix, le Résurgence volcanique et Pyzifax récompensent chacun d’autres tactiques.'] },
        { h: 'Butin et leçon', p: ['Videz un donjon et ressortez avec équipement, recettes et la confiance d’aller plus loin.', 'Les runs d’entraînement enseignent les patterns mieux que tout guide.'] },
      ],
      de: [
        { h: 'Finde die versteckten Orte', p: ['Gefährliche Bosse lauern in Dungeons voller harter Feinde und fallengespickter Rätsel.', 'Erkundet die Wildnis und einzigartige Biome, um ihre Lair zu finden.'] },
        { h: 'Bring deinen Build', p: ['Jeder Boss verlangt einen anderen Ansatz. Nutzt die einzigartigen Builds und Buffs eurer Gruppe.', 'Zyklop, Eulen-Wächter, Phönix, Vulkan-Tentakel und Pyzifax belohnen je eigene Taktiken.'] },
        { h: 'Beute und Lehre', p: ['Räumt ein Dungeon und geht mit Ausrüstung, Rezepten und der Zuversicht, tiefer zu gehen.', 'Übungsläufe lehren Angriffsmuster besser als jeder Guide.'] },
      ],
      es: [
        { h: 'Encuentra los lugares ocultos', p: ['Jefes desafiantes acechan en mazmorras llenas de enemigos duros y acertijos con trampas.', 'Explora la naturaleza y biomas únicos para descubrir sus guaridas.'] },
        { h: 'Trae tu build', p: ['Cada jefe exige un enfoque distinto. Usa los builds únicos de tu grupo y tus buffs.', 'El Cíclope, el Centinela Búho, el Fénix, el Tentáculo Volcánico y Pyzifax premian distintas tácticas.'] },
        { h: 'Botín y aprendizaje', p: ['Limpia una mazmorra y sales con equipo, recetas y la confianza para ir más hondo.', 'Las corridas de práctica enseñan patrones mejor que cualquier guía.'] },
      ],
      it: [
        { h: 'Trova i luoghi nascosti', p: ['Boss temibili si nascondono in dungeon pieni di nemici duri e rompicapi trappolati.', 'Esplora i luoghi selvaggi e i biomi unici per scoprirne i covi.'] },
        { h: 'Porta il tuo build', p: ['Ogni boss richiede un approccio diverso. Usa i build unici del gruppo e i tuoi buff.', 'Ciclope, Sentinella Gufo, Fenice, Tentacolo Vulcanico e Pyzifax premiano ciascuno tattiche diverse.'] },
        { h: 'Bottino e lezione', p: ['Svuota un dungeon e ne esci con equipaggiamento, ricette e la sicurezza di scendere più a fondo.', 'Le corse di prova insegnano gli schemi meglio di qualsiasi guida.'] },
      ],
    },
  },
  {
    slug: 'co-op',
    category: 'coop',
    updated: '2026-07-06',
    tip: {
      en: 'Use SaveSync: the host can share the world save so anyone can take over as admin when the original host is offline.',
      fr: 'Utilisez SaveSync : l’hôte peut partager la sauvegarde pour qu’un autre devienne admin quand il est hors ligne.',
      de: 'Nutze SaveSync: Der Host kann die Welt-Save teilen, sodass jeder Admin wird, wenn der Host offline ist.',
      es: 'Usa SaveSync: el anfitrión puede compartir la partida para que cualquiera sea admin cuando él esté desconectado.',
      it: 'Usa SaveSync: l’host può condividere il salvataggio così chiunque diventa admin quando l’host originale è offline.',
    },
    title: {
      en: 'Co-op for 1–8: Build Rome Together',
      fr: 'Co-op de 1 à 8 : construisez Rome ensemble',
      de: 'Ko-op für 1–8: Bau Rom gemeinsam',
      es: 'Co-op de 1 a 8: construid Roma juntos',
      it: 'Co-op per 1–8: costruite Roma insieme',
    },
    description: {
      en: 'Romestead is built for company. Play solo or squad up with up to seven friends in shared survival.',
      fr: 'Romestead est fait pour la compagnie. Jouez seul ou en escouade avec jusqu’à sept amis en survie partagée.',
      de: 'Romestead ist für Gesellschaft gemacht. Spiel allein oder schließt euch mit bis zu sieben Freunden im kooperativen Überleben zusammen.',
      es: 'Romestead está hecho para compañía. Juega solo o en escuadra con hasta siete amigos en supervivencia compartida.',
      it: 'Romestead è fatto per la compagnia. Gioca da solo o in squadra con fino a sette amici in sopravvivenza condivisa.',
    },
    cover: 'screens/community.jpg',
    video: {
      id: 'ALzGWccYmt0',
      title: { en: 'Community Town Showcase #1 — a 160-hour player city', fr: 'Community Town Showcase #1 — une ville de 160 h', de: 'Community Town Showcase #1 — eine 160-Stunden-Stadt', es: 'Community Town Showcase #1 — una ciudad de 160 h', it: 'Community Town Showcase #1 — una città di 160 ore' },
    },
    gallery: ['screens/community.jpg', 'screens/town-nice.jpg', 'screens/forest-raid.png'],
    sections: {
      en: [
        { h: 'Play with friends', p: ['Drop into a friend’s world or host your own — progress, build and survive as a crew.', 'Shared towns mean shared logistics; divide the labor and thrive.'] },
        { h: 'Divide and conquer', p: ['One player scouts while another farms; a third builds while a fourth fights the night.', 'Coordinated parties clear dungeons that overwhelm a lone governor.'] },
        { h: 'Community builds', p: ['Players have raised astonishing cities across hundreds of hours — the wilds are yours to shape.', 'Trade, specialize and celebrate each other’s architectures.'] },
      ],
      fr: [
        { h: 'Jouez avec des amis', p: ['Rejoignez le monde d’un ami ou hébergez le vôtre — progressez, construisez et survivez en équipe.', 'Les villes partagées partagent la logistique ; divisez le travail et prospérez.'] },
        { h: 'Divisez pour régner', p: ['Un joueur explore pendant qu’un autre cultive ; un troisième construit pendant qu’un quatrième affronte la nuit.', 'Les groupes coordonnés vident des donjons qui écraseraient un gouverneur seul.'] },
        { h: 'Constructions communautaires', p: ['Des joueurs ont élevé des cités stupéfiantes en des centaines d’heures — les lieux sauvages sont à vous de façonner.', 'Échangez, spécialisez-vous et célébrez les architectures les uns des autres.'] },
      ],
      de: [
        { h: 'Spiel mit Freunden', p: ['Spring in die Welt eines Freundes oder hoste deine eigene — fortschreiten, bauen und überleben als Crew.', 'Geteilte Städte bedeuten geteilte Logistik; teilt die Arbeit und gedeiht.'] },
        { h: 'Teile und herrsche', p: ['Ein Spieler kundschaftet, während ein anderer farmt; ein dritter baut, während ein vierter die Nacht bekämpft.', 'Koordinierte Gruppen räumen Dungeons ab, die einen einzelnen Gouverneur überfordern.'] },
        { h: 'Gemeinschaftsbauten', p: ['Spieler haben über hunderte Stunden erstaunliche Städte errichtet — die Wildnis gehört euch.', 'Handelt, spezialisiert euch und feiert eure Architekturen.'] },
      ],
      es: [
        { h: 'Juega con amigos', p: ['Entra al mundo de un amigo o aloja el tuyo — progresa, construye y sobrevive en equipo.', 'Las ciudades compartidas comparten logística; divide el trabajo y prospera.'] },
        { h: 'Divide y vencerás', p: ['Un jugador explora mientras otro cultiva; un tercero construye mientras un cuarto enfrenta la noche.', 'Las partidas coordinadas limpian mazmorras que abruman a un gobernador solo.'] },
        { h: 'Construcciones comunitarias', p: ['Jugadores han alzado ciudades asombrosas en cientos de horas — la naturaleza es tuya para moldear.', 'Intercambia, especialízate y celebra las arquitecturas de los demás.'] },
      ],
      it: [
        { h: 'Gioca con gli amici', p: ['Entra nel mondo di un amico o ospita il tuo — progredisci, costruisci e sopravvivi in squadra.', 'Città condivise significano logistica condivisa; dividi il lavoro e prospera.'] },
        { h: 'Dividi e conquista', p: ['Un giocatore esplora mentre un altro coltiva; un terzo costruisce mentre un quarto affronta la notte.', 'Gruppi coordinati ripuliscono dungeon che sopraffanno un governatore solitario.'] },
        { h: 'Costruzioni della community', p: ['Giocatori hanno eretto città stupefacenti in centinaia di ore — la natura selvaggia è tua da plasmare.', 'Scambia, specializzati e celebra le architetture degli altri.'] },
      ],
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
