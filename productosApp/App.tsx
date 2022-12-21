// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import {AuthProvider, AuthProviderProps} from './src/contexts/Auth/AuthContext';
import {ProductsProvider} from './src/contexts/Poducts/ProductsContext';
import SplashScreen from 'react-native-splash-screen';

const AppState = ({children}: AuthProviderProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  );
};

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <AppState>
        <AuthStackNavigator />
      </AppState>
    </NavigationContainer>
  );
}

export default App;
