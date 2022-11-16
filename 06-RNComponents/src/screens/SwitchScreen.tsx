/* eslint-disable react-native/no-inline-styles */
import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import CustomSwitch from '../components/CustomSwitch';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigartors/StackNavigator';
import HeadScreen from '../components/HeadScreen';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Switches {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}
interface Props
  extends NativeStackScreenProps<RootStackParamList, 'SwitchScreen'> {}
export default function SwitchScreen({navigation}: Props) {
  const {theme} = useContext(ThemeContext);

  const [state, setState] = useState<Switches>({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const handleChange = (value: boolean, field: keyof Switches) => {
    setState({...state, [field]: value});
  };
  return (
    <View style={{marginHorizontal: 10}}>
      <HeadScreen title="Switches" onPress={() => navigation.popToTop()} />
      <View style={styles.switchRow}>
        <Text style={[styles.text, {color: theme.colors.text}]}> isActive</Text>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => handleChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={[styles.text, {color: theme.colors.text}]}> isHungry</Text>
        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => handleChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={[styles.text, {color: theme.colors.text}]}> isHappy</Text>
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => handleChange(value, 'isHappy')}
        />
      </View>

      <Text style={[styles.text, {color: theme.colors.text}]}>
        {JSON.stringify(state, null, 2)}
      </Text>
    </View>
  );
}

const ios = Platform.OS === 'ios';

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: ios ? 5 : 0,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
});
