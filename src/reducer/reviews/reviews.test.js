import {reviewsReducer, ActionCreator} from './reviews';

it(`Reducer: setReviewCreating`, () => {
  expect(reviewsReducer(undefined, ActionCreator.setReviewCreating(true))).toEqual({
    newReview: {
      rating: ``,
      review: ``,
    },
    reviews: [],
    isReviewCreating: true,
  });
});

it(`Reducer: changeFieldReview`, () => {
  expect(reviewsReducer(undefined, ActionCreator.changeFieldReview({target: {value: `123`, name: `review`}}))).toEqual({
    newReview: {
      rating: ``,
      review: `123`,
    },
    reviews: [],
    isReviewCreating: false,
  });
});
