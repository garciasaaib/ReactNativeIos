import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import {Tabs} from './navigators/navigations/TabBottomNavigator';
import {CalculatorScreen} from './calculator/screens/CalculatorScreen';
import {MoviesStackNavigator} from './movies/navigators/StackNavigator';
import {DrawerMainNavigator} from './tasks/navigators/DrawerMainNavigator';

export type RootStackParams = {
  TabsNavigator: undefined;
  CalculatorScreen: undefined;
  Movies: undefined;
  TaskManager: undefined;
};

const Drawer = createDrawerNavigator<RootStackParams>();

export const DrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={(): DrawerNavigationOptions => ({
        headerShown: false, // si se muestra el header o no
        drawerPosition: 'right', // left o right, desde donde se desliza el drawer
        drawerType: width >= 768 ? 'permanent' : 'front', //si el drawer esta en la vista o sobre la vista
      })}>
      <Drawer.Screen
        name="Movies"
        options={{title: 'Movies'}}
        component={MoviesStackNavigator}
      />
      <Drawer.Screen
        name="TaskManager"
        options={{title: 'Task Manager'}}
        component={DrawerMainNavigator}
      />
      <Drawer.Screen
        name="CalculatorScreen"
        options={{title: 'Calculator'}}
        component={CalculatorScreen}
      />
      <Drawer.Screen
        name="TabsNavigator"
        options={{title: 'Tabs'}}
        component={Tabs}
      />
    </Drawer.Navigator>
  );
};

// import { TabBottomNavigator } from './TabBottomNavigator';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();
// export const SettingsStackScreen = () => {
//   return (
//       <Stack.Navigator>
//         <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
//       </Stack.Navigator>
//     );
// };
