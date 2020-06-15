import React from 'react';
import Main from '../main/main.jsx';
import rentalOffersTypes from '../../types/rental-offers';

const headerClickHandler = () => {};

const App = (props) => {
  const {rentalOffersCount, rentalOffersNames} = props;

  return (
    <Main rentalOffersCount={rentalOffersCount} rentalOffersNames={rentalOffersNames} onHeaderClick={headerClickHandler}

    />
  );
};

App.propTypes = rentalOffersTypes;

export default App;
