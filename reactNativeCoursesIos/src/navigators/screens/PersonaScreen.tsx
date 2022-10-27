import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigations/StackNavigator';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
// tipado facil
// interface RouterParams {
//   id: number,
//   name: string,
// }

// interface Props extends StackScreenProps<any, any>{} // tipado facil
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const {setUsername} = useContext(AuthContext);
  // const params = route.params as RouterParams; // tipado facil
  const params = route.params;
  useEffect(() => {
    setUsername(params.name);
  }, [params]);

  // console.log(JSON.stringify(props, null, 3));
  // "navigation": {},
  //  "route": {
  //     "key": "PersonaScreen-Y4Qkrz6P7E1MUzwTDW89e",
  //     "name": "PersonaScreen",
  //     "params": {
  //        "id": 1,
  //        "name": "Pedro"
  //     }
  //  }

  // Aqui hacemos cambios en la configuracion de la navegacion para cambiar e dato mostrado en el titulo
  useEffect(() => {
    navigation.setOptions({
      // title: params.name, // tipado facil
      // title: params!.name,
      title: params.name,
    });
  }, [navigation, params]);
  // }, [params]);

  return (
    <View style={styles.generalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
