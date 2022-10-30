import {API_HOST} from '../utils/constants';
import axios from 'axios';
// const axios = require('axios');

export const pokeApi = axios.create({
  baseURL: API_HOST,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});

export default pokeApi;
