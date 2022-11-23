import {Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useFavorites from '../hooks/useFavorites';

export default function FavoritesScreen() {
  const {idList} = useFavorites();
  console.log(idList);
  return (
    <SafeAreaView>
      <Text>FavoritesScreen</Text>
    </SafeAreaView>
  );
}
