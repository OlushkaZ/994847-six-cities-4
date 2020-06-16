import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {RENTAL_OFFERS_NAMES} from './mocks/offers';
import {OFFER_CARDS} from './mocks/offers';

const RENTAL_OFFERS_COUNT = 4;

const handleHeaderClick = () => {};

ReactDOM.render(
    <App
      offers={OFFER_CARDS}
      rentalOffersCount={RENTAL_OFFERS_COUNT}
      rentalOffersNames={RENTAL_OFFERS_NAMES}
      onHeaderClick={handleHeaderClick}
    />,
    document.querySelector(`#root`)
);
