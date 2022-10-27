import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from 'react-native';

// esto viene de las pantallas y no va a cambiar al rotal el telefono
const {width: vw, height: vh} = Dimensions.get('window');

export const DimensionesScreen = () => {
  // el hook es mas pesado pero si te da la lectura de las dimenciones en tiempo real
  const {width: hookWidth, height: hookHeight} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.text}>
        W: {vw}, H: {vh}
      </Text>
      <Text style={styles.text}>
        W: {hookWidth}, H: {hookHeight}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
    backgroundColor: 'teal',
  },
  cajaMorada: {
    backgroundColor: 'purple',
    width: '50%',
    height: 50,
  },
  cajaNaranja: {
    backgroundColor: 'orange',
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
