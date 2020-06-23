import React from 'react';
import renderer from 'react-test-renderer';

import {RENTAL_OFFERS} from '../../test-mocks/rental-offers';
import Map from './map.jsx';

it(`Should render Map correctly`, () => {
  const tree = renderer
    .create(<Map offers={RENTAL_OFFERS} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

