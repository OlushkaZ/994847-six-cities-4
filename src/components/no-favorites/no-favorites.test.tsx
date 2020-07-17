import React from 'react';
import renderer from 'react-test-renderer';

import NoFavorites from './no-favorites';

it(`Should NoFavorites render correctly`, () => {
  const tree = renderer.create(<NoFavorites />).toJSON();

  expect(tree).toMatchSnapshot();
});
