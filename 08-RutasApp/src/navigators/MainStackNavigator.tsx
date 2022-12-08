import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapScreen from '../screens/MapScreen';
import PermissionsScreen from '../screens/PermissionsScreen';
import LoadingScreen from '../screens/LoadingScreen';
import {PermissionsContext} from '../contexts/PermissionsContext';
export type RootStackParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  PermissionsScreen: undefined;
  LoadingScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStackNavigator() {
  const {permissions} = React.useContext(PermissionsContext);

  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}>
      {permissions.locationStatus === 'granted' ? (
        <Stack.Screen name="MapScreen" component={MapScreen} />
      ) : (
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      )}
    </Stack.Navigator>
  );
}
