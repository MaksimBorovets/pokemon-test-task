import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import rootReducer from '../store/reducers/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
