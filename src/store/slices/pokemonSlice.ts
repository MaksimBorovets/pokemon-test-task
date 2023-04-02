import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../reducers/rootReducer';
import { PokemonState } from '../types';
import {
  fetchPokemonByName,
  fetchPokemonList,
  fetchSelectedPokemonByName,
} from '../thunks/pokemonThunks';

const initialState: PokemonState = {
  status: 'idle',
  error: null,
  pokemons: [],
  nextPage: 1,
  limit: 20,
  selectedPokemonDetails: null,
  searchedPokemon: null,
  totalCount: 0,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = null;
        state.pokemons = [...state.pokemons, ...action.payload.pokemons];
        state.nextPage += 1;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      })
      .addCase(fetchPokemonByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = null;
        state.searchedPokemon = action.payload;
      })
      .addCase(fetchPokemonByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
        state.searchedPokemon = null;
      })
      .addCase(fetchSelectedPokemonByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSelectedPokemonByName.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = null;
        state.selectedPokemonDetails = action.payload;
      })
      .addCase(fetchSelectedPokemonByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
        state.selectedPokemonDetails = null;
      });
  },
});

export const selectPokemonState = (state: RootState) => state.pokemon;
