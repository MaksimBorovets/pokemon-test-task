import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectPokemonState } from '../../../store/slices/pokemonSlice';
import { IUseFetchPokemonsListProps } from './types';

import {
  fetchPokemonList,
  fetchSelectedPokemonByName,
} from '../../../store/thunks/pokemonThunks';
import { POKEMON_TYPE } from '../types';

export const useFetchPokemon = ({
  nextPage = 1,
  selectedPokemonType,
  selectedPokemonName,
  dispatch,
}: IUseFetchPokemonsListProps) => {
  const {
    pokemons,
    status,
    totalCount,
    searchedPokemon,
    selectedPokemonDetails,
  } = useSelector(selectPokemonState);

  const sortedPokemons = useMemo(
    () =>
      pokemons.filter(
        (pokemon) =>
          (selectedPokemonType && selectedPokemonType === POKEMON_TYPE.ALL) ||
          (selectedPokemonType &&
            pokemon.type.includes(selectedPokemonType.toLowerCase())),
      ),
    [pokemons, selectedPokemonType],
  );

  useEffect(() => {
    dispatch(
      fetchPokemonList({
        page: nextPage,
        limit: 20,
      }),
    );
  }, []);

  useEffect(() => {
    if (selectedPokemonName) {
      dispatch(fetchSelectedPokemonByName(selectedPokemonName));
    }
  }, [selectedPokemonName]);

  return {
    status,
    sortedPokemons,
    totalCount,
    dispatch,
    searchedPokemon,
    selectedPokemonDetails,
  };
};
