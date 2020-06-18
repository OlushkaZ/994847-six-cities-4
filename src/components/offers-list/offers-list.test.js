import React from 'react';
import renderer from 'react-test-renderer';

import {RENTAL_OFFERS} from '../../test-mocks/rental-offers';
import OffersList from './offers-list';

it(`Should render OffersList correctly`, () => {
  const tree = renderer
    .create(
        <OffersList rentalCardsList={RENTAL_OFFERS} offers={[]} onHeaderClick={() => {}} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
