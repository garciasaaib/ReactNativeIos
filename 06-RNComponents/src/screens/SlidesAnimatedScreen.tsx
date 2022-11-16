/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Slide, slideData} from '../data/SlideShowData';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigartors/StackNavigator';
import Iconicons from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hook/useAnimation';
import HeadScreen from '../components/HeadScreen';
import {useTheme} from '@react-navigation/native';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'SlidesAnimatedScreen'> {}
export default function SlidesAnimatedScreen({navigation}: Props) {
  const {colors} = useTheme();
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const isVisible = useRef(false);
  const {width} = Dimensions.get('screen');
  const {opacity, fadeIn, fadeOut} = useAnimation(0);
  const _renderItem = (item: Slide) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.slideImage} source={item.img} />
        <Text style={styles.slideTitle}>{item.title}</Text>
        <Text style={[styles.slideDesc, {color: colors.text}]}>
          {item.desc}
        </Text>
      </View>
    );
  };

  const Btn = () => {
    return (
      <Animated.View style={{opacity}}>
        <TouchableOpacity
          onPress={() => {
            if (isVisible.current) {
              console.log('navegar');
              navigation.popToTop();
            }
          }}
          activeOpacity={0.8}
          style={styles.btn}>
          <Text style={styles.btnText}>Go In</Text>
          <Iconicons
            style={{alignSelf: 'center'}}
            name="chevron-forward-outline"
            size={40}
            color="white"
          />
        </TouchableOpacity>
      </Animated.View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <HeadScreen
        onPress={() => navigation.popToTop()}
        top={false}
        title={'Slides ' + selectedSlide}
      />
      <Carousel
        data={slideData}
        renderItem={({item}) => _renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        layout="default"
        onSnapToItem={index => {
          setSelectedSlide(index);
          fadeOut();
          isVisible.current = false;
          if (index === 2) {
            fadeIn();
            isVisible.current = true;
          }
        }}
      />
      <View style={styles.paginationWrapper}>
        <Pagination
          dotsLength={slideData.length}
          activeDotIndex={selectedSlide}
          dotColor={'#5856d6'}
          inactiveDotColor={'#ccc'}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#5856d6',
          }}
        />
        <Btn />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  slideTitle: {
    color: '#5856d6',
    fontSize: 30,
    fontWeight: 'bold',
  },
  slideDesc: {
    fontSize: 16,
  },
  slideImage: {
    width: 300,
    height: 400,
    resizeMode: 'center',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#5856d6',
    width: 150,
    height: 50,
    borderRadius: 10,
  },
  btnText: {fontSize: 25, color: 'white', alignSelf: 'center'},
  paginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
