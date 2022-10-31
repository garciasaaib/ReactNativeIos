/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import {LoginStackNavigator} from './src/navigatiors/LoginStackNavigator';
import {Provider} from 'react-redux';
import {store} from './src/context/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <LoginStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
