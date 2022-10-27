/* eslint-disable react-native/no-inline-styles */
import {StatusBar} from 'native-base';
import React from 'react';
import {View, Image, Platform} from 'react-native';
import {LoginForm} from '../components/LoginForm';
import {styles} from '../themes/generalStyles';

export const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(77, 74, 157, 0.0)',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <View style={styles.screen}>
        <View style={styles.screenChldCenter}>
          <Image
            style={styles.imageLogin}
            source={require('../../assets/dx-logo-256px.png')}
          />
          <LoginForm />
        </View>
      </View>
    </View>
  );
};
