import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParams} from '../navigations/StackNavigator';
import {styles} from '../theme/appTheme';

// Los props recibidos en este componente son data de la navegacion y de ruta con props
// en caso de no querer definir el tipado de los props se puede mandar de esta manera
interface Props extends StackScreenProps<RootStackParams, 'Pagina3Screen'> {}

// Mediante el prop navigation podemos usar los hooks de navegacion para cambiar de screen
// se muestra como hacerlos en el onPress
export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.generalMargin}>
      <Text style={styles.title}>Pagina3Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a Pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
