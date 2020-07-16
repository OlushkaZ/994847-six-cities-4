import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from "react-redux";

import reducer from '../../reducer/combine-reducer';
import {Favorites} from './favorites';

const store = createStore(reducer);


it(`Should Favorites render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Favorites offers={[]} onRemove={jest.fn()} onDidMount={jest.fn()}/>
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
