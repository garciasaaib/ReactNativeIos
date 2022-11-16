/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Iconicons from 'react-native-vector-icons/Ionicons';
import HeaderList from './HeaderList';
import {useTheme} from '@react-navigation/native';

interface Props {
  title: string;
  onPress: () => void;
  bg?: string;
  top?: boolean;
}
export default function HeadScreen({
  title,
  onPress,
  bg = '',
  top = true,
}: Props) {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity onPress={onPress}>
        <Iconicons name="chevron-back-outline" size={35} color={colors.text} />
      </TouchableOpacity>
      <HeaderList title={title} bg={bg} top={top} />
      <View />
    </View>
  );
}
