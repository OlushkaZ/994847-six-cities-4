import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in';

it(`Should SignIn render correctly`, () => {
  const tree = renderer.create(<SignIn onSubmit={jest.fn()} onChange={jest.fn()}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
