import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {allOffers} from '../../test-mocks/all-offers';
import {Favorites} from './favorites';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should all the headers be clicked`, () => {
  const onRemove = jest.fn();
  const onDidMount = jest.fn();

  const citiesListShallow = shallow(
      <Favorites
        onDidMount={onDidMount}
        onRemove={onRemove}
        offers={allOffers}
      />
  );

  citiesListShallow
    .find(`button`)
    .at(0)
    .simulate(`click`);

  expect(onRemove.mock.calls.length).toBe(1);
});
