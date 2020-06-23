import React from 'react';
import renderer from 'react-test-renderer';

import {RENTAL_OFFERS} from '../../test-mocks/rental-offers';

import App from './app.jsx';

it(`Render App`, () => {
  const tree = renderer
    .create((
      <App
        offers={RENTAL_OFFERS}
        rentalOffersCount={RENTAL_OFFERS.length}
        rentalOffersNames={RENTAL_OFFERS}
        onHeaderClick={jest.fn()}
      />
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});

