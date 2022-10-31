import {useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export default function useFavorites() {
  const [idList, setIdList] = useState([]);
  // const {getItem, setItem} = useAsyncStorage('@favorites');

  // const readItemFromStorage = async () => {
  //   const item = await getItem();
  //   // setIdList(item);
  // };
  // const writeItemToStorage = async newValue => {
  //   await setItem(newValue);
  //   // setValue(newValue);
  // };
  // const getFromStorage = async () => {
  //   const res = await getItem();
  //   console.log(res);
  // };
  // useEffect(() => {
  //   readItemFromStorage();
  // });

  const addFavorite = (id: string) => {
    console.log(id);
  };
  return {
    addFavorite,
  };
}
