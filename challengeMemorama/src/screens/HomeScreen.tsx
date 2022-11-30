import {View, Text, Button, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useAppDispatch} from '../store';
import {startGame} from '../store/features/game';

export default function HomeScreen() {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.content}>
      <View style={styles.section}>
        <Image source={require('../assets/images/logo.png')} />
        <Image source={require('../assets/images/memorama.png')} />
      </View>
      <>
        <Text>Select Level</Text>
        <View>
          <Button title="Easy" onPress={() => dispatch(startGame('easy'))} />
          <Button title="Mid" onPress={() => dispatch(startGame('mid'))} />
          <Button title="Hard" onPress={() => dispatch(startGame('hard'))} />
        </View>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
