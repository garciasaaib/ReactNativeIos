import React from 'react';
import cafeApi from '../../api/cafeApi';

import {authReducer, AuthState} from './authReducer';
import axios, {AxiosError} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginProps} from '../../hooks/useFormRegister';
import {
  User,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
} from '../../interfaces/AuthInterfaces';

// inteerface del contenido del context
export type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: User | null;
  status: 'checking' | 'not-authed' | 'authed';
  signIn: (values: LoginRequest) => void;
  signUp: (values: LoginProps) => void;
  logOut: () => void;
  removeError: () => void;
};

// parte del contenido del context
const authInitialState: AuthState = {
  errorMessage: '',
  token: null,
  user: null,
  status: 'checking',
};

// declaracion del contexto y su tipo
export const AuthContext = React.createContext({} as AuthContextProps);

export interface AuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [state, dispatch] = React.useReducer(authReducer, authInitialState);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('@token');
    // no hay token, se declara deslogeado
    if (!token) {
      return dispatch({type: 'logFail'});
    }

    // si hay token, se valida y se guarda la data
    const {data} = await cafeApi.get<LoginResponse>('/auth', {});
    dispatch({
      type: 'signIn',
      payload: data,
    });
    // .catch(err =>
    // console.error({message: 'It is not possible to read the storage', err}),
    // );
  };

  const errorHandler = (error: AxiosError<{msg: string}> | unknown) => {
    if (axios.isAxiosError(error)) {
      return dispatch({
        type: 'addError',
        payload:
          error.response?.data.msg ||
          error.response?.data.errors[0].msg ||
          'Check your Credentials',
      });
    }
  };

  React.useEffect(() => {
    // get token from storage
    checkToken();
  }, []);

  const signIn: AuthContextProps['signIn'] = async ({email, password}) => {
    try {
      const {data} = await cafeApi.post<LoginResponse>('/auth/login', {
        correo: email,
        password,
      });
      // save token in context
      dispatch({
        type: 'signIn',
        payload: data,
      });
      // save token in storage
      await AsyncStorage.setItem('@token', data.token);
    } catch (error) {
      errorHandler(error);
    }
  };

  const signUp: AuthContextProps['signUp'] = async ({
    email,
    name,
    password,
  }) => {
    try {
      const requestData: RegisterRequest = {
        correo: email,
        password,
        nombre: name,
        rol: 'USER_ROLE',
      };

      const {data} = await cafeApi.post<LoginResponse>(
        '/usuarios',
        requestData,
      );

      // save token in context
      dispatch({
        type: 'signUp',
        payload: data,
      });
      // save token in storage
      await AsyncStorage.setItem('@token', data.token);
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };

  const logOut: AuthContextProps['logOut'] = async () => {
    await AsyncStorage.removeItem('@token');

    dispatch({type: 'logOut'});
  };

  const removeError: AuthContextProps['removeError'] = () => {
    dispatch({type: 'removeError'});
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
