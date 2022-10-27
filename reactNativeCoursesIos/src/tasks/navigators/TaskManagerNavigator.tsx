import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {DoneTasksScreen} from '../screens/taskManager/DoneTasksScreen';
import {NewTaskScreen} from '../screens/taskManager/NewTaskScreen';
import {InProgressScreen} from '../screens/taskManager/InProgressScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {LogoTitle} from '../components/LogoTitle';
import {TaskListProvider} from '../context/TaskContext';
const Tab = createBottomTabNavigator();

export const TaskManagerNavigator = () => {
  return (
    <TaskListProvider>
      <Tab.Navigator
        screenOptions={({route}: any): BottomTabNavigationOptions => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string = 'add-outline';
            switch (route.name) {
              case 'New':
                iconName = focused ? 'add-circle-outline' : 'add-outline';
                break;
              case 'In Progress':
                iconName = focused ? 'list-circle-outline' : 'list-outline';
                break;
              case 'Done':
                iconName = focused
                  ? 'checkmark-done-circle-outline'
                  : 'checkmark-done-outline';
                break;

              default:
                break;
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold',
          },
          header: props => <LogoTitle {...props} route={route} />,
        })}>
        <Tab.Screen name="New" component={NewTaskScreen} />
        <Tab.Screen name="In Progress" component={InProgressScreen} />
        <Tab.Screen name="Done" component={DoneTasksScreen} />
      </Tab.Navigator>
    </TaskListProvider>
  );
};
