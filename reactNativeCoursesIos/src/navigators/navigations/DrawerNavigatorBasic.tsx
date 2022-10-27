import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

export type RootStackParams = {
  StackNavigator: undefined;
  SettingsScreen: undefined;
};
const Drawer = createDrawerNavigator<RootStackParams>();

export const DrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // si se muestra el header o no
        drawerPosition: 'left', // left o right, desde donde se desliza el drawer
        drawerType: width >= 768 ? 'permanent' : 'front', //si el drawer esta en la vista o sobre la vista
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
