import axios from 'axios';
/**
 * Reausable axios custom request, that already contains api_key & api_base
 * you only need to import, add the endpoint and query to run-
 */
export const imagesDB = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/photos',
  params: {},
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});
export default imagesDB;
