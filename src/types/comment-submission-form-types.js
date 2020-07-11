import PropTypes from "prop-types";

export const CommentSubmissionFormTypes = {
  isDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    rating: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
  }).isRequired,
};
