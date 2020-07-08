import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from "react-redux";
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {dataReducer} from '../../reducer/data';
import {uiReducer} from '../../reducer/ui';
import {allOffers} from '../../test-mocks/all-offers';
import {location} from '../../test-mocks/location';
import Main from './main.jsx';

const store = createStore(
    combineReducers({
      data: dataReducer,
      ui: uiReducer,
    })
);

it(`Should render Main correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <BrowserRouter>
          <Main
            currentLocation={location}
            offers={allOffers[0].offers}
          />
        </BrowserRouter>
      </Provider>
    )).toJSON();

  expect(tree).toMatchSnapshot();
});
