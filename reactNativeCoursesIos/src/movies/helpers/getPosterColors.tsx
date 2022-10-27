import ImageColors from 'react-native-image-colors';

/**
 * Function that returns primary and secondary colors from an image
 * doesn't matter the platform.
 * @param uri string that must have the complete uri for the movie cover
 * @returns an array that cointains the primary and secondary color of the image
 */
export const getPosterColors = async (uri: string) => {
  const result = await ImageColors.getColors(uri, {});
  switch (result.platform) {
    case 'android':
      // android result properties
      return [result.dominant, result.average];
    case 'web':
      // web result properties
      return [result.dominant, result.vibrant];
    case 'ios':
      // iOS result properties
      return [result.primary, result.secondary];
    default:
      return ['red', 'orange'];
  }
};
