import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';

import reducer from './reducer/combine-reducer';
import App from './components/app/app';
import {ActionCreator} from './reducer/data/data';
import {ActionCreator as UserActionCreator} from './reducer/user/user';

const RENTAL_OFFERS_COUNT = 4;

const handleHeaderClick = () => {};


const store = createStore(reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (f) => f
    )
);

store.dispatch(ActionCreator.loadOffers());
store.dispatch(UserActionCreator.checkAuthorization());

ReactDOM.render(
    <Provider store={store}>
      <App
        rentalOffersCount={RENTAL_OFFERS_COUNT}
        onHeaderClick={handleHeaderClick}
      />
    </Provider>,
    document.querySelector(`#root`)
);
