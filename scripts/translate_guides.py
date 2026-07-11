"""One-off helper to insert the 4 fr/de/es/it guide bodies into src/content/guides.ts."""
from pathlib import Path

ROOT = Path(__file__).parent.parent
FILE = ROOT / 'src/content/guides.ts'

content = FILE.read_text(encoding='utf-8')

PROFESSIONS_NEW = """    sections: {
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
  },"""

ARMOR_NEW = """    sections: {
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
  },"""

BOSSES_NEW = """    sections: {
      en: [
        { h: 'The five bosses', p: ['Romestead currently features five bosses, each found in a specific way — some roam the world, others must be summoned by destroying an object in a set location.', 'Defeating them grants random rewards (armor, accessories, weapons, materials); you usually fight the same boss several times to get everything.'] },
        { h: 'Guardian of Minerva', p: ['Minerva’s owl, the first hard gate. It lurks in a ruin in a random direction from the map center (Plains). With its defeat Minerva returns part of her memory and aids you further.'] },
        { h: 'Cyclops — The Eye', p: ['Found in the Desert. Defeating it drops the Logistics Tent, which automates your production lines — a pivotal mid-game unlock.'] },
        { h: 'Pyzifax', p: ['The desert satyr warlord who has taken up arms against Rome. Track down his base in the Desert to draw him out.'] },
        { h: 'Great Phoenix of Arabia & Talos Prototype', p: ['Both dwell in the Volcano endgame. The Phoenix is reborn in its crater; the Talos Prototype is Vulcan’s unfinished metal colossus. Come heavily prepared.'] },
      ],
      fr: [
        { h: 'Les cinq boss', p: ['Romestead compte actuellement cinq boss, chacun trouvé d’une manière spécifique — certains errent dans le monde, d’autres doivent être invoqués en détruisant un objet à un endroit précis.', 'Les vaincre accorde des récompenses aléatoires (armure, accessoires, armes, matériaux) ; vous combattrez généralement le même boss plusieurs fois pour tout obtenir.'] },
        { h: 'Gardien de Minerva', p: ["La chouette de Minerva, la première porte dure. Elle rôde dans une ruine dans une direction aléatoire depuis le centre de la carte (Plaines). En la vainquant, Minerva retrouve une partie de sa mémoire et vous aide davantage."] },
        { h: 'Cyclope — L’Œil', p: ["Trouvé dans le Désert. Le vaincre lâche la Tente de Logistique, qui automatise vos chaînes de production — un déblocage crucial du milieu de jeu."] },
        { h: 'Pyzifax', p: ['Le satyre du désert, chef de guerre qui a pris les armes contre Rome. Traquez sa base dans le Désert pour le faire sortir.'] },
        { h: 'Grande Phénix d’Arabie et Talos Prototype', p: ['Tous deux habitent le Volcan, en fin de partie. La Phénix renaît dans son cratère ; le Talos Prototype est le colosse de métal inachevé de Vulcan. Venez lourdement préparés.'] },
      ],
      de: [
        { h: 'Die fünf Bosse', p: ['Romestead hat aktuell fünf Bosse, die jeweils auf eine bestimmte Weise zu finden sind — einige streifen durch die Welt, andere müssen durch Zerstörung eines Objekts an einem bestimmten Ort beschworen werden.', 'Ihr Sieg bringt zufällige Belohnungen (Rüstung, Accessoires, Waffen, Materialien); normalerweise müsst ihr denselben Boss mehrfach bekämpfen, um alles zu bekommen.'] },
        { h: 'Wächter der Minerva', p: ['Minervas Eule, das erste harte Tor. Sie lauert in einer Ruine in einer zufälligen Richtung von der Kartenmitte (Ebenen). Durch ihre Niederlage erhält Minerva Teile ihres Gedächtnisses zurück und hilft euch weiter.'] },
        { h: 'Zyklop — Das Auge', p: ['In der Wüste zu finden. Sein Sieg fällt das Logistik-Zelt, das eure Produktionsketten automatisiert — ein entscheidender Midgame-Freischalt.'] },
        { h: 'Pyzifax', p: ['Der Wüsten-Satyr, ein Kriegsherr, der die Waffen gegen Rom erhoben hat. Spürt seine Basis in der Wüste auf, um ihn hervorzulocken.'] },
        { h: 'Großer Phönix von Arabien & Talos-Prototyp', p: ['Beide wohnen im Vulkan-Endgame. Der Phönix wird in seinem Krater wiedergeboren; der Talos-Prototyp ist Vulcans unvollendeter Metallkoloss. Kommt schwer vorbereitet.'] },
      ],
      es: [
        { h: 'Los cinco jefes', p: ['Romestead tiene actualmente cinco jefes, cada uno encontrado de forma específica — algunos deambulan por el mundo, otros deben invocarse destruyendo un objeto en un lugar concreto.', 'Vencerlos otorga recompensas aleatorias (armadura, accesorios, armas, materiales); normalmente tendrás que luchar contra el mismo jefe varias veces para conseguir todo.'] },
        { h: 'Guardián de Minerva', p: ['El búho de Minerva, la primera puerta dura. Se oculta en una ruina en una dirección aleatoria desde el centro del mapa (Llanuras). Al derrotarlo, Minerva recupera parte de su memoria y te ayuda más.'] },
        { h: 'Cíclope — El Ojo', p: ['Encontrado en el Desierto. Vencerlo suelta la Tienda de Logística, que automatiza tus líneas de producción — un desbloqueo clave de mitad de partida.'] },
        { h: 'Pyzifax', p: ['El sátiro del desierto, señor de la guerra que ha tomado las armas contra Roma. Rastrea su base en el Desierto para sacarlo.'] },
        { h: 'Gran Fénix de Arabia y Talos Prototype', p: ['Ambos habitan el Volcán, el final del juego. La Fénix renace en su cráter; el Talos Prototype es el coloso de metal inacabado de Vulcano. Ven muy preparado.'] },
      ],
      it: [
        { h: 'I cinque boss', p: ['Romestead ha attualmente cinque boss, ciascuno trovato in modo specifico — alcuni vagano per il mondo, altri devono essere evocati distruggendo un oggetto in un luogo preciso.', 'Sconfiggerli dà ricompense casuali (armatura, accessori, armi, materiali); di solito dovrai combattere lo stesso boss più volte per ottenere tutto.'] },
        { h: 'Guardiano di Minerva', p: ['Il gufo di Minerva, la prima porta dura. Si nasconde in una rovina in una direzione casuale dal centro della mappa (Pianure). Sconfiggendolo, Minerva recupera parte della memoria e ti aiuta ulteriormente.'] },
        { h: 'Ciclope — L’Occhio', p: ['Trovato nel Deserto. Sconfiggerlo fa cadere la Tendola Logistica, che automatizza le tue catene di produzione — uno sblocco chiave di metà partita.'] },
        { h: 'Pyzifax', p: ['Il satiro del deserto, signore della guerra che ha preso le armi contro Roma. Rintraccia la sua base nel Deserto per stanarlo.'] },
        { h: 'Grande Fenice d’Arabia e Talos Prototype', p: ['Entrambi abitano il Vulcano, la fase finale. La Fenice rinasce nel suo cratere; il Talos Prototype è il colosso di metallo incompiuto di Vulcano. Vieni pesantemente preparato.'] },
      ],
    },
  },"""

