import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from "react-redux";
import renderer from 'react-test-renderer';

import {dataReducer} from '../../reducer/data';
import {uiReducer} from '../../reducer/ui';
import {allOffers} from '../../test-mocks/all-offers';
import {location} from '../../test-mocks/location';
import {App} from './app.jsx';

const store = createStore(
    combineReducers({
      data: dataReducer,
      ui: uiReducer,
    })
);

it(`Render App`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <App
          currentLocation={location}
          offers={allOffers[0].offers}
        />
      </Provider>
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});

