/* eslint-disable react-native/no-inline-styles */
import {Alert, Button, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

interface CoordObject {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
}
export default function ProfileLocalization() {
  const [position, setPosition] = useState<string | null>(null);
  const [coords, setCoords] = useState<CoordObject>({} as CoordObject);
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setCoords(pos.coords);
        setPosition(JSON.stringify(pos));
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };
  useEffect(() => {
    getCurrentPosition();
  }, []);
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>Current position: </Text>
      {/* <Text style={styles.text}>{position}</Text> */}
      {/* <Button title="Get Current Position" onPress={} /> */}
      {position && (
        <MapView
          style={{flex: 1, height: 200}}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: coords.latitude,
              longitude: coords.longitude,
            }}
            title={'Marker'}
            pinColor={'green'}
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    color: 'black',
  },
  text: {
    color: 'black',
  },
  infoLabel: {
    fontSize: 10,
    color: 'grey',
  },
  infoRow: {
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
    margin: 10,
    marginBottom: 0,
  },
});
