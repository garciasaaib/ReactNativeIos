/* eslint-disable react-native/no-inline-styles */
import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PokedexStackParamList} from '../navigations/PokedexStackNavigator';
import {usePokemon} from '../hooks/usePokemon';
import PokemonHeader from '../components/Pokemon/PokemonHeader';
import PokemonType from '../components/Pokemon/PokemonType';
import PokemonStats from '../components/Pokemon/PokemonStats';

interface Props
  extends NativeStackScreenProps<PokedexStackParamList, 'PokemonScreen'> {}
export default function PokemonScreen({route}: Props) {
  const {id} = route.params;
  const insets = useSafeAreaInsets();
  const {pokemon} = usePokemon(id);
  return (
    <>
      {!pokemon ? (
        <View style={{paddingTop: insets.top}}>
          <ActivityIndicator
            size="large"
            style={{
              marginTop: 20,
              marginBottom: 60,
            }}
          />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            overflow: 'hidden',
          }}>
          <PokemonHeader
            id={pokemon.id}
            name={pokemon.name}
            order={pokemon.order}
            image={pokemon.image!}
            type={pokemon.type}
            colors={pokemon.colors}
          />
          <PokemonType types={pokemon.type} colors={pokemon.colors} />
          <PokemonStats stats={pokemon.stats} colors={pokemon.colors} />
        </View>
      )}
    </>
  );
}
