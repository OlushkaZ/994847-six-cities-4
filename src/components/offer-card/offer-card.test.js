import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {allOffers} from '../../test-mocks/all-offers';
import {OfferCard} from './offer-card';

it(`Should render RentalCard correctly`, () => {
  const tree = renderer.create((
    <BrowserRouter>
      <OfferCard
        {...allOffers[0].offers[0]}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
    </BrowserRouter>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
