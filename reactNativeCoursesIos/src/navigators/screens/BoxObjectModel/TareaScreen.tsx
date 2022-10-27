import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.caja, styles.morada]} />
      <View style={[styles.caja, styles.naranja]} />
      <View style={[styles.caja, styles.verde]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'slateblue',
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  caja: {
    borderWidth: 10,
    borderColor: 'white',
    width: 100,
    height: 100,
    // flex: 1,
  },
  morada: {
    backgroundColor: 'magenta',
    // alignSelf: 'flex-end',
    // bottom: -100,
  },
  naranja: {
    backgroundColor: 'coral',
    // flex: 1,
    // alignSelf: 'flex-start',
    // left: 100,
    bottom: -50,
  },
  verde: {
    backgroundColor: 'lime',
    // width: '100%',
    // alignSelf: 'flex-start',
  },
});
