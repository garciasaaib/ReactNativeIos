/* eslint-disable react-native/no-inline-styles */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreen} from '../screens/LoginScreen';
import {MainMaterialTabTopNavigator} from './MainMaterialTabTopNavigator';

export type LoginStackNavigatorParams = {
  Login: undefined;
  Tabs: undefined;
};
const Stack = createNativeStackNavigator<LoginStackNavigatorParams>();

export const LoginStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Tabs" component={MainMaterialTabTopNavigator} />
    </Stack.Navigator>
  );
};
