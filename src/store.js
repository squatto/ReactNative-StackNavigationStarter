import { AsyncStorage } from 'react-native';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import thunk from 'redux-thunk';
import * as allReducers from './reducers';
// import devTools from 'remote-redux-devtools';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = persistCombineReducers(config, allReducers);

function configureStore() {
  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  const persistor = persistStore(store);

  return { persistor, store };
}

export default configureStore;