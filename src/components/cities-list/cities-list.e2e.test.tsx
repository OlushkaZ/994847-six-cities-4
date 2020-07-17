import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {location, locations} from '../../test-mocks/location';
import {CitiesList} from './cities-list';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should all the headers be clicked`, () => {
  const handleCityClick = jest.fn();

  const citiesListShallow = shallow(
      <CitiesList
        onCityClick={handleCityClick}
        currentLocation={location}
        locations={locations}
      />
  );

  citiesListShallow
    .find(`a`)
    .at(0)
    .simulate(`click`);

  expect(handleCityClick.mock.calls.length).toBe(1);
});
