import {useRef} from 'react';
import {Animated} from 'react-native';

/**
 * This custom hook creates a reference to the componennt Animated initializated
 * Thought this reference, we apply the animation to te component
 * & we can use the property opacity and the methods in other animated components.
 * @param initialOpacity number between 1 and 0, where is the fist point.
 * @returns {opacity} Reference for the opacity managed in the component animated.
 * @returns {fadeIn} function that invoques the animation of opacity fadeIn in the component.
 * @returns {fadeOut} function that invoques the animation of opacity fadeOut in the component.
 */
export const useFade = (initialOpacity: number = 0.5) => {
  const opacity = useRef(new Animated.Value(initialOpacity)).current;

  const fadeIn = (callback?: () => void) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => callback && callback());
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 30,
      useNativeDriver: false,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};
