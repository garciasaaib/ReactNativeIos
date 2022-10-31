/* eslint-disable react/react-in-jsx-scope */
import {createContext, useState} from 'react';

// ---------------------------- store structure
interface AuthState {
  isLogged?: boolean;
  username?: string;
  lastname?: string;
  firstname?: string;
  email?: string;
}
interface AuthContextProps {
  auth: AuthState;
  login: (userData: AuthState) => void;
  logout: () => void;
}
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [auth, setAuth] = useState<AuthState>({
    isLogged: false,
  });

  const authContextInitialState: AuthContextProps = {
    auth,
    login(userData: AuthState) {
      console.log(userData);
      setAuth({...userData, isLogged: true});
    },
    logout() {
      setAuth({
        isLogged: false,
      });
    },
  };
  return (
    <AuthContext.Provider value={authContextInitialState}>
      {children}
    </AuthContext.Provider>
  );
};
