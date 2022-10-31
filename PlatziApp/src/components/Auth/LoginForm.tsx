import {
  Alert,
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {user, userDetails} from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const {login} = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: values => {
      const {password, username} = values;

      if (user.username !== username || user.password !== password) {
        return Alert.alert('Incorrect Credentials');
      }

      Alert.alert('Logging in. Wait a minute.');
      login(userDetails, values.keep);
    },
  });

  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="username"
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={text => formik.setFieldValue('username', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={text => formik.setFieldValue('password', text)}
      />
      <View style={styles.keep}>
        <Switch
          trackColor={{false: '#333', true: '#81b0ff'}}
          thumbColor={formik.values.keep ? '#fff' : '#fff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={value => {
            formik.setFieldValue('keep', value);
          }}
          value={formik.values.keep}
        />
        <Text style={styles.keepText}>Keep me logged</Text>
      </View>
      <Button title="Login" onPress={() => formik.handleSubmit()} />

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: '',
    password: '',
    keep: false,
  };
}

function validationSchema() {
  return {
    username: Yup.string().required('username required'),
    password: Yup.string().required('password required'),
    keep: Yup.boolean(),
  };
}
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: 'tomato',
    marginTop: 20,
  },
  keep: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  keepText: {
    paddingLeft: 10,
    fontSize: 15,
  },
});
