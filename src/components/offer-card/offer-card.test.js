import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {RENTAL_OFFER} from '../../test-mocks/rental-offers';
import OfferCard from './offer-card';

it(`Should render RentalCard correctly`, () => {
  const tree = renderer.create((
    <BrowserRouter>
      <OfferCard {...RENTAL_OFFER} />
    </BrowserRouter>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
