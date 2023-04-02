import { POKEMON_TYPE } from '../../common/types';

export interface IListHeaderProps {
  selectedPokemonType: POKEMON_TYPE;
  pokemonSearchTerm: string;
  setSelectedPokemonType: React.Dispatch<React.SetStateAction<POKEMON_TYPE>>;
  setPokemonSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
