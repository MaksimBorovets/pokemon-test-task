import { useContext } from 'react';
import { List, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { PokemonsContext } from '../../../common/context/pokemons';
import { PokemonsListItem } from '../../../common/components/pokemons-list-item';

export const PokemonsListAndPagination = () => {
  const { sortedPokemons, isHiddenLoadMoreButton, isLoading, handleLoadMore } =
    useContext(PokemonsContext);

  return (
    <>
      <List>
        {sortedPokemons?.map((pokemon) => (
          <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
            <PokemonsListItem {...pokemon} />
          </Link>
        ))}
      </List>
      {sortedPokemons?.length === 0 && (
        <Typography>No results found</Typography>
      )}

      {!isHiddenLoadMoreButton && (
        <Button
          disabled={isLoading}
          variant="contained"
          onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </>
  );
};
