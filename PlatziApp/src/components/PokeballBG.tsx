import {Image, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/styles';

interface Props {
  title: boolean;
}
const PokeballBG = ({title = false}: Props) => {
  return (
    <>
      <Image
        style={styles.pokeballbg}
        source={require('../assets/pokebola.png')}
      />
      {title && <Text style={styles.titlebg}>Pokedex</Text>}
    </>
  );
};

export default PokeballBG;
