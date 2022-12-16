/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React from 'react';

/**
 * Visual component Jusft for brand
 */
export default function Logo() {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Image
        style={{height: 120, width: 133}}
        source={require('../assets/react-logo-black-and-white.png')}
      />
    </View>
  );
}
