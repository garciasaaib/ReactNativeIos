import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {generalStyles} from '../theme/generalStyles';
const screenHeight = Dimensions.get('screen').height;

interface Props {
  uri: string;
  dimensions?: boolean;
}
/**
 * Card that shows the poster of the movie with a little shadow
 * is used to keep the same shadow in all the posters
 * @param {uri} string poster image uri
 * @param {dimensions} boolean flag to manage borderRadius, height & width
 * @returns Component with shadow that shows the poster of the movie
 */
export const MovieFlayer = ({uri, dimensions = false}: Props) => {
  return (
    <View
      style={[
        !dimensions ? styles.imageContainer : styles.btn,
        generalStyles.shadowIos,
      ]}>
      <View
        style={[
          dimensions && styles.btn,
          styles.imageBorder,
          generalStyles.shadowAndroid,
        ]}>
        <Image style={[styles.image]} source={{uri}} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {flex: 1, borderRadius: 16},
  imageContainer: {
    borderBottomEndRadius: 16,
    borderBottomLeftRadius: 16,
    minHeight: screenHeight * 0.7,
    width: '100%',
  },
  image: {
    flex: 1,
  },
  imageBorder: {
    flex: 1,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    overflow: 'hidden',
  },
});
