import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {LoginScreen} from '../screens/LoginScreen';
import {MainMaterialTabTopNavigator} from './MainMaterialTabTopNavigator';
import {useAppDispatch} from '../context/hooks';
import {sessionStorage} from '../context/auth/authSlice';
export type LoginStackNavigatorParams = {
  Login: undefined;
  Tabs: undefined;
};
const Stack = createNativeStackNavigator<LoginStackNavigatorParams>();

export const LoginStackNavigator = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(sessionStorage());
  }, [dispatch]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Tabs" component={MainMaterialTabTopNavigator} />
    </Stack.Navigator>
  );
};
