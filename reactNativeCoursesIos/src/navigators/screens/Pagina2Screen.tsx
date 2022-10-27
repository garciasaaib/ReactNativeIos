import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigations/StackNavigator';

export const Pagina2Screen = () => {
  // mediante este hook podemos hacer uso de la navegacion, al igual que en react.
  // aunque estas funcionalidades ya existen en props.navigate
  // const navigation = useNavigation();
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Back title',
    });
  });

  return (
    <View style={styles.generalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
