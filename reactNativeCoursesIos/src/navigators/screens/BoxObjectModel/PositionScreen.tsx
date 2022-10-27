import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaModara} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaVerde} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  cajaModara: {
    backgroundColor: 'rebeccapurple',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    // ahora está sobrepuesto al padre, pero centrado
    position: 'absolute',
    // al darle top, le decimos que valla al valor 0 de él y adicione 50
    top: 50,
    // si no se le da direccion se queda la que esta por defecto,
    // en este caso centrada
    // right: 50,
  },
  cajaNaranja: {
    backgroundColor: 'coral',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    // por defecto es relativo
    position: 'relative',
    // se mueve desde la posicion por defecto, la parte de abajo se le adicionan 100u
    // esto hace que suba
    bottom: 100,
  },
  cajaVerde: {
    backgroundColor: 'lime',
    borderWidth: 5,
    borderColor: 'white',
    // el shortcut para esparcir el view en la pantalla
    ...StyleSheet.absoluteFillObject,
    // position: 'absolute',
    // bottom: 0,
    // top: 0,
    // left: 0,
    // right: 0,
    // se le puede dar medidas maximas para delimitarlo
    maxWidth: 100,
    // height: 100,
  },
});
