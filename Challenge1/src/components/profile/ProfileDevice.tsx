/* eslint-disable react-native/no-inline-styles */
import {
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
const system = Platform.OS;
export default function ProfileDevice() {
  const {height, width} = useWindowDimensions();

  return (
    <View>
      <Text style={{marginLeft: 10}}>Device</Text>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Operative system</Text>
        <Text style={styles.infoValue}>{system}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Version</Text>
        <Text style={styles.infoValue}>{Platform.Version}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Window dimensions</Text>
        <Text style={styles.infoValue}>
          h: {height}, w: {width}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
    margin: 10,
    marginBottom: 0,
  },
  infoLabel: {
    fontSize: 10,
    color: 'grey',
  },
  infoValue: {
    color: 'black',
    marginVertical: 5,
  },
});
