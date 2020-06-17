import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import OfferCard from './offer-card';
import {RENTAL_OFFER} from '../../test-mocks/rental-offers';

it(`Should render RentalCard correctly`, () => {
  const tree = renderer.create((
    <BrowserRouter>
      <OfferCard {...RENTAL_OFFER} />
    </BrowserRouter>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
