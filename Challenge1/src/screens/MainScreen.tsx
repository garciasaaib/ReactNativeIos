/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {CarouselComponent} from '../components/CarouselComponent';
import usePhotos from '../hooks/usePhotos';

export const MainScreen = () => {
  const {photos, loadPhotos} = usePhotos();
  if (!photos.length) {
    loadPhotos();
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      {photos.length > 0 && <CarouselComponent items={photos} />}
    </View>
  );
};
