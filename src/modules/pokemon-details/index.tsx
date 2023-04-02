import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import { SelectedPokemonNameAvatar } from './components/pokemon-details-avatar';
import { SelectedPokemonMovesAndStats } from './components/pokemon-details-moves-stats';
import { PokemonsContext } from '../common/context/pokemons';

export const PokemonDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { setSelectedPokemonName, isLoading, status, selectedPokemonDetails } =
    useContext(PokemonsContext);

  useEffect(() => {
    if (name) {
      setSelectedPokemonName(name);
    }
    if (!selectedPokemonDetails && status === 'failed') {
      navigate('/');
    }
  }, [name, setSelectedPokemonName, isLoading, status, selectedPokemonDetails]);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <SelectedPokemonNameAvatar />
          <SelectedPokemonMovesAndStats />
        </>
      )}
    </>
  );
};
