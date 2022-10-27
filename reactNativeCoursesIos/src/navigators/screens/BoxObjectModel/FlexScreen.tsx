import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.caja, styles.uno]}>Caja 1</Text>
      <Text style={[styles.caja, styles.dos]}>Caja 2</Text>
      <Text style={[styles.caja, styles.tres]}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'red',
    // flexDirection: 'row',
    justifyContent: 'center',
  },
  caja: {
    borderWidth: 2,
    borderColor: 'white',
  },
  uno: {
    flex: 1,
    backgroundColor: 'lime',
  },
  dos: {
    flex: 2,
    backgroundColor: 'coral',
  },
  tres: {
    flex: 3,
    backgroundColor: 'fuchsia',
  },
});
