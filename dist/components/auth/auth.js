"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const authorization_types_1 = require("../../types/authorization-types");
const Auth = ({ authorizationStatus, email }) => {
    return (react_1.default.createElement("nav", { className: "header__nav" },
        react_1.default.createElement("ul", { className: "header__nav-list" },
            react_1.default.createElement("li", { className: "header__nav-item user" }, (authorizationStatus === `NO_AUTH`)
                ? (react_1.default.createElement(react_router_dom_1.Link, { to: { pathname: `/sign-in` }, className: "header__nav-link header__nav-link--profile" },
                    react_1.default.createElement("div", { className: "header__avatar-wrapper user__avatar-wrapper" }),
                    react_1.default.createElement("span", { className: "header__login" }, "Sign in")))
                : (react_1.default.createElement(react_router_dom_1.Link, { className: "header__nav-link header__nav-link--profile", to: { pathname: `/favorites` } },
                    react_1.default.createElement("div", { className: "header__avatar-wrapper user__avatar-wrapper" }),
                    react_1.default.createElement("span", { className: "header__user-name user__name" }, email)))))));
};
exports.Auth = Auth;
const mapStateToProps = (state) => ({
    authorizationStatus: state.user.authorizationStatus,
    email: state.user.email,
});
Auth.propTypes = authorization_types_1.authorizationTypes;
exports.default = react_redux_1.connect(mapStateToProps)(Auth);
//# sourceMappingURL=auth.js.map