import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from "react-redux";

import reducer from '../../reducer/combine-reducer';
import {Favorites} from './favorites';

const store = createStore(reducer);


it(`Should Favorites render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Favorites
            offers={[]}
            onRemove={jest.fn()}
            onDidMount={jest.fn()}
            onChangeLocation={jest.fn()}
          />
        </Provider>
      </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
