import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {UserData} from '../../api/userConstants';

interface Props {
  user: UserData;
}
export default function ProfileInfo({user}: Props) {
  return (
    <>
      <View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>User name</Text>
          <Text style={styles.infoValue}>{user.username}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>First name</Text>
          <Text style={styles.infoValue}>{user.firstname}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Last name</Text>
          <Text style={styles.infoValue}>{user.lastname}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>{user.email}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
    margin: 10,
    marginBottom: 0,
  },
  infoLabel: {
    fontSize: 10,
    color: 'grey',
  },
  infoValue: {
    color: 'black',
    marginVertical: 5,
  },
});
