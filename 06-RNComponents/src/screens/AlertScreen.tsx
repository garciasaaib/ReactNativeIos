import {View, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigartors/StackNavigator';
import Btn from '../components/Btn';
import prompt from 'react-native-prompt-android';
import HeadScreen from '../components/HeadScreen';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'AlertScreen'> {}
export default function AlertScreen({navigation}: Props) {
  /**
   * Alerts have an title, content and buttons
   * @returns
   */
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      {
        text: 'Ora Ora',
        onPress: () => console.log('OK Pressed'),
        style: 'destructive',
      },
      {
        text: 'Ora Ora',
        onPress: () => console.log('OK Pressed'),
        style: 'destructive',
      },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {
          text: 'Ora Ora',
          onPress: () => console.log('OK Pressed'),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('onDismiss, no se decicio');
        },
      },
    );

  const createAlertPrompt = () => {
    Alert.prompt(
      'Important info', // title
      'Never share this info', // message
      (value: string) => {
        // callback
        console.log('hello ' + value);
      },
      'login-password', //custom type of prompt
      'example', // defaultValue in propmt,
      'email-address', // keyboardType?: si queremos el keyboard de numeros o letras o email
    );
  };

  const createAndroidAlert = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };
  return (
    <>
      <HeadScreen onPress={() => navigation.popToTop()} title="Alerts" />
      <View style={styles.container}>
        <Btn title={'2-Button Alert'} onPress={createTwoButtonAlert} />
        <Btn title={'3-Button Alert'} onPress={createThreeButtonAlert} />
        <Btn title={'Prompt Alert'} onPress={createAlertPrompt} />
        <Btn title={'Android Prompt Alert'} onPress={createAndroidAlert} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
