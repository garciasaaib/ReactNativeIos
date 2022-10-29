/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {CarouselComponent} from '../components/CarouselComponent';

export const MainScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <CarouselComponent />
    </View>
  );
};
