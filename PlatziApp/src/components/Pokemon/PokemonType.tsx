import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Species} from '../../api/pokemonInterfaces';
interface Props {
  types: Species[];
  colors: string[];
}
export default function PokemonType({types, colors}: Props) {
  return (
    <View style={styles.container}>
      {types.map((type, i) => (
        <View key={i} style={[{backgroundColor: colors[i]}, styles.pill]}>
          <Text style={styles.pillText}>{type.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  pillText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
