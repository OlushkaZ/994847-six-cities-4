import {SortType} from './constants';

const MAX_CITIES_COUNT = 6;
const MAX_RATING_COUNT = 5;
const MAX_RATING_PERCENT_COUNT = 100;

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


const offerAdapter = (hotel) => ({
  id: hotel.id,
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

  // console.log(groupOffers);

  return Object.values(groupOffers);
};

export const convertRatingToPercent = (rating) => {
  return `${Math.round(rating) / MAX_RATING_COUNT * MAX_RATING_PERCENT_COUNT}%`;
};
