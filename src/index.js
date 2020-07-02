import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";

import {REVIEWS} from './mocks/reviews';
import {allOffers} from './mocks/all-offers';
import App from './components/app/app.jsx';

import {getOffersInCity, getLocationsFromOffers} from './utils';
import {reducer} from "./reducer";
import {SortType} from './constants';

const initialState = {
  showSortMenu: false,
  activeOfferLocation: null,
  currentLocation: allOffers[0].location,
  allOffers,
  currentOffers: getOffersInCity(allOffers[0].location.city, allOffers),
  currentSortType: SortType.POPULAR,
  locations: getLocationsFromOffers(allOffers),
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
        onHeaderClick={handleHeaderClick}
      />
    </Provider>,
    document.querySelector(`#root`)
);
