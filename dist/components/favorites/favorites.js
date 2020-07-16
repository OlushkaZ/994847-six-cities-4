"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = void 0;
const React = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const favorites_1 = require("../../reducer/favorites/favorites");
const utils_1 = require("../../utils");
// import {favoritesTypes} from '../../types/favorites-types';
const no_favorites_1 = require("../no-favorites/no-favorites");
class Favorites extends React.PureComponent {
    componentDidMount() {
        this.props.onDidMount();
    }
    render() {
        const { offers, onRemove } = this.props;
        return (React.createElement("main", { className: "page__main page__main--favorites" }, offers.length ? (React.createElement("div", { className: "page__favorites-container container" },
            React.createElement("section", { className: "favorites" },
                React.createElement("h1", { className: "favorites__title" }, "Saved listing"),
                React.createElement("ul", { className: "favorites__list" }, offers.map((offer) => offer.offers.length > 0 && (React.createElement("li", { key: offer.location.city, className: "favorites__locations-items" },
                    React.createElement("div", { className: "favorites__locations locations locations--current" },
                        React.createElement("div", { className: "locations__item" },
                            React.createElement("a", { className: "locations__item-link", href: "#" },
                                React.createElement("span", null, offer.location.city)))),
                    React.createElement("div", { className: "favorites__places" }, offer.offers.map((cityOffer) => (React.createElement("article", { key: cityOffer.id, className: "favorites__card place-card" },
                        React.createElement("div", { className: "favorites__image-wrapper place-card__image-wrapper" },
                            React.createElement(react_router_dom_1.Link, { to: { pathname: `/offer-details/${cityOffer.id}` } },
                                React.createElement("img", { className: "place-card__image", src: cityOffer.img, width: "150", height: "110", alt: "Place image" }))),
                        React.createElement("div", { className: "favorites__card-info place-card__info" },
                            React.createElement("div", { className: "place-card__price-wrapper" },
                                React.createElement("div", { className: "place-card__price" },
                                    React.createElement("b", { className: "place-card__price-value" },
                                        "\u20AC",
                                        cityOffer.price),
                                    React.createElement("span", { className: "place-card__price-text" }, "/\u00A0night")),
                                React.createElement("button", { onClick: () => onRemove(cityOffer.id), className: "place-card__bookmark-button place-card__bookmark-button--active button", type: "button" },
                                    React.createElement("svg", { className: "place-card__bookmark-icon", width: "18", height: "19" },
                                        React.createElement("use", { xlinkHref: "#icon-bookmark" })),
                                    React.createElement("span", { className: "visually-hidden" }, "In bookmarks"))),
                            React.createElement("div", { className: "place-card__rating rating" },
                                React.createElement("div", { className: "place-card__stars rating__stars" },
                                    React.createElement("span", { style: { width: utils_1.convertRatingToPercent(cityOffer.rating) } }),
                                    React.createElement("span", { className: "visually-hidden" }, "Rating"))),
                            React.createElement("h2", { className: "place-card__name" },
                                React.createElement(react_router_dom_1.Link, { to: { pathname: `/offer-details/${cityOffer.id}` } }, cityOffer.name)),
                            React.createElement("p", { className: "place-card__type" }, cityOffer.type))))))))))))) :
            React.createElement(no_favorites_1.default, null)));
    }
}
exports.Favorites = Favorites;
const mapStateToProps = (state) => ({
    offers: state.favorites.offers,
});
const mapDispatchToProps = {
    onDidMount: favorites_1.ActionCreator.loadFavoritesOffers,
    onRemove: favorites_1.ActionCreator.changeStatusFavorites,
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Favorites);
//# sourceMappingURL=favorites.js.map