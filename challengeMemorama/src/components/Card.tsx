/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {cardClick, CharacterState} from '../store/features/rickMorty';

interface Props {
  src: CharacterState;
  position: number;
}
export default function Card({src, position}: Props) {
  const dispatch = useAppDispatch();
  const {
    game: {allowClicks},
  } = useAppSelector(state => state);
  return (
    <TouchableOpacity
      style={styles.cardWrapper}
      onPress={() => {
        if (!src.isFront && allowClicks) {
          dispatch(cardClick({id: src.id, key: position}));
        }
      }}>
      {/* {src.isFront ? ( */}
      <Image
        source={{uri: src.image}}
        style={[
          styles.cardFront,
          styles.cardDimention,
          {opacity: src.isFront ? 1 : 0},
        ]}
      />
      {/* ) : ( */}
      <Image
        source={require('../assets/images/cardBack.png')}
        style={[
          styles.cardBack,
          styles.cardDimention,
          {opacity: src.isFront ? 0 : 1},
        ]}
      />
      {/* )} */}
    </TouchableOpacity>
  );
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    width: width / 4,
    height: height / 6,
    borderRadius: 6,
    overflow: 'hidden',
  },
  cardFront: {
    backfaceVisibility: 'hidden',
  },
  cardBack: {
    backfaceVisibility: 'hidden',
  },
  cardDimention: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
