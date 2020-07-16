"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
const React = require("react");
const react_1 = require("react");
const leaflet_1 = require("leaflet");
const react_redux_1 = require("react-redux");
const reselect_1 = require("reselect");
// import {mapTypes} from '../../types/rental-offers-types';
const utils_1 = require("../../utils");
;
class Map extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.ref = react_1.createRef();
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
        const { offers, activeOffer, currentLocation } = this.props;
        const zoom = 12;
        const icon = leaflet_1.default.icon({
            iconUrl: `/img/pin.svg`,
            iconSize: [30, 30]
        });
        const iconActive = leaflet_1.default.icon({
            iconUrl: `/img/pin-active.svg`,
            iconSize: [30, 30]
        });
        this._map = leaflet_1.default.map(this.ref.current, {
            center: currentLocation.cityCoordinates,
            zoom,
            zoomControl: false,
            marker: true
        });
        this._map.setView(currentLocation.cityCoordinates, zoom);
        leaflet_1.default.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
        })
            .addTo(this._map);
        offers.forEach((offer) => {
            leaflet_1.default
                .marker(offer.coordinates, {
                icon: offer.id === activeOffer
                    ? iconActive
                    : icon
            })
                .addTo(this._map);
        });
    }
    render() {
        return (React.createElement("section", { ref: this.ref, className: "cities__map map" }));
    }
}
exports.Map = Map;
// Map.propTypes = mapTypes;
const offersSelector = reselect_1.createSelector([
    ({ data }) => data.allOffers,
    ({ data }) => data.currentLocation.city,
], utils_1.getOffersByCity);
const mapStateToProps = (state) => ({
    currentLocation: state.data.currentLocation,
    offers: offersSelector(state),
    activeOffer: state.ui.activeOfferLocation,
});
exports.default = react_redux_1.connect(mapStateToProps, null, (stateProps, dispatchProps, ownProps) => Object.assign({}, stateProps, dispatchProps, {
    activeOffer: stateProps.activeOffer === null
        ? ownProps.activeOffer
        : stateProps.activeOffer
}))(Map);
//# sourceMappingURL=map.js.map