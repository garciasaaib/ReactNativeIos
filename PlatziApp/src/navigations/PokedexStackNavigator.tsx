import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';
import {PokemonListItem} from '../hooks/usePokedex';

export type PokedexStackParamList = {
  PokedexScreen: undefined;
  PokemonScreen: PokemonListItem;
};
const Stack = createNativeStackNavigator<PokedexStackParamList>();

export default function PokedexStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="PokedexScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="PokedexScreen"
        options={(): NativeStackNavigationOptions => ({title: 'Pokedex'})}
        component={PokedexScreen}
      />
      <Stack.Screen
        name="PokemonScreen"
        options={(): NativeStackNavigationOptions => ({title: 'Pokemon'})}
        component={PokemonScreen}
      />
    </Stack.Navigator>
  );
}
