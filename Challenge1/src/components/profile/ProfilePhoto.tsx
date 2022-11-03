/* eslint-disable react-native/no-inline-styles */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import React, {useCallback, useState} from 'react';
import {ImagePickerModal} from './ImagePickerModal';

export default function ProfilePhoto({url}: {url: string}) {
  // const [pickerResponse, setPickerResponse] = useState(null);
  // const [visible, setVisible] = useState(false);

  // const onImageLibraryPress = useCallback(() => {
  //   const options = {
  //     selectionLimit: 1,
  //     mediaType: 'photo',
  //     includeBase64: false,
  //   };
  //   ImagePicker.launchImageLibrary(options, setPickerResponse);
  // }, []);

  // const onCameraPress = React.useCallback(() => {
  //   const options = {
  //     saveToPhotos: true,
  //     mediaType: 'photo',
  //     includeBase64: false,
  //   };
  //   ImagePicker.launchCamera(options, setPickerResponse);
  // }, []);

  // const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <View
      style={{
        paddingBottom: 20,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* image shower */}
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
        }}
        source={{uri: url}}
      />

      <TouchableOpacity onPress={() => console.log('changePhotoHandler')}>
        <Text style={{padding: 10}}>Change Photo</Text>
      </TouchableOpacity>

      {/* <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        // onImageLibraryPress={onImageLibraryPress}
        // onCameraPress={onCameraPress}
      /> */}
    </View>
  );
}
