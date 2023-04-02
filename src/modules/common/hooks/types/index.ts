import { CombinedState, AnyAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';

import { PokemonState } from '../../../../store/types';
import { POKEMON_TYPE } from '../../types';

export interface IUseFetchPokemonsListProps {
  nextPage?: number;
  selectedPokemonName?: string;
  selectedPokemonType?: POKEMON_TYPE;
  dispatch: ThunkDispatch<
    CombinedState<{
      pokemon: PokemonState;
    }>,
    void,
    AnyAction
  >;
}

export interface IUseDebounceProps {
  value?: string;
  delay: number;
}
