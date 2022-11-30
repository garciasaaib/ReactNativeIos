/* eslint-disable no-extra-boolean-cast */
import {StyleSheet, Animated, Pressable} from 'react-native';
import React, {useRef} from 'react';

export default function Card({dispatch, card, game}: any) {
  // animable value
  const flipAnimation = useRef(new Animated.Value(0)).current;

  let flipRotation = 0;

  // style objects
  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };
  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  // Animation from Animated that starts and ends
  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const flipToBack = () => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Pressable
      style={styles.cardWrapper}
      onPress={() => {
        console.log('pressed');
        !!flipRotation ? flipToBack() : flipToFront();
      }}>
      <Animated.Image
        source={require('../assets/images/cardFront.png')}
        style={{...styles.cardFront, ...flipToBackStyle}}
      />
      <Animated.Image
        source={require('../assets/images/cardBack.png')}
        style={{...styles.cardBack, ...flipToFrontStyle}}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    width: 200,
    height: 200,
  },
  cardFront: {
    position: 'absolute',
    width: 200,
    height: 200,
  },
  cardBack: {
    backfaceVisibility: 'hidden',
    width: 200,
    height: 200,
  },
});
