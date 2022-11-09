import {Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

interface Props {
  title: string;
  top?: boolean;
  bg?: string | undefined;
}
export default function HeaderList({title, top = true, bg}: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        top && {paddingTop: insets.top},
        bg ? {backgroundColor: bg} : null,
      ]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
