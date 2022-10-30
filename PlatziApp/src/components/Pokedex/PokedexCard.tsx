/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {PokemonListItem} from '../../hooks/usePokedex';
import {capitalize} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import {PokedexStackParamList} from '../../navigations/PokedexStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export default function PokedexCard({pokemon}: {pokemon: PokemonListItem}) {
  const cardColor = {backgroundColor: pokemon.colors[0]};
  const navigation =
    useNavigation<NativeStackNavigationProp<PokedexStackParamList>>();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('PokemonScreen', pokemon)}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={[styles.bgStyles, cardColor]}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, '0')}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image style={styles.image} source={{uri: pokemon.image}} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    backgroundColor: 'grey',
    flex: 1,
    borderRadius: 15,
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
    left: 4,
  },
  number: {
    positon: 'absolute',
    alignSelf: 'flex-end',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
});
