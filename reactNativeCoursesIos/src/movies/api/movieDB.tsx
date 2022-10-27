import axios from 'axios';
import {REACT_APP_MOVIES_API_KEY, REACT_APP_MOVIES_BASE_URL} from 'dotenv';
/**
 * Reausable axios custom request, that already contains api_key & api_base
 * you only need to import, add the endpoint and query to run-
 */
export const movieDB = axios.create({
  baseURL: REACT_APP_MOVIES_BASE_URL,
  params: {
    api_key: REACT_APP_MOVIES_API_KEY,
    language: 'es-ES',
  },
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});
export default movieDB;
