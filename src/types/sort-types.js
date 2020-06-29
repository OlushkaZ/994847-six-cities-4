import PropTypes from "prop-types";

export const sortTypes = {
  isOpened: PropTypes.bool.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  onShowSortMenu: PropTypes.func.isRequired,
};
