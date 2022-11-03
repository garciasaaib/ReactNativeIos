/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import {RouteProp} from '@react-navigation/native';
import {MainScreen} from '../screens/MainScreen';
import {MyPhotosScreen} from '../screens/MyPhotosScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppSelector} from '../context/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LoginStackNavigatorParams} from './LoginStackNavigator';
import usePhotos from '../hooks/usePhotos';

interface Props
  extends NativeStackScreenProps<LoginStackNavigatorParams, 'Tabs'> {}

export type MainMaterialTabTopNavigatorParams = {
  Main: undefined;
  MyPhotos: undefined;
  Profile: undefined;
};
const Tab = createMaterialTopTabNavigator<MainMaterialTabTopNavigatorParams>();

export const MainMaterialTabTopNavigator = ({navigation}: Props) => {
  const {isLoggedIn} = useAppSelector(state => state.auth);
  const {photos} = usePhotos();
  let photosLength = useState(0);
  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate('Login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  useEffect(() => {
    photosLength[1](photos.length);
  }, [photos]);

  const inset = useSafeAreaInsets();
  type ScreenOptionProps = {
    route: RouteProp<MainMaterialTabTopNavigatorParams>;
    navigation: any;
  };
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={(
        props: ScreenOptionProps,
      ): MaterialTopTabNavigationOptions => ({
        swipeEnabled: false,
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
