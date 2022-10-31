import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavoritesStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('@favorites');
    if (value !== null) {
      // value previously stored
      console.log(JSON.parse(value || []));
    }
  } catch (e) {
    // error reading value
  }
};

export const setFavoritesStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('@favorites');
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};
