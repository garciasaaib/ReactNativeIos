import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderList from '../components/HeaderList';
import CustomSwitch from '../components/CustomSwitch';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigartors/StackNavigator';

interface Switches {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}
interface Props
  extends NativeStackScreenProps<RootStackParamList, 'SwitchScreen'> {}
export default function SwitchScreen({}: Props) {
  const [state, setState] = useState<Switches>({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const handleChange = (value: boolean, field: keyof Switches) => {
    setState({...state, [field]: value});
  };
  return (
    <View>
      <HeaderList title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.text}> isActive</Text>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => handleChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.text}> isHungry</Text>
        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => handleChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.text}> isHappy</Text>
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => handleChange(value, 'isHappy')}
        />
      </View>

      <Text style={styles.text}>{JSON.stringify(state, null, 2)}</Text>
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
