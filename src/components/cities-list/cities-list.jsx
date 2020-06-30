import React from 'react';
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer";
import {CitiesListType} from '../../types/rental-offers-types';

const CitiesList = (props) => {
  const {
    currentLocation,
    locations,
    onCityClick,
  } = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location) => (
          <li key={location.city} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${currentLocation.city === location.city ? `tabs__item--active` : ``}`}
              href="#"
              onClick={(evt) => onCityClick(evt, location)}
            >
              <span>{location.city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

CitiesList.propTypes = CitiesListType;

const mapStateToProps = (state) => ({
  currentLocation: state.currentLocation,
  locations: state.locations,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt, location) {
    evt.preventDefault();
    dispatch(ActionCreator.changeLocation(location));
    dispatch(ActionCreator.changeCurrentOffers(location.city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

