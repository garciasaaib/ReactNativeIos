import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MovieStackRootParams} from '../navigators/StackNavigator';
import {Movie} from '../api/movieInterface';
import {MovieFlayer} from '../components/MovieFlayer';
import {useMoviesDetails} from '../hooks/useMoviesDetails';
import {MovieDetails} from '../components/MovieDetails';
import {GoBackButton} from '../components/GoBackButton';
import { getImageUri } from '../helpers/getImageUri';

interface Props extends StackScreenProps<MovieStackRootParams, 'Details'> {}

/**
 * Screen that shows a big picture for the movie and a lite part of info,
 * title, original title, resume, and actors, etc
 * @param {route} StackScreenProps contains, after a normal screen props, the props sended from the father
 * @returns return a component that have
 */
export const DetailsScreen = ({route}: Props) => {
  // the whole info of the movie that comes from the father
  const movie = route.params as Movie;
  // image uri for the movie
  const uri = getImageUri(movie.poster_path);
  // request info about the movie
  const {isLoading, cast, movieFull} = useMoviesDetails(movie.id);
  return (
    <ScrollView>
      {/* Image of the movie */}
      <MovieFlayer uri={uri} />

      {/* Info of the movie that comes from father */}
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {/* Contains the info of the request */}
      <View>
        {isLoading ? (
          <ActivityIndicator color="salmon" size={50} />
        ) : (
          <MovieDetails cast={cast} movieFull={movieFull!} />
        )}
      </View>

      {/* Little go back button */}
      <GoBackButton />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  marginContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    fontSize: 18,
  },
  closeBtn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    position: 'absolute',
  },
  iconBtn: {
    elevation: 9,
    color: 'rgba(255, 255, 255, 0.35)',
    marginTop: -4,
    marginLeft: -2,
  },
});
