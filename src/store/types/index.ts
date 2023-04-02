import { Pokemon } from '../../modules/common/types';

export interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface FetchPokemonListResponse {
  pokemons: Pokemon[];
  totalCount: number;
}

export interface PokemonDetails {
  name: string;
  url: string;
  types: { type: { name: string } }[];
  id: number;
}

export interface PokemonState {
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
  pokemons: Pokemon[];
  nextPage: number;
  limit: number;
  selectedPokemonDetails: null | Pokemon;
  searchedPokemon: null | Pokemon;
  totalCount: number;
}

export interface IBasicPaginationQueryProps {
  page?: number;
  limit?: number;
}
