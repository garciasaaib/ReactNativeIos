/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Dimensions, View, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {ImageInterface} from '../context/image/imageInterface';

const width = Dimensions.get('window').width;
export const CarouselComponent = ({items}: {items: ImageInterface[]}) => {
  React.useEffect(() => {
    console.log('escuchando');
  }, [items]);

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Carousel
        loop
        style={{
          width,
          height: width * 1.4,
          justifyContent: 'center',
        }}
        mode="parallax"
        width={width}
        height={width * 1.2}
        autoPlay={true}
        data={[...items]}
        windowSize={1}
        modeConfig={{
          parallaxScrollingScale: 0.6,
          parallaxScrollingOffset: 200,
        }}
        scrollAnimationDuration={1000}
        // onSnapToItem={index => console.log('current index:', index)}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: 'teal',
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Image source={{uri: item.url}} style={{flex: 1}} />
          </View>
        )}
      />
    </View>
  );
};
