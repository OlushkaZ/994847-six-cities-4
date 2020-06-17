import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card';
import {RENTAL_OFFER} from '../../test-mocks/rental-offers';

it(`Should render RentalCard correctly`, () => {
  const tree = renderer.create(<OfferCard {...RENTAL_OFFER} />).toJSON();

  expect(tree).toMatchSnapshot();
});
