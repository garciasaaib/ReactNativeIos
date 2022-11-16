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
import GeneralStore from './src/context/GeneralStore';
import StackNavigator from './src/navigartors/StackNavigator';

const App = () => {
  return (
    <GeneralStore>
      <StackNavigator />
    </GeneralStore>
  );
};

export default App;
