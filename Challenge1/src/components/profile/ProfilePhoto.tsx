/* eslint-disable react-native/no-inline-styles */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import React from 'react';
import {ImagePickerModal} from './ImagePickerModal';
import {ImageLibraryOptions} from 'react-native-image-picker';
import {useAppDispatch} from '../../context/hooks';
import {updateUserPhoto} from '../../context/auth/authSlice';

export default function ProfilePhoto({url}: {url: string}) {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = React.useState(false);

  const onImageLibraryPress = React.useCallback(() => {
    const options: ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, ({assets}) => {
      if (assets) {
        const uri = assets[0].uri;
        dispatch(updateUserPhoto(uri));
      }
    });
  }, [dispatch]);

  const onCameraPress = React.useCallback(() => {
    const options: ImagePicker.CameraOptions = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, ({assets}) => {
      if (assets) {
        const uri = assets[0].uri;
        dispatch(updateUserPhoto(uri));
      }
    });
  }, [dispatch]);

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
        source={{
          uri: url,
        }}
      />

      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={{padding: 10}}>Change Photo</Text>
      </TouchableOpacity>

      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  );
}
