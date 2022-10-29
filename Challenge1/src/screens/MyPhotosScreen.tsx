/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

export const MyPhotosScreen = () => {

  // const [photos, setPhotos] = useState([]);
  const reqPhotos = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    console.log(res.data);
    // setPhotos(res.data);
  };
  useEffect(() => {
    reqPhotos();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>My Photos Screen</Text>
    </View>
  );
};
