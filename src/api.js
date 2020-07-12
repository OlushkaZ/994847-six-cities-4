import axios from 'axios';
import {offersAdapter, reviewsAdapter, offerAdapter} from './utils';

export const api = axios.create({
  baseURL: `https://4.react.pages.academy/six-cities`,
  timeout: 5000,
  withCredentials: true,
});

export const fetchHotels = () => api
  .get(`/hotels`)
  .then((response) => response.data.map(offerAdapter));

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

export const changeStatusFavorites = (offerId, isBookmark) => api
    .post(`/favorite/${offerId}/${Number(isBookmark)}`);

export const fetchFavoritesOffers = () => api
    .get(`/favorite`)
    .then((response) => offersAdapter(response.data));

