import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {RENTAL_OFFERS_NAMES} from '../../mocks/rental-offers';

it(`Should render Main correctly`, () => {
  const tree = renderer
    .create(
        <Main
          rentalOffersCount={5}
          rentalOffersNames={RENTAL_OFFERS_NAMES}
          onHeaderClick={jest.fn()}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


