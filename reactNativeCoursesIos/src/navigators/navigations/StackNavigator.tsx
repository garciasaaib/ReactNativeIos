import React from 'react';

// componente con los metodos de navegacion y el estado en el
import {createStackNavigator} from '@react-navigation/stack';

// Listado de Screens
import {Pagina1Screen} from '../screens/Pagina1Screen';
import {Pagina2Screen} from '../screens/Pagina2Screen';
import {Pagina3Screen} from '../screens/Pagina3Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

// tipado  de las screens declarados
// describe en el los nombres de las screens y si se reciben parametros en cada ruta o no
export type RootStackParams = {
  Pagina1Screen: undefined; // undefined si no recibe props
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: {id: number; name: string}; // objeto tipado si usa props
};

// Retorna el componente con los hooks necesarios para que la navecacion funcione
// en el tipado se manda tanto las screens como los params
const Stack = createStackNavigator<RootStackParams>();

// Para que la navecacion funcione debe tener un NavigationContainer como primer elemento
// Despues Stack.Navigation que es el objeto con la funcionalidad
// Luedo el listado de las screens con Stack.Screen
// Stack tiene parametros que pueden ser usados para agregar opciones avanzadas o estilos
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pagina1Screen"
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {/* parametros necesarios son name y component, options es otro parametro para manejar mas datos */}
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'Pagina 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'Pagina 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'Pagina 3'}}
        component={Pagina3Screen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'Persona Screen'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
