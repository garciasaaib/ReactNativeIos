import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Movie} from '../api/movieInterface';
import {useNavigation} from '@react-navigation/native';
import {MovieStackRootParams} from '../navigators/StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {MovieFlayer} from './MovieFlayer';
import {getImageUri} from '../helpers/getImageUri';
interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}
/**
 * Touchable movie flayer that navigate to details to that movie,
 * that movie information is sended as a prop
 * @param {movie} Movie general movies info
 * @param {height} number height of the touchable father component
 * @param {width} number width of the touchable father component
 * @returns a touchable movie flayer, that navigaes to details screen to that movie
 */
export const MoviePoster = ({movie, height = 400, width = 260}: Props) => {
  const navigation = useNavigation<StackNavigationProp<MovieStackRootParams>>();
  const uri = getImageUri(movie.poster_path);

  return (
    <TouchableOpacity
      style={{...styles.poster, width, height}}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Details', movie)}>
      <MovieFlayer uri={uri} dimensions={true} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  poster: {
    margin: 5,
    marginBottom: 12,
  },
  image: {
    borderRadius: 12,
    backgroundColor: 'grey',
  },
});
