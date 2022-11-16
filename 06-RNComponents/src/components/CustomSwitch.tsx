import {Switch} from 'react-native';
import React, {useContext, useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}
export default function CustomSwitch({isOn, onChange}: Props) {
  const {theme} = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState<boolean>(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{
        false: '#d9d9db',
        true: !theme.dark ? '#81b0ff' : theme.colors.primary,
      }}
      thumbColor={'#f4f3f4'}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}
