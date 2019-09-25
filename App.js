/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import { Provider } from 'react-redux';

import { store } from './storeconfig';

import NewApp from './NewApp';

const App = () => {
  return (
    <Provider store={store}>
     <NewApp />
     </Provider>
  );
};

export default App;
