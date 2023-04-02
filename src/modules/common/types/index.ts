export interface Pokemon {
  name: string;
  url: string;
  type: string[];
  id: string;
  moves?: {
    move: {
      name: string;
      url: string;
    };
  }[];
  stats?: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}

export enum POKEMON_TYPE {
  ALL = 'All',
  NORMAL = 'Normal',
  FIRE = 'Fire',
  WATER = 'Water',
  ELECTRIC = 'Electric',
  GRASS = 'Grass',
  ICE = 'Ice',
  FIGHTING = 'Fighting',
  POISON = 'Poison',
  GROUND = 'Ground',
  FLYING = 'Flying',
  PSYCHIC = 'Psychic',
  BUG = 'Bug',
  ROCK = 'Rock',
  GHOST = 'Ghost',
  DRAGON = 'Dragon',
  DARK = 'Dark',
  STEEL = 'Steel',
  FAIRY = 'Fairy',
}

export interface IListHeaderSearchHelperProps {
  isSearched: boolean;
  searchedPokemon: Pokemon | null;
  status: 'idle' | 'loading' | 'failed' | null;
}
