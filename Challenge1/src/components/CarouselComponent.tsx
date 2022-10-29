/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Dimensions, View, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export const CarouselComponent = () => {
  const width = Dimensions.get('window').width;
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
        data={data}
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
const data = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    albumId: 1,
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    url: 'https://via.placeholder.com/600/d32776',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
  },
  {
    albumId: 1,
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    url: 'https://via.placeholder.com/600/f66b97',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
  },
];
