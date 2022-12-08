import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {PermissionsContext} from '../contexts/PermissionsContext';
import BlackButton from '../components/BlackButton';

export default function PermissionsScreen() {
  const {permissions, askLocationPermissions} =
    React.useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>GPS is a must for using this App</Text>
      <BlackButton
        title="GPS Permission"
        onPress={askLocationPermissions}
        style={styles.btn}
      />

      <Text style={styles.text}>{JSON.stringify(permissions, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
  btn: {
    marginVertical: 20,
  },
});
