// Situation report — verified facts about the current Early Access build.
// Every item is sourced from the guide bodies themselves (patch notes and
// roadmap statements); nothing here is invented.
import type { L10n } from '../i18n/utils';

export interface NewsItem {
  date?: string;
  tag: L10n<string>;
  title: L10n<string>;
  body: L10n<string>;
}

export const NEWS: NewsItem[] = [
  {
    date: '2026-06-01',
    tag: {
      en: 'Patch 0.25.1_7',
      fr: 'Patch 0.25.1_7',
      de: 'Patch 0.25.1_7',
      es: 'Parche 0.25.1_7',
      it: 'Patch 0.25.1_7',
    },
    title: {
      en: 'Logistics Tent now drops from the Guardian of Minerva',
      fr: 'La Tente de Logistique vient désormais du Gardien de Minerve',
      de: 'Das Logistik-Zelt kommt jetzt vom Wächter der Minerva',
      es: 'La Tienda de Logística ahora cae del Guardián de Minerva',
      it: 'La Tendola Logistica ora cade dal Guardiano di Minerva',
    },
    body: {
      en: 'Patch 0.25.1_7 moved the automation-hub blueprint from Pyzifax to the Owl, so full production automation is reachable far earlier. Early guides that credit Pyzifax are outdated.',
      fr: 'Le patch 0.25.1_7 a déplacé le plan du hub d’automatisation de Pyzifax vers la Chouette : l’automatisation complète arrive bien plus tôt. Les anciens guides qui l’attribuent à Pyzifax sont dépassés.',
      de: 'Patch 0.25.1_7 hat den Bauplan des Automatisierungs-Hubs von Pyzifax zur Eule verschoben — volle Automatisierung ist damit viel früher erreichbar. Ältere Guides, die ihn Pyzifax zuschreiben, sind veraltet.',
      es: 'El parche 0.25.1_7 movió el plano del centro de automatización de Pyzifax al Búho, así que la automatización completa llega mucho antes. Las guías antiguas que lo atribuyen a Pyzifax están desactualizadas.',
      it: 'La patch 0.25.1_7 ha spostato il progetto del centro di automazione da Pyzifax al Gufo: l’automazione completa arriva molto prima. Le guide vecchie che lo attribuiscono a Pyzifax sono superate.',
    },
  },
  {
    tag: {
      en: 'Roadmap',
      fr: 'Feuille de route',
      de: 'Roadmap',
      es: 'Hoja de ruta',
      it: 'Roadmap',
    },
    title: {
      en: 'Swamp and Ruined City are on the roadmap',
      fr: 'Le Marécage et la Ville en ruines sont au programme',
      de: 'Sumpf und Ruinenstadt stehen auf der Roadmap',
      es: 'El Pantano y la Ciudad en Ruinas están en la hoja de ruta',
      it: 'Palude e Città in Rovina sono in roadmap',
    },
    body: {
      en: 'Early Access ships four biomes; the roadmap adds the Swamp and the Ruined City for six total. There is no snow or tundra biome.',
      fr: 'L’Accès Anticipé livre quatre biomes ; la feuille de route ajoute le Marécage et la Ville en ruines pour six au total. Il n’y a pas de biome neige ou toundra.',
      de: 'Der Early Access liefert vier Biome; die Roadmap ergänzt Sumpf und Ruinenstadt auf insgesamt sechs. Ein Schnee- oder Tundra-Biom gibt es nicht.',
      es: 'El Acceso Anticipado trae cuatro biomas; la hoja de ruta añade el Pantano y la Ciudad en Ruinas para un total de seis. No existe bioma de nieve ni tundra.',
      it: 'L’Early Access offre quattro biomi; la roadmap aggiunge Palude e Città in Rovina per un totale di sei. Non esiste un bioma di neve o tundra.',
    },
  },
  {
    tag: {
      en: 'Data watch',
      fr: 'Vigie des données',
      de: 'Daten-Beobachtung',
      es: 'Vigilancia de datos',
      it: 'Osservatorio dati',
    },
    title: {
      en: 'A sixth boss exists in the game data',
      fr: 'Un sixième boss existe dans les fichiers du jeu',
      de: 'Ein sechster Boss existiert in den Spieldateien',
      es: 'Existe un sexto jefe en los archivos del juego',
      it: 'Un sesto boss esiste nei file di gioco',
    },
    body: {
      en: 'A "Robot" boss is present in the game files but is not playable yet. Treat any guide or leak about it as unconfirmed.',
      fr: 'Un boss « Robot » figure dans les fichiers mais n’est pas encore jouable. Tout guide ou fuite à son sujet reste non confirmé.',
      de: 'Ein „Robot“-Boss liegt in den Dateien, ist aber noch nicht spielbar. Guides oder Leaks dazu gelten als unbestätigt.',
      es: 'Hay un jefe «Robot» en los archivos, pero aún no es jugable. Cualquier guía o filtración sobre él se considera sin confirmar.',
      it: 'Un boss «Robot» è presente nei file ma non è ancora giocabile. Guide o fughe di notizie sul suo conto restano non confermate.',
    },
  },
];
