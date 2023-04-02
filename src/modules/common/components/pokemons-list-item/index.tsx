import { ListItem, Avatar, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Pokemon } from '../../types';

export const PokemonsListItem = ({ name, id }: Pokemon) => {
  const navigate = useNavigate();

  const handlePokemonClick = () => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <ListItem onClick={handlePokemonClick} className="ListItem">
      <Avatar
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <ListItemText primary={name} />
    </ListItem>
  );
};
