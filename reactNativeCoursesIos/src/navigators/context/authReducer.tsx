import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'signOut'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'setUsername'; payload: string};

// todo lo que hace se resuelve sin data o archivoos externos
// el tipo que regresa es del mismo tipo del state
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'not username yet',
      };
    case 'signOut':
      return {
        ...state,
        isLoggedIn: false,
        favoriteIcon: undefined,
        username: undefined,
      };
    case 'changeFavIcon':
      return {
        ...state,
        isLoggedIn: true,
        username: 'not username yet',
        favoriteIcon: action.payload,
      };
    case 'setUsername':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
