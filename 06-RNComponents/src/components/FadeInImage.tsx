/* eslint-disable react-native/no-inline-styles */
import {View, Animated, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {useAnimation} from '../hook/useAnimation';
interface Props {
  uri: string;
}
export default function FadeInImage({uri}: Props) {
  // hook de animacion , valor y trigger
  const {opacity, fadeIn} = useAnimation();

  // listener de carga del componente
  const [isLoaded, setIsLoaded] = useState<boolean>(true);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {/* si loaded is false  se muestra el loader */}
      {isLoaded && (
        <ActivityIndicator size={30} style={{position: 'absolute'}} />
      )}

      <Animated.Image
        // recurso de la imagen
        source={{uri}}
        // disparador cuando la imagen comienza a cargar
        onLoadStart={() => {
          setIsLoaded(true);
        }}
        // disparador cuando la imagen ya se hacargado
        onLoadEnd={() => {
          fadeIn(1000); // inicia la animacion
          setIsLoaded(false); // cambia el estado de loaded
        }}
        // la animacion es leida desde los estilos
        style={{
          width: '100%',
          height: 400,
          opacity, // animated property
        }}
      />
    </View>
  );
}
