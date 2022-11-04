/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../themes/generalStyles';
import {logout} from '../context/auth/authSlice';
import {useAppDispatch, useAppSelector} from '../context/hooks';
import ProfilePhoto from '../components/profile/ProfilePhoto';
import ProfileInfo from '../components/profile/ProfileInfo';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ProfileDevice from '../components/profile/ProfileDevice';
import ProfileLocalization from '../components/profile/ProfileLocalization';
import {ScrollView} from 'react-native-gesture-handler';

export const ProfileScreen = () => {
  const {user} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            padding: 15,
          }}>
          Personal Info
        </Text>
        {user?.image && (
          <>
            <ProfilePhoto url={user.image} />
          </>
        )}
      </View>

      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        {user && <ProfileInfo user={user} />}

        <ProfileDevice />

        <ProfileLocalization />
        <View
          style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
          <TouchableOpacity
            style={[styles.btn, {marginBottom: insets.bottom + 10}]}
            onPress={() => dispatch(logout())}>
            <Text style={styles.btnText}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
