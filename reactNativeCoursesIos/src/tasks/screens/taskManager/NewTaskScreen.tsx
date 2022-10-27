import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {TaskForm} from '../../components/TaskForm';
import {TaskListContext} from '../../context/TaskContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const NewTaskScreen = ({navigation}: any) => {
  const {createTask} = useContext(TaskListContext);
  return (
    <View>
      <Text>
        New Task
        <Icon name="bonfire-outline" size={30} color="#900" />
        <Icon name="list-outline" size={30} color="#900" />
        <Icon name="checkmark-done-outline" size={30} color="#900" />
        <Icon name="add-outline" size={30} color="#900" />
        <Icon name="bonfire-outline" size={30} color="#900" />
      </Text>
      <TaskForm action={createTask} navigation={navigation} />
    </View>
  );
};
