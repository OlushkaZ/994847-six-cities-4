import {combineReducers} from 'redux';

import {dataReducer} from './data';
import {uiReducer} from './ui';
import {userReducer} from './user';

export default combineReducers({
  data: dataReducer,
  ui: uiReducer,
  user: userReducer
});
