import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const LogoTitle = ({route}: any) => {
  return (
    <View style={style.logoTitleContainer}>
      <Text>{route.name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  logoTitleContainer: {
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
