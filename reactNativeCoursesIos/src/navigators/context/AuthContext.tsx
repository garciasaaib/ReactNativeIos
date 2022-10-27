import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// como luce o que informacion tendre aqui, toda la informacion de un usuario autentificado
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// estado inicial, informacion que tendra la app cuando sea abierta por primera vez
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// como luce y que expone el context de manera general.
// Contiene el estado del auth y el metodo para ingresar a la app
export interface AuthContextProps {
  authState: AuthState; // este parametro va a tener la estructura de un AuthState
  signIn: () => void; // este parametro va a ser una funcion
  signOut: () => void; // este parametro va a ser una funcion
  changeFavoriteIcon: (iconName: string) => void; // tipo funcion y recibe ese parametro
  setUsername: (username: string) => void;
}

// Crear contexto
// crea un objeto tipo context de react, con la estructura que hicimos arriba AuthContextProps
// export const AuthContext = createContext<AuthContextProps>();
export const AuthContext = createContext({} as AuthContextProps);

// componente que es el proveedor del estado
// higher order component porque va a tener hijos
// export const AuthProvider = ({ children }: { children: JSX.Element[]}) => {
export const AuthProvider = ({children}: any) => {
  /**
   * Es el manejador de cambios en el state, al inicializar
   * 1er param es una funcion que maneja y cambia el estado actual
   * 2do param es el estado inicial literal declarado arriba
   */
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  // Liistado de metodos para correr las acciones
  // estas funciones lo unico que hacen es ejecutar el dispatch y mandarle un objeto con dos atriutos
  // el primero le dira hacia que evento dirigirse y el segundo es la data que va a manejar
  const signIn = () => {
    dispatch({type: 'signIn'});
  };
  const signOut = () => {
    dispatch({type: 'signOut'});
  };
  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };
  const setUsername = (username: string) => {
    dispatch({type: 'setUsername', payload: username});
  };

  // AuthContext Tag, mediante él, los hijos tienen acceso a sus valores y metodos
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
        changeFavoriteIcon,
        setUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
