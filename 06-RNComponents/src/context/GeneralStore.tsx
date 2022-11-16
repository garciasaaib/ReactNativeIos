import React from 'react';
import {ThemeProvider} from './themeContext/ThemeContext';

export default function GeneralStore({children}: {children: JSX.Element}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
