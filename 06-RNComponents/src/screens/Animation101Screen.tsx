/* eslint-disable react-native/no-inline-styles */
import {Animated, StyleSheet, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../navigartors/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Btn from '../components/Btn';
import {useAnimation} from '../hook/useAnimation';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'Animation101Screen'> {}
export default function Animation101Screen({}: Props): JSX.Element {
  const {fadeIn, fadeOut, opacity, verticalTop, verticalTopIn, verticalTopOut} =
    useAnimation(0.1, -157);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {position: 'absolute'},
          {opacity, transform: [{translateY: verticalTop}]},
        ]}
      />
      <Btn title="fadeIn" onPress={fadeIn} />
      <Btn title="fadeOut" onPress={fadeOut} />
      <Btn title="verticalTopIn" onPress={verticalTopIn} />
      <Btn title="verticalTopOut" onPress={verticalTopOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    width: 150,
    height: 150,
  },
});
