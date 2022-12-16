/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import React from 'react';
import Logo from '../Logo';
import {loginStyle} from '../../theme/loginTheme';
import useFormLogin from '../../hooks/useFormLogin';
import {AuthContext} from '../../contexts/Auth/AuthContext';

const isIos = Platform.OS === 'ios';
interface Props {
  moveToRegister: () => void;
}
export default function FormLogin({moveToRegister}: Props) {
  const {values, handleChange, handleSubmit, errors} = useFormLogin();

  // maneja el error
  const {errorMessage, removeError} = React.useContext(AuthContext);
  React.useEffect(() => {
    if (errorMessage !== '') {
      Alert.alert('Login fail', errorMessage, [
        {
          text: 'OK',
          onPress: () => {
            removeError();
          },
        },
      ]);
    }
  }, [errorMessage]);
  return (
    <View style={loginStyle.formConntainer}>
      <Logo />
      <Text style={[loginStyle.title]}>Login</Text>
      <Text style={[loginStyle.label]}>Email</Text>
      <TextInput
        style={[loginStyle.input, isIos && loginStyle.inputIos]}
        placeholder="Email"
        placeholderTextColor="rgba(255,255,255,0.4)"
        keyboardType="email-address"
        underlineColorAndroid="white"
        selectionColor="white"
        // todo: change
        // todo: value
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleChange('email')}
        value={values.email}
      />

      <Text style={[loginStyle.label]}>Password</Text>
      <TextInput
        style={[loginStyle.input, isIos && loginStyle.inputIos]}
        placeholder="********"
        placeholderTextColor="rgba(255,255,255,0.4)"
        keyboardType="default"
        secureTextEntry={true}
        underlineColorAndroid="white"
        selectionColor="white"
        // todo: change
        // todo: value
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleChange('password')}
        value={values.password}
      />
      {(errors.email || errors.password) && (
        <Text style={loginStyle.textError}>Not allowed credentials</Text>
      )}

      {/* login action */}
      <View style={loginStyle.bottomContainer}>
        <TouchableOpacity
          style={loginStyle.btn}
          activeOpacity={0.8}
          onPress={handleSubmit}>
          <Text style={loginStyle.btnText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* new User */}
      <View style={loginStyle.newUserContainer}>
        <TouchableOpacity
          onPress={moveToRegister}
          style={loginStyle.newUserLink}
          activeOpacity={0.8}>
          <Text style={loginStyle.newUserText}>New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
