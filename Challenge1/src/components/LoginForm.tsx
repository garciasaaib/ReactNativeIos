/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  Alert,
} from 'react-native';
import {styles} from '../themes/generalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {login} from '../context/auth/authSlice';
import {clearMessage} from '../context/messages/messageSlice';
import {useAppDispatch, useAppSelector} from '../context/hooks';

export const LoginForm = () => {
  const {isLoggedIn} = useAppSelector(state => state.auth);
  const message = useAppSelector(state => state.message);

  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (values, {resetForm}) => {
      dispatch(login(values));
      isLoggedIn && resetForm();
    },
  });

  useEffect(() => {
    const {message: text} = message;
    if (text) {
      return Alert.alert('Login try', text, [
        {
          text: 'OK',
          onPress: () => {
            dispatch(clearMessage());
          },
          style: 'cancel',
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  return (
    <View style={{width: '100%', marginBottom: 10, marginTop: 60}}>
      <TextInput
        style={[
          styles.input,
          Platform.OS === 'ios'
            ? {borderBottomColor: '#aaa', borderBottomWidth: 1}
            : {},
        ]}
        autoCapitalize="none"
        onChangeText={text => formik.setFieldValue('username', text)}
        value={formik.values.username}
        placeholder="Username"
        underlineColorAndroid="#aaa"
        textContentType="username"
      />
      <Text style={style.error}>{formik.errors.username}</Text>

      <TextInput
        style={[
          styles.input,
          Platform.OS === 'ios'
            ? {borderBottomColor: '#aaa', borderBottomWidth: 1}
            : {},
        ]}
        autoCapitalize="none"
        onChangeText={text => formik.setFieldValue('password', text)}
        value={formik.values.password}
        placeholder="Password"
        secureTextEntry={true}
        underlineColorAndroid="#aaa"
        textContentType="password"
      />
      <Text style={style.error}>{formik.errors.password}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TouchableOpacity
          onPress={() => formik.setFieldValue('keep', !formik.values.keep)}>
          <Icon
            name={
              !formik.values.keep ? 'checkbox-blank-outline' : 'checkbox-marked'
            }
            size={20}
            color="teal"
          />
        </TouchableOpacity>
        <Text style={{marginLeft: 10, color: 'grey'}}>Remember me?</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          formik.handleSubmit();
        }}>
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export interface LoginSchema {
  username: string;
  password: string;
  keep: boolean;
}
function validationSchema() {
  return {
    username: Yup.string().required('username required').min(3),
    password: Yup.string().required('password required').min(3),
    keep: Yup.boolean(),
  };
}

function initialValues(): LoginSchema {
  return {
    username: '',
    password: '',
    keep: false,
  };
}
const style = StyleSheet.create({
  error: {
    textAlign: 'center',
    color: 'tomato',
    marginBottom: 20,
  },
});

// react-native-biometrics
// const fingerLog = async () => {
//   const rnBiometrics = new ReactNativeBiometrics();
//   const resultObject = await rnBiometrics.simplePrompt({
//     promptMessage: 'Confirm fingerprint',
//   });
//   if (resultObject) {
//     if (form.remember === true) {
//       await AsyncStorage.setItem('@storage_Key', 'remember');
//       await AsyncStorage.setItem('@storage_route', 'BottomNavigation');
//     }
//     setForm(initData);
//     navigation.navigate('BottomNavigation');
//   } else {
//     console.log('user cancelled biometric prompt');
//   }
// };
