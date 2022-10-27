import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

interface Props {
  nameIcon: string;
}
export const TouchableIcon = ({nameIcon}: Props) => {
  const {changeFavoriteIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(nameIcon)}>
      <Icon name={nameIcon} size={80} style={styles.btnBig} />
    </TouchableOpacity>
  );
};
