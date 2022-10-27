import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import { LoginForm } from '../components/LoginForm';
import {styles} from '../themes/generalStyles';

export const LoginScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.screenChldCenter}>
        <Image
          style={styles.imageLogin}
          source={require('../../assets/dx-logo-256px.png')}
        />
        <LoginForm />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
