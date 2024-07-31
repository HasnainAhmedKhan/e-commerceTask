// import './gesture-handler';

import React,{ useEffect }  from 'react';
import { View, Text } from 'react-native';
import AppNavigation from './src/navigation/MainNavigation';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
