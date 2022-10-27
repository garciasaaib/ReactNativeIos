/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AboutScreen} from '../screens/AboutScreen';
import {TaskManagerNavigator} from './TaskManagerNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {DrawerNavigationOptions} from '@react-navigation/drawer/lib/typescript/src/types';
import {DrawerContent} from '../components/DrawerContent';
import {RouteProp} from '@react-navigation/native';

export type RootDrawerTaskNavigator = {
  Task: undefined;
  AboutScreen: undefined;
};
const Drawer = createDrawerNavigator<RootDrawerTaskNavigator>();

export const DrawerMainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={screenOptions}
      drawerContent={() => <DrawerContent />}>
      <Drawer.Screen
        name="Task"
        options={{title: 'Task Manager'}}
        component={TaskManagerNavigator}
      />
      <Drawer.Screen
        name="AboutScreen"
        options={{title: 'About Screen'}}
        component={AboutScreen}
      />
    </Drawer.Navigator>
  );
};

type Props = {
  route: RouteProp<RootDrawerTaskNavigator>;
  navigation: any;
};
function screenOptions({navigation}: Props): DrawerNavigationOptions {
  return {
    headerStyle: {
      backgroundColor: 'tomato',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTintColor: '#fff',
    headerRight(props) {
      return (
        <TouchableOpacity
          style={{marginRight: 12}}
          onPress={navigation.toggleDrawer}>
          <Icon name="bonfire-outline" size={25} color={props.tintColor} />
        </TouchableOpacity>
      );
    },
  };
}
