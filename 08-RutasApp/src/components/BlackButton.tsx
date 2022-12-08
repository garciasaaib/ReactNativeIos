import {
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}
export default function BlackButton({title, onPress, style = {}}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.touchable, style]}>
      <Text style={styles.btn}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    height: 50,
    width: 200,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.27,
    elevation: 6,
  },
  btn: {
    color: 'white',
    fontSize: 18,
  },
});
