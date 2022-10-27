import React from 'react';
import {
  DrawerContentScrollView,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {styles} from '../themes/GeneralStyles';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {RootDrawerTaskNavigator} from '../navigators/DrawerMainNavigator';

export const DrawerContent = () => {
  const navigation =
    useNavigation<DrawerNavigationProp<RootDrawerTaskNavigator>>();
  return (
    <DrawerContentScrollView>
      {/** Avatar image */}
      <View style={styles.avatarCotainer}>
        <Image
          source={{
            uri: 'https://avatarairlines.com/wp-content/uploads/2020/05/Female-Placeholder.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/** Butttons */}
      <View style={styles.drawerMenu}>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate('Task')}>
          <Icon name="alarm-outline" size={20} />
          <Text style={styles.drawerText}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate('AboutScreen')}>
          <Icon name="settings-outline" size={20} />
          <Text style={styles.drawerText}>Tabs</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
