import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from './components/App';
import store from './store';

const persistor = persistStore(store);

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={false}>
      <App />
    </PersistGate>
  </Provider>
);

render(<Root />, document.getElementById('root'));
