/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
} from 'react-native';
import {styles} from '../themes/generalStyles';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {LoginStackNavigatorParams} from '../navigatiors/LoginStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const LoginForm = () => {
  const [pass, setPass] = React.useState('');
  const [user, setUser] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<LoginStackNavigatorParams>>();
  return (
    <View style={{width: '100%', marginBottom: 10, marginTop: 60}}>
      <TextInput
        style={[
          styles.input,
          Platform.OS === 'ios'
            ? {borderBottomColor: '#aaa', borderBottomWidth: 1}
            : {},
        ]}
        onChangeText={setUser}
        value={user}
        placeholder="Username"
        underlineColorAndroid="#aaa"
        textContentType="username"
      />
      <TextInput
        style={[
          styles.input,
          Platform.OS === 'ios'
            ? {borderBottomColor: '#aaa', borderBottomWidth: 1}
            : {},
        ]}
        onChangeText={setPass}
        value={pass}
        placeholder="Password"
        secureTextEntry={true}
        underlineColorAndroid="#aaa"
        textContentType="password"
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          <Icon
            name={checked ? 'checkbox-blank-outline' : 'checkbox-marked'}
            size={20}
            color="teal"
          />
        </TouchableOpacity>
        <Text style={{marginLeft: 10, color: 'grey'}}>Remember me?</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (pass && user && pass.length > 8 && user.length > 4) {
            navigation.navigate('Tabs');
            setPass('');
            setUser('');
          } else {
            Alert.alert('Incorrect password or user');
          }
        }}>
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};
