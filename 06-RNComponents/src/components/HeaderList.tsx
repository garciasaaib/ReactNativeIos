/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  title: string;
  top?: boolean;
  bg?: string | undefined;
  justify?: 'center' | undefined;
}
export default function HeaderList({title, top = true, bg, justify}: Props) {
  const insets = useSafeAreaInsets();
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={[
        top ? {paddingTop: insets.top} : null,
        bg ? {backgroundColor: bg} : null,
        justify && {alignSelf: justify},
      ]}>
      <Text
        style={[styles.title, {fontWeight: 'bold', color: theme.colors.text}]}>
        {title}
      </Text>
    </View>
  );
}
