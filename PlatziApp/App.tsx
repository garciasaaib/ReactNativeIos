// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/navigations/ButtonTabNavigatior';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
