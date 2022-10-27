import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Task} from '../context/TaskContext.types';
import {styles} from '../themes/GeneralStyles';
import {TaskListContext} from '../context/TaskContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const ListItem = ({title, id, isFav, isDone}: Task) => {
  const {toggleFavorite, toggleList, deleteTask} = useContext(TaskListContext);
  const thisTask = {id, title, isFav, isDone};
  return (
    <View style={styles.text}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={() => toggleFavorite(thisTask)}>
        <Text>
          {isFav ? (
            <Icon name="star" size={30} color="#900" />
          ) : (
            <Icon name="star-outline" size={30} color="#900" />
          )}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleList(thisTask)}>
        <Text>
          {isDone ? (
            <Icon name="radio-button-on" size={30} color="#900" />
          ) : (
            <Icon name="radio-button-off" size={30} color="#900" />
          )}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(thisTask)}>
        <Icon name="trash-outline" size={30} color="#900" />
      </TouchableOpacity>
    </View>
  );
};
