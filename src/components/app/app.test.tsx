import * as React from 'react';
import {createStore} from 'redux';
import {Provider} from "react-redux";
import * as renderer from 'react-test-renderer';

import reducer from '../../reducer/combine-reducer';
import {allOffers} from '../../test-mocks/all-offers';
import {location} from '../../test-mocks/location';
import {App} from './app';

const store = createStore(reducer);

it(`Render App`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <App
          authorizationStatus={`AUTH`}
        />
      </Provider>
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});

