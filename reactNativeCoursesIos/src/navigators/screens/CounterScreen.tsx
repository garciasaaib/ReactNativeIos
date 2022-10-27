import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';
// import { ReactNativeTitle } from '../components/ReactNativeTitle';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View style={styles.container}>
      {/* <ReactNativeTitle/> */}
      <Text style={styles.display}>Contador: {counter}</Text>

      <Fab title="+1" onPress={() => setCounter(counter + 1)} />
      <Fab title="-1" position="bl" onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  display: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40,
    top: -15,
  },
});
