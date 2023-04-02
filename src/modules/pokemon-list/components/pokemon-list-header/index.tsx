import { Select, MenuItem, Button } from '@mui/material';
import { useContext } from 'react';

import { PokemonsContext } from '../../../common/context/pokemons';
import { POKEMON_TYPE } from '../../../common/types';
import { ListHeaderSearch } from '../pokemon-list-header-search';

import './styles/ListHeader.scss';

export const ListHeader = () => {
  const { selectedPokemonType, handleTypeChange, handleClearFilters } =
    useContext(PokemonsContext);
  return (
    <>
      <ListHeaderSearch />
      <div className="TitleSortBox">
        <h1>Pokemons</h1>
        <div className="SortBox">
          <Select
            value={selectedPokemonType}
            onChange={handleTypeChange}
            sx={{ marginLeft: '16px' }}>
            {Object.values(POKEMON_TYPE).map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
          {selectedPokemonType !== POKEMON_TYPE.ALL && (
            <Button onClick={handleClearFilters}>Clear Filters</Button>
          )}
        </div>
      </div>
    </>
  );
};
