/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import SwipeableItem from '../components/SwipeableItem';
import DraggableFlatList from 'react-native-draggable-flatlist';
import usePhotos from '../hooks/usePhotos';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {MainMaterialTabTopNavigatorParams} from '../navigatiors/MainMaterialTabTopNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const ios = Platform.OS === 'ios';
interface Props
  extends MaterialTopTabScreenProps<
    MainMaterialTabTopNavigatorParams,
    'MyPhotos'
  > {}
export const MyPhotosScreen = ({navigation}: Props) => {
  const {photos, deletePhoto, loadPhotos, photosRefreshControl, setPhotos} =
    usePhotos();

  if (!photos.length) {
    loadPhotos();
  }
  useEffect(() => {
    navigation.setOptions({
      tabBarBadge: () =>
        photos.length ? (
          <View style={[styles.badge, !ios && {top: 5}]}>
            <Text
              style={{
                // backgroundColor: 'red',
                borderRadius: 20,
                color: 'white',
              }}>
              {photos.length}
            </Text>
          </View>
        ) : (
          <></>
        ),
    });
  }, [photos, navigation]);
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <DraggableFlatList
        data={photos}
        nestedScrollEnabled={true}
        onDragEnd={({data}) => setPhotos(data)}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index, drag, isActive}) => (
          <SwipeableItem
            isActive={isActive}
            drag={drag}
            item={item}
            handleDelete={() => deletePhoto(item.id)}
            index={index}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        refreshControl={photosRefreshControl()}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  badge: {
    top: 50,
    right: 30,
    backgroundColor: 'red',
    height: 20,
    width: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 2,
  },
});
