import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';

import {REVIEWS} from './mocks/reviews';
import App from './components/app/app.jsx';
import {dataReducer, ActionCreator} from './reducer/data/data';
import {uiReducer} from './reducer/ui/ui';
import {userReducer} from './reducer/user/user';

const RENTAL_OFFERS_COUNT = 4;

const handleHeaderClick = () => {};


const store = createStore(
    combineReducers({
      data: dataReducer,
      ui: uiReducer,
      user: userReducer,
    }),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (f) => f
    )
);

store.dispatch(ActionCreator.loadOffers());

ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={REVIEWS}
        rentalOffersCount={RENTAL_OFFERS_COUNT}
        onHeaderClick={handleHeaderClick}
      />
    </Provider>,
    document.querySelector(`#root`)
);
