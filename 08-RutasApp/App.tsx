// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import {PermissionProvider} from './src/contexts/PermissionsContext';

function App() {
  return (
    <NavigationContainer>
      <AppState>
        <MainStackNavigator />
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({children}: {children: JSX.Element}) => {
  return <PermissionProvider>{children}</PermissionProvider>;
};
export default App;
