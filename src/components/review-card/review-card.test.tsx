import React from 'react';
import renderer from 'react-test-renderer';

import {REVIEWS} from '../../test-mocks/reviews';
import ReviewCard from './review-card';

it(`Should render RentalCard correctly`, () => {
  const tree = renderer.create((
    <ReviewCard review={REVIEWS[0]} />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
