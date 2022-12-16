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
import useFormRegister from '../../hooks/useFormRegister';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../contexts/Auth/AuthContext';

const isIos = Platform.OS === 'ios';
interface Props {
  moveToLogin: () => void;
}
export default function FormRegister({moveToLogin}: Props) {
  const {values, handleChange, handleSubmit, errors} = useFormRegister();
  // maneja el error
  const {errorMessage, removeError} = React.useContext(AuthContext);
  React.useEffect(() => {
    if (errorMessage !== '') {
      Alert.alert('Register fail', `${errorMessage}`, [
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
    <>
      <View style={loginStyle.formConntainer}>
        <Logo />
        <Text style={[loginStyle.title]}>Register</Text>
        <Text style={[loginStyle.label]}>Name</Text>
        <TextInput
          style={[loginStyle.input, isIos && loginStyle.inputIos]}
          placeholder="Name"
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="default"
          underlineColorAndroid="white"
          selectionColor="white"
          // todo: change
          // todo: value
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={handleChange('name')}
          value={values.name}
        />
        {errors.name && (
          <Text style={loginStyle.textError}>Not valid name</Text>
        )}

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
        {errors.email && (
          <Text style={loginStyle.textError}>Not valid email</Text>
        )}

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
        {errors.password && (
          <Text style={loginStyle.textError}>Not valid password</Text>
        )}

        {/* Register action */}
        <View style={loginStyle.bottomContainer}>
          <TouchableOpacity
            style={loginStyle.btn}
            activeOpacity={0.8}
            onPress={handleSubmit}>
            <Text style={loginStyle.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={moveToLogin}
        style={loginStyle.btnReturn}
        activeOpacity={0.8}>
        <Icon name="arrow-back-outline" color="white" size={30} />
      </TouchableOpacity>
    </>
  );
}
