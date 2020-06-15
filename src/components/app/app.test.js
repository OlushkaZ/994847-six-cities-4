import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import RENTAL_OFFERS_NAMES from '../../mocks/rental-offers';

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      rentalOffersCount={5}
      rentalOffersNames={RENTAL_OFFERS_NAMES}
      onHeaderClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

