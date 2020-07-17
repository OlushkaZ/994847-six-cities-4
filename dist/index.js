"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const redux_thunk_1 = require("redux-thunk");
const combine_reducer_1 = require("./reducer/combine-reducer");
const app_1 = require("./components/app/app");
const data_1 = require("./reducer/data/data");
const user_1 = require("./reducer/user/user");
const api_1 = require("./api");
const RENTAL_OFFERS_COUNT = 4;
const handleHeaderClick = () => { };
const store = redux_1.createStore(combine_reducer_1.default, redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default), window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f));
store.dispatch(data_1.ActionCreator.loadOffers());
store.dispatch(user_1.ActionCreator.checkAuthorization());
api_1.api.interceptors.response.use((response) => response, (err) => {
    const { response } = err;
    if (response.status === 401) {
        store.dispatch(user_1.ActionCreator.changeAuthStatus(`NO_AUTH`));
    }
    throw err;
});
react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
    react_1.default.createElement(app_1.default, { rentalOffersCount: RENTAL_OFFERS_COUNT, onHeaderClick: handleHeaderClick })), document.querySelector(`#root`));
//# sourceMappingURL=index.js.map