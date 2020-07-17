import * as React from 'react';
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/data/data";
import {OfferLocation} from '../../types/offer';

interface Props {
  currentLocation: OfferLocation;
  locations: OfferLocation[];
  onCityClick: (
    evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    location: OfferLocation
  ) => void;
}

const CitiesList: React.FC<Props> = (props) => {
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

const mapStateToProps = (state) => ({
  currentLocation: state.data.currentLocation,
  locations: state.data.locations,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt, location) {
    evt.preventDefault();
    dispatch(ActionCreator.changeLocation(location));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

