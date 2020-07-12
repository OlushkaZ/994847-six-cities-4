import React from 'react';
import {createStore} from 'redux';
import {Provider} from "react-redux";
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import reducer from '../../reducer/combine-reducer';
import {allOffers} from '../../test-mocks/all-offers';
import {OfferDetails} from './offer-details';

const store = createStore(reducer);

it(`Should render Property correctly`, () => {
  const tree = renderer.create((
    <BrowserRouter>
      <Provider store={store}>
        <OfferDetails
          offer={allOffers[0].offers[0]}
          offers={[]}
          onDidMount={() => {}}
        />
      </Provider>
    </BrowserRouter>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
