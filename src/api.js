import axios from 'axios';
import {offersAdapter, reviewsAdapter} from './utils';

const api = axios.create({
  baseURL: `https://4.react.pages.academy/six-cities`,
  timeout: 5000,
  withCredentials: true,
});

export const fetchHotels = () => api
  .get(`/hotels`)
  .then((response) => offersAdapter(response.data));

export const checkAuth = () => api.get(`/login`);

export const login = (email, password) => api
  .post(`/login`, {
    email,
    password,
  });

export const fetchComments = (offerId) => api
  .get(`/comments/${offerId}`)
  .then((response) => {
    return response.data.map((comment) => {
      return reviewsAdapter(comment);
    });
  });

export const createReview = (offerId, rating, text) => api
  .post(`/comments/${offerId}`, {
    rating,
    comment: text
  })
  .then((response) => {
    return response.data.map((comment) => {
      return reviewsAdapter(comment);
    });
  });
