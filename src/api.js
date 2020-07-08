import axios from 'axios';
import {offersAdapter} from './utils';

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  return api;
};

export const fetchHotels = () => createAPI()
  .get(`/hotels`)
  .then((response) => offersAdapter(response.data));

export const checkAuth = () => createAPI()
  .get(`/login`);
