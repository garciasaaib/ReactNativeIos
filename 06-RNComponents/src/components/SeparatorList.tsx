import {View} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export default function SeparatorList() {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{...styles.separator, borderColor: theme.colors.border}} />
  );
}
