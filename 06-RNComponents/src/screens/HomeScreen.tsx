/* eslint-disable react-native/no-inline-styles */
import {View, FlatList} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../navigartors/StackNavigator';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import MenuItem from '../components/MenuItem';
import {listMenuItems} from '../data/menuItems';
import HeaderList from '../components/HeaderList';
import SeparatorList from '../components/SeparatorList';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'HomeScreen'> {}
export default function HomeScreen({}: Props): JSX.Element {
  return (
    <View style={[{flex: 1, marginHorizontal: 10}]}>
      <FlatList
        data={listMenuItems} // Listado a utilizar
        renderItem={({item}) => <MenuItem item={item} />} // elemento a renderizar
        keyExtractor={(item, i) => i.toString()} // key param
        ListHeaderComponent={
          // componente header de la lista
          <HeaderList title="Component Menu" justify="center" />
        }
        ItemSeparatorComponent={SeparatorList} // componente separador
      />
    </View>
  );
}
