import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  title?: string;
  onPress: () => void;
  icon?: string;
  top?: boolean;
}
const Btn = ({title, onPress, icon}: Props) => {
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        icon ? styles.containerIcon : {},
        {backgroundColor: theme.colors.primary},
      ]}
      onPress={onPress}>
      {icon ? (
        <Icon name={icon} size={20} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Btn;
const styles = StyleSheet.create({
  text: {color: 'white', paddingVertical: 10, paddingHorizontal: 15},
  container: {backgroundColor: 'grey', borderRadius: 5, margin: 1},
  containerIcon: {backgroundColor: 'red'},
});
