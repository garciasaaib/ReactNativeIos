import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {Cast} from '../api/movieInterface';
import {generalStyles} from '../theme/generalStyles';
import {getImageUri} from '../helpers/getImageUri';

interface Props {
  actor: Cast;
}
/**
 * Card that shows little of information about the actor to fill the list of cards
 * @param {actor} Cast info about the actor in this movie
 * @returns HTML little card with the actor picture, name and character name
 */
export const CastItem = ({actor}: Props) => {
  const uri = getImageUri(actor.profile_path!);
  return (
    <View style={generalStyles.shadowIos}>
      <View style={[styles.castItem, generalStyles.shadowAndroid]}>
        {actor.profile_path && <Image style={styles.image} source={{uri}} />}
        <View style={styles.actorInfo}>
          <Text style={styles.name}>{actor.name}</Text>
          <Text style={styles.character}>{actor.character}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  castItem: {
    // shadow android
    overflow: 'hidden',
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 4,
  },
  image: {width: 50, height: 50},
  name: {fontSize: 18, fontWeight: 'bold'},
  character: {fontSize: 16, opacity: 0.7},
  actorInfo: {justifyContent: 'center', marginHorizontal: 10},
});
