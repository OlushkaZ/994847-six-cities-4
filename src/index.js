import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {RENTAL_OFFERS_NAMES} from './mocks/rental-offers';

const RENTAL_OFFERS_COUNT = 5;

const headerClickHandler = () => {};

ReactDOM.render(
    <App rentalOffersCount={RENTAL_OFFERS_COUNT} rentalOffersNames={RENTAL_OFFERS_NAMES} onHeaderClick={headerClickHandler}/>,
    document.querySelector(`#root`)
);
