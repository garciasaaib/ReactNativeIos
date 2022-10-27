import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {StackNavigationProp} from '@react-navigation/stack';
import {MovieStackRootParams} from '../navigators/StackNavigator';

/**
 * Component that is a button with the functionality of go to HomeScreen
 */
export const GoBackButton = () => {
  const navigation = useNavigation<StackNavigationProp<MovieStackRootParams>>();
  return (
    <TouchableOpacity
      style={styles.closeBtn}
      onPress={() => navigation.navigate('Home')}>
      <Ionicon
        style={styles.iconBtn}
        color="grey"
        size={40}
        name="arrow-back-outline"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeBtn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    position: 'absolute',
  },
  iconBtn: {
    elevation: 9,
    color: 'rgba(255, 255, 255, 0.35)',
    marginTop: -4,
    marginLeft: -2,
  },
});
