import React from 'react';
import Main from '../main/main.jsx';
import {rentalOffersTypes} from '../../types/rental-offers';

const handleHeaderClick = () => {};

const App = (props) => {
  const {rentalOffersCount, rentalOffersNames, offers} = props;

  return (
    <Main
      offers={offers}
      rentalOffersCount={rentalOffersCount}
      rentalOffersNames={rentalOffersNames}
      onHeaderClick={handleHeaderClick}
    />
  );
};

App.propTypes = rentalOffersTypes;

export default App;
