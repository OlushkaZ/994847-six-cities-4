import PropTypes from 'prop-types';

export const rentalOffersTypes = {
  rentalOffersCount: PropTypes.number.isRequired,
  rentalOffersNames: PropTypes.array.isRequired,
  onHeaderClick: PropTypes.func.isRequired
};

export const offerCardTypes = {
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired
};

export const offersListTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isBookmark: PropTypes.bool.isRequired
      })
  ).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};
