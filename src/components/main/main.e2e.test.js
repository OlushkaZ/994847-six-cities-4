import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {RENTAL_OFFERS} from '../../test-mocks/rental-offers';
import OffersList from '../offers-list/offers-list.jsx';
import OfferCard from '../offer-card/offer-card.jsx';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should all the headers be clicked`, () => {
  const handleHeaderClick = jest.fn();

  const mainScreen = shallow(
      <Main
        offers={RENTAL_OFFERS}
        rentalOffersCount={RENTAL_OFFERS.length}
        rentalOffersNames={RENTAL_OFFERS}
        onHeaderClick={handleHeaderClick}
      />
  );

  const offerListWrapper = mainScreen.find(OffersList).shallow();
  offerListWrapper.find(OfferCard)
    .forEach((offerCardWrapper) => {
      offerCardWrapper
        .shallow()
        .find(`.place-card__name`)
        .at(0)
        .simulate(`click`);
    });

  expect(handleHeaderClick.mock.calls.length).toBe(RENTAL_OFFERS.length);
});
