import {SortType} from './constants';

const MAX_CITIES_COUNT = 6;

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    day: `numeric`,
    month: `long`,
    year: `numeric`,
  };

  return new Intl.DateTimeFormat(`en`, options).format(date);
};

export const getOffersInCity = (city, offers) => {
  return offers
    .find((offer) => offer.location.city === city)
    .offers;
};

export const getLocationsFromOffers = (allOffers) => allOffers
  .slice(0, MAX_CITIES_COUNT)
  .map((offer) => offer.location);

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

