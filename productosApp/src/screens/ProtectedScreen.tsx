import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../navigators/AuthStackNavigator';
import {AuthContext} from '../contexts/Auth/AuthContext';
type Props = NativeStackScreenProps<AuthStackParamList, 'ProtectedScreen'>;

export default function ProtectedScreen({}: Props) {
  const {user, token, logOut} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProtectedScreen</Text>
      <Button title="logout" color="#5856d6" onPress={logOut} />

      <Text>{JSON.stringify(user, null, 2)}</Text>
      <Text>{JSON.stringify(token, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 20, marginBottom: 20},
});
