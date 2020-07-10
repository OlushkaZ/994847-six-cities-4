import React from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

import {ActionCreator} from '../../reducer/data';
import {isValidReview} from '../../utils';
import {CommentSubmissionFormTypes} from '../../types/comment-submission-form-types';

const ratingFields = [
  {
    value: 5,
    title: `perfect`
  },
  {
    value: 4,
    title: `good`
  },
  {
    value: 3,
    title: `not bad`
  },
  {
    value: 2,
    title: `badly`
  },
  {
    value: 1,
    title: `terribly`
  },
];

const CommentSubmissionForm = ({values, onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingFields.map((rating) => (
          <React.Fragment key={rating.value}>
            <input
              onChange={onChange}
              className="form__rating-input visually-hidden"
              name="rating"
              value={rating.value}
              id={`${rating.value}-stars`}
              type="radio"
              checked={values.rating === rating.value}
            />
            <label
              htmlFor={`${rating.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={rating.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        onChange={onChange}
        value={values.review}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValidReview(values)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  values: state.data.newReview
});

const mapDispatchToProps = (dispatch, {match}) => ({
  onChange: (evt) => dispatch(ActionCreator.changeFieldReview(evt)),
  onSubmit: (evt) => dispatch(ActionCreator.publishReview(evt, match)),
});

CommentSubmissionForm.propTypes = CommentSubmissionFormTypes;

export {CommentSubmissionForm};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentSubmissionForm));
