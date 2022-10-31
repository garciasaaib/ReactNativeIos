import React, { useEffect } from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { RouteProp, useNavigation } from '@react-navigation/native';
import {MainScreen} from '../screens/MainScreen';
import {MyPhotosScreen} from '../screens/MyPhotosScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useAppSelector } from '../context/hooks';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginStackNavigatorParams } from './LoginStackNavigator';

type Props = {
  route: RouteProp<MainMaterialTabTopNavigatorParams>;
  navigation: any;
};
export type MainMaterialTabTopNavigatorParams = {
  Main: undefined;
  MyPhotos: undefined;
  Profile: undefined;
};
const Tab = createMaterialTopTabNavigator<MainMaterialTabTopNavigatorParams>();

export const MainMaterialTabTopNavigator = () => {
  const {isLoggedIn} = useAppSelector(state => state.auth);
  const navigation =
    useNavigation<NativeStackNavigationProp<LoginStackNavigatorParams>>();

  useEffect(() => {
    !isLoggedIn && navigation.navigate('Login');
  }, [isLoggedIn]);

  const inset = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={(props: Props): MaterialTopTabNavigationOptions => ({
        tabBarIconStyle: {marginTop: inset.top},
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
      })}>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="MyPhotos" component={MyPhotosScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
