/* eslint-disable react-native/no-inline-styles */
import {View, FlatList} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../navigartors/StackNavigator';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import MenuiItem from '../components/MenuItem';
import {listMenuItems} from '../data/menuItems';
import HeaderList from '../components/HeaderList';
import SeparatorList from '../components/SeparatorList';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'HomeScreen'> {}
export default function HomeScreen({}: Props): JSX.Element {
  return (
    <View style={[{flex: 1}]}>
      <FlatList
        data={[...listMenuItems]}
        renderItem={({item}) => <MenuiItem item={item} />}
        keyExtractor={(item, i) => i.toString()}
        ListHeaderComponent={<HeaderList title="Header Flatlist" />}
        ItemSeparatorComponent={SeparatorList}
      />
    </View>
  );
}
