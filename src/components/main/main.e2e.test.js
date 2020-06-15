import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import RENTAL_OFFERS_NAMES from '../../mocks/rental-offers';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should all the headers be clicked`, () => {
  const headerClickHandler = jest.fn();

  const mainScreen = shallow(
      <Main
        rentalOffersCount={5}
        rentalOffersNames={RENTAL_OFFERS_NAMES}
        onHeaderClick={headerClickHandler}
      />
  );

  const rentalHeaders = mainScreen.find(`.place-card__name`);

  rentalHeaders.forEach((header) => header.props().onClick());

  expect(headerClickHandler.mock.calls.length).toBe(RENTAL_OFFERS_NAMES.length);
});
