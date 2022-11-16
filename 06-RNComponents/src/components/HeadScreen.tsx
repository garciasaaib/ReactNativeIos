/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import Iconicons from 'react-native-vector-icons/Ionicons';
import HeaderList from './HeaderList';
import {ThemeContext} from '../context/themeContext/ThemeContext';

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
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity onPress={onPress}>
        <Iconicons
          name="chevron-back-outline"
          size={35}
          color={theme.colors.text}
        />
      </TouchableOpacity>
      <HeaderList title={title} bg={bg} top={top} />
      <View />
    </View>
  );
}
