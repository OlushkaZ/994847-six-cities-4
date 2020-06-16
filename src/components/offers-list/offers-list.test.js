import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list';
import {RENTAL_OFFERS} from '../../test-mocks/rental-offers';

it(`Should render OffersList correctly`, () => {
  const tree = renderer
    .create(
        <OffersList rentalCardsList={RENTAL_OFFERS} offers={[]} onHeaderClick={() => {}} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
