import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: 'dark' | 'orange';
  width?: number;
  action: (action: string) => void;
}

export const ButtonCalc = ({text, color, width = 1, action}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {...styles.button, width: width === 2 ? 180 : 80},
          color && styles[color],
        ]}>
        <Text style={[styles.buttonText, color && styles.buttonTextWhite]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9b9b9b',
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  buttonText: {
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '400',
  },
  buttonTextWhite: {
    color: 'white',
  },
  dark: {
    backgroundColor: '#2d2d2d',
    color: 'white',
  },
  orange: {
    backgroundColor: '#ff9427',
  },
});
