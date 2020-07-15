import {SortType} from './constants';

const MAX_CITIES_COUNT = 6;
const MAX_RATING_COUNT = 5;
const MAX_RATING_PERCENT_COUNT = 100;
const MAX_REVIEWS_COUNT = 10;
const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    day: `numeric`,
    month: `long`,
    year: `numeric`,
  };

  return new Intl.DateTimeFormat(`en`, options).format(date);
};

export const getLocationsFromOffers = (allOffers) => {
  const citiesGroup = allOffers
  .reduce((group, offer) => {
    group[offer.location.city] = offer.location;
    return group;
  }, {});

  return Object
    .values(citiesGroup)
    .slice(0, MAX_CITIES_COUNT);
};

export const getOffersByCity = (allOffers, city) => allOffers
  .filter((offer) => offer.location.city === city);

export const getSortedOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const offerAdapter = (hotel) => ({
  id: hotel.id,
  location: {
    city: hotel.city.name,
    cityCoordinates: [
      hotel.city.location.latitude,
      hotel.city.location.longitude
    ],
  },
  coordinates: [
    hotel.location.latitude,
    hotel.location.longitude
  ],
  description: [hotel.description],
  featuresDetails: hotel.goods,
  host: {
    hostName: hotel.host.name,
    photo: `/${hotel.host.avatar_url}`,
    isSuper: hotel.host.is_pro,
  },
  imgDetails: hotel.images,
  img: hotel.preview_image,
  isPremium: hotel.is_premium,
  isBookmark: hotel.is_favorite,
  maxGuestsDetails: hotel.max_adults,
  price: hotel.price,
  rating: hotel.rating,
  name: hotel.title,
  type: hotel.type,
  roomCountDetails: hotel.bedrooms,
  reviews: []
});

export const offersAdapter = (data) => {
  const groupOffers = {};

  data.forEach((hotel) => {
    if (groupOffers[hotel.city.name]) {
      groupOffers[hotel.city.name].offers.push(offerAdapter(hotel));
    } else {
      groupOffers[hotel.city.name] = {
        location: {
          city: hotel.city.name,
          cityCoordinates: [
            hotel.city.location.latitude,
            hotel.city.location.longitude
          ],
        },
        offers: [offerAdapter(hotel)],
      };
    }
  });

  return Object.values(groupOffers);
};

export const reviewsAdapter = (comment) => ({
  text: comment.comment,
  id: comment.id,
  rating: comment.rating,
  date: comment.date,
  name: comment.user.name,
  avatar: comment.user.avatar_url,
  isPro: comment.user.is_pro,
});


export const convertRatingToPercent = (rating) => {
  return `${Math.round(rating) / MAX_RATING_COUNT * MAX_RATING_PERCENT_COUNT}%`;
};

export const getSortedReviewsSlice = (reviews) => reviews
  .slice()
  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  .slice(0, MAX_REVIEWS_COUNT);


export const isValidReview = (values) => {
  if (!values.rating || !values.review) {
    return false;
  }

  if (values.review.length < MIN_REVIEW_LENGTH || values.review.length > MAX_REVIEW_LENGTH) {
    return false;
  }

  return true;
};
