import { IListHeaderSearchHelperProps } from '../types';

export const listHeaderSearchHelper = ({
  isSearched,
  searchedPokemon,
  status,
}: IListHeaderSearchHelperProps) => {
  const isPokemonItemShown =
    isSearched && searchedPokemon && status !== 'loading';
  const isSearchingShown = isSearched && status === 'loading';
  const isNoResultShown =
    isSearched && status !== 'loading' && !searchedPokemon;

  return { isPokemonItemShown, isSearchingShown, isNoResultShown };
};
