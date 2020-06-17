import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card';
import {RENTAL_OFFER} from '../../test-mocks/rental-offers';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should RentalCard handle onMouseEnter event`, () => {
  const onMouseEnter = jest.fn();

  const rentalCard = shallow(
      <OfferCard {...RENTAL_OFFER} onMouseEnter={onMouseEnter} />
  );

  rentalCard.find(`.place-card`).at(0).simulate(`mouseenter`);

  expect(onMouseEnter.mock.calls.length).toBe(1);
});
