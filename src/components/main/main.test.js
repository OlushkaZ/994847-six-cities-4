import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {RENTAL_OFFERS} from '../../test-mocks/rental-offers';

it(`Should render Main correctly`, () => {
  const tree = renderer
    .create(
        <Main
          offers={RENTAL_OFFERS}
          rentalOffersCount={RENTAL_OFFERS.length}
          rentalOffersNames={RENTAL_OFFERS}
          onHeaderClick={jest.fn()}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


