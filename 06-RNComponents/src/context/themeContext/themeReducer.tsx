import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  divideColor: string;
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#5856d6',
    background: '#eee',
    card: '#fff',
    text: '#1b1a41',
    border: '#a2a2cc',
    notification: 'teal',
  },
  divideColor: 'rgba(0,0,0,0.7)',
};

export const darkTheme: ThemeState = {
  currentTheme: 'light',
  dark: true,
  colors: {
    primary: '#5856d6',
    background: '#1b1a41',
    card: 'green',
    text: '#eee',
    border: '#a2a2cc',
    notification: 'teal',
  },
  divideColor: 'rgba(0,0,0,0.7)',
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};
    case 'set_dark_theme':
      return {...darkTheme};
    default:
      return {...state};
  }
};
