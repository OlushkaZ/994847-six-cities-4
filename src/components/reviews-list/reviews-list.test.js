import React from 'react';
import renderer from 'react-test-renderer';

import {REVIEWS} from '../../test-mocks/reviews';
import ReviewsList from './reviews-list';

it(`Should render RentalCard correctly`, () => {
  const tree = renderer.create((
    <ReviewsList reviewsTotalCount={REVIEWS.length} reviews={REVIEWS} />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});

