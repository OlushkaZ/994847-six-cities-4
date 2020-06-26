import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";

import {RENTAL_OFFERS_NAMES} from './mocks/offers';
import {REVIEWS} from './mocks/reviews';
import {allOffers} from './mocks/all-offers';
import App from './components/app/app.jsx';

import {getOffersInCity} from './utils';
import {reducer} from "./reducer";

const initialState = {
  currentLocation: allOffers[0].location,
  allOffers,
  currentOffers: getOffersInCity(allOffers[0].location.city, allOffers),
};

const RENTAL_OFFERS_COUNT = 4;

const handleHeaderClick = () => {};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={REVIEWS}
        rentalOffersCount={RENTAL_OFFERS_COUNT}
        rentalOffersNames={RENTAL_OFFERS_NAMES}
        onHeaderClick={handleHeaderClick}
      />
    </Provider>,
    document.querySelector(`#root`)
);
