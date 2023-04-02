import { SelectChangeEvent } from '@mui/material';
import { CombinedState, AnyAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';

import { Pokemon, POKEMON_TYPE } from '../../../types';
import { PokemonState } from '../../../../../store/types';

export interface IPokemonContext {
  selectedPokemonType: POKEMON_TYPE;
  pokemonSearchTerm: string;
  sortedPokemons: Pokemon[] | undefined;
  searchedPokemon: Pokemon | null;
  selectedPokemonDetails: Pokemon | null;
  isLoading: boolean;
  isHiddenLoadMoreButton: boolean;
  setSelectedPokemonType: React.Dispatch<React.SetStateAction<POKEMON_TYPE>>;
  setPokemonSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSelectedPokemonName: React.Dispatch<React.SetStateAction<string>>;
  handleClearFilters: () => void;
  handleLoadMore: () => void;
  handleTypeChange: (event: SelectChangeEvent<POKEMON_TYPE>) => void;
  dispatch: ThunkDispatch<
    CombinedState<{
      pokemon: PokemonState;
    }>,
    void,
    AnyAction
  >;
  status: 'idle' | 'loading' | 'failed' | null;
}

export interface IPokemonsState {
  children: React.ReactNode;
}
