import { ListHeader } from './components/pokemon-list-header';
import { PokemonsListAndPagination } from './components/pokemon-list-and-pagination';

import './styles/PokemonList.scss';

export const PokemonList = () => {
  return (
    <>
      <ListHeader />
      <PokemonsListAndPagination />
    </>
  );
};
