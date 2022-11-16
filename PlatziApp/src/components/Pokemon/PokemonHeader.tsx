import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import React from 'react';
import {Species} from '../../api/pokemonInterfaces';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {capitalize} from 'lodash';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PokedexStackParamList} from '../../navigations/PokedexStackNavigator';
// import PokemonFavorite from './PokemonFavorite';
import useAuth from '../../hooks/useAuth';


const isIos = Platform.OS === 'ios';
interface Props {
  name: string;
  order: number;
  image: string;
  type: Species[];
  colors: string[];
  id: number;
}
/**
 * Credentials for the pokemon profile view
 * @param pokemonData All the pokemon data
 * @returns Pokemon data component
 */
export default function PokemonHeader({id, colors, image, name, order}: Props) {
  // const {auth} = useAuth();
  const insets = useSafeAreaInsets();
  const colorStyle = {
    backgroundColor: colors[0],
  };
  const safeStyle = {paddingTop: isIos ? insets.top : 10};
  const navigation =
    useNavigation<NativeStackNavigationProp<PokedexStackParamList>>();
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
        {/* <>{auth.isLogged && <PokemonFavorite id={id} />}</> */}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{capitalize(name)}</Text>
        <Text style={styles.textOrder}>#{`${order}`.padStart(3, '0')}</Text>
      </View>

      <View style={[styles.containerImg]}>
        <Image style={styles.image} source={{uri: image}} />
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
