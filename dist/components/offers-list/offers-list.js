"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import {offersListTypes} from '../../types/rental-offers-types';
const offer_card_1 = require("../offer-card/offer-card");
;
class OffersList extends React.PureComponent {
    render() {
        const { offers = [] } = this.props;
        return (React.createElement("div", { className: "cities__places-list places__list tabs__content" }, offers.map((offer) => (React.createElement(offer_card_1.default, Object.assign({ key: offer.id }, offer))))));
    }
}
// OffersList.propTypes = offersListTypes;
exports.default = OffersList;
//# sourceMappingURL=offers-list.js.map