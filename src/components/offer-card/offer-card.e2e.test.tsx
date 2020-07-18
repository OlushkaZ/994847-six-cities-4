import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {RENTAL_OFFER} from '../../test-mocks/rental-offers';
import {OfferCard} from './offer-card';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should RentalCard handle onMouseEnter event`, () => {
  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();
  const onFavoriteClick = jest.fn();

  const rentalCard = shallow(
      <OfferCard
        {...RENTAL_OFFER}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFavoriteClick={onFavoriteClick}
      />
  );

  rentalCard.find(`.place-card`).at(0).simulate(`mouseenter`);
  rentalCard.find(`.place-card`).at(0).simulate(`mouseleave`);
  rentalCard.find(`button`).at(0).simulate(`click`);

  expect(onMouseEnter.mock.calls.length).toBe(1);
  expect(onMouseLeave.mock.calls.length).toBe(1);
  expect(onFavoriteClick.mock.calls.length).toBe(1);
});
