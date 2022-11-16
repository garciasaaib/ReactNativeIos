import {Image, Platform, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const isIos = Platform.OS === 'ios';

interface Props {
  title: boolean;
}
const PokeballBG = ({title = false}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <Image
        style={styles.pokeballbg}
        source={require('../assets/pokebola.png')}
      />
      {title && (
        <Text style={[styles.titlebg, isIos && {top: insets.top}]}>
          Pokedex
        </Text>
      )}
    </>
  );
};

export default PokeballBG;
