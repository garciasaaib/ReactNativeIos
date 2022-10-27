/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../api/movieInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  movies?: Movie[];
  title: string;
}

/**
 * Scrollable horizontal MoviePoster flatlist with its title
 * @param {movies} Movie[] list of objects movies
 * @param {title} string title for the component.
 * @returns component that has a title, and after a list of moviePoster clickeabbles
 */
export const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View>
      <Text style={{paddingLeft: 10, fontSize: 30, fontWeight: 'bold'}}>
        {title}
      </Text>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={100} height={150} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