GODS_NEW = """    sections: {
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
  },"""


def old_block(slug: str) -> str:
    """Return the exact current English-only section block for a given slug."""
    if slug == 'professions':
        return """    sections: {
      en: [
        { h: 'Eight professions', p: ['At character creation you pick one of eight professions. Each grants a small starting bonus to a matching skill:', 'Swords +5 Swords · Spears +5 Spears · Throwing +5 Throwing · Shields +5 Shields · Construction +5 Construction · Mining +5 Mining · Woodcutting +5 Woodcutting · Scrolls +5 Scrolls.', 'These edges are minor (about 1.5–5%) and skills keep growing by using the right weapon or tool, so your profession never locks you out of anything.'] },
        { h: 'Recruiting citizens', p: ['Survivors are scattered in camps, outposts, ruins and cages across the world. Free a build slot first, then recruit them into your town.', 'The Lumberyard and Leatherworker each house 1 citizen; an Insula houses 3. Plan housing before you recruit.'] },
        { h: 'Keep them fed and loyal', p: ['Citizens need a place to eat and sleep — fail either and they leave. Build Food Storage and keep it stocked so they stay happy and productive.', 'Watch Loyalty, Hunger, Happiness and Food Cost: an underfed, unhappy citizen takes a stat penalty, while loyalty grants bonuses.'] },
      ],
    },
  },"""
    if slug == 'armor-gear':
        return """    sections: {
      en: [
        { h: 'Tier progression', p: ['Armor is made by the Blacksmith or Leatherworker; some pieces need recipe scrolls found in the world.', 'Tiers run Civilian (starter) → Leather (+3 Armor, Leatherworker Lv.1) → Copper → Bronze → Iron → Legendary (expertise 20+). Higher tiers mean more Armor and better survival.'] },
        { h: 'Random suffixes', p: ['When a crafter finishes a piece, it may gain extra stats and a named suffix:', 'Anti-Hex (+5 Magic Armor, -2% Energy Regen) · Bulwark (+10% Knockback Resist, -2% Energy Regen) · Harden (+1 Armor, -1% Energy Regen) · Pristine (+5% Melee Dmg, +2% resistances) · Masterwork (+1% Energy Regen, +1% resistances) · Legendary (+2% Energy Regen, +2% resistances).'] },
      ],
    },
  },"""
    if slug == 'bosses':
        return """    sections: {
      en: [
        { h: 'The five bosses', p: ['Romestead currently features five bosses, each found in a specific way — some roam the world, others must be summoned by destroying an object in a set location.', 'Defeating them grants random rewards (armor, accessories, weapons, materials); you usually fight the same boss several times to get everything.'] },
        { h: 'Guardian of Minerva', p: ['Minerva’s owl, the first hard gate. It lurks in a ruin in a random direction from the map center (Plains). With its defeat Minerva returns part of her memory and aids you further.'] },
        { h: 'Cyclops — The Eye', p: ['Found in the Desert. Defeating it drops the Logistics Tent, which automates your production lines — a pivotal mid-game unlock.'] },
        { h: 'Pyzifax', p: ['The desert satyr warlord who has taken up arms against Rome. Track down his base in the Desert to draw him out.'] },
        { h: 'Great Phoenix of Arabia & Talos Prototype', p: ['Both dwell in the Volcano endgame. The Phoenix is reborn in its crater; the Talos Prototype is Vulcan’s unfinished metal colossus. Come heavily prepared.'] },
      ],
    },
  },"""
    # slug == 'gods'
    return """    sections: {
      en: [
        { h: 'Worship through the Altar', p: ['Offerings at the Altar earn Worship Points and unlock buildings and feats tied to each deity. Minerva directs you with tasks; the rest grant Blessings.', 'Each Blessing is a permanent boost — choose gods that match your playstyle (ranged, melee, magic, defense, health, economy).'] },
        { h: 'The pantheon', p: ['Diana — nature, hunting, the Moon: +10% Ranged Attack Power.', 'Ceres — agriculture, fertility: +25% Overall Health.', 'Mars — war, soldiers: +10% Melee Attack Power.', 'Mercury — commerce, travel: +10% Magic Attack Power.', 'Venus — love, beauty, prosperity: +10% Health, +10 Energy.', 'Vulcan — forge, fire: +10% Armor.'] },
        { h: 'Minerva’s role', p: ['Minerva (wisdom, justice, law) gives no direct stat blessing but guides you with advice and tasks; her owl, the Guardian of Minerva, is the first boss you must overcome.'] },
      ],
    },
  },"""


replacements = [
    ('professions', PROFESSIONS_NEW),
    ('armor-gear', ARMOR_NEW),
    ('bosses', BOSSES_NEW),
    ('gods', GODS_NEW),
]

for slug, new in replacements:
    old = old_block(slug)
    if old not in content:
        raise ValueError(f'Old block for {slug} not found — has the file already been translated?')
    content = content.replace(old, new, 1)
    print(f'Replaced {slug}')

FILE.write_text(content, encoding='utf-8')
print('Done.')
