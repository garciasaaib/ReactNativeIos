/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationOptions,
} from '@react-navigation/material-bottom-tabs';

// screens
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {TopTabNavigator} from './TopTabNavigator';

// Components
import {Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CounterScreen} from '../screens/CounterScreen';
import {AuthProvider} from '../context/AuthContext';
// handlerPlataform => si es ios manda un tabBottomNavigator, sino manda un materialBottomTabNavigator
export const Tabs = () => (
  <AuthProvider>
    {Platform.OS === 'ios' ? (
      <TabBottomNavigatorIOS />
    ) : (
      <TabBottomNavigatorAndroid />
    )}
  </AuthProvider>
);

export type RootStackParams = {
  Tab3Screen: undefined; // undefined si no recibe props
  StackNavigator: undefined;
  Tab1Screen: undefined;
  Tab2Screen: undefined;
};
// type PropsMaterialTap = {
//   route: RouteProp<RootStackParams>,
//   navigation: any;
// }

// El materialtab es un tab cualquiera con estilos parecidos a material
// primero se inicializa y despues se lanza como componente. tiene su contenedor y sus screens
const TabAndroid = createMaterialBottomTabNavigator<RootStackParams>();

const TabBottomNavigatorAndroid = () => {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true} // permite la animacion
      labeled={true} // permite mostrar el texto en el tabb
      activeColor="white" // este color lo toma al estar activo el tab
      inactiveColor="red" // este color lo toma al estar inactivo
      screenOptions={({route}): MaterialBottomTabNavigationOptions => ({
        // debe retornar un objeto con las opciones. tiene algunos props que recive por defecto
        tabBarIcon: ({color}) => setIcons(route.name, color), // debe retornar un jsx
        // tabBarIcon: ({color, focused, size}) => {}
      })}
      barStyle={{
        backgroundColor: 'salmon',
        // color: 'white'
      }}>
      {/* screen list */}
      <TabAndroid.Screen
        name="Tab3Screen"
        options={{title: 'State'}}
        component={CounterScreen}
      />
      <TabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
      <TabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Icons'}}
        component={Tab1Screen}
      />
      <TabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'TopTab'}}
        component={TopTabNavigator}
      />
    </TabAndroid.Navigator>
  );
};

// para poner las opciones del screen siempre basate en la documentacion
// tab para ios. solo cambiamos algunos colores, definimos los iconos y listamos los screens
const TabIOS = createBottomTabNavigator<RootStackParams>();
const TabBottomNavigatorIOS = () => {
  return (
    <TabIOS.Navigator
      screenOptions={({route}): BottomTabNavigationOptions => ({
        tabBarActiveTintColor: 'green',
        tabBarStyle: {
          backgroundColor: 'white',
          borderColor: 'rebeccapurple',
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => setIcons(route.name, color),
      })}>
      <TabIOS.Screen
        name="Tab3Screen"
        options={{title: 'State'}}
        component={CounterScreen}
      />
      <TabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
      <TabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Icons'}}
        component={Tab1Screen}
      />
      <TabIOS.Screen
        name="Tab2Screen"
        options={{title: 'TopTab'}}
        component={TopTabNavigator}
      />
    </TabIOS.Navigator>
  );
};

// funcion para crear el icono jsx
function setIcons(route: string, color: string) {
  let iconName: string = '';
  switch (route) {
    case 'Tab1Screen':
      iconName = 'calculator-outline';
      break;
    case 'Tab2Screen':
      iconName = 'chatbubble-outline';
      break;
    case 'Tab3Screen':
      iconName = 'leaf-outline';
      break;
    case 'StackNavigator':
      iconName = 'images-outline';
      break;
  }
  return (
    <Text style={{color}}>
      <Icon name={iconName} size={20} />
    </Text>
  );
}
