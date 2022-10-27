/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Button, TextInput, View} from 'react-native';

export const TaskForm = ({action}: any) => {
  const [taskName, setTaskName] = React.useState('');
  return (
    <View>
      <TextInput
        multiline
        placeholder="Write your next task."
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={taskName}
        onChangeText={setTaskName}
      />
      <Button
        title="Create Task!!"
        onPress={() => {
          if (taskName.length < 5) {
            return Alert.alert('Must have at least 5 char length');
          }
          Alert.alert('Task has been created!!');
          action(taskName);
          setTaskName('');
          // Pass and merge params back to home screen
          // navigation.navigate('In Progress');
        }}
      />
    </View>
  );
};
