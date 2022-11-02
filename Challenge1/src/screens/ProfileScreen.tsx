/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../themes/generalStyles';
import {logout} from '../context/auth/authSlice';
import {useAppDispatch, useAppSelector} from '../context/hooks';
export const ProfileScreen = () => {
  const {user} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Text>{JSON.stringify(user, null, 2)}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => dispatch(logout())}>
        <Text style={styles.btnText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};
