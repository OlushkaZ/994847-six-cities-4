import PropTypes from "prop-types";

export const favoritesTypes = {
  onDidMount: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
};
