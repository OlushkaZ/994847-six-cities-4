import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';

import reducer from './reducer/combine-reducer';
import App from './components/app/app';
import {ActionCreator} from './reducer/data/data';
import {ActionCreator as UserActionCreator} from './reducer/user/user';
import {api} from './api';

const UNAUTHORIZED = 401;

const store = createStore(reducer,
    compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__
          ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
          : (f) => f
    )
);

store.dispatch(ActionCreator.loadOffers());
store.dispatch(UserActionCreator.checkAuthorization());
api.interceptors.response.use(
    (response) => response,
    (err) => {
      const {response} = err;

      if (response.status === UNAUTHORIZED) {
        store.dispatch(UserActionCreator.changeAuthStatus(`NO_AUTH`));
      }

      throw err;
    }
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
