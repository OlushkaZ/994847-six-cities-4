import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {Auth} from './auth';

it(`Should Auth render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Auth authorizationStatus={`AUTH`} email={`123@gmail.com`}/>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should NoAuth render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Auth authorizationStatus={`NO_AUTH`} email={``}/>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
