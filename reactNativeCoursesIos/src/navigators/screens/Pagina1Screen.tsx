/* eslint-disable react-native/no-inline-styles */
import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

// Se define el tipado de las props recibidas
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={40} color="salmon" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  // Manera 1 de navegacion
  // mediante las props que se mandan directo por stack.navigation se puede realizar la navegacion
  // console.log(props);
  const gap = 8;
  return (
    <View style={styles.generalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row', paddingHorizontal: gap / -2}}>
        {/* En este caso vamos a ir a una ruta a la que le mandamos parametros en la segunda posicion */}
        <TouchableOpacity
          style={{...styles.btnBig, marginHorizontal: gap / 2}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Icon name="man-outline" size={40} color="white" />

          <Text style={styles.texto}>Ir a Persona 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.btnBig,
            marginHorizontal: gap / 2,
            backgroundColor: 'lightseagreen',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Icon name="woman-outline" size={40} color="white" />

          <Text style={styles.texto}>Ir a Persona 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
