import React from 'react';
import {PhotoAPI} from '../api/apiInterfaces';
import {PexelsResponse} from '../interfaces/appInterfaces';

export const usePhotoList = () => {
  const API_KEY = '563492ad6f917000010000017f0a42400e57458297a585272b88e420';

  const [imagesList, setImagesList] = React.useState<string[]>([]);
  const [nextPage, setNextPage] = React.useState<number>(1);

  const loadMore = async () => {
    try {
      const newArray: string[] = [];
      const data: PexelsResponse = await fetch(
        `https://api.pexels.com/v1/search?query=people&per_page=5&page=${nextPage}`,
        {
          headers: {Authorization: API_KEY},
        },
      ).then(res => res.json());
      if (!data.error) {
        for (let i = 0; i < data.photos.length; i++) {
          const element = data.photos[i].src.original;
          newArray.push(element);
        }
        setImagesList([...imagesList, ...newArray]);
        setNextPage(nextPage + 1);
      } else {
        const jsonplaceholder: PhotoAPI[] = await fetch(
          'https://jsonplaceholder.typicode.com/photos',
        ).then(res => res.json());
        const newArray2: string[] = jsonplaceholder
          .splice(0, 5)
          .map(item => item.url);
        setImagesList([...imagesList, ...newArray2]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    loadMore();
  }, []);

  return {
    imagesList,
    loadMore,
  };
};
