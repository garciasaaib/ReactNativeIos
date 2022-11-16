/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {useTheme} from '@react-navigation/native';

interface Props {
  title: string;
  top?: boolean;
  bg?: string | undefined;
  justify?: 'center' | undefined;
}
export default function HeaderList({title, top = true, bg, justify}: Props) {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();
  return (
    <View
      style={[
        top ? {paddingTop: insets.top} : null,
        bg ? {backgroundColor: bg} : null,
        justify && {alignSelf: justify},
      ]}>
      <Text style={[styles.title, {fontWeight: 'bold', color: colors.text}]}>
        {title}
      </Text>
    </View>
  );
}
