/**
 * Function to get image uri
 * @param moviePath a string that have the last part of the uri to get the image
 * @returns the whole uri to get the imager resource
 */
export const getImageUri = (moviePath: string) =>
  'https://image.tmdb.org/t/p/w500' + moviePath;
