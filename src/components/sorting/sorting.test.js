import React from 'react';
import renderer from 'react-test-renderer';

import {Sorting} from './sorting';

it(`Should Sorting render correctly`, () => {
  const tree = renderer
    .create(<Sorting
      isOpened={true}
      currentSortType={`Popular`}
      onSort={() => {}}
      onShowSortMenu={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
