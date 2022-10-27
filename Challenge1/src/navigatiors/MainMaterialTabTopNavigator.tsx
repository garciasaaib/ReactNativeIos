import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import {RouteProp} from '@react-navigation/native';
import {MainScreen} from '../screens/MainScreen';
import {MyPhotosScreen} from '../screens/MyPhotosScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const os = Platform.OS;

export type MainMaterialTabTopNavigatorParams = {
  Main: undefined;
  MyPhotos: undefined;
  Profile: undefined;
};
const Tab = createMaterialTopTabNavigator<MainMaterialTabTopNavigatorParams>();

export const MainMaterialTabTopNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="MyPhotos" component={MyPhotosScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

type Props = {
  route: RouteProp<MainMaterialTabTopNavigatorParams>;
  navigation: any;
};
const screenOptions = (props: Props): MaterialTopTabNavigationOptions => {
  return {
    tabBarIconStyle: os === 'ios' ? {marginTop: 30} : null, //ANCHOR - find hook to set the notch width
    tabBarLabelStyle: {fontSize: 12},
    tabBarIcon({color}) {
      switch (props.route.name) {
        case 'Main':
          return <Icon name="view-carousel" size={25} color={color} />;
        case 'MyPhotos':
          return <Icon name="view-stream" size={25} color={color} />;
        case 'Profile':
          return <Icon name="account" size={25} color={color} />;
      }
    },
  };
};
