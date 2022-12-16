import {useFormik} from 'formik';
import {useContext} from 'react';
import {Keyboard} from 'react-native';
import * as Yup from 'yup';
import {AuthContext} from '../contexts/Auth/AuthContext';

export interface LoginProps {
  email: string;
  password: string;
  name: string;
}
export default function useFormRegister() {
  const {signUp} = useContext(AuthContext);
  const formik = useFormik<LoginProps>({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      Keyboard.dismiss();
      signUp(values);
    },
  });

  function initialValues(): LoginProps {
    return {email: '', password: '', name: ''};
  }

  function validationSchema() {
    return {
      name: Yup.string().required().min(4),
      email: Yup.string().required().email('Invalid email address'),
      password: Yup.string().required('Invalid password').min(8),
    };
  }

  return formik;
}
