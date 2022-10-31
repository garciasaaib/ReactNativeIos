import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useAuth from '../../hooks/useAuth';

export default function UserData({auth}) {
  const {logout} = useAuth();
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Profile: {auth.username}</Text>
      </View>

      <View>
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Firstname" text={auth.firstname} />
        <ItemMenu title="Lastname" text={auth.lastname} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favoritos" text={'0'} />
      </View>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
}

function ItemMenu({title, text}: {title: string; text: string}) {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.subtitle}>{title}:</Text>
      <Text style={styles.subtitleValue}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  itemMenu: {
    paddingVertical: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  content: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitleValue: {
    fontSize: 15,
  },
  subtitle: {
    fontWeight: 'bold',
    width: 120,
  },
});
