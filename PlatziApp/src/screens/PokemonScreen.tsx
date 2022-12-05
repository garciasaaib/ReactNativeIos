/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PokedexStackParamList} from '../navigations/PokedexStackNavigator';
import PokemonHeader from '../components/Pokemon/PokemonHeader';
import PokemonType from '../components/Pokemon/PokemonType';
import PokemonStats from '../components/Pokemon/PokemonStats';

interface Props
  extends NativeStackScreenProps<PokedexStackParamList, 'PokemonScreen'> {}
export default function PokemonScreen({route}: Props) {
  const poke = route.params;
  return (
    <>
      <View
        style={{
          flex: 1,
          overflow: 'hidden',
        }}>
        <PokemonHeader
          id={poke.id}
          name={poke.name}
          order={poke.order}
          image={poke.image!}
          type={poke.type}
          color={poke.bgColor}
        />
        <PokemonType types={poke.type} colors={poke.colors} />
        <View style={styles.content}>
          <Text style={styles.title}>Base Stats</Text>
          <PokemonStats stats={poke.stats} colors={poke.colors} />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5,
  },
});
