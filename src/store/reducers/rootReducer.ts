import { combineReducers } from '@reduxjs/toolkit';

import { pokemonSlice } from '../slices/pokemonSlice';

const rootReducer = combineReducers({
  pokemon: pokemonSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
