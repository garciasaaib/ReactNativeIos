/* eslint-disable react/react-in-jsx-scope */
import {createContext, useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

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
  login: (userData: AuthState, keep: boolean) => void;
  logout: () => void;
}
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const {getItem, setItem, removeItem} = useAsyncStorage('@authSession');
  const [auth, setAuth] = useState<AuthState>({
    isLogged: false,
  });
  const writeItemToStorage = async (newValue: AuthState) => {
    try {
      await setItem(JSON.stringify(newValue));
    } catch (error) {
      throw error;
    }
    
  };
  const readItemFromStorage = async () => {
    try {
      const item = await getItem();
      setAuth(JSON.parse(item!));
      console.log(item);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const authContextInitialState = (): AuthContextProps => {
    return {
      auth,
      login(userData: AuthState, keep) {
        const session = {...userData, isLogged: true};

        setAuth(session);
        keep && writeItemToStorage(session);
      },
      logout() {
        writeItemToStorage({isLogged: false});
        setAuth({
          isLogged: false,
        });
      },
    };
  };
  return (
    <AuthContext.Provider value={authContextInitialState()}>
      {children}
    </AuthContext.Provider>
  );
};
