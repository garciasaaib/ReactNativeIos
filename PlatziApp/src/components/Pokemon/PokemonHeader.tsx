import {StyleSheet, Text, View, Platform, Animated} from 'react-native';
import React from 'react';
import {Species} from '../../api/pokemonInterfaces';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {capitalize} from 'lodash';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PokedexStackParamList} from '../../navigations/PokedexStackNavigator';
// import PokemonFavorite from './PokemonFavorite';
import {useAnimation} from '../../hooks/useAnimation';

const isIos = Platform.OS === 'ios';
interface Props {
  name: string;
  order: number;
  image: string;
  type: Species[];
  color: string;
  id: number;
}
/**
 * Credentials for the pokemon profile view
 * @param pokemonData All the pokemon data
 * @returns Pokemon data component
 */
export default function PokemonHeader({id, color, image, name, order}: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<PokedexStackParamList>>();
  const mainImg = useAnimation();
  const insets = useSafeAreaInsets();
  const colorStyle = {
    backgroundColor: color,
  };
  const safeStyle = {paddingTop: isIos ? insets.top : 10};
  return (
    <View style={[safeStyle, styles.mainContainer]} key={id}>
      <View style={[styles.bg, colorStyle]} />

      <View style={styles.navbar}>
        <FontAwesome5
          name="arrow-left"
          color="white"
          size={20}
          onPress={() => navigation.popToTop()}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{capitalize(name)}</Text>
        <Text style={styles.textOrder}>#{`${order}`.padStart(3, '0')}</Text>
      </View>

      <View style={[styles.containerImg]}>
        <Animated.Image
          style={[styles.image, {opacity: mainImg.opacity}]}
          source={{uri: image}}
          onLoadEnd={() => mainImg.fadeIn(500)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
    // marginTop: 30,
  },
  bg: {
    width: '100%',
    height: isIos ? 400 : 370,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{scaleX: 2}],
  },
  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    marginBottom: 50,
  },
  textName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27,
  },
  textOrder: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
