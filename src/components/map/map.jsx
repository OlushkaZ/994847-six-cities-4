import React, {PureComponent, createRef} from 'react';
import leaflet from 'leaflet';
import {connect} from "react-redux";

import {mapTypes} from '../../types/rental-offers-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.ref = createRef();
    this._map = null;
  }

  componentDidUpdate() {
    this._renderMap();
  }

  componentDidMount() {
    this._renderMap();
  }

  _renderMap() {
    if (!this.ref.current) {
      return;
    }

    if (this._map) {
      this._map.remove();
    }

    const {offers, activeOffer, currentLocation} = this.props;
    const zoom = 12;

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });
    const iconActive = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30]
    });

    this._map = leaflet.map(this.ref.current, {
      center: currentLocation.cityCoordinates,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(currentLocation.cityCoordinates, zoom);

    leaflet.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
        })
        .addTo(this._map);

    offers.forEach((offer) => {
      leaflet
        .marker(offer.coordinates, {
          icon: offer.id === activeOffer
            ? iconActive
            : icon
        })
        .addTo(this._map);
    });
  }

  render() {
    return (
      <section
        ref={this.ref}
        className="cities__map map"
      />
    );
  }
}

Map.propTypes = mapTypes;

const mapStateToProps = (state) => ({
  currentLocation: state.currentLocation,
  offers: state.currentOffers,
  activeOffer: state.activeOfferLocation,
});

export {Map};
export default connect(
    mapStateToProps,
    null,
    (stateProps, dispatchProps, ownProps) => Object.assign({}, stateProps, dispatchProps, {
      activeOffer: stateProps.activeOffer === null
        ? ownProps.activeOffer
        : stateProps.activeOffer
    })
)(Map);
