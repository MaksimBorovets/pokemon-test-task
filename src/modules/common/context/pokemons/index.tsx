import { createContext, useMemo, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { POKEMON_TYPE } from '../../types';
import { IPokemonContext, IPokemonsState } from './types';
import { useFetchPokemon } from '../../hooks/useFetchPokemon';
import { RootState } from '../../../../store/reducers/rootReducer';
import { fetchPokemonList } from '../../../../store/thunks/pokemonThunks';

export const PokemonsContext = createContext<IPokemonContext>({
  pokemonSearchTerm: '',
  selectedPokemonType: POKEMON_TYPE.ALL,
  sortedPokemons: [],
  isLoading: false,
  isHiddenLoadMoreButton: false,
  searchedPokemon: null,
  selectedPokemonDetails: null,
  setPokemonSearchTerm: () => undefined,
  setSelectedPokemonType: () => undefined,
  handleClearFilters: () => undefined,
  handleLoadMore: () => undefined,
  handleTypeChange: () => undefined,
  setSelectedPokemonName: () => undefined,
  dispatch: () => undefined,
  status: null,
});

export const PokemonsState = ({ children }: IPokemonsState) => {
  const [page, setPage] = useState(1);
  const [pokemonSearchTerm, setPokemonSearchTerm] = useState('');
  const [selectedPokemonName, setSelectedPokemonName] = useState('');
  const [selectedPokemonType, setSelectedPokemonType] = useState(
    POKEMON_TYPE.ALL,
  );
  const dispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>();

  const {
    sortedPokemons,
    totalCount,
    searchedPokemon,
    selectedPokemonDetails,
    status,
  } = useFetchPokemon({
    selectedPokemonType,
    nextPage: page,
    selectedPokemonName,
    dispatch,
  });

  const isHiddenLoadMoreButton = useMemo(
    () => page * 20 >= totalCount,
    [selectedPokemonType, pokemonSearchTerm, page, totalCount],
  );

  const isLoading = useMemo(() => status === 'loading', [status]);

  const handleLoadMore = () => {
    const newNextPage = page + 1;
    setPage(newNextPage);
    dispatch(
      fetchPokemonList({
        limit: 20,
        page: newNextPage,
      }),
    );
  };

  const handleTypeChange = (event: SelectChangeEvent<POKEMON_TYPE>) => {
    setSelectedPokemonType(event.target.value as POKEMON_TYPE);
  };

  const handleClearFilters = () => {
    setSelectedPokemonType(POKEMON_TYPE.ALL);
    setPokemonSearchTerm('');
  };

  return (
    <PokemonsContext.Provider
      value={{
        pokemonSearchTerm,
        selectedPokemonType,
        searchedPokemon,
        selectedPokemonDetails,
        sortedPokemons,
        isHiddenLoadMoreButton,
        isLoading,
        status,
        setPokemonSearchTerm,
        setSelectedPokemonType,
        handleClearFilters,
        handleLoadMore,
        handleTypeChange,
        setSelectedPokemonName,
        dispatch,
      }}>
      {children}
    </PokemonsContext.Provider>
  );
};
