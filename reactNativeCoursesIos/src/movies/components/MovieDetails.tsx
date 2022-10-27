/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {Cast, MovieFull} from '../api/movieInterface';
import {CastItem} from './CastItem';
interface Props {
  cast: Cast[];
  movieFull: MovieFull;
}
/**
 * This component uses the movie information to show it styled
 * Also uses the list of actors in other component to show a list of cards
 * @param {movieFull} movieFull General information about this movie
 * @param {cast} Cast[] Actor information list, they participated in this movie
 * @returns Component that manages and shows some info about the movie
 */
export const MovieDetails = ({cast, movieFull}: Props) => {
  return (
    <View>
      {/* Details */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          ...styles.marginContainer,
        }}>
        <Ionicon color="grey" size={16} name="star-outline" />
        <Text style={{marginLeft: 4, fontWeight: 'bold', fontSize: 16}}>
          {movieFull?.vote_average}{' '}
        </Text>
        <Text>- {movieFull.genres.map(genre => genre.name).join(', ')}</Text>
      </View>

      {/* Historia */}
      <View style={styles.marginContainer}>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Story
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Budget
        </Text>
        <Text style={{fontSize: 16}}>{nf.format(movieFull.budget)}</Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            ...styles.marginContainer,
          }}>
          Actors
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginVertical: 10}}
        />
      </View>
    </View>
  );
};

const nf = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});

const styles = StyleSheet.create({
  marginContainer: {
    // marginVertical: 8,
    marginHorizontal: 16,
  },
});
