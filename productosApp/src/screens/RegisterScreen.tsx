/* eslint-disable react-native/no-inline-styles */
import {View, Platform, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../navigators/AuthStackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Background from '../components/Background';
import FormRegister from '../components/LoginScreen/FormRegister';
type Props = NativeStackScreenProps<AuthStackParamList, 'RegisterScreen'>;
const isIos = Platform.OS === 'ios';

export default function RegisterScreen({navigation}: Props) {
  const {top} = useSafeAreaInsets();
  function moveToLogin() {
    navigation.replace('LoginScreen');
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
        <FormRegister moveToLogin={moveToLogin} />
      </View>
    </KeyboardAvoidingView>
  );
}
