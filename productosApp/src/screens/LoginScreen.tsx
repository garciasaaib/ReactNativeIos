/* eslint-disable react-native/no-inline-styles */
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../navigators/AuthStackNavigator';
import Background from '../components/Background';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Form from '../components/LoginScreen/FormLogin';

type Props = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;
const isIos = Platform.OS === 'ios';

export default function LoginScreen({navigation}: Props) {
  const {top} = useSafeAreaInsets();
  function moveToRegister() {
    navigation.replace('RegisterScreen');
  }
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={isIos ? 'padding' : 'height'}>
      <View
        style={{
          marginTop: isIos ? top : 10,
          flex: 1,
          justifyContent: 'center',
        }}>
        <Background />
        {/* Content */}
        <Form moveToRegister={moveToRegister} />
      </View>
    </KeyboardAvoidingView>
  );
}
