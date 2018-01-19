import React, { Component } from 'react';
import { View } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { AppContainer } from './containers';
import configureStore from './store';

const { persistor, store } = configureStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<View />} onBeforeLift={onBeforeLift} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}