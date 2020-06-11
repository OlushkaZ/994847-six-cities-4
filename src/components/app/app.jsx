import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {rentalOffersCount, rentalOffersNames} = props;

  return (
    <Main rentalOffersCount={rentalOffersCount} rentalOffersNames={rentalOffersNames} />
  );
};

App.propTypes = {
  rentalOffersCount: PropTypes.number.isRequired,
  rentalOffersNames: PropTypes.array.isRequired,
};

export default App;
