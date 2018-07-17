import {combineReducers} from 'redux';

import gifs from './gifReducer';
import favorites from './favoriteReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  gifs,
  favorites,
  error
});



export default rootReducer;
