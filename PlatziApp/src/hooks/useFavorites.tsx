import {useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export default () => {
  const [idList, setIdList] = useState<number[]>([]);
  // const {getItem, setItem} = useAsyncStorage('@favorites');

  // const readItemFromStorage = async () => {
  //   const item = await getItem();
  //   // setIdList(item);
  // };
  // const writeItemToStorage = async newValue => {
  //   await setItem(newValue);
  //   // setValue(newValue);
  // };
  // useEffect(() => {
  //   readItemFromStorage();
  // });

  const addFavorite = (id: number) => {
    console.log(idList);
    setIdList([...idList, id]);
  };
  return {
    addFavorite,
    idList,
  };
};
