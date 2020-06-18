import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {RENTAL_OFFERS} from '../../test-mocks/rental-offers';
import Main from './main.jsx';

it(`Should render Main correctly`, () => {
  const tree = renderer
    .create((
      <BrowserRouter>
        <Main
          offers={RENTAL_OFFERS}
          rentalOffersCount={RENTAL_OFFERS.length}
          rentalOffersNames={RENTAL_OFFERS}
          onHeaderClick={jest.fn()}
        />
      </BrowserRouter>
    )).toJSON();

  expect(tree).toMatchSnapshot();
});
