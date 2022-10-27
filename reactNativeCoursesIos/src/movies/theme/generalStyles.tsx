import {StyleSheet} from 'react-native';
/**
 * Contains some general styles for the aplication.
 * In this case contains the styles for shadows in posters.
 */
export const generalStyles = StyleSheet.create({
  shadowAndroid: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
  },
  shadowIos: {
    // ios set in wrapper
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
