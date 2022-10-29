/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {LoginStackNavigatorParams} from '../navigatiors/LoginStackNavigator';
import {styles} from '../themes/generalStyles';

export const ProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<LoginStackNavigatorParams>>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.btnText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};
