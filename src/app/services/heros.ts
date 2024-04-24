export interface HeroData {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  series_amount: number;
  comics_amount: number;
  stories_amount: number;
}

// Función para generar un número aleatorio entre 1 y 10
function getRandomNumber(): number {
  return Math.floor(Math.random() * 10) + 1;
}

export const heroes: HeroData[] = [
  {
    id: 101,
    name: 'Spider-Man',
    description: 'El hombre araña',
    thumbnail: 'https://example.com/spiderman.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 102,
    name: 'Iron Man',
    description: 'El hombre de hierro',
    thumbnail: 'https://example.com/ironman.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 103,
    name: 'Hulk',
    description: 'El gigante verde',
    thumbnail: 'https://example.com/hulk.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 104,
    name: 'Thor',
    description: 'El dios del trueno',
    thumbnail: 'https://example.com/thor.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 105,
    name: 'Captain America',
    description: 'El líder de los Vengadores',
    thumbnail: 'https://example.com/captainamerica.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 106,
    name: 'Black Widow',
    description: 'La letal espía rusa',
    thumbnail: 'https://example.com/blackwidow.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 107,
    name: 'Black Panther',
    description: 'El rey de Wakanda',
    thumbnail: 'https://example.com/blackpanther.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 108,
    name: 'Doctor Strange',
    description: 'El hechicero supremo',
    thumbnail: 'https://example.com/doctorstrange.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 109,
    name: 'Wolverine',
    description: 'El mutante con garras',
    thumbnail: 'https://example.com/wolverine.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 110,
    name: 'Deadpool',
    description: 'El mercenario bocazas',
    thumbnail: 'https://example.com/deadpool.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 111,
    name: 'Storm',
    description: 'La mutante que controla el clima',
    thumbnail: 'https://example.com/storm.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 112,
    name: 'Jean Grey',
    description: 'La poderosa mutante telepática',
    thumbnail: 'https://example.com/jeangrey.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 113,
    name: 'Cyclops',
    description: 'El líder de los X-Men',
    thumbnail: 'https://example.com/cyclops.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 114,
    name: 'Groot',
    description: 'El árbol extraterrestre',
    thumbnail: 'https://example.com/groot.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 115,
    name: 'Rocket Raccoon',
    description: 'El mapache genéticamente modificado',
    thumbnail: 'https://example.com/rocketraccoon.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 116,
    name: 'Gamora',
    description: 'La hija adoptiva de Thanos',
    thumbnail: 'https://example.com/gamora.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 117,
    name: 'Thanos',
    description: 'El titán loco obsesionado con la muerte',
    thumbnail: 'https://example.com/thanos.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  {
    id: 118,
    name: 'Ant-Man',
    description: 'El hombre hormiga',
    thumbnail: 'https://example.com/antman.jpg',
    series_amount: getRandomNumber(),
    comics_amount: getRandomNumber(),
    stories_amount: getRandomNumber(),
  },
  // Agregar más héroes aquí...
];

