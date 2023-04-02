import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Pokemon } from '../../modules/common/types';
import {
  IBasicPaginationQueryProps,
  ApiResponse,
  PokemonListItem,
  PokemonDetails,
} from '../types';

export const fetchPokemonList = createAsyncThunk<
  { pokemons: Pokemon[]; totalCount: number },
  IBasicPaginationQueryProps
>('pokemon/fetchPokemonList', async ({ page, limit }) => {
  const offset = (page! - 1) * limit!;
  const response = await axios.get<ApiResponse<PokemonListItem>>(
    `https://pokeapi.co/api/v2/pokemon`,
    {
      params: { offset, limit },
    },
  );

  const pokemonDetailsPromises = response.data.results.map((pokemon) =>
    axios.get<PokemonDetails>(pokemon.url),
  );

  const pokemonDetailsResponses = await Promise.all(pokemonDetailsPromises);

  const pokemons: Pokemon[] = pokemonDetailsResponses.map(
    (pokemonDetailsResponse) => {
      const types = pokemonDetailsResponse.data.types.map(
        (type) => type.type.name,
      );
      return {
        name: pokemonDetailsResponse.data.name,
        url: pokemonDetailsResponse.data.url,
        type: types,
        id: String(pokemonDetailsResponse.data.id),
      };
    },
  );

  return { pokemons, totalCount: response.data.count };
});

export const fetchPokemonByName = createAsyncThunk(
  'pokemon/fetchPokemonByName',
  async (name?: string) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
    );
    return response.data;
  },
);

export const fetchSelectedPokemonByName = createAsyncThunk(
  'pokemon/fetchSelectedPokemonByName',
  async (name: string) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
    );
    return response.data;
  },
);
