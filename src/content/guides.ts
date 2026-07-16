import type { Locale } from '../i18n/utils';
import type { L10n } from '../i18n/utils';

export type GuideCategory = 'survival' | 'building' | 'mechanic' | 'walkthrough' | 'gods' | 'boss' | 'coop' | 'resources' | 'food' | 'bestiary' | 'buildings' | 'faq' | 'biomes' | 'automation';

export interface Guide {
  slug: string;
  category: GuideCategory;
  updated: string;
  title: L10n<string>;
  description: L10n<string>;
  tip?: L10n<string>;
  mustRead?: boolean; // flag a guide as a critical "must-read" pitfall on the homepage
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
      en: 'Survive night one: torches, a wall, and dawn.',
      fr: 'Survis la première nuit : torches, un mur, l’aube.',
      de: 'Überlebe Nacht eins: Fackeln, eine Mauer, der Morgen.',
      es: 'Sobrevive la primera noche: antorchas, un muro, el alba.',
      it: 'Sopravvivi la prima notte: torce, un muro, l’alba.',
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
    mustRead: true,
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
      en: 'Build your first colony: buildings, citizens, logistics.',
      fr: 'Bâtis ta colonie : bâtiments, citoyens, logistique.',
      de: 'Baue deine Kolonie: Gebäude, Bürger, Logistik.',
      es: 'Construye tu colonia: edificios, ciudadanos, logística.',
      it: 'Costruisci la colonia: edifici, cittadini, logistica.',
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
    mustRead: true,
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
      en: 'No inventory. Carry resources by hand and throw them.',
      fr: 'Pas d’inventaire. Porte les ressources à la main et lance-les.',
      de: 'Romesteads Markenzeichen — es gibt kein Inventar. Greift Steine und Holz von Hand, und ja, werft sie auf Feinde.',
      es: 'Sin inventario. Lleva recursos a mano y lánzalos.',
      it: 'Nessun inventario. Trasporta risorse a mano e lanciarle.',
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
      en: 'Restore the gods through offerings and sacrifices.',
      fr: 'Restaure les dieux par offrandes et sacrifices.',
      de: 'Stelle die Götter durch Opfer und Gaben wieder her.',
      es: 'Restaura a los dioses con ofrendas y sacrificios.',
      it: 'Ripristina gli dei con offerte e sacrifici.',
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
      en: 'Raid hidden lairs for loot, puzzles, and bosses.',
      fr: 'Exploite les repaires cachés: butin, énigmes et boss.',
      de: 'Überfalle versteckte Lair: Beute, Rätsel und Bosse.',
      es: 'Asalta las guaridas ocultas: botín, acertijos y jefes.',
      it: 'Razzia i covi nascosti: bottino, enigmi e boss.',
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
        { h: 'Bring your build', p: ['Every boss demands a different approach. Use your party’s unique builds and buffs to succeed.', 'The Cyclops, Guardian of Minerva, Great Phoenix of Arabia, Talos Prototype and Pyzifax each reward different tactics.'] },
        { h: 'Loot and learn', p: ['Clear a dungeon and you walk out with gear, recipes and the confidence to go deeper.', 'Practice runs teach attack patterns better than any guide.'] },
      ],
      fr: [
        { h: 'Trouvez les lieux cachés', p: ['Des boss redoutables se cachent dans des donjons pleins d’ennemis coriaces et de puzzles piégés.', 'Explorez les lieux sauvages et les biomes uniques pour découvrir leurs repaires.'] },
        { h: 'Amenez votre build', p: ['Chaque boss exige une approche différente. Utilisez les builds uniques de votre groupe et vos buffs.', 'Le Cyclope, le Gardien de Minerve, la Grande Phénix d’Arabie, le Talos Prototype et Pyzifax récompensent chacun d’autres tactiques.'] },
        { h: 'Butin et leçon', p: ['Videz un donjon et ressortez avec équipement, recettes et la confiance d’aller plus loin.', 'Les runs d’entraînement enseignent les patterns mieux que tout guide.'] },
      ],
      de: [
        { h: 'Finde die versteckten Orte', p: ['Gefährliche Bosse lauern in Dungeons voller harter Feinde und fallengespickter Rätsel.', 'Erkundet die Wildnis und einzigartige Biome, um ihre Lair zu finden.'] },
        { h: 'Bring deinen Build', p: ['Jeder Boss verlangt einen anderen Ansatz. Nutzt die einzigartigen Builds und Buffs eurer Gruppe.', 'Zyklop, Gardien der Minerva, der Große Phönix von Arabien, der Talos Prototype und Pyzifax belohnen je eigene Taktiken.'] },
        { h: 'Beute und Lehre', p: ['Räumt ein Dungeon und geht mit Ausrüstung, Rezepten und der Zuversicht, tiefer zu gehen.', 'Übungsläufe lehren Angriffsmuster besser als jeder Guide.'] },
      ],
      es: [
        { h: 'Encuentra los lugares ocultos', p: ['Jefes desafiantes acechan en mazmorras llenas de enemigos duros y acertijos con trampas.', 'Explora la naturaleza y biomas únicos para descubrir sus guaridas.'] },
        { h: 'Trae tu build', p: ['Cada jefe exige un enfoque distinto. Usa los builds únicos de tu grupo y tus buffs.', 'El Cíclope, el Guardián de Minerva, la Gran Fénix de Arabia, el Talos Prototype y Pyzifax premian distintas tácticas.'] },
        { h: 'Botín y aprendizaje', p: ['Limpia una mazmorra y sales con equipo, recetas y la confianza para ir más hondo.', 'Las corridas de práctica enseñan patrones mejor que cualquier guía.'] },
      ],
      it: [
        { h: 'Trova i luoghi nascosti', p: ['Boss temibili si nascondono in dungeon pieni di nemici duri e rompicapi trappolati.', 'Esplora i luoghi selvaggi e i biomi unici per scoprirne i covi.'] },
        { h: 'Porta il tuo build', p: ['Ogni boss richiede un approccio diverso. Usa i build unici del gruppo e i tuoi buff.', 'Ciclope, Guardiano di Minerva, la Grande Fenice d’Arabia, il Talos Prototype e Pyzifax premiano ciascuno tattiche diverse.'] },
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
      en: 'Play solo or squad up with up to 7 friends.',
      fr: 'Joue seul ou en escouade avec jusqu’à 7 amis.',
      de: 'Spiel allein oder mit bis zu 7 Freunden im Ko-op.',
      es: 'Juega solo o en escuadra con hasta 7 amigos.',
      it: 'Gioca da solo o in squadra con fino a 7 amici.',
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
  {
    slug: 'professions',
    category: 'mechanic',
    updated: '2026-07-11',
    title: {
      en: 'Choose Your Path: Professions & Citizens',
      fr: 'Choisissez votre voie : professions et citoyens',
      de: 'Wähle deinen Weg: Berufe & Bürger',
      es: 'Elige tu camino: profesiones y ciudadanos',
      it: 'Scegli la tua strada: professioni e cittadini',
    },
    description: {
      en: 'Pick a profession, then recruit and keep citizens.',
      fr: 'Choisi une profession, puis recrute et garde tes citoyens.',
      de: 'Wähle einen Beruf, dann rekrutiere und halte Bürger.',
      es: 'Elige una profesión, luego recluta y mantén ciudadanos.',
      it: 'Scegli una professione, poi recluta e mantieni i cittadini.',
    },
    tip: {
      en: 'Profession skill bonuses are small (about 1.5–5%) — your playstyle matters far more than your starting pick.',
    },
    cover: 'screens/construct-sites.jpg',
    sections: {
      en: [
        { h: 'Eight professions', p: ['At character creation you pick one of eight professions. Each grants a small starting bonus to a matching skill:', 'Swords +5 Swords · Spears +5 Spears · Throwing +5 Throwing · Shields +5 Shields · Construction +5 Construction · Mining +5 Mining · Woodcutting +5 Woodcutting · Scrolls +5 Scrolls.', 'These edges are minor (about 1.5–5%) and skills keep growing by using the right weapon or tool, so your profession never locks you out of anything.'] },
        { h: 'Recruiting citizens', p: ['Survivors are scattered in camps, outposts, ruins and cages across the world. Free a build slot first, then recruit them into your town.', 'The Lumberyard and Leatherworker each house 1 citizen; an Insula houses 3. Plan housing before you recruit.'] },
        { h: 'Keep them fed and loyal', p: ['Citizens need a place to eat and sleep — fail either and they leave. Build Food Storage and keep it stocked so they stay happy and productive.', 'Watch Loyalty, Hunger, Happiness and Food Cost: an underfed, unhappy citizen takes a stat penalty, while loyalty grants bonuses.'] },
      ],
      fr: [
        { h: 'Huit professions', p: ["À la création de personnage, vous choisissez une profession parmi huit. Chacune donne un petit bonus initial à une compétence correspondante :", 'Épées +5 Épées · Lances +5 Lances · Lancer +5 Lancer · Boucliers +5 Boucliers · Construction +5 Construction · Minage +5 Minage · Coupe du bois +5 Coupe du bois · Parchemins +5 Parchemins.', 'Ces avantages sont mineurs (environ 1,5–5 %) et les compétences continuent de croître en utilisant la bonne arme ou outil, donc votre profession ne vous bloque jamais.'] },
        { h: 'Recruter des citoyens', p: ['Les survivants sont dispersés dans les camps, avant-postes, ruines et cages du monde. Libérez un emplacement de construction, puis recrutez-les dans votre ville.', "La Scierie et le Travailleur du cuir hébergent chacun 1 citoyen ; une Insula en héberge 3. Planifiez le logement avant de recruter."] },
        { h: 'Gardez-les nourris et loyaux', p: ["Les citoyens ont besoin d'un endroit pour manger et dormir — manquez l'un et ils partent. Construisez un Réservoir de nourriture et gardez-le approvisionné pour qu'ils restent heureux et productifs.", 'Surveillez Loyauté, Faim, Bonheur et Coût en nourriture : un citoyen sous-alimenté et malheureux subit une pénalité de stats, tandis que la loyauté donne des bonus.'] },
      ],
      de: [
        { h: 'Acht Berufe', p: ['Bei der Charaktererstellung wählst du einen von acht Berufen. Jeder gewährt einen kleinen Startbonus auf eine passende Fertigkeit:', 'Schwerter +5 Schwerter · Speere +5 Speere · Wurfwaffen +5 Wurfwaffen · Schilde +5 Schilde · Bauen +5 Bauen · Bergbau +5 Bergbau · Holzfällen +5 Holzfällen · Schriftrollen +5 Schriftrollen.', 'Diese Vorteile sind gering (ca. 1,5–5 %) und Fertigkeiten wachsen weiter durch die richtige Waffe oder das richtige Werkzeug, sodass dich dein Beruf nie aussperrt.'] },
        { h: 'Bürger rekrutieren', p: ['Überlebende sind über Lager, Außenposten, Ruinen und Käfige in der Welt verstreut. Schaffe zuerst einen Bauplatz, dann rekrutiere sie in deine Stadt.', 'Die Holzfäller-Hütte und der Gerber beherbergen je 1 Bürger; eine Insula beherbergt 3. Plane Wohnraum, bevor du rekrutierst.'] },
        { h: 'Satt und loyal halten', p: ['Bürger brauchen einen Ort zum Essen und Schlafen — fehlt eines, gehen sie. Baue eine Lebensmittel-Lagerung und halte sie bevorratet, damit sie glücklich und produktiv bleiben.', 'Beobachte Loyalität, Hunger, Zufriedenheit und Nahrungskosten: ein unterernährter, unzufriedener Bürger bekommt einen Stat-Malus, während Loyalität Boni gewährt.'] },
      ],
      es: [
        { h: 'Ocho profesiones', p: ['En la creación de personaje eliges una de ocho profesiones. Cada una otorga un pequeño bonus inicial a una habilidad correspondiente:', 'Espadas +5 Espadas · Lanzas +5 Lanzas · Lanzamiento +5 Lanzamiento · Escudos +5 Escudos · Construcción +5 Construcción · Minería +5 Minería · Tala +5 Tala · Pergaminos +5 Pergaminos.', 'Estas ventajas son menores (unos 1,5–5 %) y las habilidades siguen creciendo usando el arma o herramienta correcta, así que tu profesión nunca te bloquea.'] },
        { h: 'Reclutar ciudadanos', p: ['Los supervivientes están dispersos por campamentos, puestos avanzados, ruinas y jaulas del mundo. Libera primero una ranura de construcción y luego reclútalos para tu pueblo.', 'El Aserradero y el Trabajador del cuero alojan 1 ciudadano cada uno; una Insula aloja 3. Planifica la vivienda antes de reclutar.'] },
        { h: 'Manténlos alimentados y leales', p: ['Los ciudadanos necesitan un lugar para comer y dormir: falta uno y se van. Construye Almacén de Comida y mantenlo abastecido para que sigan felices y productivos.', 'Vigila Lealtad, Hambre, Felicidad y Coste de Comida: un ciudadano hambriento e infeliz sufre penalización de stats, mientras que la lealtad otorga bonus.'] },
      ],
      it: [
        { h: 'Otto professioni', p: ["In fase di creazione del personaggio scegli una di otto professioni. Ciascuna concede un piccolo bonus iniziale a un'abilità corrispondente:", 'Spade +5 Spade · Lance +5 Lance · Lancio +5 Lancio · Scudi +5 Scudi · Costruzione +5 Costruzione · Estrazione +5 Estrazione · Taglio legname +5 Taglio legname · Pergamene +5 Pergamene.', "Questi vantaggi sono minori (circa 1,5–5 %) e le abilità crescono continuando ad usare l'arma o l'attrezzo giusto, quindi la tua professione non ti blocca mai."] },
        { h: 'Reclutare cittadini', p: ['I sopravvissuti sono sparsi in accampamenti, avamposti, rovine e gabbie nel mondo. Libera prima uno slot di costruzione, poi reclutali nella tua città.', "La Segheria e il Conciatore ospitano ciascuno 1 cittadino; un'Insula ne ospita 3. Pianifica le case prima di reclutare."] },
        { h: 'Tienili nutriti e leali', p: ['I cittadini hanno bisogno di un posto per mangiare e dormire: manca uno e se ne vanno. Costruisci una Dispensa e tienila rifornita affinché restino felici e produttivi.', "Tieni d'occhio Lealtà, Fame, Felicità e Costo Cibo: un cittadino affamato e infelice subisce una penalità alle statistiche, mentre la lealtà concede bonus."] },
      ],
    },
  },
  {
    slug: 'armor-gear',
    category: 'building',
    updated: '2026-07-11',
    title: {
      en: 'Gear Up: Armor Tiers & Suffixes',
      fr: 'Équipez-vous : niveaux d’armure et suffixes',
      de: 'Ausrüsten: Rüstungs-Stufen & Suffixe',
      es: 'Equípate: niveles de armadura y sufijos',
      it: 'Attrezzati: livelli di armatura e suffissi',
    },
    description: {
      en: 'Armor tiers and the random suffixes that make each piece unique.',
      fr: 'Niveaux d’armure et suffixes aléatoires uniques.',
      de: 'Rüstungs-Stufen und zufällige Suffixe, einzigartig.',
      es: 'Niveles de armadura y sufijos aleatorios únicos.',
      it: 'Livelli di armatura e suffissi casuali unici.',
    },
    tip: {
      en: 'Suffixes are rolled when the Blacksmith or Leatherworker finishes a piece — a "Legendary" roll adds +2% Energy Regen and resistances.',
    },
    cover: 'screens/desert-town.png',
    sections: {
      en: [
        { h: 'Tier progression', p: ['Armor is made by the Blacksmith or Leatherworker; some pieces need recipe scrolls found in the world.', 'Tiers run Civilian (starter) → Leather (+3 Armor, Leatherworker Lv.1) → Copper → Bronze → Iron → Legendary (expertise 20+). Higher tiers mean more Armor and better survival.'] },
        { h: 'Random suffixes', p: ['When a crafter finishes a piece, it may gain extra stats and a named suffix:', 'Anti-Hex (+5 Magic Armor, -2% Energy Regen) · Bulwark (+10% Knockback Resist, -2% Energy Regen) · Harden (+1 Armor, -1% Energy Regen) · Pristine (+5% Melee Dmg, +2% resistances) · Masterwork (+1% Energy Regen, +1% resistances) · Legendary (+2% Energy Regen, +2% resistances).'] },
      ],
      fr: [
        { h: 'Progression des niveaux', p: ["L'armure est fabriquée par le Forgeron ou le Travailleur du cuir ; certaines pièces nécessitent des parchemins de recette trouvés dans le monde.", 'Les niveaux vont Civil (départ) → Cuir (+3 Armure, Travailleur du cuir Lv.1) → Cuivre → Bronze → Fer → Légendaire (expertise 20+). Les niveaux supérieurs signifient plus de Armure et une meilleure survie.'] },
        { h: 'Suffixes aléatoires', p: ["Lorsqu'un artisan termine une pièce, elle peut gagner des stats supplémentaires et un suffixe nommé :", 'Anti-Hex (+5 Armure magique, -2 % Regen énergie) · Rempart (+10 % Résistance au recul, -2 % Regen énergie) · Durci (+1 Armure, -1 % Regen énergie) · Immaculé (+5 % Dégâts mêlée, +2 % résistances) · Chef-d’œuvre (+1 % Regen énergie, +1 % résistances) · Légendaire (+2 % Regen énergie, +2 % résistances).'] },
      ],
      de: [
        { h: 'Stufenfortschritt', p: ['Rüstung wird vom Schmied oder Gerber hergestellt; einige Teile brauchen Rezept-Schriftrollen, die in der Welt zu finden sind.', 'Die Stufen lauten Zivil (Start) → Leder (+3 Rüstung, Gerber Lv.1) → Kupfer → Bronze → Eisen → Legendär (Expertise 20+). Höhere Stufen bedeuten mehr Rüstung und besseres Überleben.'] },
        { h: 'Zufällige Suffixe', p: ['Wenn ein Handwerker ein Teil fertigstellt, kann es zusätzliche Stats und ein benanntes Suffix erhalten:', 'Anti-Hex (+5 Magierüstung, -2 % Energie-Regen) · Bollwerk (+10 % Rückstoß-Resist, -2 % Energie-Regen) · Gehärtet (+1 Rüstung, -1 % Energie-Regen) · Makellos (+5 % Nahkampfschaden, +2 % Resistenzen) · Meisterwerk (+1 % Energie-Regen, +1 % Resistenzen) · Legendär (+2 % Energie-Regen, +2 % Resistenzen).'] },
      ],
      es: [
        { h: 'Progresión de niveles', p: ['La armadura la fabrican el Herrero o el Trabajador del cuero; algunas piezas necesitan pergaminos de receta hallados en el mundo.', 'Los niveles son Civil (inicial) → Cuero (+3 Armadura, Trabajador del cuero Nv.1) → Cobre → Bronce → Hierro → Legendaria (pericia 20+). Niveles más altos implican más Armadura y mejor supervivencia.'] },
        { h: 'Sufijos aleatorios', p: ['Cuando un artesano termina una pieza, puede ganar estadísticas extra y un sufijo nombrado:', 'Antiaflicción (+5 Armadura mágica, -2 % Regen. energía) · Baluarte (+10 % Resist. derribo, -2 % Regen. energía) · Endurecer (+1 Armadura, -1 % Regen. energía) · Impecable (+5 % Daño cuerpo a cuerpo, +2 % resistencias) · Obra maestra (+1 % Regen. energía, +1 % resistencias) · Legendaria (+2 % Regen. energía, +2 % resistencias).'] },
      ],
      it: [
        { h: 'Progressione dei livelli', p: ["L'armatura è realizzata dal Fabbro o dal Conciatore; alcuni pezzi richiedono pergamene di ricetta trovate nel mondo.", 'I livelli sono: Civile (iniziale) → Cuoio (+3 Armatura, Conciatore Lv.1) → Rame → Bronzo → Ferro → Leggendaria (perizia 20+). Livelli più alti significano più Armatura e maggiore sopravvivenza.'] },
        { h: 'Suffissi casuali', p: ["Quando un artigiano finisce un pezzo, può guadagnare statistiche extra e un suffisso con nome:", 'Anti-Maleficio (+5 Armatura magica, -2 % Regen energia) · Baluardo (+10 % Resistenza contraccolpo, -2 % Regen energia) · Temprato (+1 Armatura, -1 % Regen energia) · Pristino (+5 % Danno da mischia, +2 % resistenze) · Capolavoro (+1 % Regen energia, +1 % resistenze) · Leggendaria (+2 % Regen energia, +2 % resistenze).'] },
      ],
    },
  },
  {
    slug: 'bosses',
    category: 'boss',
    updated: '2026-07-16',
    title: {
      en: 'Bosses: How to Find & Defeat Them',
      fr: 'Boss : comment les trouver et les vaincre',
      de: 'Bosse: So findest und besiegst du sie',
      es: 'Jefes: cómo encontrarlos y derrotarlos',
      it: 'Boss: come trovarli e sconfiggerli',
    },
    description: {
      en: 'Find, summon and defeat the five bosses and their drops.',
      fr: 'Trouve, invoque et vaincs les cinq boss et leurs drops.',
      de: 'Finde, beschwöre und besiege die fünf Bosse und Drops.',
      es: 'Encuentra, invoca y derrota a los cinco jefes y sus drops.',
      it: 'Trova, evoca e sconfiggi i cinque boss e i loro drop.',
    },
    tip: {
      en: 'Most bosses must be faced several times to collect every drop — build a farm route, not a one-shot plan.',
    },
    cover: 'screens/owl-1.jpg',
    sections: {
      en: [
        { h: 'The five bosses', p: ['Romestead currently features five bosses, each found in a specific way — some roam the world, others must be summoned by destroying an object in a set location.', 'Defeating them grants random rewards (armor, accessories, weapons, materials); you usually fight the same boss several times to get everything.'] },
        { h: 'Guardian of Minerva', p: ['Minerva’s owl, the first hard gate. It lurks in a ruin in a random direction from the map center (Plains). With its defeat Minerva returns part of her memory and aids you further.'] },
        { h: 'Cyclops — The Eye', p: ['Found in the Desert. Defeating it drops the Granite Fang, needed to unlock the Brick Kiln (via Virgil’s Poem) — a pivotal mid-game gate.'] },
        { h: 'Pyzifax', p: ['The desert satyr warlord who has taken up arms against Rome. Track down his base in the Desert to draw him out.'] },
        { h: 'Great Phoenix of Arabia & Talos Prototype', p: ['Both dwell in the Volcano endgame. The Phoenix is reborn in its crater; the Talos Prototype is Vulcan’s unfinished metal colossus. Come heavily prepared.'] },
      ],
      fr: [
        { h: 'Les cinq boss', p: ['Romestead compte actuellement cinq boss, chacun trouvé d’une manière spécifique — certains errent dans le monde, d’autres doivent être invoqués en détruisant un objet à un endroit précis.', 'Les vaincre accorde des récompenses aléatoires (armure, accessoires, armes, matériaux) ; vous combattrez généralement le même boss plusieurs fois pour tout obtenir.'] },
        { h: 'Gardien de Minerva', p: ["La chouette de Minerva, la première porte dure. Elle rôde dans une ruine dans une direction aléatoire depuis le centre de la carte (Plaines). En la vainquant, Minerva retrouve une partie de sa mémoire et vous aide davantage."] },
        { h: 'Cyclope — L’Œil', p: ["Trouvé dans le Désert. Le vaincre lâche la Canine de Granit, nécessaire pour débloquer le Four à Briques (via le Poème de Virgile) — une étape charnière du milieu de jeu."] },
        { h: 'Pyzifax', p: ['Le satyre du désert, chef de guerre qui a pris les armes contre Rome. Traquez sa base dans le Désert pour le faire sortir.'] },
        { h: 'Grande Phénix d’Arabie et Talos Prototype', p: ['Tous deux habitent le Volcan, en fin de partie. La Phénix renaît dans son cratère ; le Talos Prototype est le colosse de métal inachevé de Vulcan. Venez lourdement préparés.'] },
      ],
      de: [
        { h: 'Die fünf Bosse', p: ['Romestead hat aktuell fünf Bosse, die jeweils auf eine bestimmte Weise zu finden sind — einige streifen durch die Welt, andere müssen durch Zerstörung eines Objekts an einem bestimmten Ort beschworen werden.', 'Ihr Sieg bringt zufällige Belohnungen (Rüstung, Accessoires, Waffen, Materialien); normalerweise müsst ihr denselben Boss mehrfach bekämpfen, um alles zu bekommen.'] },
        { h: 'Wächter der Minerva', p: ['Minervas Eule, das erste harte Tor. Sie lauert in einer Ruine in einer zufälligen Richtung von der Kartenmitte (Ebenen). Durch ihre Niederlage erhält Minerva Teile ihres Gedächtnisses zurück und hilft euch weiter.'] },
        { h: 'Zyklop — Das Auge', p: ['In der Wüste zu finden. Sein Sieg fällt den Granit-Zahn, der zum Freischalten des Ziegelbrenners (über Virgils Gedicht) nötig ist — ein entscheidender Midgame-Meilenstein.'] },
        { h: 'Pyzifax', p: ['Der Wüsten-Satyr, ein Kriegsherr, der die Waffen gegen Rom erhoben hat. Spürt seine Basis in der Wüste auf, um ihn hervorzulocken.'] },
        { h: 'Großer Phönix von Arabien & Talos-Prototyp', p: ['Beide wohnen im Vulkan-Endgame. Der Phönix wird in seinem Krater wiedergeboren; der Talos-Prototyp ist Vulcans unvollendeter Metallkoloss. Kommt schwer vorbereitet.'] },
      ],
      es: [
        { h: 'Los cinco jefes', p: ['Romestead tiene actualmente cinco jefes, cada uno encontrado de forma específica — algunos deambulan por el mundo, otros deben invocarse destruyendo un objeto en un lugar concreto.', 'Vencerlos otorga recompensas aleatorias (armadura, accesorios, armas, materiales); normalmente tendrás que luchar contra el mismo jefe varias veces para conseguir todo.'] },
        { h: 'Guardián de Minerva', p: ['El búho de Minerva, la primera puerta dura. Se oculta en una ruina en una dirección aleatoria desde el centro del mapa (Llanuras). Al derrotarlo, Minerva recupera parte de su memoria y te ayuda más.'] },
        { h: 'Cíclope — El Ojo', p: ['Encontrado en el Desierto. Vencerlo suelta el Colmillo de Granito, necesario para desbloquear el Horno de Ladrillos (vía el Poema de Virgilio) — un hito clave a mitad de partida.'] },
        { h: 'Pyzifax', p: ['El sátiro del desierto, señor de la guerra que ha tomado las armas contra Roma. Rastrea su base en el Desierto para sacarlo.'] },
        { h: 'Gran Fénix de Arabia y Talos Prototype', p: ['Ambos habitan el Volcán, el final del juego. La Fénix renace en su cráter; el Talos Prototype es el coloso de metal inacabado de Vulcano. Ven muy preparado.'] },
      ],
      it: [
        { h: 'I cinque boss', p: ['Romestead ha attualmente cinque boss, ciascuno trovato in modo specifico — alcuni vagano per il mondo, altri devono essere evocati distruggendo un oggetto in un luogo preciso.', 'Sconfiggerli dà ricompense casuali (armatura, accessori, armi, materiali); di solito dovrai combattere lo stesso boss più volte per ottenere tutto.'] },
        { h: 'Guardiano di Minerva', p: ['Il gufo di Minerva, la prima porta dura. Si nasconde in una rovina in una direzione casuale dal centro della mappa (Pianure). Sconfiggendolo, Minerva recupera parte della memoria e ti aiuta ulteriormente.'] },
        { h: 'Ciclope — L’Occhio', p: ['Trovato nel Deserto. Sconfiggerlo fa cadere il Dente di Granito, necessario per sbloccare la Fornace di Mattoni (via il Poema di Virgilio) — una tappa chiave a metà partita.'] },
        { h: 'Pyzifax', p: ['Il satiro del deserto, signore della guerra che ha preso le armi contro Roma. Rintraccia la sua base nel Deserto per stanarlo.'] },
        { h: 'Grande Fenice d’Arabia e Talos Prototype', p: ['Entrambi abitano il Vulcano, la fase finale. La Fenice rinasce nel suo cratere; il Talos Prototype è il colosso di metallo incompiuto di Vulcano. Vieni pesantemente preparato.'] },
      ],
    },
  },
  {
    slug: 'gods',
    category: 'gods',
    updated: '2026-07-11',
    title: {
      en: 'The Seven Gods: Worship & Blessings',
      fr: 'Les sept dieux : culte et bénédictions',
      de: 'Die sieben Götter: Verehrung & Segnungen',
      es: 'Los siete dioses: culto y bendiciones',
      it: 'I sette dei: culto e benedizioni',
    },
    description: {
      en: 'The seven gods and the blessings each one grants.',
      fr: 'Les sept dieux et les bénédictions qu’ils accordent.',
      de: 'Die sieben Götter und die Segen, die jeder gewährt.',
      es: 'Los siete dioses y las bendiciones que otorga cada uno.',
      it: 'I sette dei e le benedizioni che ciascuno concede.',
    },
    tip: {
      en: 'Each god’s Blessing is a permanent stat boost — stack them via the Altar to tailor your build.',
    },
    cover: 'screens/town-nice.jpg',
    sections: {
      en: [
        { h: 'Worship through the Altar', p: ['Offerings at the Altar earn Worship Points and unlock buildings and feats tied to each deity. Minerva directs you with tasks; the rest grant Blessings.', 'Each Blessing is a permanent boost — choose gods that match your playstyle (ranged, melee, magic, defense, health, economy).'] },
        { h: 'The pantheon', p: ['Diana — nature, hunting, the Moon: +10% Ranged Attack Power.', 'Ceres — agriculture, fertility: +25% Overall Health.', 'Mars — war, soldiers: +10% Melee Attack Power.', 'Mercury — commerce, travel: +10% Magic Attack Power.', 'Venus — love, beauty, prosperity: +10% Health, +10 Energy.', 'Vulcan — forge, fire: +10% Armor.'] },
        { h: 'Minerva’s role', p: ['Minerva (wisdom, justice, law) gives no direct stat blessing but guides you with advice and tasks; her owl, the Guardian of Minerva, is the first boss you must overcome.'] },
      ],
      fr: [
        { h: 'Culte par l’Autel', p: ['Les offrandes à l’Autel gagnent des Points de Culte et débloquent bâtiments et talents liés à chaque divinité. Minerva vous dirige avec des tâches ; les autres accordent des Bénédictions.', 'Chaque Bénédiction est un boost permanent — choisissez des dieux qui correspondent à votre style (distance, mêlée, magie, défense, santé, économie).'] },
        { h: 'Le panthéon', p: ['Diana — nature, chasse, la Lune : +10 % Puissance d’attaque à distance.', 'Cérès — agriculture, fertilité : +25 % Santé totale.', 'Mars — guerre, soldats : +10 % Puissance d’attaque de mêlée.', 'Mercure — commerce, voyage : +10 % Puissance d’attaque magique.', 'Vénus — amour, beauté, prospérité : +10 % Santé, +10 Énergie.', 'Vulcain — forge, feu : +10 % Armure.'] },
        { h: 'Le rôle de Minerva', p: ['Minerva (sagesse, justice, loi) n’accorde aucune bénédiction directe mais vous guide avec des conseils et des tâches ; sa chouette, le Gardien de Minerva, est le premier boss que vous devez surmonter.'] },
      ],
      de: [
        { h: 'Verehrung am Altar', p: ['Opfergaben am Altar erlangen Kultpunkte und schalten Gebäude und Talente frei, die an jede Gottheit gebunden sind. Minerva gibt dir Aufgaben; die anderen gewähren Segen.', 'Jeder Segen ist ein permanenter Boost — wähle Götter, die zu deinem Spielstil passen (Fernkampf, Nahkampf, Magie, Verteidigung, Gesundheit, Wirtschaft).'] },
        { h: 'Das Pantheon', p: ['Diana — Natur, Jagd, Mond: +10 % Fernkampf-Angriffskraft.', 'Ceres — Landwirtschaft, Fruchtbarkeit: +25 % Gesamtleben.', 'Mars — Krieg, Soldaten: +10 % Nahkampf-Angriffskraft.', 'Merkur — Handel, Reisen: +10 % Magie-Angriffskraft.', 'Venus — Liebe, Schönheit, Wohlstand: +10 % Gesundheit, +10 Energie.', 'Vulcan — Schmiede, Feuer: +10 % Rüstung.'] },
        { h: 'Minervas Rolle', p: ['Minerva (Weisheit, Gerechtigkeit, Gesetz) gewährt keinen direkten Stat-Segen, sondern führt dich mit Rat und Aufgaben; ihre Eule, der Wächter der Minerva, ist der erste Boss, den du überwinden musst.'] },
      ],
      es: [
        { h: 'Adoración en el Altar', p: ['Las ofrendas en el Altar ganan Puntos de Culto y desbloquean edificios y proezas vinculados a cada deidad. Minerva te dirige con tareas; los demás otorgan Bendiciones.', 'Cada Bendición es un aumento permanente — elige dioses que encajen con tu estilo (a distancia, cuerpo a cuerpo, magia, defensa, salud, economía).'] },
        { h: 'El panteón', p: ['Diana — naturaleza, caza, la Luna: +10 % Poder de ataque a distancia.', 'Ceres — agricultura, fertilidad: +25 % Salud total.', 'Marte — guerra, soldados: +10 % Poder de ataque cuerpo a cuerpo.', 'Mercurio — comercio, viaje: +10 % Poder de ataque mágico.', 'Venus — amor, belleza, prosperidad: +10 % Salud, +10 Energía.', 'Vulcano — forja, fuego: +10 % Armadura.'] },
        { h: 'El papel de Minerva', p: ['Minerva (sabiduría, justicia, ley) no otorga bendición directa, pero te guía con consejos y tareas; su lechuza, el Guardián de Minerva, es el primer jefe que debes superar.'] },
      ],
      it: [
        { h: 'Culto all’Altare', p: ['Le offerte all’Altare ottengono Punti di Culto e sbloccano edifici e talenti legati a ciascuna divinità. Minerva ti guida con incarichi; le altre concedono Benedizioni.', 'Ogni Benedizione è un aumento permanente — scegli dei adatti al tuo stile (distanza, mischia, magia, difesa, salute, economia).'] },
        { h: 'Il pantheon', p: ['Diana — natura, caccia, la Luna: +10 % Potere attacco a distanza.', 'Cerere — agricoltura, fertilità: +25 % Salute totale.', 'Marte — guerra, soldati: +10 % Potere attacco da mischia.', 'Mercurio — commercio, viaggio: +10 % Potere attacco magico.', 'Venere — amore, bellezza, prosperità: +10 % Salute, +10 Energia.', 'Vulcano — fucina, fuoco: +10 % Armatura.'] },
        { h: 'Il ruolo di Minerva', p: ['Minerva (sapienza, giustizia, legge) non concede benedizione diretta, ma ti guida con consigli e incarichi; il suo gufo, il Guardiano di Minerva, è il primo boss che devi superare.'] },
      ],
    },
  },
  {
    slug: 'city-tips',
    category: 'building',
    updated: '2026-07-15',
    title: {
      en: '10 City-Building Tips for a Strong Start',
    },
    description: {
      en: 'Veteran tips: settle smart, avoid bad traits, automate.',
    },
    tip: {
      en: 'The Canteen of Youth (bought from a tier-2 merchant) resets every spent Favor point — experiment with god builds early, then respec for free.',
    },
    cover: 'screens/town-nice.jpg',
    sections: {
      en: [
        { h: 'Don’t build at the spawn — explore first', p: ['Restarting was my biggest time-sink. I dropped my town right at spawn, then found there was no coal nearby, the water was far from the mill, and the desert and volcano were ages away — every haul meant a long trek.', 'Spend your opening minutes pushing toward the map center. Look for a spot spanning several biomes at once; ideally near the border of Plains, Desert and Volcano, so resource runs stay short. You can build trade outposts to shuttle resources later, but that is very late tech — a bad starting spot drags you down long before then.'] },
        { h: 'Check citizen traits — avoid two in particular', p: ['Your town grows by recruiting survivors from across the world, but not every citizen is worth it.', 'Gluttonous raises that citizen’s food use — brutal when food is already tight early. Disloyal cuts rapport gain by 50%; since expertise is tied to rapport and you need +20 expertise for legendary gear, a disloyal citizen crawls there. Worse, each citizen’s profession levels are counted separately — switch their job and you start over. So if you sunk hours leveling a blacksmith only to find they’re Disloyal, that’s a tragedy. Always read traits before recruiting.'] },
        { h: 'Favor points reset — experiment early', p: ['Don’t agonize over which Favor path to invest. The Canteen of Youth (bought from a tier-2 merchant) resets every spent Favor point so you can redistribute.', 'That also makes leveling merchants worth it early: once upgraded they sell health potions, and the game gives you no way to craft basic potions yourself — you can only buy them or find them in dungeons and camps.', 'So try dual-crossbow, melee, magic or whatever; once you find your style, respec properly.'] },
        { h: 'Hit everything — hidden chests are everywhere', p: ['Many high-quality accessories and rare items sit in hidden chests tucked where you’d walk right past them:', 'inside fallen logs · inside dungeon enemy-respawn points · in camp tents · in bushes.', 'The trick: wail on anything that looks slightly off. If there’s a chest, the game plays a special sound cue. After a while you’ll find chests in the most unexpected places.'] },
        { h: 'Keep upgrading gear — solo players can’t skip this', p: ['I finished the game in solo mode, and frankly the difficulty isn’t built for lone wolves — fall behind on gear and you’ll get beaten constantly.', 'Gear path: Leather → Copper → Bronze, and late-game you can craft stronger armor from endgame materials like Flame Scales. Once a citizen’s expertise passes 20 you can make Legendary gear, each piece carrying an extra special effect. Solo players attempting the Volcano biome essentially need it.'] },
        { h: 'Lay roads early — it’s free and saves hours', p: ['Paving costs no materials and is fast, yet it slashes travel time across the map — another thing I regret not doing sooner.', 'In the Favor tree, take the Pathfinder skill: paving one tile also auto-completes the adjacent tile, doubling efficiency. Since Favor resets later anyway, grab Pathfinder, build your road network, then respec into combat. No downside.'] },
        { h: 'The Camp Tent is your best friend', p: ['Made at the Leatherworker, the Camp Tent lets you drop a respawn point anywhere on the map.', 'Best use: before entering a dungeon or fighting a boss, plant a tent just outside the entrance. Die, and you respawn right there instead of trudging back from town. This habit saves enormous backtracking — always carry one when exploring.'] },
        { h: 'Build satellite towns — unlock altar teleport', p: ['Almost everything in Romestead is about saving time, and the tier-2 Altar’s teleport is a centerpiece. At tier 2 you can blink between two Altars instead of walking.', 'To unlock it, upgrade the Altar to tier 2 via the Carpenter’s upgrade bench, then sacrifice heavily to Mercury to unlock teleport. You’ll then build a new town, new Altar and new Carpenter workshop elsewhere and tier that Altar up too — fiddly, but once it clicks it’s worth it. Plan one or two satellite towns mid-game and pair them with teleport to collapse map travel time.'] },
        { h: 'Food buffs matter — plan your food line early', p: ['I kept dying until I noticed I was still eating dead-rat berries. Romestead’s food system has real buffs — high-tier food grants sizable combat bonuses.', 'Take Isicia Marina: it restores health and grants Nature and Poison resistance for 15 minutes. But its recipe needs date palm, honey, fish sauce and exotic crab meat — so you’ll want a date-palm farm, beehives and a pottery Dolium for fish sauce. The chain is complex; pick one hero food and start building its farm line now.'] },
        { h: 'Defeat the Cyclops for the Logistics Tent', p: ['The single biggest quality-of-life unlock is the Logistics Tent, dropped after beating the Desert’s Cyclops boss.', 'It lets you chain buildings so resources flow between them automatically — no more manual hauling.', 'A basic food-automation example: wheat farm → auto to water mill (flour) → auto to bakery (bread) → auto into food storage, all while you explore and the town runs itself. The same logic applies to stone, olive oil (sells well to merchants) and any production line. Once logistics is running, you’re free to explore and hunt bosses.'] },
      ],
    },
  },
  {
    slug: 'base-locations',
    category: 'building',
    updated: '2026-07-15',
    title: {
      en: 'Where to Build: Base Locations by Biome',
    },
    description: {
      en: 'Pick and relocate your base across the biomes.',
    },
    tip: {
      en: 'At a terrain border, look for clay plus at least a 4×2 stretch of water. Set your Town Center, Altar and Granary near the clay to finish the settle task fast.',
    },
    cover: 'screens/construct-sites.jpg',
    sections: {
      en: [
        { h: 'Plains / Forest — your first home', p: ['At a Plains-Forest border, find a spot with clay and at least a 4×2 of water.', 'You need the water for the Water Mill to automate bread; without it, just settle near clay by the boss and use it later as a teleport waypoint. In a small map, solo play makes gathering easier.', 'Build the Materials Warehouse and Lumberyard, raise the Altar to tier 2 and unlock Mercury’s altar teleport. In build mode, click the Altar and spend 5 stone from the warehouse to upgrade.', 'Near the clay, place your Town Center, Altar and Granary to complete the settle task. Build a Carpenter workshop; make a Camp Tent (Diana’s) at the Leatherworker — you respawn there on death or reload, but the tent can’t be removed or the respawn point is lost.', 'Leatherworker villagers can craft flint javelin heads and tan leather for XP. Build a Forge, swap to copper axe and pick; toss wood and coal to light a fire and throw in copper ore to smelt copper ingots. Equip the Forge’s copper set or the Leatherworker’s plumed set — you’ll need Bronze in the desert to fight the desert boss. Craft a few wooden carts and barrels to carry, stock the Granary with food, and head to the desert.'] },
        { h: 'Desert — push to Bronze', p: ['Again at a terrain border, find clay and a 4×2 of water.', 'Build the Materials Warehouse and Lumberyard, upgrade the Altar to tier 2, and you can teleport back and forth between your desert and plains homes.', 'Bring your plains villagers over via teleport; refresh your respawn with a Camp Tent.', 'Build a Forge, craft Bronze axe, pick and set, and prepare for the boss. A tier-2 smith can smelt bronze ingots (copper + tin); tin is also mined in the quarry. The bronze set is only green rarity, but it beats the blue plumed set.'] },
        { h: 'Volcano — endgame stronghold', p: ['At a border, find clay, a 4×2 of water and volcanic ash.', 'In Settings → Display, uncheck camera auto-zoom and lower the zoom value so you can plan calmly without ambush.', 'The Volcano is enemy-dense — wall it off before moving villagers in. Even inside walls, enemies can spawn on open ground, so build tightly, pave roads, and leave no large empty patches.', 'Unlock Vulcan’s Volcano Furnace; the fuel-needing Bakery, Forge, Pottery and Brick Kiln all belong on the volcano. Use empty houses as storerooms with chests for materials and gear, and a Leatherworker-made leather sleeping bag for fast nights.'] },
      ],
    },
  },
  {
    slug: 'world-seeds',
    category: 'survival',
    updated: '2026-07-15',
    title: {
      en: 'Recommended World Seeds',
    },
    description: {
      en: 'A community-favorite seed that saves hours of hauling.',
    },
    tip: {
      en: 'A good seed saves hours — but any seed works; treat this as a head-start, not a requirement.',
    },
    cover: 'screens/forest-combat.jpg',
    sections: {
      en: [
        { h: 'How seeds work', p: ['Romestead generates its map from a world seed, and a good one spares you a lot of trouble.', 'You can pick the world size when creating a game — Small is recommended for easier resource runs in solo play.'] },
        { h: 'Seed 945359837 (Small)', p: ['Spawn comes with two neat, square ponds that fit four water mills.', 'The only downside is clay sits a bit far — just hand-haul it early, no big deal.', 'The whole spawn is solid: the Desert and Volcano also have great build spots. One Desert location is naturally walled on most sides, so you only need to wall two faces to seal the town. (Community-sourced; your mileage may vary.)'] },
      ],
    },
  },
  {
    slug: 'fortifications',
    category: 'building',
    updated: '2026-07-15',
    title: {
      en: 'Fortify Your Town: Walls That Hold',
    },
    description: {
      en: 'Layered walls and traps that hold at 10× spawns.',
    },
    tip: {
      en: 'Outermost ring = flowerbed (only you can remove it; enemies ignore it). Inner ring = normal wall for defense value + citizen buffs.',
    },
    cover: 'screens/construct-sites.jpg',
    sections: {
      en: [
        { h: 'Layered walls', p: ['The outermost layer should be a flowerbed. Currently only the player can remove it, it’s immune to fire and water, and monsters won’t attack it — a permanent shell.', 'Inside that, use normal walls. They raise your town defense value, buff your citizens, and block leaping or ranged enemies from getting in.', 'One caveat: a self-destruct enemy dying right against the flowerbed can splash the wall behind it — minor, not fatal.'] },
        { h: 'Gate and enemy handling', p: ['For the gate, wall it with wood and stone and just move one block when you pass through.', 'You can hit enemies through your walls with swords or spears — very convenient. Optionally ring the outside with a coal-trap layer if you like.', 'Clay golems may drag the stones off your gate (they won’t break it); just restore them afterward.'] },
        { h: 'It scales', p: ['This setup held even with spawn rates at 10× — safe to rely on.'] },
      ],
    },
  },
  {
    slug: 'holy-javelin',
    category: 'mechanic',
    updated: '2026-07-15',
    title: {
      en: 'How to Get the Holy Javelin',
    },
    description: {
      en: 'Farm three parts and forge the legendary Holy Javelin.',
    },
    tip: {
      en: 'Every part is a 1% drop from a specific enemy’s largest variant — farm satyr raids for the shaft, hunt big green satyrs for the pole, and run Cyclops raids for the head.',
    },
    cover: 'screens/fight-cyclops.png',
    sections: {
      en: [
        { h: 'The three parts', p: ['The Holy Javelin is a very strong weapon, but its parts come from specific enemies.', 'Shaft — drops (1%) from the largest yellow satyr. These appear in satyr raids; a few rounds usually drops one, ten raids almost guarantees it.', 'Pole — drops (1%) from the largest green satyr. Green satyrs spawn in Plains and Forest, not in raids (raids bring yellow ones) — roam the Plains and Forest for the biggest green satyrs. Slightly tougher.', 'Head — the hardest, drops (1%) from the fire elemental: the gear-shaped, fire-breathing enemy in the Volcano that drops an Element Core. Farm Cyclops raids; each raid has only a few (sometimes none). If it won’t drop, buy a raid map and try a fresh map.'] },
        { h: 'Forging it', p: ['You need a tier-2 Forge and Smithing skill at level 7. The tier-2 Forge is unlocked at the Altar through the relevant deity.', 'Raid maps: the Carpenter places a Strategy Table, then crafts the map on it.'] },
      ],
    },
  },
  {
    slug: 'guardian-minerva',
    category: 'boss',
    updated: '2026-07-15',
    title: {
      en: 'Guardian of Minerva — Boss Fight',
    },
    description: {
      en: 'The owl boss: trap-ring it and break the egg.',
    },
    tip: {
      en: 'Ring the nest with coal traps and walk in circles — you dodge the dive and lightning while the traps do the work. More traps = faster kill.',
    },
    cover: 'screens/owl-fight.jpg',
    sections: {
      en: [
        { h: 'Before the fight', p: ['Accept the quest at your spawn. Lighting a campfire beneath Minerva’s statue marks the owl’s location on the map; you can also just follow its shadow to find it.', 'A bird call warns you when it’s about to appear.'] },
        { h: 'Start the fight', p: ['Break the egg to begin the boss fight.', 'Ring the nest with coal traps, then walk in circles — the traps burn it down. Keep moving and don’t get too close, so you dodge both the dive and the lightning it drops.', 'The more traps you lay, the faster it dies. Auto-scorpion crossbows also work, but they need repairing.'] },
        { h: 'What it unlocks', p: ['A two-phase fight — a storm/lightning phase kicks in during the second half, so keep moving.', 'Offering the Guardian’s Eye on your altar unlocks the Carpenter’s Workshop, Blacksmith, Altar L2, Empty House L2, Material Storage L2 and the Logistics Tent, plus Feathered armor recipes (Hood, Armor, Boots). This is the day-one progression gate that opens the rest of the early game.'] },
        { h: 'Reward', p: ['Drops the quest material Guardian’s Eye, plus Guardian’s Talon and Feathers (used for Feathered-tier gear). Beating the Guardian of Minerva also yields the Logistics Tent blueprint.'] },
      ],
    },
  },
  {
    slug: 'pyzifax',
    category: 'boss',
    updated: '2026-07-16',
    title: {
      en: 'Pyzifax — Boss Fight',
    },
    description: {
      en: 'The desert satyr warlord, three bullet-hell phases.',
    },
    tip: {
      en: 'Drop a Camp Tent at the gate before engaging so you respawn right there. Let the catapult smash its own wall while you plink satyrs through it.',
    },
    cover: 'screens/desert-town.png',
    sections: {
      en: [
        { h: 'Prep', p: ['Bring ranged options (scrolls etc.), a shield to block the bullet-hell, and an antidote.', 'Drop a Camp Tent at the door beforehand to refresh your respawn point.'] },
        { h: 'The approach', p: ['Stand at the wall’s edge then run off, letting the catapult smash the wall itself.', 'The satyrs by the catapult can be ignored once killed; your scorpion crossbows and tent still clear them through the wall at range.', 'Three captured villagers spawn in the city — take any with traits you want.'] },
        { h: 'Phases', p: ['Phase 1: circle-strafe to dodge, clear the adds, and strike after the boss jumps down.', 'Phase 2: dodge the bullet-hell at the edge; for the long-line dashes, dodge one, face-tank two, or just block with your shield.', 'Phase 3: an upgraded Phase 1 with higher damage — same plan, hit it after it lands.'] },
        { h: 'Reward', p: ['Drops random gear and materials — armor, weapons, accessories, and crafting components.', 'The Logistics Tent no longer drops here: since patch 0.25.1_7 it is a reward for the Guardian of Minerva instead.'] },
      ],
    },
  },
  {
    slug: 'cyclops',
    category: 'boss',
    updated: '2026-07-15',
    title: {
      en: 'Cyclops — Boss Fight',
    },
    description: {
      en: 'Bomb the Cyclops eye across five phases.',
    },
    tip: {
      en: 'Clay golems self-detonate near you, but killing one resets that timer — lure a golem to the wall, then kill it so the blast opens the way.',
    },
    cover: 'screens/fight-cyclops.png',
    sections: {
      en: [
        { h: 'Find the temple', p: ['A campfire under the Cyclops statue marks the satyr high-temple on the map.', 'Left key: keep running to dodge the laser and falling rocks; use explosive jars to blow the stone wall. Right key: dash through the bullet-hell and kill clay golems for explosive jars to breach the wall.'] },
        { h: 'Clay golem trick', p: ['Clay golems self-detonate after lingering near you; killing one resets that timer. Lure a golem close to the wall, then kill it so the blast opens the way.'] },
        { h: 'Phases', p: ['Phase 1: dodge the bullet-hell, clear adds, bomb the eye with explosive jars.', 'Phase 2: dodge the laser and the raised hand; hit the other hand.', 'Phase 3: pound the eyeball — a good moment to top up your buffs.', 'Phase 4: same as Phase 1, keep bombing the eye.', 'Phase 5: you must empty one hand’s HP before the two hands clap shut. Early damage is low; it ramps up the longer the fight lasts.'] },
        { h: 'Reward', p: ['Drops the quest material Granite Fang.'] },
      ],
    },
  },
  {
    slug: 'phoenix-arabia',
    category: 'boss',
    updated: '2026-07-16',
    title: {
      en: 'Great Phoenix of Arabia — Boss Fight',
    },
    description: {
      en: 'The Volcano phoenix: stay behind it, keep hitting.',
    },
    tip: {
      en: 'Always position behind the phoenix — its fire breath and the Phase-2 falling rocks are front-facing. Behind it, you’re safe to free-hit.',
    },
    cover: 'screens/phoenix-fight.jpg',
    sections: {
      en: [
        { h: 'How to start', p: ['After you’ve built in the Volcano, an NPC arrives with the Desert Phoenix quest. Accepting it marks the burned shrines on your map.'] },
        { h: 'Phases', p: ['Phase 1: it breathes fire — stay behind it and keep hitting.', 'Below half health it enters Phase 2 with falling rocks; still, stay behind it and strike.'] },
        { h: 'Stats', p: ['Health: ~1,200 HP.', 'Two phases, both front-facing — position behind the phoenix and you are safe to free-hit.'] },
        { h: 'Reward', p: ['Drops the Phoenix Ash Sample.'] },
      ],
    },
  },
  {
    slug: 'talos-prototype',
    category: 'boss',
    updated: '2026-07-16',
    title: {
      en: 'Talos Prototype — Boss Fight',
    },
    description: {
      en: 'Free Vulcan, then hammer the blue-glowing notches.',
    },
    tip: {
      en: 'The one-eyed add heals the boss — kill it the moment it rises. Use a bronze cart (not wooden) to deliver Vulcan’s build materials or it gets smashed en route.',
    },
    cover: 'screens/dungeon.jpg',
    sections: {
      en: [
        { h: 'Free Vulcan first', p: ['Bring a ranged weapon and swap to an iron pickaxe. A campfire under the statue marks Vulcan’s temple.', 'Find the four stone steles, insert iron rods, and break the jars that appear after pulling the four levers to free Vulcan. Talk to Vulcan at your altar back home — you’ll learn you need materials to build a clay pit (sometimes a quarry or forge instead).', 'For a clay pit, load a cart with 6 wood, 10 stone, 3 clay, place it before the temple and pull the lever to open the door. Use a bronze cart — a wooden one gets destroyed en route.'] },
        { h: 'Phase 1', p: ['The chest has four notches; break the iron plates and hit the blue-glowing notch. Damage scales with your pickaxe. The green-glowing floor drops away, then random adds rise. The one-eyed add heals the boss — kill it fast. Destroy the side mechanisms with ranged attacks.'] },
        { h: 'Phase 2', p: ['A few adds rise first, then four lasers fire from each side. Walk only between the beams, hide behind stones or pillars, and clear the mechanisms at range. A villager is sent up.'] },
        { h: 'Phase 3', p: ['Pull the lever on one side of the lasers and destroy the rising mechanism-bow on the other; you can heal behind a pillar.'] },
        { h: 'Phase 4', p: ['An upgraded Phase 1 — more lasers and more adds. Same tactic: hammer the blue-glowing notches.'] },
        { h: 'Stats', p: ['Health: ~1,800 HP.', 'Four phases — break the chest plates, hammer the blue-glowing notches, dodge the lasers, and kill the one-eyed healer add fast (it heals the boss).'] },
        { h: 'Reward', p: ['Drops the Core Container; offering it completes all main quests up to this point.'] },
      ],
    },
  },
  {
    slug: 'walkthrough',
    category: 'walkthrough',
    updated: '2026-07-15',
    title: {
      en: 'Full Walkthrough: Plains to Volcano',
    },
    description: {
      en: 'A full run from the Owl to freeing Vulcan.',
    },
    tip: {
      en: 'Two valid opening orders exist. The EA completion route fights the Owl first, then settles. You can also settle first and return later. Either way, the Logistics Tent (automation) now drops from the Owl rather than Pyzifax (patch 0.25.1_7).',
    },
    cover: 'screens/forest-combat.jpg',
    sections: {
      en: [
        { h: 'Tutorial and the first boss (Owl)', p: ['Follow the white starter road out of the tutorial. Craft a flint spear and equip shield plus spear (hold right-click to block while attacking). Reach the Plains.', 'Before settling, loop the Owl (Guardian of Minerva). Explore for a concave U-shaped mountain ridge, or a regular rectangular one. For the concave shape, ring the notch and both sides with coal traps, break the egg with a charged spear and circle the boss — at the notch you can bait one hit, then slip to the trap-free opposite side so it pathfinds into the wall and eats the traps. For a rectangular mountain, ring it fully. At half health it enters phase 2 — dodge the close-range blast.', 'No mountain nearby? Build 4 auto-scorpion crossbows spread to the screen edges with coal traps around them, fill each with 50 flint arrows, and leave one blueprint one hammer from done off-screen to hold aggro in phase 2.', 'The kill drops a boss armor piece (equip it) and the Logistics Tent blueprint. In current builds the Tent comes from the Owl; early EA guides credited Pyzifax, but patch 0.25.1_7 moved it. Turn in the quest to unlock the tier-2 Altar, then demolish and pick your real town spot.'] },
        { h: 'Settle your town (Plains)', p: ['Find a Plains spot with clay (orange tiles slow you) plus a lake that has a 4-tile straight edge, 2 tiles wide, unobstructed. Use the road blueprint as your wall (drag limit is 25 at once); keep clay outside the walls but orient the lake so the future Water Mill sits inside. Solo town size: 80 wide by 40 tall.', 'Reserve a 5-by-6 empty lot at the center, ring it with road and drop your flag — that is where the Logistics Tent goes later. Leave a ring of space around the Blacksmith, Leatherworker and Materials Warehouse (the first two need decorations behind them for appeal; the warehouse belongs on the upper road half). Build the Carpenter first and assign villagers.', 'Tech order: Mercury (road speed, then more goods, then altar teleport) to Ceres (crop yield, beehive, well irrigation, bakery 2) to Diana (portable bedroll) to Vulcan (stone wall, forge XP, burn time, 10 percent armor blessing). Spend the rest as you like.', 'Fight the Owl each day until a full armor set drops. A hut with a leather bedroll skips the night, or rush a fresh map to farm faster.'] },
        { h: 'Forest: leather, captures and gods', p: ['Enter the Forest for leather (wolf packs) and tanned leather (bears), and to run the god quests. Killing satyrs drops the Declaration of War against Pyzifax.', 'In forest camps, knock over fallen logs (chance at a Bee Queen), grab a drum and a lyre if present (the desert has them too), and clear dungeons for antidotes and the occasional caged villager. Goal: 5 antidotes, 2 Bee Queens, and 2 Meticulous villagers (plus 3 expertise each).', 'Assign the two Meticulous villagers to the Blacksmith (grappling hooks for XP) and the Leatherworker (tan leather). Overflow recruits with only bad traits get dropped or altar-sacrificed. Do not bother feeding captives yet — they strike, they do not die.'] },
        { h: 'Desert: passage, Cyclops and Pyzifax', p: ['Follow the road to the Desert. At the satyr pass, drop a Camp Tent for respawn, use cover plus corpse-piles and tent heals to clear it, and prioritize the ballista towers. Build a crude camp (warehouse, carpenter, blacksmith, granary, tier-2 altar); haul 3 buckets of clay from the Plains side by cart.', 'Make a Desert base at a clay plus 4-by-2 water border and upgrade the Altar to teleport. Build a Forge and craft the Bronze axe, pick and set (a tier-2 smith smelts copper plus tin; tin also comes from the quarry). Bronze (green rarity) beats the blue plumed set.', 'Cyclops: a campfire under its marble statue marks the satyr high-temple. Breach the walls with explosive jars or clay-golem blasts across five phases — bomb the eye, then the hands, then the eyeball, then the eye again, then empty one hand before the clap. It drops the Granite Fang; offer it and finish Virgil’s Poem to unlock the Brick Kiln.', 'Pyzifax invasion: offer the Deformed Satyr Horn (drops during the invasion) to mark his camp. Lure the catapult to smash its own gate, commandeer it to wreck the ballistas, then circle-strafe the boss through three phases. Early EA guides credit Pyzifax with the Logistics Tent; in current builds that blueprint comes from the Owl instead, so Pyzifax now drops gear and blueprints.'] },
        { h: 'Volcano: base, automation and the endgame', p: ['Follow any black road to the Volcano, opposite the Desert. Base at a clay plus 4-by-2 water plus volcanic-ash border. Uncheck camera auto-zoom and lower the zoom value to plan safely. Wall before moving villagers; build tight, pave roads, and leave no open patches, since enemies spawn inside walls too. Unlock Vulcan’s Volcano Furnace; the fuel-needing Bakery, Forge, Pottery and Brick Kiln belong here.', 'With the Logistics Tent (from the Owl) on the reserved 5-by-6 lot, automate: chain farm to water mill to bakery (repeat bread) to granary so the camp never starves. The Tent also links Lumberyard, Quarry and Clay Pit to the Materials Warehouse; the Quarry (volcano level 5) yields coal, copper, tin and iron ingots plus rare items. Brick chain: warehouse to Brick Kiln (clay) back to warehouse. Concrete mixer (University): warehouse clay plus ash-clay-pit to mixer to warehouse; water is still bucketed by hand. Grapes make wine, honey makes mead the same way.', 'Phoenix: after you build, an NPC gives the Desert Phoenix quest; smash the shrine statue to summon it. Dodge the dive, then after it lands stand behind its hind legs and free-hit; phase 2 adds falling rocks but the same plan holds. About four breaths wins. It drops the Phoenix cloak.', 'Vulcan: a campfire under the statue marks his temple. Find 4 steles, insert iron rods, pull the 4 levers and smash the jar, then talk to Vulcan at home — he names the building-material offering. Cart clay, wood and stone to the temple platform, pull the lever, place a bedroll and enter. Four phases: break the iron plates and hit the blue-glowing notches (damage scales with your pickaxe), kill the one-eyed healer add fast, and dodge the lasers between the beams. It drops the Core Container — offer it to complete all main quests.'] },
      ],
    },
  },
  {
    slug: 'completion-run',
    category: 'walkthrough',
    updated: '2026-07-15',
    title: {
      en: 'EA Completion Run: Optimized Route',
    },
    description: {
      en: 'An optimized speedrun: routes, tech order, automation.',
    },
    tip: {
      en: 'Pick the Shield profession and a Small map for solo play. The shield block-and-attack carries every boss, and a small map cuts the endless resource runs.',
    },
    cover: 'screens/woods-night.jpg',
    sections: {
      en: [
        { h: 'Profession and map size', p: ['At creation each profession gives plus 5 to its skill plus a tool or weapon (the scroll is the caster, the thrower gets an accessory, unarmed has none). Weapon skills grant plus 0.3 percent damage per level, axe and pick grant plus 0.1 percent per level. The recommended pick is Shield.', 'Map size: solo and under four players take Small; four or more take Standard; only a post-game building save should take Large.'] },
        { h: 'Material map', p: ['Plains: olives, pine nuts, wheat, bay, cabbage and mint (forest edge), cheese, wool (goats), leather (boars), tanned leather (fawns), copper and coal.', 'Forest: apples, heavy leather (wolf packs) and tanned leather (bears).', 'Desert: grapes (in camps), apricots, aloe, cilantro, flax and tin.', 'Volcano: ember orchids, gems (oval stones crack open into geodes) and research papers (chests).'] },
        { h: 'Owl cheese (two reliable setups)', p: ['Concave-mountain: coal traps at the notch and both sides; break the egg, circle the boss, bait one hit at the notch, then slip to the trap-free opposite side so it pathfinds into the wall and eats the traps. At half health (phase 2) dodge the close blast.', 'No mountain: 4 auto-scorpion crossbows spread to the screen edges with coal traps around them, 50 flint arrows each, plus one blueprint left one hammer from done off-screen. Phase 2 lightning kills the live crossbows, so finish the near-done blueprint to pull aggro and repair the rest. Keep one half-built crossbow as a taunt.'] },
        { h: 'Tech-tree order', p: ['Mercury: road speed (casters take the scroll), then more goods, then altar teleport.', 'Ceres: crop yield, then beehive, then well auto-irrigation, then bakery 2.', 'Diana: portable bedroll.', 'Vulcan: stone wall, then forge XP, then burn time, then the 10 percent armor blessing.', 'Spend spare points as you like.'] },
        { h: 'Efficient town', p: ['A Plains spot with clay plus a 4-tile straight, 2-wide lake (future mill inside the walls). The road blueprint is your wall (25-tile drag limit). Solo size: 80 by 40.', 'Reserve a 5-by-6 center lot for the Logistics Tent. Ring the Blacksmith, Leatherworker and Warehouse with space (the first two need decorations behind them; the warehouse goes on the upper road half). Build the Carpenter first and assign villagers through its workbench.'] },
        { h: 'Forest leather and citizen capture', p: ['Knock fallen logs (Bee Queen chance), grab a drum and a lyre, and clear dungeons for antidotes and caged villagers. Collect 5 antidotes, 2 Bee Queens and 2 Meticulous villagers (plus 3 expertise each).', 'Blacksmith makes grappling hooks for XP; Leatherworker tans leather. Do not feed captives — they strike, they do not die. Early Favor: take sleep-heal plus the armor and health nodes on both sides.'] },
        { h: 'Desert passage and Pyzifax invasion', p: ['White road to the satyr pass: drop a Camp Tent for respawn, use cover and prioritize the ballista towers. Build a clay-hauled camp (warehouse, carpenter, blacksmith, granary, tier-2 altar). Explore for grapes, aloe, cilantro, flax, apricots and scorpion meat (scorpion meat and cilantro times five, grapes, aloe and apricots times fifteen). Vultures dive — block with the shield to stun them. Mark tin; a Cyclops statue campfire points to the temple.', 'Pyzifax: offer the Deformed Satyr Horn to mark his camp. Lure the catapult to break its own gate, commandeer it on the ballistas, then circle-strafe three phases. The Logistics Tent now drops from the Owl, not Pyzifax.'] },
        { h: 'Cyclops phases', p: ['Temple right side: kill bomb-men and throw bombs at the stone wall (a bomb-man death resets its fuse, so use it to blast both key-room walls and skip the left puzzle). Grab the key.', 'Boss: phase 1 dodge bullets in the safe notch and bomb the eye; phase 2 circle between the hands and dodge laser plus rocks; phase 3 hit the eye (stop hitting to slow its charge); phase 4 is bullet-hell with no dash i-frames; phase 5 empty one hand before the clap. Drops the Granite Fang (unlocks the Brick Kiln). Respawns about 5 days later.'] },
        { h: 'Volcano to Phoenix to Vulcan', p: ['Apply the Aloe Gel buff before exploring. Casters and archers gather 20 ember orchids (casters also crack oval stones for geodes); open one or two ash-covered chests for research papers. A small circular lava pool is the Phoenix shrine; a large irregular lava lake is the Vulcan temple. Spined-skull dungeons always have 1 to 2 iron at the door — grab 6, then cart clay and wood from the Plains and build a tier-2 warehouse camp.', 'Offer a paper to get the University, then the Trade Station; mine about 30 iron, smelt it, and craft full iron armor plus an iron great-hammer plus 4 iron rods.', 'Phoenix: smash the shrine statue, dodge the dive, stand behind the hind legs, about four breaths. Equip the dropped cloak.', 'Vulcan: 4 steles plus iron rods plus 4 levers plus the jar; talk at home to learn the building-material offering; cart it to the temple platform, pull the lever, place a bedroll and enter. Four phases, hit the blue notches, kill the healer add, dodge the lasers. The Core Container completes the main quest.'] },
        { h: 'Automation wrap-up', p: ['With the Logistics Tent (from the Owl) on the 5-by-6 lot, chain farm to water mill to bakery (repeat bread) to granary so the camp never starves. A tier-2 Quarry auto-ships copper ingots to the Blacksmith; the brick chain and concrete mixer follow. The Trade Station ferries the Blacksmith-2 upgrade mats to the volcano camp. The game runs itself — go hunt bosses.'] },
      ],
    },
  },
  {
    slug: 'resource-map',
    category: 'resources',
    updated: '2026-07-15',
    title: {
      en: 'Resource Map: Where Everything Grows',
    },
    description: {
      en: 'Where every material spawns across the biomes.',
    },
    cover: 'screens/forest-combat.jpg',
    sections: {
      en: [
        { h: 'Plains', p: ['Olives, pine nuts (fruit trees), wheat (ground), bay leaves, cabbage and mint (ground near the forest edge), cheese, wool (from goats).', 'Leather from boars, tanned leather from fawns.', 'Copper ore and coal — your first metals.'] },
        { h: 'Forest', p: ['Apples (fruit trees).', 'Heavy leather from wolf packs; tanned leather from bears. The Forest is your leather engine.'] },
        { h: 'Desert', p: ['Grapes (scattered through camps), apricots (fruit trees).', 'Aloe, cilantro and flax grow on the ground.', 'Tin ore — pair it with copper for bronze.'] },
        { h: 'Volcano', p: ['Ember orchids grow on the ground (gather about 20 with casters or archers; casters also crack oval stones into geodes for gems).', 'Research papers sit in chests, often under volcanic ash.', 'Iron ore appears at the entrance of spined-skull dungeons (1 to 2 per door) and is mined in the Quarry at volcano level 5.'] },
        { h: 'Settle smart', p: ['Pick a spot spanning several biome borders at once so one town reaches Plains, Desert and Volcano resources without long hauls. Trade outposts extend reach later, but that is late tech.'] },
      ],
    },
  },
  {
    slug: 'food-buffs',
    category: 'food',
    updated: '2026-07-15',
    title: {
      en: 'Food, Buffs & Automation',
    },
    description: {
      en: 'Food buffs, the Isicia Marina dish, and production chains.',
    },
    cover: 'screens/town-nice.jpg',
    sections: {
      en: [
        { h: 'Food buffs are real', p: ['Romestead’s food system grants combat buffs, not just healing. Eating dead-rat berries keeps you weak; a proper meal can decide a boss fight.', 'Plan one hero food and build its farm line early — the chain is complex but pays off.'] },
        { h: 'Isicia Marina', p: ['A standout dish: it restores health and grants Nature and Poison resistance for 15 minutes.', 'Its recipe needs date palm, honey, fish sauce and exotic crab meat — so you want a date-palm farm, beehives and a pottery Dolium for fish sauce.'] },
        { h: 'Bread (automated)', p: ['Chain a wheat farm to the Water Mill (flour), the mill to the Bakery (repeat bread), and the bakery to the Food Storage.', 'You need a 4-by-2 water source for the mill and a tier-2 Bakery to unlock repeat baking. The Logistics Tent wires the whole loop hands-free.'] },
        { h: 'Wine and mead', p: ['Wine: grape farm to mill (grind grapes) to wine jar; the Materials Warehouse feeds clay to the Pottery workshop (repeat empty vials) which feeds the wine jar.', 'Mead: honey farm to bakery (make honey) to mead jar, again via the pottery for vials. The mead jar unlocks through University research and needs a level-5 villager to collect honey; hives come from Ceres and are built at the Carpenter.'] },
        { h: 'Why bother', p: ['High-tier food buffs stack with god Blessings and armor suffixes. A fed, buffed solo player can clear the Volcano that would otherwise wall them.'] },
      ],
    },
  },
  {
    slug: 'bestiary',
    category: 'bestiary',
    updated: '2026-07-15',
    title: {
      en: 'Bestiary: Enemies & Drops',
    },
    description: {
      en: 'Enemies, their drops, and how to farm them.',
    },
    cover: 'screens/owl-1.jpg',
    sections: {
      en: [
        { h: 'The Fallen (night)', p: ['Rome’s reanimated citizens leave their husks and hunt by sound and movement after dark. Torches and braziers push them back.', 'Slow and kiteable — let your wall and ranged weapons finish them. They are the core survival threat, not a loot source.'] },
        { h: 'Satyrs', p: ['The desert satyr warlord Pyzifax has taken up arms against Rome. Killing satyrs drops the Declaration of War — Pyzifax, which triggers his invasion event.', 'The catapult-goblin at his camp can be commandeered; the camp always hides a drum and a lyre worth grabbing.'] },
        { h: 'Wolves and bears (Forest)', p: ['Wolf packs are your heavy-leather source; bears drop tanned leather. Knock fallen logs in forest camps for a chance at a Bee Queen.', 'Leather feeds the Leatherworker for armor and the sleeping bag that skips the night.'] },
        { h: 'Clay golems and bomb-men (Cyclops temple)', p: ['Clay golems self-detonate after lingering near you; killing one resets that fuse, so lure one to a wall and kill it to blast the wall open.', 'Bomb-men drop bombs you throw at stone walls; their death also resets the fuse, letting you chain-breaches through the temple.'] },
        { h: 'Vultures (Desert)', p: ['Desert vultures dive at you; block the dive with your shield to stun them. They are a nuisance, not a real threat.'] },
        { h: 'Captured citizens', p: ['Not enemies, but dungeons and camps hold caged villagers. Free a build slot, then recruit them — look for Meticulous (+3 expertise) and avoid Gluttonous or Disloyal traits.'] },
      ],
    },
  },
  {
    slug: 'walkthrough-plains',
    category: 'walkthrough',
    updated: '2026-07-15',
    title: {
      en: 'Walkthrough: Plains & Forest',
    },
    description: {
      en: 'Open with the Owl, your first town, and the Forest loop.',
    },
    cover: 'screens/woods-night.jpg',
    sections: {
      en: [
        { h: 'Tutorial Owl', p: ['Follow the white starter road. Craft a flint spear, equip shield plus spear (hold right-click to block while attacking).', 'Loop the Owl (Guardian of Minerva). For a concave U-shaped mountain, ring the notch and both sides with coal traps, break the egg and circle; bait one hit at the notch then slip to the trap-free side so it pathfinds into the wall. For a rectangular mountain, ring it fully. At half health dodge the close-range blast.', 'No mountain? Four auto-scorpion crossbows at the screen edges with coal traps, 50 flint arrows each, plus one half-built blueprint off-screen to hold aggro in phase 2.', 'The kill drops a boss armor piece (equip it) and the Logistics Tent blueprint (from the Owl in current builds). Turn in the quest, unlock the tier-2 Altar, then demolish and settle for real.'] },
        { h: 'Settle the Plains', p: ['Find clay (orange tiles slow you) plus a lake with a 4-tile straight, 2-wide edge, unobstructed. Road blueprint equals your wall (25-tile drag limit); keep clay outside but orient the lake so the future Water Mill sits inside. Solo size: 80 by 40.', 'Reserve a 5-by-6 center lot for the Logistics Tent. Ring the Blacksmith, Leatherworker and Warehouse with space; build the Carpenter first and assign villagers.', 'Tech order: Mercury (road speed, more goods, altar teleport) to Ceres (crop yield, beehive, well irrigation, bakery 2) to Diana (portable bedroll) to Vulcan (stone wall, forge XP, burn time, 10 percent armor).', 'Fight the Owl daily until a full armor set drops.'] },
        { h: 'Forest loop', p: ['Enter the Forest for leather (wolves) and tanned leather (bears), and the god quests. Killing satyrs drops the Declaration of War — Pyzifax.', 'Knock fallen logs (Bee Queen chance), grab a drum and lyre, clear dungeons for antidotes and caged villagers. Collect 5 antidotes, 2 Bee Queens, 2 Meticulous villagers (plus 3 expertise each).', 'Assign the Meticulous pair to Blacksmith (grappling hooks for XP) and Leatherworker (tan leather). Do not feed captives — they strike, they do not die. Early Favor: sleep-heal plus armor and health nodes.'] },
      ],
    },
  },
  {
    slug: 'walkthrough-desert',
    category: 'walkthrough',
    updated: '2026-07-15',
    title: {
      en: 'Walkthrough: Desert (Cyclops + Pyzifax)',
    },
    description: {
      en: 'Bronze up, then drop the Cyclops and Pyzifax.',
    },
    cover: 'screens/desert-town.png',
    sections: {
      en: [
        { h: 'Reach the Desert', p: ['Follow the road to the Desert. At the satyr pass, drop a Camp Tent for respawn, use cover and corpse-piles plus tent heals to clear it, and prioritize ballista towers. Build a crude camp (warehouse, carpenter, blacksmith, granary, tier-2 altar); haul 3 buckets of clay from the Plains by cart.', 'Desert base at a clay plus 4-by-2 water border; upgrade the Altar to teleport. Build a Forge and craft the Bronze axe, pick and set (tier-2 smith smelts copper plus tin; tin also from the quarry). Bronze beats the blue plumed set.'] },
        { h: 'Cyclops', p: ['A campfire under its marble statue marks the satyr high-temple. Breach walls with explosive jars or clay-golem blasts. Five phases: bomb the eye, then the hands, then the eyeball, then the eye again, then empty one hand before the clap.', 'Drops the Granite Fang — offer it and finish Virgil’s Poem to unlock the Brick Kiln. Respawns about 5 days later; farm it for gear.'] },
        { h: 'Pyzifax invasion', p: ['Offer the Deformed Satyr Horn (drops during the invasion) to mark his camp. Lure the catapult to smash its own gate, commandeer it on the ballistas, then circle-strafe three phases.', 'Bring ranged (scrolls), a shield to block bullets, and an antidote. Drop a Camp Tent at the gate to refresh respawn. Three caged villagers spawn — take the ones with good traits.', 'Early EA guides credit Pyzifax with the Logistics Tent; in current builds that blueprint comes from the Owl, so Pyzifax now drops gear and blueprints.'] },
      ],
    },
  },
  {
    slug: 'walkthrough-volcano',
    category: 'walkthrough',
    updated: '2026-07-15',
    title: {
      en: 'Walkthrough: Volcano (Phoenix + Vulcan)',
    },
    description: {
      en: 'The endgame: volcano base, automation, Phoenix and Vulcan.',
    },
    cover: 'screens/phoenix-fight.jpg',
    sections: {
      en: [
        { h: 'Volcano base and automation', p: ['Follow any black road to the Volcano, opposite the Desert. Base at clay plus 4-by-2 water plus volcanic ash. Uncheck camera auto-zoom and lower zoom to plan safely; wall before moving villagers and build tight with paved roads (enemies spawn inside walls too).', 'Unlock Vulcan’s Volcano Furnace; fuel-needing Bakery, Forge, Pottery and Brick Kiln belong here. With the Logistics Tent on the 5-by-6 lot, chain farm to mill to bakery (repeat bread) to granary. The Tent also links Lumberyard, Quarry and Clay Pit to the Warehouse; the Quarry (volcano 5) yields coal, copper, tin and iron ingots.', 'Brick chain: warehouse to Brick Kiln (clay) back to warehouse. Concrete mixer (University): warehouse clay plus ash-clay-pit to mixer to warehouse; water is still bucketed by hand. Grapes make wine, honey makes mead.'] },
        { h: 'Phoenix', p: ['After you build, an NPC gives the Desert Phoenix quest; smash the shrine statue to summon it. Dodge the dive, then after it lands stand behind its hind legs and free-hit; phase 2 adds falling rocks but the plan holds. About four breaths wins. It drops the Phoenix cloak.'] },
        { h: 'Vulcan', p: ['A campfire under the statue marks his temple. Find 4 steles, insert iron rods, pull 4 levers, smash the jar, then talk to Vulcan at home — he names the building-material offering.', 'Cart clay, wood and stone to the temple platform, pull the lever, place a bedroll, enter. Four phases: break the iron plates and hit the blue-glowing notches (damage scales with your pickaxe), kill the one-eyed healer add fast, dodge lasers between beams.', 'Apply the Aloe Gel buff before exploring; mine about 30 iron for full iron armor plus an iron great-hammer plus 4 iron rods. The Core Container completes the main quest.'] },
      ],
    },
  },
  {
    slug: 'buildings-guide',
    category: 'buildings',
    updated: '2026-07-15',
    title: {
      en: 'Buildings Codex: Function, Unlock & Upgrades',
    },
    description: {
      en: 'Every key building: function, unlock and upgrade costs.',
    },
    cover: 'screens/construct-sites.jpg',
    sections: {
      en: [
        { h: 'Why a building codex', p: ['Romestead is a town-builder at heart: most of your power comes from assigning citizens to the right buildings and upgrading them. This codex lists the central buildings, their unlock quests, build costs and upgrade tiers so you can plan your town layout.', 'Costs below are the Workbench build recipe unless noted; upgrade tiers list the resource cost plus the requirement (a quest or a god worship node).'] },
        { h: 'Altar — the progression core', p: ['Built from the Workbench for 3 Stone. Click a god’s portrait to offer items for Worship Points and Blessings; only one Blessing is active at a time.', 'Level 2 costs 5 Stone (quest The Giant Owl) and unlocks more worship options plus teleportation between level-2 altars. Level 3 costs 3 Stone + 2 Clay + 6 Brick (quest Virgil’s Poem) for even more unlocks.'] },
        { h: 'Metals & gear', p: ['Blacksmith — unlocked after The Giant Owl; build 5 Lumber / 5 Stone / 2 Clay. Its furnace smelts ores (fuel: Lumber burns 100s, Coal 200s; an idle furnace burns 20x slower). Level 2 costs 6 Lumber / 6 Stone / 10 Brick (quest Proving Your Worth) and raises max rank to 7 with a stronger furnace that smelts Iron; Level 3 comes from Vulcan (not in the demo).', 'Leatherworker — build 5 Lumber / 5 Stone; crafts leather gear. Level 2 costs 3 Lumber / 4 Stone / 2 Clay / 5 Brick (quest Hunting Armaments), raising max rank to 7.'] },
        { h: 'Carpenter & resource yards', p: ['Carpenter’s Workshop — unlocked by The Giant Owl; build 7 Lumber / 2 Stone / 2 Clay. It upgrades other buildings and crafts furniture, road upgrades, Beehives and the Wooden Cart. Its carpenter can also construct plans, farm plots, walls and roads within 90 tiles.', 'Lumber Yard — build 6 Lumber / 3 Stone; auto-gathers lumber, +10 percent per nearby tree up to 15 trees (150 percent). Level 2 and 3 come from Diana (max rank 6 then 8); Level 4 is not in the demo.', 'Quarry — unlocked by The Copper Consistency; build 8 Lumber / 6 Stone / 3 Clay. Mines biome-specific ores: Plains and Forest yield Stone, Flint, Coal and Copper (level-2 miner); Desert adds Tin; Volcano adds Coal (Lv2) and Iron (Lv5). Levels 2-4 come from Vulcan.', 'Clay Pit — unlocked by Sanguis Celeste; build 6 Lumber / 10 Stone / 3 Clay. Auto-digs clay, +5 percent per nearby clay tile (cap 15 tiles / 75 percent); in the Volcano it harvests ash instead. Levels 2-4 come from Vulcan (not in the demo).', 'Brick Oven — unlocked by Virgil’s Poem; build 8 Stone / 6 Clay. Turns Clay plus any fuel into Brick; automates with a Logistics Tent.'] },
        { h: 'Farming, food & water', p: ['Farm Land is prepared ground you plant seeds on (the seed list varies by biome); watering cuts grow time — throw a filled Bucket, or let a Farmstead auto-water if a Well is within 16 tiles.', 'Farmstead — unlocked by Honoring the Soil; build 7 Lumber / 5 Stone. Auto-farms crops and Beehives and auto-waters with a nearby Well. Level 2 (Ceres) raises max rank to 7; Level 3 (Ceres) to 10.', 'Beehive — 10 Wood Plank / 5 Wheat / 1 Queen Bee (Carpenter Job Lv.1); produces 1 Honey Comb every 100 seconds.', 'Watermill — unlocked by Honoring the Craft; build 8 Lumber / 6 Stone. Must sit in water (a 2x3 footprint); grinds Flour, Grape Paste and Olive Paste and links via the Logistics Tent.', 'Bakery — unlocked by Fruits of the Harvest; build 5 Lumber / 2 Stone / 3 Clay. Makes complex dishes and Honey; Level 2 (Ceres) raises max rank to 7 for repeat baking. Recipes span Job Lv.1-7, including Isicia Marina at Lv.3.', 'Pottery — unlocked by Declaration of War; build 3 Lumber / 3 Stone / 4 Clay. Makes pots and the Empty Pot used for potions. Level 2 comes from Mars (not in the demo).', 'Well — 4 Stone. A reusable water source; a nearby Farmstead worker uses it to water fields.'] },
        { h: 'Research, trade & logistics', p: ['University — unlocked by Significant Pursuit; build 4 Lumber / 6 Stone / 8 Brick. A philosopher researches technologies and produces Research Papers, and unlocks the Mead Dolium, Trading Post, Concrete Mixer, Sculptor, Concrete Roads, Material Storage (Lv3) and Concrete Walls.', 'Market — unlocked by Art of Trade; build 8 Lumber / 6 Stone / 2 Clay. A merchant buys and sells, with a biome-specific stock. Level 2 (Mercury) raises max rank to 7; Level 3 is not in the current version.', 'Logistics Tent — unlocked by defeating the Guardian of Minerva; build 6 Lumber / 4 Stone. The automation hub: drag a building’s output into another’s input to auto-transfer goods and enable repeatable work orders. (It originally dropped from Pyzifax but was moved to the Owl by popular demand.)'] },
        { h: 'Field & survival', p: ['Campfire — 2 Coal / 3 Wood Stick (6 coins). Crafts Torch, Bread and cooked meats.', 'Camping Tent — 10 Leather / 10 Wood Stick (Leatherworker Lv.1). A portable, less sturdy home that sets your spawn point when you sleep.'] },
      ],
    },
  },
  {
    slug: 'faq-guide',
    category: 'faq',
    updated: '2026-07-15',
    title: {
      en: 'FAQ: The Questions Every New Governor Asks',
    },
    description: {
      en: 'Answers to the questions every new governor asks.',
    },
    cover: 'screens/town-nice.jpg',
    sections: {
      en: [
        { h: 'What is Romestead?', p: ['A 2D survival town-builder from Beartwigs and Three Friends. Rome has fallen to a zombie plague and you rebuild it from the ground up — fight the husks, raise towns and earn the favor of the Roman gods. It supports 1-8 players in co-op.'] },
        { h: 'What platforms is it on?', p: ['PC via Steam Early Access, launched May 26, 2026 at $13.99. There is no console or Mac build yet.'] },
        { h: 'How does progression work?', p: ['Your Altar is the main progression gate. Offer items to the gods to earn Worship Points and permanent buffs. The first hard gate is the Guardian of Minerva — a giant owl; defeat it to unlock new crafting.'] },
        { h: 'Can I play solo?', p: ['Yes. Solo is punishing if your gear falls behind, so work through the armor tiers (Leather to Copper to Bronze/Iron) and aim for legendary gear, which is close to mandatory for the Volcano biome. In co-op, SaveSync lets any player take over as host when the original host is offline.'] },
        { h: 'What are the biomes?', p: ['Every world has the same five biomes in roughly rising difficulty: Plains (your start), Forest, Desert, Volcano (the current Early Access endgame) and the Swamp, which arrives after Early Access.'] },
        { h: 'Why is there no inventory?', p: ['Romestead’s signature twist is physicalized resources: you pick up rocks and lumber by hand and even throw them at enemies. It feels awkward for the first hour, then becomes second nature — and doubles as a combat tool.'] },
      ],
    },
  },
  {
    slug: 'walkthrough-forest',
    category: 'walkthrough',
    updated: '2026-07-15',
    title: {
      en: 'Walkthrough: Forest (Leather & Captives)',
    },
    description: {
      en: 'The Forest: your leather engine and early god quests.',
    },
    cover: 'screens/forest-combat.jpg',
    sections: {
      en: [
        { h: 'Entering the Forest', p: ['Forest biomes spread across the map and usually border the Plains, with plains tiles on either side. The creatures here are tougher than in the starter biome, and the woods are claustrophobic — hard to build inside — though some buildings get bonuses or behave differently on forest tiles.', 'Think of the Forest as your leather engine and the site of several early god quests, not a place to found your main town.'] },
        { h: 'Leather: wolves, bears & Bee Queens', p: ['Wolf packs are your heavy-leather source; bears drop tanned leather for the Leatherworker. Knock fallen logs in forest camps for a chance at a Bee Queen, which you need to build Beehives.', 'Leather feeds the Leatherworker for armor and the sleeping bag that skips the night, so keep a steady forest run going.'] },
        { h: 'God quests & offerings', p: ['Several early god quests begin in or around the Forest. Offer items at your Altar for Worship Points and Blessings — only one Blessing is active at a time. Ceres’ branch (crop yield, beehive, well irrigation) and Diana’s (lumber, portable bedroll) are the ones you will want first.'] },
        { h: 'Freeing citizens', p: ['Forest dungeons and camps hold caged villagers. Free a build slot, then recruit them — look for the Meticulous trait (+3 expertise) and avoid Gluttonous or Disloyal. Clear dungeons for antidotes, and grab any drum and lyre you find; they are worth carting home.'] },
        { h: 'Forest survival tips', p: ['Build a small forward camp rather than hauling your whole base into the woods — a Camping Tent sets your spawn so you can re-enter quickly. A Leatherworker (5 Lumber / 5 Stone) and a Carpenter let you craft on-site.', 'Carry antidotes for the poison creatures, and send a Meticulous pair to the Blacksmith (grappling hooks for XP) and the Leatherworker (tanning) to accelerate your gear.'] },
        { h: 'What comes next', p: ['With leather gear and a few captured citizens, push on to the Desert for the Cyclops and the satyr warlord Pyzifax. The Forest’s leather plus the Logistics Tent loop (from the Owl) keep your town fed and geared while you climb the tiers.'] },
      ],
    },
  },
  {
    slug: 'biomes-guide',
    category: 'biomes',
    updated: '2026-07-16',
    title: {
      en: 'Biomes & Regions',
    },
    description: {
      en: 'Four biomes, one ringed world — resources, hazards, bosses, order.',
    },
    cover: 'screens/desert-town.png',
    sections: {
      en: [
        { h: 'How the world is laid out', p: ['Every world generates from a seed as a central spawn ringed by the key biomes — forest, desert, lake and volcano — with rivers threading through and an ocean at the edge.', 'Because biomes radiate outward from the temperate centre, a central base touching the Plains plus a couple of neighbours keeps every resource within a reasonable haul. Each region adds a new ore, a gear tier, region crops, enemies and at least one boss.'] },
        { h: 'Plains — start & farming', p: ['Your starting biome and food heartland. Wheat grows only here; mint grows here too. Resources: flint, small game, river water and clay near the banks.', 'Boss: the Guardian of Minerva (the Giant Owl) — the day-one gate. Beating it opens the Carpenter’s Workshop, Blacksmith and Feathered armor. Build your main base here and get the food chain running first.'] },
        { h: 'Forest — lumber', p: ['The early-game wood economy: heavy lumber and berries, with mint. Lumber is the most-consumed early material, so easy forest access keeps the Carpenter and your build queue fed.', 'Low threat versus the Desert and Volcano — a natural first expansion from your Plains base.'] },
        { h: 'Desert — Bronze & the Cyclops', p: ['The mid-game wall. Copper veins (orange-tinted) and tin are the inputs for Bronze — your first serious gear tier. Enemies: scorpions (Raw Scorpion Meat) and Satyr territory.', 'Boss: the Cyclops, found in the High Temple of the Satyrs — not “The Eye”, the location most other guides get wrong. It drops the Granite Tooth and Tectonic gear. Come with Bronze gear minimum.'] },
        { h: 'Volcanic — endgame', p: ['The current endgame and most punishing: enemy density and environmental damage both spike. Bosses: Pyzifax (triggered with a Declaration of War), the mobile Great Phoenix of Arabia, and the Talos Prototype — the ceiling.', 'Hazards: fire/burning, poison/nature, poor visibility. Survival kit: Aloe Salve (fire), Antidote (poison), Ember Orchid Lantern (+3 light), your best armor tier (Tectonic onward) and stocked healing. Treat it as staged expeditions, not a home.'] },
        { h: 'Roadmap: Swamp & Ruined City', p: ['Early Access ships four biomes; the roadmap adds Swamp and Ruined City for six total. There is no snow/tundra biome. The Swamp is a strong clay + mint source; a sixth boss (“Robot”) exists in game data but isn’t playable yet.'] },
      ],
    },
  },
  {
    slug: 'automation-guide',
    category: 'automation',
    updated: '2026-07-16',
    title: {
      en: 'Automation & Logistics',
    },
    description: {
      en: 'Wooden Carts, the Logistics Tent, and hands-off production chains.',
    },
    cover: 'screens/construct-sites.jpg',
    sections: {
      en: [
        { h: 'The honest picture', p: ['Romestead’s “automation” is more limited than the genre implies — set expectations. Citizens are job-zone-mobile but do not roam: they walk between their workshop and storage to fetch inputs, never foraging the wilds.', 'Each workshop caps at 10 queued jobs and there is no global production queue — you visit each one to queue orders. The player stays a big part of the gather-and-haul loop.'] },
        { h: 'Wooden Carts (day one)', p: ['Crafted from the Infrastructure tab for 3 Lumber each — available from the very first build menu, no Carpenter needed. They hold 4 resources and chain together for bulk transport along a route.', 'A parallel build path exists at the Carpenter’s Workshop for 12 Wood Plank (same item). Use whichever fits your supply.'] },
        { h: 'Logistics Tent — the real unlock', p: ['As of patch 0.25.1_7 (June 1, 2026) the Logistics Tent drops from the Guardian of Minerva (Giant Owl), not Pyzifax — so full automation is now reachable far earlier.', 'It does two things: pipe connections between buildings (Watermill flour → Bakery, Farmstead wheat → Watermill) and repeatable work orders — every workshop gains a “Repeat” checkbox, so set Bread to Repeat and it runs forever. This is the single biggest economy upgrade.'] },
        { h: 'What citizens actually do', p: ['A Carpenter with the “Constructing” toggle on walks to Material Storage, grabs materials and delivers them to queued build sites; with it off you haul yourself.', 'Citizens don’t chop trees or gather raw resources on their own, and don’t auto-transfer Lumber Yard logs to storage. Higher Job Levels make workers faster and unlock recipes.'] },
        { h: 'Manual workarounds', p: ['Place storage right beside producers so citizens walk one tile, not thirty. Assign citizens a single dedicated job so they don’t waste travel time switching roles. Stockpile inputs ahead of time and cluster workshops (Crafting Bench, Blacksmith, Leatherworker, Carpenter) to cut walking.'] },
        { h: 'Chains to wire first', p: ['Watermill → Bakery → Food Storage (always have bread). Olive Grove → Pottery → Dolium (olive paste → olive oil, a high-tier buff food). Mine → Smelter → Blacksmith (copper + tin → Bronze gear).'] },
        { h: 'Layout & gotchas', p: ['Place the Tent centrally in your production cluster (it reportedly has a working range) and keep producer → consumer adjacency short.', 'The Lumber Yard auto-produces logs into a 3-log internal buffer — it does NOT cut down trees; nearby trees only speed up the rate, and you must haul the logs to Material Storage. Blacksmith and Bakery also need external fuel (wood/coal) added at the furnace opening or they sit idle.'] },
      ],
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
