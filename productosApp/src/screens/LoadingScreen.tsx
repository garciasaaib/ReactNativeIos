/* eslint-disable react-native/no-inline-styles */
import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

export default function LoadingScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color="black" />
      <Text>Loading...</Text>
    </View>
  );
}
