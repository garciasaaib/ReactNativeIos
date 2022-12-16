import {useFormik} from 'formik';
import {useContext} from 'react';
import {Keyboard} from 'react-native';
import * as Yup from 'yup';
import {AuthContext} from '../contexts/Auth/AuthContext';

interface LoginProps {
  email: string;
  password: string;
}
export default function useFormLogin() {
  const {signIn} = useContext(AuthContext);
  const formik = useFormik<LoginProps>({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      Keyboard.dismiss();
      signIn(values);
    },
  });

  function initialValues(): LoginProps {
    return {email: '', password: ''};
  }

  function validationSchema() {
    return {
      email: Yup.string().required().email('Invalid email address'),
      password: Yup.string().required('Invalid password'),
    };
  }

  return formik;
}
