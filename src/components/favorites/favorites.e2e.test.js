import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Favorites} from './favorites';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should all the headers be clicked`, () => {
  const onRemove = jest.fn();

  const citiesListShallow = shallow(
      <Favorites
        onDidMount={() => {}}
        onRemove={onRemove}
        offers={[
          {
            location: {
              city: `Gotham`,
              cityCoordinates: [],
            },
            offers: [
              {
                id: 1,
                name: `Lorem Ipsum`,
                isBookmark: true,
              }
            ]
          }
        ]}
      />
  );

  citiesListShallow
    .find(`button`)
    .at(0)
    .simulate(`click`);

  expect(onRemove.mock.calls.length).toBe(1);
});
