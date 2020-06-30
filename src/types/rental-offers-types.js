import PropTypes from 'prop-types';

export const offerReviewShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});

export const offerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  host: PropTypes.shape({
    hostName: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  roomCountDetails: PropTypes.number.isRequired,
  maxGuestsDetails: PropTypes.number.isRequired,
  featuresDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
  reviews: PropTypes.arrayOf(offerReviewShape).isRequired,
});

export const locationShape = PropTypes.shape({
  city: PropTypes.string.isRequired,
  cityCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired
});

export const rentalOffersTypes = {
  rentalOffersCount: PropTypes.number.isRequired,
  rentalOffersNames: PropTypes.array.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

export const mainTypes = {
  currentLocation: locationShape.isRequired,
  offers: PropTypes.arrayOf(offerShape).isRequired
};

export const appTypes = {
  currentLocation: locationShape.isRequired,
  offers: PropTypes.arrayOf(offerShape).isRequired
};

export const offerCardTypes = Object.assign({}, offerShape.isRequired, {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
});

export const offersListTypes = {
  offers: PropTypes.arrayOf(offerShape).isRequired,
};

export const mapTypes = {
  activeOffer: PropTypes.number,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        location: PropTypes.shape({
          cityCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
        })
      })
  ).isRequired,
};

export const OfferDetailsTypes = {
  offer: PropTypes.shape({
    price: PropTypes.number.isRequired,
    imgDetails: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    name: PropTypes.string.isRequired,
    ratingDetails: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    roomCountDetails: PropTypes.number.isRequired,
    maxGuestsDetails: PropTypes.number.isRequired,
    featuresDetails: PropTypes.array.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    host: PropTypes.shape({
      photo: PropTypes.string.isRequired,
      hostName: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
  })
};

export const CitiesListType = {
  currentLocation: locationShape.isRequired,
  locations: PropTypes.arrayOf(locationShape).isRequired,
  onCityClick: PropTypes.func.isRequired
};
