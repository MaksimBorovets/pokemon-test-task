import { useContext } from 'react';
import { Avatar, Typography } from '@mui/material';

import { PokemonsContext } from '../../../common/context/pokemons';

import './styles/SelectedPokemonNameAvatar.scss';

export const SelectedPokemonNameAvatar = () => {
  const { selectedPokemonDetails, isLoading } = useContext(PokemonsContext);

  return (
    <>
      {!isLoading && selectedPokemonDetails && (
        <div className="Container">
          <Avatar
            alt={selectedPokemonDetails?.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemonDetails.id}.png`}
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="h6">{selectedPokemonDetails.name}</Typography>
        </div>
      )}
    </>
  );
};
