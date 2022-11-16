import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';

interface Props {
  title?: string;
  onPress: () => void;
  icon?: string;
  top?: boolean;
}
const Btn = ({title, onPress, icon}: Props) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        icon ? styles.containerIcon : {},
        {backgroundColor: colors.primary},
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