export const heroes2 = [
  {
    id: 101,
    name: 'Spider-Man',
    description:
      'El increíble Spider-Man, el trepamuros, el héroe amistoso vecino, ¡es el hombre araña!',
    thumbnail: 'http://example.com/spiderman.jpg',
  },
  {
    id: 102,
    name: 'Iron Man',
    description:
      'Tony Stark, el genio multimillonario, playboy, filántropo. ¡Es Iron Man!',
    thumbnail: 'http://example.com/ironman.jpg',
  },
  {
    id: 103,
    name: 'Captain America',
    description:
      'El símbolo viviente de la libertad, el super soldado, el Capitán América.',
    thumbnail: 'http://example.com/captainamerica.jpg',
  },
  {
    id: 104,
    name: 'Thor',
    description:
      'El poderoso dios del trueno, el protector de Asgard y la Tierra, ¡es Thor!',
    thumbnail: 'http://example.com/thor.jpg',
  },
  {
    id: 105,
    name: 'Hulk',
    description:
      'Bruce Banner, el científico convertido en monstruo verde cuando se enfada, ¡es Hulk!',
    thumbnail: 'http://example.com/hulk.jpg',
  },
  {
    id: 106,
    name: 'Black Widow',
    description:
      'Natasha Romanoff, la letal espía rusa y miembro de los Vengadores, ¡es la Viuda Negra!',
    thumbnail: 'http://example.com/blackwidow.jpg',
  },
  {
    id: 107,
    name: 'Black Panther',
    description:
      "T'Challa, el rey de Wakanda y el héroe con traje de pantera, ¡es Black Panther!",
    thumbnail: 'http://example.com/blackpanther.jpg',
  },
  {
    id: 108,
    name: 'Doctor Strange',
    description:
      'Stephen Strange, el Hechicero Supremo, el maestro de las artes místicas, ¡es Doctor Strange!',
    thumbnail: 'http://example.com/doctorstrange.jpg',
  },
  {
    id: 109,
    name: 'Wolverine',
    description:
      'Logan, el mutante con garras retráctiles y un pasado misterioso, ¡es Wolverine!',
    thumbnail: 'http://example.com/wolverine.jpg',
  },
  {
    id: 110,
    name: 'Deadpool',
    description:
      'Wade Wilson, el mercenario bocazas, el anti-héroe más irreverente, ¡es Deadpool!',
    thumbnail: 'http://example.com/deadpool.jpg',
  },
  {
    id: 111,
    name: 'Storm',
    description:
      'Ororo Munroe, la mutante que controla el clima y líder de los X-Men, ¡es Storm!',
    thumbnail: 'http://example.com/storm.jpg',
  },
  {
    id: 112,
    name: 'Jean Grey',
    description:
      'Jean Grey, la poderosa mutante con habilidades telepáticas y telequinéticas, ¡es Jean Grey!',
    thumbnail: 'http://example.com/jeangrey.jpg',
  },
  {
    id: 113,
    name: 'Cyclops',
    description:
      'Scott Summers, el líder de los X-Men con rayos ópticos destructivos, ¡es Cyclops!',
    thumbnail: 'http://example.com/cyclops.jpg',
  },
  {
    id: 114,
    name: 'Groot',
    description:
      'Groot, el árbol extraterrestre con un vocabulario limitado, ¡es Groot!',
    thumbnail: 'http://example.com/groot.jpg',
  },
  {
    id: 115,
    name: 'Rocket Raccoon',
    description:
      'Rocket Raccoon, el mapache genéticamente modificado y experto en armas, ¡es Rocket Raccoon!',
    thumbnail: 'http://example.com/rocketraccoon.jpg',
  },
  {
    id: 116,
    name: 'Gamora',
    description:
      'Gamora, la hija adoptiva de Thanos y la guerrera más peligrosa del universo, ¡es Gamora!',
    thumbnail: 'http://example.com/gamora.jpg',
  },
  {
    id: 117,
    name: 'Thanos',
    description:
      'Thanos, el titán loco obsesionado con la muerte y poseedor del Guantelete del Infinito, ¡es Thanos!',
    thumbnail: 'http://example.com/thanos.jpg',
  },
  {
    id: 118,
    name: 'Ant-Man',
    description:
      'Scott Lang, el ladrón convertido en héroe que puede reducir su tamaño, ¡es Ant-Man!',
    thumbnail: 'http://example.com/antman.jpg',
  },
  {
    id: 119,
    name: 'Wasp',
    description:
      'Hope van Dyne, la heroína que puede volar y disparar energía, ¡es Wasp!',
    thumbnail: 'http://example.com/wasp.jpg',
  },
  {
    id: 120,
    name: 'Daredevil',
    description:
      "Matt Murdock, el abogado ciego que lucha contra el crimen en Hell's Kitchen, ¡es Daredevil!",
    thumbnail: 'http://example.com/daredevil.jpg',
  },
];
