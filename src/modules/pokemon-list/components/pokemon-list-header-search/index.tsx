import React, { useContext, useMemo, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

import { PokemonsListItem } from '../../../common/components/pokemons-list-item';
import { PokemonsContext } from '../../../common/context/pokemons';
import { fetchPokemonByName } from '../../../../store/thunks/pokemonThunks';

import './styles/ListHeaderSearch.scss';
import { listHeaderSearchHelper } from '../../../common/helpers';

export const ListHeaderSearch = () => {
  const [isSearched, setIsSearched] = useState(false);

  const {
    pokemonSearchTerm,
    searchedPokemon,
    status,
    dispatch,
    setPokemonSearchTerm,
  } = useContext(PokemonsContext);

  const { isNoResultShown, isPokemonItemShown, isSearchingShown } = useMemo(
    () => listHeaderSearchHelper({ isSearched, searchedPokemon, status }),
    [isSearched, searchedPokemon, status],
  );

  const searchPokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonSearchTerm(String(e.target.value).toLowerCase());
  };

  const handleSearchClick = () => {
    dispatch(fetchPokemonByName(pokemonSearchTerm));
    setIsSearched(true);
  };

  return (
    <div className="Container">
      <div className="SearchInputBox">
        <TextField
          label="Search Pokemon"
          variant="outlined"
          size="small"
          onChange={searchPokemon}
          value={pokemonSearchTerm}
        />

        <Button
          onClick={handleSearchClick}
          variant="contained"
          disabled={!pokemonSearchTerm.length || status === 'loading'}>
          Search
        </Button>
      </div>

      {isPokemonItemShown && searchedPokemon && (
        <PokemonsListItem {...searchedPokemon} />
      )}

      {isNoResultShown && <Typography>No results found</Typography>}

      {isSearchingShown && <Typography>Searching...</Typography>}
    </div>
  );
};
