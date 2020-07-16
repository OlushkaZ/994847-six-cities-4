"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferDetails = void 0;
const React = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const reviews_1 = require("../../reducer/reviews");
const data_1 = require("../../reducer/data");
// import {offerDetailsType} from '../../types/rental-offers-types';
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const reviews_list_1 = require("../reviews-list/reviews-list");
const offer_card_1 = require("../offer-card/offer-card");
const map_1 = require("../map/map");
const MAX_COUNT_IMAGES = 6;
const MAX_OFFERS_NEARBY_COUNT = 3;
const ACTIVE_CLASS_NAME = `place-card__bookmark-button--active`;
const onMouseEnter = () => { };
class OfferDetails extends React.PureComponent {
    componentDidMount() {
        this.props.onDidMount();
    }
    render() {
        const { offers, offer, onFavoriteClick, authorizationStatus } = this.props;
        if (!offer) {
            return React.createElement(react_router_dom_1.Redirect, { to: "/" });
        }
        const { id, price, imgDetails, name, ratingDetails, type, roomCountDetails, maxGuestsDetails, featuresDetails, host: { photo, hostName, isSuper }, description, rating, isPremium, isBookmark, } = offer;
        return (React.createElement("main", { className: "page__main page__main--property" },
            React.createElement("section", { className: "property" },
                React.createElement("div", { className: "property__gallery-container container" },
                    React.createElement("div", { className: "property__gallery" }, imgDetails
                        .slice(0, MAX_COUNT_IMAGES)
                        .map((image) => (React.createElement("div", { key: image, className: "property__image-wrapper" },
                        React.createElement("img", { className: "property__image", src: image, alt: "Photo studio" })))))),
                React.createElement("div", { className: "property__container container" },
                    React.createElement("div", { className: "property__wrapper" },
                        isPremium && (React.createElement("div", { className: "property__mark" },
                            React.createElement("span", null, "Premium"))),
                        React.createElement("div", { className: "property__name-wrapper" },
                            React.createElement("h1", { className: "property__name" }, name),
                            authorizationStatus === `NO_AUTH` ?
                                (React.createElement(react_router_dom_2.Link, { to: { pathname: `/sign-in/` } },
                                    React.createElement("button", { className: `property__bookmark-button button ${isBookmark ? ACTIVE_CLASS_NAME : ``}`, type: "button" },
                                        React.createElement("svg", { className: "place-card__bookmark-icon", width: "31", height: "33" },
                                            React.createElement("use", { xlinkHref: "#icon-bookmark" })),
                                        React.createElement("span", { className: "visually-hidden" }, "To bookmarks")))) : (React.createElement("button", { onClick: () => onFavoriteClick(id, !isBookmark), className: `property__bookmark-button button ${isBookmark ? ACTIVE_CLASS_NAME : ``}`, type: "button" },
                                React.createElement("svg", { className: "place-card__bookmark-icon", width: "31", height: "33" },
                                    React.createElement("use", { xlinkHref: "#icon-bookmark" })),
                                React.createElement("span", { className: "visually-hidden" }, "To bookmarks")))),
                        React.createElement("div", { className: "property__rating rating" },
                            React.createElement("div", { className: "property__stars rating__stars" },
                                React.createElement("span", { style: { width: utils_1.convertRatingToPercent(rating) } }),
                                React.createElement("span", { className: "visually-hidden" }, "Rating")),
                            React.createElement("span", { className: "property__rating-value rating__value" }, ratingDetails)),
                        React.createElement("ul", { className: "property__features" },
                            React.createElement("li", { className: "property__feature property__feature--entire" }, constants_1.OFFER_TYPES_DISPLAY[type]),
                            React.createElement("li", { className: "property__feature property__feature--bedrooms" },
                                roomCountDetails,
                                " Bedrooms"),
                            React.createElement("li", { className: "property__feature property__feature--adults" },
                                "Max ",
                                maxGuestsDetails,
                                " adults")),
                        React.createElement("div", { className: "property__price" },
                            React.createElement("b", { className: "property__price-value" },
                                "\u20AC",
                                price),
                            React.createElement("span", { className: "property__price-text" }, "\u00A0night")),
                        React.createElement("div", { className: "property__inside" },
                            React.createElement("h2", { className: "property__inside-title" }, "What's inside"),
                            React.createElement("ul", { className: "property__inside-list" }, featuresDetails.map((feature, index) => (React.createElement("li", { key: index, className: "property__inside-item" }, feature))))),
                        React.createElement("div", { className: "property__host" },
                            React.createElement("h2", { className: "property__host-title" }, "Meet the host"),
                            React.createElement("div", { className: "property__host-user user" },
                                React.createElement("div", { className: `property__avatar-wrapper user__avatar-wrapper ${isSuper ? `property__avatar-wrapper--pro` : ``}` },
                                    React.createElement("img", { className: "property__avatar user__avatar", src: photo, width: "74", height: "74", alt: "Host avatar" })),
                                React.createElement("span", { className: "property__user-name" }, hostName)),
                            React.createElement("div", { className: "property__description" },
                                React.createElement("p", { className: "property__text" }, description),
                                React.createElement("p", { className: "property__text" }, description))),
                        React.createElement(reviews_list_1.default, null))),
                React.createElement("section", { className: "property__map map", style: { display: `flex` } },
                    React.createElement(map_1.default, { activeOffer: offer.id }))),
            React.createElement("div", { className: "container" },
                React.createElement("section", { className: "near-places places" },
                    React.createElement("h2", { className: "near-places__title" }, "Other places in the neighbourhood"),
                    React.createElement("div", { className: "near-places__list places__list" }, offers.map((itemOffer, index) => (React.createElement(offer_card_1.default, Object.assign({ key: index }, itemOffer, { onMouseEnter: onMouseEnter })))))))));
    }
}
exports.OfferDetails = OfferDetails;
// OfferDetails.propTypes = offerDetailsType;
const mapStateToProps = (state, { match }) => {
    const offerId = Number(match.params.id);
    const offer = state.data.allOffers
        .find(({ id }) => id === offerId);
    const offers = state.data.allOffers
        .filter(({ location }) => offer
        ? location.city === offer.location.city
        : location.city === state.data.currentLocation.city)
        .slice(0, MAX_OFFERS_NEARBY_COUNT);
    return {
        offers,
        offer,
        authorizationStatus: state.user.authorizationStatus,
    };
};
const mapDispatchToProps = (dispatch, { match }) => ({
    onDidMount: () => dispatch(reviews_1.ActionCreator.getReviews(match.params.id)),
    onFavoriteClick: (id, isBookmark) => {
        dispatch(data_1.ActionCreator.changeStatusFavorites(id, isBookmark));
    }
});
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(OfferDetails));
//# sourceMappingURL=offer-details.js.map