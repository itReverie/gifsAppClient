import * as types from '../actions/actionTypes';
import initialState from './initialState';

//NOTE:Some of the operations could be done in one step or with immutable but considering the simplicity of this project there is no need to complicate.
export default function favoriteReducer(state = initialState.favorites, action) {
  switch (action.type) {
    case types.LOAD_FAVORITE_GIFS_SUCCESS:
         return   Object.assign({},state);
    case types.ADD_FAVORITE_GIF:
          const gifId=action.favoriteGif.gif.id;
          const isfavorite=action.favoriteGif.isFavorite;
          const currentGif= action.favoriteGif.gif;
          const updateGif = (currentGif) => Object.assign({}, 
                                                          currentGif, 
                                                          {isFavorite:isfavorite});
          return {...state, [gifId] : updateGif(currentGif) };
    case types.REMOVE_FAVORITE_GIF:
          const gifIdToRemove=action.favoriteGif.gif.id; 
         
          return Object.keys(state)
                       .filter(key => key !== gifIdToRemove)
                       .reduce((result, current) => {
                              result[current] = state[current];
                              return result;}, {});
    default:
          return state;
  }
}
