import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';

export const SplashScreen = () => {
  // safe area values

  // Animation Values...
  const startAnimation = useRef(new Animated.Value(0)).current;

  // start animation
  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(startAnimation, {toValue: 100, useNativeDriver: true}),
      ]);
    }, 500);
  }, []);

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.animation]}>
        <Image
          style={styles.logo}
          source={require('../assets/dx-logo-256px.png')}
        />
        <Text style={styles.name}>Photografest</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '',
  },
  animation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 20,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
