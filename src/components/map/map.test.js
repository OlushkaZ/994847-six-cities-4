import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';
import {RENTAL_OFFERS} from '../../test-mocks/rental-offers';

it(`Should render Map correctly`, () => {
  const tree = renderer
    .create(<Map offers={RENTAL_OFFERS} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

