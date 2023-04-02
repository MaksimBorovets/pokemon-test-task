import React, { useContext } from 'react';
import { Typography } from '@mui/material';

import { PokemonsContext } from '../../../common/context/pokemons';

import './styles/SelectedPokemonMovesAndStats.scss';

export const SelectedPokemonMovesAndStats = () => {
  const { selectedPokemonDetails } = useContext(PokemonsContext);

  return (
    <div className="MovesAndStatsContainer">
      <div className="MovesContainer">
        <Typography variant="h6">Moves:</Typography>
        <ul>
          {selectedPokemonDetails?.moves?.map((move) => (
            <li key={move.move.name}>{move.move.name}</li>
          ))}
        </ul>
      </div>
      <div className="StatsContainer">
        <Typography variant="h6">Stats:</Typography>
        <ul>
          {selectedPokemonDetails?.stats?.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
