import {View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {useTheme} from '@react-navigation/native';

export default function SeparatorList() {
  const {colors} = useTheme();
  return <View style={{...styles.separator, borderColor: colors.border}} />;
}
