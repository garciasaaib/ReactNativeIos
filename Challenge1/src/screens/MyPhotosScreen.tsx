/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import SwipeableItem from '../components/SwipeableItem';
import DraggableFlatList from 'react-native-draggable-flatlist';
import usePhotos from '../hooks/usePhotos';

export const MyPhotosScreen = () => {
  const {photos, deletePhoto, loadPhotos, photosRefreshControl, setPhotos} =
    usePhotos();

  if (!photos.length) {
    loadPhotos();
  }
  console.log(photos);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <DraggableFlatList
        data={photos}
        onDragEnd={({data}) => setPhotos(data)}
        keyExtractor={item => String(item.id)}
        renderItem={({item, drag, isActive}) => (
          <SwipeableItem
            isActive={isActive}
            drag={drag}
            item={item}
            handleDelete={() => deletePhoto(item.id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        refreshControl={photosRefreshControl()}
      />

      {/* <Text>{JSON.stringify(data, null, 2)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 2,
  },
});
