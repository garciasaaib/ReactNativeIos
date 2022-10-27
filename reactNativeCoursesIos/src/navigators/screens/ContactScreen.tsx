import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const ContactScreen = () => {
  const {
    signIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View style={styles.generalMargin}>
      <Text style={styles.title}>Contact Screen</Text>
      {!isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};
