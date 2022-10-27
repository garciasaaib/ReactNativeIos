import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, position = 'br', onPress}: Props) => {
  const ios = () => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.fabLocation,
        position === 'bl' ? styles.left : styles.right,
      ]}
      onPress={onPress}>
      <View style={[styles.fab, styles.shadow]}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  const android = () => (
    <View
      style={[
        styles.fabLocation,
        position === 'bl' ? styles.left : styles.right,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('grey', false, 25)}>
        <View style={[styles.fab, styles.shadow]}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );

  return Platform.OS === 'ios' ? ios() : android();
  // return ios();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
    borderRadius: 50,
  },
  right: {right: 25},
  left: {left: 25},
  fab: {
    backgroundColor: '#5856d6',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
