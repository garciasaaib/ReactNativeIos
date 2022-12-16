import {LoginResponse} from '../../interfaces/AuthInterfaces';
import {AuthContextProps} from './AuthContext';

export type AuthState = Pick<
  AuthContextProps,
  'status' | 'errorMessage' | 'user' | 'token'
>;

// signIn, signUp & authRefresh tienen el mismo tipo de respuestaa de ser validos
// logFail & logOut solo son llamadas para borrar credenciales
// addError & removeError escriben y borran el mensaje de error
export type AuthAction =
  | {type: 'signIn'; payload: LoginResponse}
  | {type: 'signUp'; payload: LoginResponse}
  | {type: 'authRefresh'; payload: LoginResponse}
  | {type: 'addError'; payload: string}
  | {type: 'removeError'}
  | {type: 'logFail'}
  | {type: 'logOut'};

// funcion pura que debe resolverse unicamente con sus argumentos
// y siempre debe retornar algo del tipo del estado que maneja
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
    case 'signUp':
    case 'authRefresh':
      return {
        ...state,
        errorMessage: '',
        status: 'authed',
        token: action.payload.token,
        user: action.payload.usuario,
      };
    case 'addError':
      return {
        ...state,
        user: null,
        status: 'not-authed',
        token: null,
        errorMessage: action.payload,
      };
    case 'removeError':
      return {
        ...state,
        errorMessage: '',
      };
    case 'logFail':
    case 'logOut':
      return {
        ...state,
        status: 'not-authed',
        user: null,
        token: null,
      };
    default:
      return {
        ...state,
      };
  }
};
