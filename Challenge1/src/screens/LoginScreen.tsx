/* eslint-disable react-native/no-inline-styles */
// import {StatusBar} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {LoginForm} from '../components/LoginForm';
import {useAppSelector} from '../context/hooks';
import {LoginStackNavigatorParams} from '../navigatiors/LoginStackNavigator';
import {styles} from '../themes/generalStyles';

export const LoginScreen = () => {
  const {isLoggedIn} = useAppSelector(state => state.auth);
  const navigation =
    useNavigation<NativeStackNavigationProp<LoginStackNavigatorParams>>();

  useEffect(() => {
    isLoggedIn && navigation.navigate('Tabs');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(77, 74, 157, 0.0)',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      <View style={styles.screen}>
        <View style={styles.screenChldCenter}>
          <Image
            style={styles.imageLogin}
            source={require('../../assets/dx-logo-256px.png')}
          />
          <LoginForm />
        </View>
      </View>
    </View>
  );
};
