import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {RENTAL_OFFERS_NAMES} from './mocks/rental-offers';
import offers from './mocks/offers';

const RENTAL_OFFERS_COUNT = 5;

const headerClickHandler = () => {};

ReactDOM.render(
    <App
      offers={offers}
      rentalOffersCount={RENTAL_OFFERS_COUNT}
      rentalOffersNames={RENTAL_OFFERS_NAMES}
      onHeaderClick={headerClickHandler}
    />,
    document.querySelector(`#root`)
);
