/* eslint-disable react-native/no-inline-styles */
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import HeaderList from '../components/HeaderList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigartors/StackNavigator';

const ios = Platform.OS === 'ios';
interface State {
  name: string;
  email: string;
  phone: string;
  password: string;
}
interface Props
  extends NativeStackScreenProps<RootStackParamList, 'TextInputScreen'> {}
export default function TextInputScreen({}: Props) {
  const [state, setState] = React.useState<State>({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  function onChangeText(text: string, field: keyof State) {
    setState({...state, [field]: text});
  }
  /**
   * Para poder hacer scroll cuando aparece un keyboard en la pantalla se utiliza
   * KeyboardAvoidingView con el behavior, y debe contener un Scrollview dentro
   * Ademas de expacio disponible al final del componente para hacer el scroll
   * por ello se agrega <View style={{height: 50}}/>
   * En el caso que el keyboard no se cierre automatico, se debe generar el cierre con
   * un TouchableWithoutFeedback y un onPress que lo cierre
   * */
  return (
    <KeyboardAvoidingView behavior={ios ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <HeaderList title="Text Inputs" />
            <TextInput
              style={styles.input}
              onChangeText={e => onChangeText(e, 'name')}
              value={state.name}
              placeholder="Full name"
              keyboardType="default"
              autoCapitalize="words"
              autoComplete="off"
              autoCorrect={false}
            />
            <TextInput
              style={styles.input}
              onChangeText={e => onChangeText(e, 'email')}
              value={state.email}
              placeholder="Email address"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
            />
            <TextInput
              style={styles.input}
              value={state.phone}
              placeholder="Phone number"
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoComplete="off"
              onChangeText={e => onChangeText(e, 'phone')}
              autoCorrect={false}
            />
            <Text>{JSON.stringify(state, null, 2)}</Text>
            <Text>{JSON.stringify(state, null, 2)}</Text>
            <Text>{JSON.stringify(state, null, 2)}</Text>

            <TextInput
              style={styles.input}
              onChangeText={e => onChangeText(e, 'password')}
              value={state.password}
              placeholder="Password"
              keyboardType="default"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              secureTextEntry={true}
            />
            <View style={{height: ios ? 100 : 30}} />
          </>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: 'iris',
    backgroundColor: 'iris',
  },
});
