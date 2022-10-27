/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from '../themes/generalStyles';

export const LoginForm = () => {
  const [pass, setPass] = React.useState('');
  const [user, setUser] = React.useState('');

  // const [isEnabled, setIsEnabled] = React.useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{width: '100%', marginBottom: 10, marginTop: 60}}>
      <TextInput
        style={styles.input}
        onChangeText={setUser}
        value={user}
        placeholder="Username"
        keyboardType="default"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPass}
        value={pass}
        placeholder="Password"
        keyboardType="default"
        placeholderTextColor="#aaa"
      />
      {/* <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
    </View>
  );
};
