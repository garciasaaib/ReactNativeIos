/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Image, View} from 'react-native';
import FavoriteStackNavigation from './FavoriteStackNavigation';
import PokedexStackNavigator from './PokedexStackNavigator';

type TabParamList = {
  PokedexStack: undefined;
  FavoritesStack: undefined;
  AccountScreen: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();

export default function MyTabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{}}
      screenOptions={(): BottomTabNavigationOptions => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        headerStyle: {backgroundColor: 'tomato'},
      })}>
      <Tab.Screen
        name="FavoritesStack"
        component={FavoriteStackNavigation}
        options={(): BottomTabNavigationOptions => ({
          tabBarIcon: params => setIcon(params, 'heart'),
          tabBarBadge: 3,
          title: 'Favorites',
        })}
      />
      <Tab.Screen
        name="PokedexStack"
        component={PokedexStackNavigator}
        options={(): BottomTabNavigationOptions => ({
          tabBarIcon: params => setPokedexIcon(params),
          tabBarLabel: '',
          title: 'Pokedex',
        })}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={(): BottomTabNavigationOptions => ({
          tabBarIcon: params => setIcon(params, 'user'),
          title: 'Account',
        })}
      />
    </Tab.Navigator>
  );
}

/** ICONS ----------------------------------- */
function setIcon(
  params: {focused: boolean; color: string; size: number},
  iconname: string,
) {
  return (
    <FontAwesome5 name={iconname} color={params.color} size={params.size} />
  );
}
function setPokedexIcon(params: {
  focused: boolean;
  color: string;
  size: number;
}) {
  return (
    <View
      style={[
        {top: -15, borderRadius: 80},
        params.focused && {backgroundColor: params.color},
      ]}>
      <Image
        source={require('../assets/pokeball.png')}
        style={{width: 80, height: 80, margin: 5}}
      />
    </View>
  );
}
