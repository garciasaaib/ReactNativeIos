import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rebeccapurple',
  },
  title: {
    padding: 50,
    margin: 50,
    fontSize: 20,
    // color: 'white',
    // width: 250,
    borderWidth: 10,
    // backgroundColor: 'purple',
  },
});
