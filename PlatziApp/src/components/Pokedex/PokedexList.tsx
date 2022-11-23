/* eslint-disable react-native/no-inline-styles */
// import {FlatList, StyleSheet, Dimensions} from 'react-native';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {usePokedex} from '../../hooks/usePokedex';
import PokedexCard from './PokedexCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const isIos = Platform.OS === 'ios';
export default function PokedexList() {
  const {pokedex, loadPokemons, isNext} = usePokedex();
  const insets = useSafeAreaInsets();

  const loadMore = () => {
    console.log('Cargando mas pokemons...');
    isNext.current && loadPokemons(); // isNext es la flag para saber cuando ya no hay mas pokemons
  };

  return (
    <FlatList
      data={pokedex}
      numColumns={2} //item por columna
      showsVerticalScrollIndicator={false}
      keyExtractor={pokemon => String(pokemon.id)} // key debe ser string
      renderItem={({item}) => <PokedexCard pokemon={item} />}
      contentContainerStyle={[
        styles.listItem,
        {paddingTop: isIos ? insets.top + 50 : 50},
      ]}
      // infinite scroll
      onEndReached={() => loadMore()} // funcion llamada al llegar al final de la lista
      onEndReachedThreshold={0.1} // medida del observer para la funcion de onEndReached
      ListFooterComponent={
        isNext.current ? (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" style={styles.spinner} />
          </View>
        ) : (
          <Text>No more pokemons</Text>
        )
      }
      onRefresh={() => loadMore()}
      refreshing={false}
    />
  );
}

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
  },
  listItem: {
    paddingHorizontal: 2,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
