/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Text, View, Platform, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { LoginScreen } from './src/screens/LoginScreen';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#4D4A95',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      {/* <Text>Holo</Text> */}
      <LoginScreen />
    </View>
  );
};

export default App;
