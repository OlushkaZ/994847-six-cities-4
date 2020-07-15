import {combineReducers} from 'redux';

import {dataReducer} from './data';
import {uiReducer} from './ui';
import {userReducer} from './user';
import {reviewsReducer} from './reviews';
import {favoritesReducer} from './favorites';

export default combineReducers({
  data: dataReducer,
  ui: uiReducer,
  user: userReducer,
  reviews: reviewsReducer,
  favorites: favoritesReducer
});
