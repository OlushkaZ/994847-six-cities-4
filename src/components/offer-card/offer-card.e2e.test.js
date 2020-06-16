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

  const card = rentalCard.find(`.place-card`);
  card.props().onMouseEnter();

  expect(onMouseEnter.mock.calls.length).toBe(1);
});
