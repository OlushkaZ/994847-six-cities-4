import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from "react-redux";
import renderer from 'react-test-renderer';

import {dataReducer} from '../../reducer/data';
import {uiReducer} from '../../reducer/ui';
import {allOffers} from '../../test-mocks/all-offers';
import OfferDetails from './offer-details';

const store = createStore(
    combineReducers({
      data: dataReducer,
      ui: uiReducer,
    })
);

it(`Should render Property correctly`, () => {
  const tree = renderer.create((
    <Provider store={store}>
      <OfferDetails
        reviewsTotalCount={0}
        offer={allOffers[0].offers[0]}
        offers={[]}
        reviews={[]}
      />
    </Provider>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
