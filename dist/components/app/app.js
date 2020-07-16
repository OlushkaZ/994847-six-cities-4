"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
// import {appTypes} from '../../types/rental-offers-types';
const main_1 = require("../main/main");
const offer_details_1 = require("../offer-details/offer-details");
const sign_in_1 = require("../sign-in/sign-in");
const favorites_1 = require("../favorites/favorites");
;
class App extends React.PureComponent {
    render() {
        const { authorizationStatus } = this.props;
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                    React.createElement(main_1.default, null)),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/offer-details/:id" },
                    React.createElement(offer_details_1.default, null)),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/sign-in" },
                    authorizationStatus === `AUTH` && React.createElement(react_router_dom_1.Redirect, { to: "/" }),
                    React.createElement(sign_in_1.default, null)),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/favorites" },
                    authorizationStatus !== `AUTH` && React.createElement(react_router_dom_1.Redirect, { to: "/sign-in" }),
                    React.createElement(favorites_1.default, null)))));
    }
}
exports.App = App;
// App.propTypes = appTypes;
const mapStateToProps = (state) => ({
    authorizationStatus: state.user.authorizationStatus,
});
exports.default = react_redux_1.connect(mapStateToProps)(App);
//# sourceMappingURL=app.js.map