import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function errorReducer(state = initialState.error, action)
{
  switch (action.type) {
    case types.LOAD_GIFS_ERROR: {
      return Object.assign({},action.error);
    }
    default:
      return state;
  }
}
