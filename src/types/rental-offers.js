import PropTypes from 'prop-types';

export const rentalOffersTypes = {
  rentalOffersCount: PropTypes.number.isRequired,
  rentalOffersNames: PropTypes.array.isRequired,
  onHeaderClick: PropTypes.func.isRequired
};