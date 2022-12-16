import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {AuthContext} from '../contexts/Auth/AuthContext';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProtectedScreen from '../screens/ProtectedScreen';
import LoadingScreen from '../screens/LoadingScreen';

export type AuthStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ProtectedScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStackNavigator() {
  const {status} = React.useContext(AuthContext);

  // show and hide loadingScreen
  // if (true) {
  if (status === 'checking') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}>
      {status !== 'authed' ? (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      ) : (
        <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      )}
    </Stack.Navigator>
  );
}
