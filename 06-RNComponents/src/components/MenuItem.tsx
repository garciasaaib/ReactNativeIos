/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../navigartors/StackNavigator';

interface ItemProps {
  item: MenuItem;
  index?: number;
  separators?: any;
}
export default function MenuiItem({item}: ItemProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={itemStyles.listItem}
      onPress={() =>
        navigation.navigate(item.component as keyof RootStackParamList)
      }>
      <Icon
        name={item.icon}
        color="grey"
        size={23}
        style={itemStyles.itemIcon}
      />
      <Text style={styles.textBlack}>{item.title}</Text>
      <View style={{flex: 1}} />
      <Icon
        name="chevron-forward-outline"
        color="grey"
        size={23}
        style={itemStyles.itemIcon}
      />
    </TouchableOpacity>
  );
}

const itemStyles = StyleSheet.create({
  listItem: {
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemIcon: {marginRight: 10},
});
