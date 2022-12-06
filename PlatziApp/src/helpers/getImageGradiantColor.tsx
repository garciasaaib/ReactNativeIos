import ImageColors from 'react-native-image-colors';

/**
 * Function that returns primary and secondary colors from an image
 * doesn't matter the platform.
 * @param uri string that must have the complete uri for the movie cover
 * @returns an array that cointains the primary and secondary color of the image
 */
export const getImageGradiantColor = async (
  uri: string,
  typeBg: string = 'grey',
) => {
  const result = await ImageColors.getColors(uri, {fallback: 'grey'});
  let response: string = '';
  switch (result.platform) {
    case 'android':
      response =
        result.dominant !== '#ffffff' &&
        result.dominant !== '#000000' &&
        result.dominant
          ? result.dominant
          : result.vibrant || typeBg;
      break;
    case 'web':
      response = result.lightVibrant || typeBg;
      break;
    case 'ios':
      response =
        result.background !== '#FFFFF' && result.background !== '#000000'
          ? result.background
          : typeBg;
      break;
    default:
      response = typeBg;
  }
  return response;
};
