import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreen';

export type AccountStackParamList = {
  AccountScreen: undefined;
};
const Stack = createNativeStackNavigator<AccountStackParamList>();

export default function AccountStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="AccountScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="AccountScreen"
        options={(): NativeStackNavigationOptions => ({title: 'Account'})}
        component={AccountScreen}
      />
    </Stack.Navigator>
  );
}
