import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {RootStackParamList} from '../navigartors/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HeadScreen from '../components/HeadScreen';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'Animation102Screen'> {}
export default function Animation102Screen({navigation}: Props): JSX.Element {
  // variable con valores X & Y vinculadas a un elemento animado
  const pan = useRef(new Animated.ValueXY()).current;

  // panResponder: elemento de lectura de eventos animados
  // cada uno de sus atributos de puede declarar el comportamiento del listener y su respuesta
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      },
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }, // Back to zero
      ).start();
    },
  });

  // aplicamos el event listener al componente a animar
  return (
    <>
      <HeadScreen title="Animation 102" onPress={() => navigation.popToTop()} />
      <View style={styles.container}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.box]}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
