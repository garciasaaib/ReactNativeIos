import {View, Text} from 'react-native';
import React from 'react';
import {AccountStackParamList} from '../navigations/AccountStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
interface Props
  extends NativeStackScreenProps<AccountStackParamList, 'AccountScreen'> {}
export default function AccountScreen(_props: Props) {
  return (
    <View>
      <Text>AccountScreen</Text>
    </View>
  );
}
