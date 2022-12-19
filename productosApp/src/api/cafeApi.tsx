import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosRequestConfig} from 'axios';

const baseURL = 'https://http-nodejs-production-3fae.up.railway.app/api';
// const baseURL = 'http://localhost:8080/api';

/**
 * creamos una funcion de axios para que siempre maneje la url del backend
 * Agregamos el middleware para que el token sea agregado cada vez que se haga request
 * En caso de no existir el token, la request nos dira que tiene error
 * por ello solo debemos manejar el error en las requests
 */
const cafeApi = axios.create({baseURL});
// middleware que intercepta el token
cafeApi.interceptors.request.use(async (config: AxiosRequestConfig) => {
  // busca el token, si hay agregalo en la request
  const token = await AsyncStorage.getItem('@token');

  if (token) {
    // config.headers!['x-token'] = token;
    config.headers = {
      ...config.headers,
      'x-token': token,
    };
  }
  return config;
});

export default cafeApi;
