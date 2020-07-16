import React from 'react';
import renderer from 'react-test-renderer';

import {location, locations} from '../../test-mocks/location';
import {CitiesList} from './cities-list';

it(`Should CitiesList render correctly`, () => {
  const tree = renderer
    .create(
        <CitiesList
          onCityClick={jest.fn()}
          currentLocation={location}
          locations={locations}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
