/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Slide, slideData} from '../data/SlideShowData';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigartors/StackNavigator';
import Iconicons from 'react-native-vector-icons/Ionicons';
import HeadScreen from '../components/HeadScreen';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'SlidesScreen'> {}
export default function SlidesScreen({navigation}: Props) {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const {theme} = useContext(ThemeContext);

  const {width} = Dimensions.get('screen');

  const renderItem = (item: Slide) => {
    return (
      <View
        style={[
          styles.slide,
          {borderWidth: 1, borderColor: theme.colors.border},
        ]}>
        <Image style={styles.slideImage} source={item.img} />
        <Text style={styles.slideTitle}>{item.title}</Text>
        <Text style={[styles.slideDesc, {color: theme.colors.text}]}>
          {item.desc}
        </Text>
      </View>
    );
  };

  const Btn = () => {
    return (
      <TouchableOpacity
        onPress={() => console.log('click!!!!')}
        activeOpacity={0.8}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#5856d6',
          width: 150,
          height: 50,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 25, color: 'white', alignSelf: 'center'}}>
          Go In
        </Text>
        <Iconicons
          style={{alignSelf: 'center'}}
          name="chevron-forward-outline"
          size={40}
          color="white"
        />
      </TouchableOpacity>
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
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        layout="default"
        onSnapToItem={(index: number) => setSelectedSlide(index)}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
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
        {selectedSlide === 2 && <Btn />}
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
});
