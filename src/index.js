import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const RENTAL_OFFERS_COUNT = 5;

const RENTAL_OFFERS_NAMES = [
  `Beautiful luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Amazing apartment for your cat`
];

ReactDOM.render(
    <App rentalOffersCount={RENTAL_OFFERS_COUNT} rentalOffersNames={RENTAL_OFFERS_NAMES} />,
    document.querySelector(`#root`)
);
