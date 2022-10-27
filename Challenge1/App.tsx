/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {LoginStackNavigator} from './src/navigatiors/LoginStackNavigator';

const App = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <LoginStackNavigator />
    </NavigationContainer>
  );
};

export default App;
