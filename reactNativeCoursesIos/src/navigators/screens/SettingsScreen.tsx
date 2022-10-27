/* eslint-disable react-native/no-inline-styles */

import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  // para usar algun valor del store, la pedimos al usecontext con su nombre y desestructuramos
  const {authState} = useContext(AuthContext);
  return (
    <View style={{...styles.generalMargin, marginTop: insets.top}}>
      <Text style={styles.title}>Settings Screen</Text>

      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {authState.favoriteIcon && (
        <Icon
          name={authState.favoriteIcon}
          size={200}
          style={{...styles.title, fontSize: 200}}
        />
      )}
    </View>
  );
};
