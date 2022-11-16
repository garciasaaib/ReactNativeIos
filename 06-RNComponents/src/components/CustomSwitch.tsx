import {Switch} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}
export default function CustomSwitch({isOn, onChange}: Props) {
  const {colors, dark} = useTheme();

  const [isEnabled, setIsEnabled] = useState<boolean>(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{
        false: '#d9d9db',
        true: !dark ? '#81b0ff' : colors.primary,
      }}
      thumbColor={'#f4f3f4'}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}
