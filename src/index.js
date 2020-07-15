import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';

import reducer from './reducer/combine-reducer';
import App from './components/app/app';
import {ActionCreator} from './reducer/data/data';
import {ActionCreator as UserActionCreator} from './reducer/user/user';
import {api} from './api';

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
api.interceptors.response.use(
    (response) => response,
    (err) => {
      const {response} = err;

      if (response.status === 401) {
        store.dispatch(UserActionCreator.changeAuthStatus(`NO_AUTH`));
      }

      throw err;
    }
);

ReactDOM.render(
    <Provider store={store}>
      <App
        rentalOffersCount={RENTAL_OFFERS_COUNT}
        onHeaderClick={handleHeaderClick}
      />
    </Provider>,
    document.querySelector(`#root`)
);
