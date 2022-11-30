import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import {useAppDispatch} from '../store';
import {finishGame} from '../store/features/game';
import {useAppSelector} from '../store/hooks';
export default function GameScreen() {
  const dispatch = useAppDispatch();
  const {
    game: {level},
    rickMorty: {charList},
  } = useAppSelector(store => store);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>{level} Game</Text>
      <View style={{flex: 1}}>
        <FlatList
          // style={{flex: 1}}
          numColumns={4}
          data={charList}
          renderItem={({item, index}) => <Card src={item} position={index} />}
          keyExtractor={(_item, index) => index.toString()}
        />
      </View>
      <Button title="End Game" onPress={() => dispatch(finishGame())} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  memoWrapper: {
    // justifyContent: 'center',
    // alignContent: 'center',
    // flexWrap: 'wrap',
    // flexDirection: 'column',
    // backgroundColor: 'teal',
    flex: 1,
  },
});
