import {useFormik} from 'formik';
import * as Yup from 'yup';

interface Form {
  name: string;
  email: string;
  phone: string;
  password: string;
  subscribe: boolean;
}

export default function FormScreenLogics() {
  function initialValues(): Form {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      subscribe: false,
    };
  }

  function validationSchema() {
    return {
      name: Yup.string().required('Name is required'),
      email: Yup.string().required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      password: Yup.string().required('Password is required'),
      subscribe: Yup.boolean(),
    };
  }
  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    },
  });
  function handleChangeField<K extends Object>(
    value: K | boolean,
    field: keyof Form,
  ) {
    formik.setFieldValue(field, value);
  }
  /** Return values from hook */
  return {
    values: formik.values,
    handleSubmit: formik.handleSubmit,
    handleChangeField: handleChangeField,
    errors: formik.errors,
  };
}
