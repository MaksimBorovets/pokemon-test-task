import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.scss';

import App from './App';
import { store } from './store/store';
import { PokemonsState } from './modules/common/context/pokemons';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <PokemonsState>
      <App />
    </PokemonsState>
  </Provider>,
);
