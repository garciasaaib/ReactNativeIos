import {View} from 'react-native';
import React from 'react';
import PokedexList from '../components/Pokedex/PokedexList';
import PokeballBG from '../components/PokeballBG';

export default function PokedexScreen() {
  return (
    <View>
      <PokeballBG title={true} />
      <PokedexList />
    </View>
  );
}
