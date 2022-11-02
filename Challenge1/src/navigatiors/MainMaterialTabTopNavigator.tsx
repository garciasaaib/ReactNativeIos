/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
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
import {Text, View} from 'react-native';

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

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate('Login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const inset = useSafeAreaInsets();
  type ScreenOptionProps = {
    route: RouteProp<MainMaterialTabTopNavigatorParams>;
    navigation: any;
  };
  return (
    <Tab.Navigator
      initialRouteName="MyPhotos"
      screenOptions={(
        props: ScreenOptionProps,
      ): MaterialTopTabNavigationOptions => ({
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
      <Tab.Screen
        name="Main"
        options={(): MaterialTopTabNavigationOptions => ({
          tabBarBadge: () => (
            <View
              style={{
                top: 50,
                right: 30,
                backgroundColor: 'red',
                height: 20,
                width: 20,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  // backgroundColor: 'red',
                  borderRadius: 20,
                  color: 'white',
                }}>
                3
              </Text>
            </View>
          ),
          // title: 'Main',
        })}
        component={MainScreen}
      />
      <Tab.Screen name="MyPhotos" component={MyPhotosScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
