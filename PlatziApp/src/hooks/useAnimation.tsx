import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = (
  initOpacity: number = 0,
  outVerticalTop: number = 200,
) => {
  // propiedades animadas
  const opacity = useRef(new Animated.Value(initOpacity)).current;
  const verticalTop = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number = 3000): void => {
    // Funcion para disparar una animacion con tiempo
    // timing: se aplicara a travex del tiempo
    // opacity: propiedad que se editara
    // start: ejecuta esta animacion
    Animated.timing(opacity, {
      toValue: 1, // hacia que valor
      duration: duration, // la duracion de este cambio
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (): void => {
    Animated.timing(opacity, {
      toValue: initOpacity,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const verticalTopIn = () => {
    // disparar otra animacion
    Animated.timing(verticalTop, {
      toValue: -outVerticalTop, // hacia que valor
      duration: 300, // la duracion de este cambio
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };
  const verticalTopOut = () => {
    // disparar otra animacion
    Animated.timing(verticalTop, {
      toValue: outVerticalTop, // hacia que valor
      duration: 300, // la duracion de este cambio
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return {opacity, verticalTop, fadeIn, fadeOut, verticalTopIn, verticalTopOut};
};
