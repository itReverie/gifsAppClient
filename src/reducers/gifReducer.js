import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gifReducer(state = initialState.gifs, action) {
  switch (action.type) {

    case types.LOAD_GIFS_SUCCESS:
         return  action.gifs;
    case types.SET_FAVORITE_GIF:
             const gifId=action.favoriteGif.gif.id;
             const isfavorite=action.favoriteGif.isFavorite;
             const currentGif= action.favoriteGif.gif;
             const updateGif = (currentGif) => Object.assign({}, 
                                                             currentGif, 
                                                             {isFavorite:isfavorite});
      return {...state, [gifId] : updateGif(currentGif) };
    default:
      return state;

  }
}
