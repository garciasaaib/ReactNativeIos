import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/FavoritesScreen';

export type FavoriteStackParamList = {
  FavoritesScreen: undefined;
};
const Stack = createNativeStackNavigator<FavoriteStackParamList>();

export default function FavoriteStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="FavoritesScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="FavoritesScreen"
        options={(): NativeStackNavigationOptions => ({title: 'Favorites'})}
        component={FavoritesScreen}
      />
    </Stack.Navigator>
  );
}
