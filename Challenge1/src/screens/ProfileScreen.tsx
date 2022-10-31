/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {LoginStackNavigatorParams} from '../navigatiors/LoginStackNavigator';
import {styles} from '../themes/generalStyles';
import {logout} from '../context/auth/authSlice';
import {useAppDispatch} from '../context/hooks';
export const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={() => dispatch(logout())}>
        <Text style={styles.btnText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};
