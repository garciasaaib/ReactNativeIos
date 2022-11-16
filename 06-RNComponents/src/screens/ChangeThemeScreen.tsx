/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {RootStackParamList} from '../navigartors/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HeadScreen from '../components/HeadScreen';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'ChangeThemeScreen'> {}
export default function ChangeThemeScreen({navigation}: Props) {
  const {setDarkTheme, setLightTheme, theme} = useContext(ThemeContext);
  return (
    <View>
      <HeadScreen title="Change Theme" onPress={() => navigation.popToTop()} />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (theme.dark) {
            setLightTheme();
          } else {
            setDarkTheme();
          }
        }}
        style={{
          width: 150,
          height: 50,
          borderRadius: 20,
          backgroundColor: '#5856D6',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
}
