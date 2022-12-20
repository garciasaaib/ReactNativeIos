/* eslint-disable react-native/no-inline-styles */
import {View, Button} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface Props {
  setTempUri: (data: string) => void;
  updateImage: (imageData: {uri: string; name: string; type: string}) => void;
}
export default function ImageButtons({setTempUri, updateImage}: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
      }}>
      <Button
        title="Camera"
        onPress={() => {
          launchCamera({mediaType: 'photo', quality: 0.5}, res => {
            if (res.didCancel || res.errorCode || res.errorMessage) {
              return;
            }
            if (
              !res.assets?.length ||
              !res.assets[0].uri ||
              !res.assets[0].type ||
              !res.assets[0].fileName
            ) {
              return;
            }
            const {uri, fileName, type} = res.assets[0];

            setTempUri(uri);
            updateImage({uri, name: fileName, type});
          });
        }}
        color="#5856d6"
      />
      <Button
        title="Gallery"
        onPress={() => {
          launchImageLibrary({mediaType: 'photo'}, res => {
            if (res.didCancel || res.errorCode || res.errorMessage) {
              return;
            }
            if (
              !res.assets?.length ||
              !res.assets[0].uri ||
              !res.assets[0].type ||
              !res.assets[0].fileName
            ) {
              return;
            }
            const {uri, fileName, type} = res.assets[0];

            setTempUri(uri);
            updateImage({uri, name: fileName, type});
          });
        }}
        color="#5856d6"
      />
    </View>
  );
}
