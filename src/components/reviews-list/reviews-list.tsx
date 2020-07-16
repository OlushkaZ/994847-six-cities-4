import * as React from 'react';
import {connect} from "react-redux";

import {getSortedReviewsSlice} from '../../utils';
import ReviewCard from '../review-card/review-card';
import CommentSubmissionForm from '../comment-submission-form/comment-submission-form';
import {Review} from '../../types/review';

interface Props {
  reviews: Review[];
  authorizationStatus: string;
}

const ReviewsList: React.FC<Props> = ({reviews, authorizationStatus}) => {
  const sortedReviews = getSortedReviewsSlice(reviews);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map((review, index) => (
          <ReviewCard key={index} review={review}/>
        ))}
      </ul>
      {(authorizationStatus === `AUTH`)
        ? (
          <CommentSubmissionForm />
        ) : null
      }
    </section>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.user.authorizationStatus,
  reviews: state.reviews.reviews,
});

export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);


