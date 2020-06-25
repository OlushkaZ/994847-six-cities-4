import PropTypes from "prop-types";

export const reviewShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});

export const reviewTypes = {
  review: reviewShape.isRequired,
};


export const reviewsListTypes = {
  reviews: PropTypes.arrayOf(reviewShape).isRequired,
  reviewsTotalCount: PropTypes.number.isRequired,
};
