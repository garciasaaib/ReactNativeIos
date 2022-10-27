import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {TouchableIcon} from '../components/TouchableIcon';
import {RootStackParams} from '../navigations/TabBottomNavigator';

interface Props extends DrawerScreenProps<RootStackParams, 'Tab1Screen'> {}

export const Tab1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, [navigation]);
  useEffect(() => console.log('tab1'));
  return (
    <View>
      <Text>Tab1Screen</Text>
      <Text>
        <TouchableIcon nameIcon="airplane-outline" />
        <TouchableIcon nameIcon="attach-outline" />
        <TouchableIcon nameIcon="bonfire-outline" />
        <TouchableIcon nameIcon="calculator-outline" />
        <TouchableIcon nameIcon="chatbubble-outline" />
        <TouchableIcon nameIcon="leaf-outline" />
        <TouchableIcon nameIcon="images-outline" />
      </Text>
    </View>
  );
};
