/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import {useFade} from '../hooks/useFade';
interface Props {
  children: JSX.Element | JSX.Element[];
}

/**
 * Component wrapper of all the Home Screen.
 * Contains two components with gradiant, one is the previous and the other is the current
 * Every change in the carousel makes the context gradiant set a new value in colors
 * and make it appear with fadeIn. & make the prevColors set, and desapear with fadeOut.
 * @param {children} JSX.Element all the homeScreen content
 * @returns the same home Screen but with a gradinate background
 */
export const GradiantBackground = ({children}: Props) => {
  // Values of the gradient context
  const {colors, prevColors, setPrevColors} = useContext(GradientContext);
  // hook that manages opacity in Animated.Views
  const {opacity, fadeIn, fadeOut} = useFade();
  // first render make a fadein with the colors, set the previous colors and make the fadeOut
  // and every time colors changes, this will happen again
  useEffect(() => {
    fadeIn(() => {
      setPrevColors(colors);
      fadeOut();
    });
  }, [colors]);

  return (
    <View style={styles.bg}>
      {/* Back linear gradient */}
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.9, y: 0.7}}
      />
      
      {/* Front linear gradient, and the animated one */}
      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.9, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
