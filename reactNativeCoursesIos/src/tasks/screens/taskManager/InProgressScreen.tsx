import React, {useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import {ListItem} from '../../components/ListItem';
import {TaskListContext} from '../../context/TaskContext';

export const InProgressScreen = () => {
  const {tasksLists} = useContext(TaskListContext).state;
  return (
    <View>
      <Text>In Progress Tasks</Text>
      <FlatList
        data={tasksLists}
        renderItem={({item}) => <ListItem {...item} />}
      />
    </View>
  );
};
