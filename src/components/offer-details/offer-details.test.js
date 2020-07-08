import React from 'react';
import {createStore} from 'redux';
import {Provider} from "react-redux";
import renderer from 'react-test-renderer';

import reducer from '../../reducer/combine-reducer';
import {allOffers} from '../../test-mocks/all-offers';
import OfferDetails from './offer-details';

const store = createStore(reducer);

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
