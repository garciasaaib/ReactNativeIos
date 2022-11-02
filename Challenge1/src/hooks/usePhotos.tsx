import React, {useCallback, useState} from 'react';
import {RefreshControl} from 'react-native';
import {ImageInterface} from '../context/image/imageInterface';

export default function usePhotos() {
  const [photos, setPhotos] = useState<ImageInterface[]>([]);

  async function loadPhotos() {
    try {
      const res: ImageInterface[] = await fetch(
        'https://jsonplaceholder.typicode.com/photos',
      ).then(data => data.json());
      res.length = 10;
      setPhotos(res);
    } catch (error) {}
  }

  function deletePhoto(id: number) {
    const arr = [...photos];
    setPhotos(arr.filter(item => item.id !== id));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout: number) => {
    return new Promise((resolve: any) => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadPhotos();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const photosRefreshControl = () => (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  );
  return {
    photos,
    deletePhoto,
    loadPhotos,
    photosRefreshControl,
    setPhotos,
  };
}
