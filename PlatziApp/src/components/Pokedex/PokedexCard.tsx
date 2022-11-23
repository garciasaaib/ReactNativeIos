import React from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  Platform,
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
import {useAnimation} from '../../hooks/useAnimation';

const isIos = Platform.OS === 'ios';
export default function PokedexCard({pokemon}: {pokemon: PokemonListItem}) {
  const cardColor = {backgroundColor: pokemon.bgColor};
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const isMouted = React.useRef<boolean>(true);
  const imageAnim = useAnimation();
  const spinnerAnim = useAnimation();
  const navigation =
    useNavigation<NativeStackNavigationProp<PokedexStackParamList>>();

  // animation load handlers
  const handleLoadStart = () => {
    if (isMouted.current) {
      spinnerAnim.fadeIn(500);
      setIsLoading(true);
    }
  };
  const handleLoadEnd = () => {
    if (isMouted.current) {
      imageAnim.fadeIn(700);
      setTimeout(() => setIsLoading(false), 700);
    }
  };

  // to manage the unmount state
  React.useEffect(() => {
    return () => {
      isMouted.current = false;
    };
  }, []);

  // children components
  // animated spinner
  const _spinner = (
    <Animated.View style={[styles.spinner, {opacity: spinnerAnim.opacity}]}>
      <ActivityIndicator size="large" />
    </Animated.View>
  );

  // animated card
  const _card = (
    <Animated.View
      style={[styles.bgStyles, cardColor, {opacity: imageAnim.opacity}]}>
      <View style={styles.bgPokeballContainer}>
        <Image
          source={require('../../assets/pokebola-blanca.png')}
          style={styles.bgPokeball}
        />
      </View>

      <View style={styles.textBox}>
        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
        <Text style={{...styles.number}}>
          {`${pokemon.order}`.padStart(3, '0')}
        </Text>
      </View>
      <Image
        style={[styles.image, styles.cardShadow]}
        source={{uri: pokemon.image}}
        onLoadEnd={handleLoadEnd}
        onLoadStart={handleLoadStart}
      />
    </Animated.View>
  );

  return (
    <View style={[styles.card, styles.cardShadow]}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('PokemonScreen', pokemon)}>
        <View style={[styles.spacing]}>
          {isLoading && _spinner}
          {_card}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 20,
  },
  card: {
    flex: 1,
    height: 120,
    margin: 5,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  bgPokeballContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  bgPokeball: {
    position: 'absolute',
    opacity: 0.5,
    width: 130,
    height: 130,
    right: -30,
    bottom: -30,
  },
  image: {
    position: 'absolute',
    bottom: -15,
    right: -15,
    width: 110,
    height: 110,
  },
  textBox: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    overflow: 'hidden',
    justifyContent: 'space-between',
    borderRadius: 15,
    paddingRight: 20,
  },
  name: {
    color: 'white',
    fontSize: 15,
    margin: 10,
  },
  number: {
    positon: 'absolute',
    fontWeight: 'bold',
    color: '#FFF',
    opacity: 0.6,
    fontSize: isIos ? 50 : 55,
    left: isIos ? -2 : 0,
    bottom: isIos ? -13 : -12,
    letterSpacing: isIos ? -8 : -3,
    fontStyle: 'italic',
  },
  cardShadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
});
