import React, {PureComponent, createRef} from 'react';
import leaflet from 'leaflet';

import {mapTypes} from '../../types/rental-offers-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.ref = createRef();
  }

  componentDidMount() {
    if (!this.ref.current) {
      return;
    }

    const {offers} = this.props;

    const city = [52.38333, 4.9];
    const zoom = 12;

    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(this.ref.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
        })
        .addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker(offer.location.cityCoordinates, {icon})
        .addTo(map);
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

export default Map;

