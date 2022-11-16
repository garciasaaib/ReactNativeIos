import React, {createContext, useEffect, useReducer} from 'react';
import {useColorScheme} from 'react-native';
// import {Appearance, AppState} from 'react-native';
import {ThemeState, themeReducer, darkTheme, lightTheme} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: {children: JSX.Element}) => {
  // solucion con el listener de useColorScheme
  const colorScheme = useColorScheme();
  useEffect(() => {
    if (colorScheme === 'dark') {
      darkTheme;
    } else {
      lightTheme;
    }
  }, [colorScheme]);
  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  // useEffect(() => {
  //   AppState.addEventListener('change', status => {
  //     if (status === 'active') {
  //       Appearance.getColorScheme() === 'light' ? setLightTheme : setDarkTheme;
  //     }
  //   });
  // }, []);
  // const [theme, dispatch] = useReducer(
  //   themeReducer,
  //   Appearance.getColorScheme() ? lightTheme : darkTheme,
  // );

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };
  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
  };
  return (
    <ThemeContext.Provider value={{setDarkTheme, setLightTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
