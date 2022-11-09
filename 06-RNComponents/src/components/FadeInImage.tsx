/* eslint-disable react-native/no-inline-styles */
import {View, Animated, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {useAnimation} from '../hook/useAnimation';
interface Props {
  uri: string;
}
export default function FadeInImage({uri}: Props) {
  const {opacity, fadeIn} = useAnimation();
  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoaded && (
        <ActivityIndicator size={30} style={{position: 'absolute'}} />
      )}

      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeIn(1000);
          setIsLoaded(false);
        }}
        onLoadStart={() => {
          setIsLoaded(true);
        }}
        style={{
          width: '100%',
          height: 400,
          opacity,
        }}
      />
    </View>
  );
}
