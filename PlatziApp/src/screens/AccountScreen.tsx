import React from 'react';
import {AccountStackParamList} from '../navigations/AccountStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import useAuth from '../hooks/useAuth';
interface Props
  extends NativeStackScreenProps<AccountStackParamList, 'AccountScreen'> {}
export default function AccountScreen(_props: Props) {
  const {auth} = useAuth();

  return (
    <SafeAreaView>
      {auth?.isLogged ? <UserData auth={auth} /> : <LoginForm />}
    </SafeAreaView>
  );
}
