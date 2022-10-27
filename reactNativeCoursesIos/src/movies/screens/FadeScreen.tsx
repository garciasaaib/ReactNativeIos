/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Animated, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {GoBackButton} from '../components/GoBackButton';
import {useFade} from '../hooks/useFade';

/**
 * Screen that have a little example of how to make the useFade hook.
 * The hook is used over the property opacity in the component Animated.View
 * That hook manages the value and maintain the compatibility with other Animated components
 */
export const FadeScreen = () => {
  // value and animations of opacity in Animation.View screen
  const {opacity, fadeIn, fadeOut} = useFade(0.1);
  return (
    <>
      {/* Container styles */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'teal',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* Component that is animated */}
        <Animated.View
          style={{
            backgroundColor: 'grey',
            width: 150,
            height: 150,
            borderColor: 'white',
            borderWidth: 10,
            opacity, // property that is controlled by the hook
          }}
        />

        {/* Button FadeIn */}
        <TouchableOpacity style={styles.btn} onPress={() => fadeIn()}>
          <Text style={styles.btnText}>FadeIn</Text>
        </TouchableOpacity>

        {/* Button FadeOut */}
        <TouchableOpacity style={styles.btn} onPress={fadeOut}>
          <Text style={styles.btnText}>FadeOut</Text>
        </TouchableOpacity>
      </View>
      <GoBackButton />
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'rebeccapurple',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  btnText: {
    color: 'white',
  },
});
