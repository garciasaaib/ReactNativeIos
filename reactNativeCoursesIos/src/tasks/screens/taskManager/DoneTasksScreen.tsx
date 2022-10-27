import React, {useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import {TaskListContext} from '../../context/TaskContext';
import {ListItem} from '../../components/ListItem';

export const DoneTasksScreen = () => {
  const {doneTasks} = useContext(TaskListContext).state;
  return (
    <View>
      <Text>Done Tasks</Text>
      <FlatList
        data={doneTasks}
        renderItem={({item}) => <ListItem {...item} />}
      />
    </View>
  );
};
