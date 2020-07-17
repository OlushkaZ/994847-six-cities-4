import React from 'react';
import renderer from 'react-test-renderer';

import OffersList from './offers-list';

it(`Should render OffersList correctly`, () => {
  const tree = renderer
    .create(
        <OffersList offers={[]} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
