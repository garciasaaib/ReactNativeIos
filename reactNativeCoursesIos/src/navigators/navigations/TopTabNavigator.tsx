/* eslint-disable react-native/no-inline-styles */
import React from 'react';

// Screens
import {AlbumScreen} from '../screens/AlbumScreen';
import {ContactScreen} from '../screens/ContactScreen';

// funcionalidades
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';

// components
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SettingsScreen} from '../screens/SettingsScreen';
import {RouteProp} from '@react-navigation/native';

export type RootStackParams = {
  LogOut: undefined; // undefined si no recibe props
  LogIn: undefined; // undefined si no recibe props
  User: undefined; // undefined si no recibe props
};

// type Props = <RootStackParams>
type Props = {
  route: RouteProp<RootStackParams>;
  navigation: any;
};
// crear una instancia del topbar
const Tab = createMaterialTopTabNavigator<RootStackParams>();

// crea el componente contenedor y sus screens
export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      // opciones del TopTabNavigator
      screenOptions={screenOptions}
      sceneContainerStyle={{
        backgroundColor: 'lightpink',
      }}>
      {/* screeens de el TopTabNavigator */}
      <Tab.Screen name="LogOut" component={AlbumScreen} />
      <Tab.Screen name="LogIn" component={ContactScreen} />
      <Tab.Screen name="User" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
// Props para sreen
// interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

const screenOptions = (props: Props): MaterialTopTabNavigationOptions => {
  return {
    tabBarLabelStyle: {fontSize: 12},
    tabBarPressColor: 'salmon',
    tabBarShowLabel: true,
    tabBarIndicatorStyle: {
      backgroundColor: 'salmon',
      borderTopColor: 'salon',
      elevation: 0,
      borderTopWidth: 0,
      shadowColor: 'transparent',
    },
    tabBarIcon({color}) {
      switch (props.route.name) {
        case 'LogOut':
          return (
            <Text style={{color}}>
              <Icon name="airplane-outline" size={20} />
            </Text>
          );
        case 'LogIn':
          return (
            <Text style={{color}}>
              <Icon name="attach-outline" size={20} />
            </Text>
          );
        case 'User':
          return (
            <Text style={{color}}>
              <Icon name="bonfire-outline" size={20} />
            </Text>
          );
      }
    },
  };
};
