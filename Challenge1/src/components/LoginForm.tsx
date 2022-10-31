/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
} from 'react-native';
import {styles} from '../themes/generalStyles';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {login} from '../context/auth/authSlice';
import {useAppDispatch, useAppSelector} from '../context/hooks';

export const LoginForm = () => {
  const {isLoggedIn} = useAppSelector(state => state.auth);
  const {message} = useAppSelector(state => state.message);

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
    console.log(message);
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
          // if (pass && user && pass.length > 8 && user.length > 4) {
          //   navigation.navigate('Tabs');
          //   setPass('');
          //   setUser('');
          // } else {
          //   Alert.alert('Incorrect password or user');
          // }
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
