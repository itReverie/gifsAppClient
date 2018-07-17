import * as types from './actionTypes';
import {messageTypes} from '../config/webSocket';


  export function loadFavoriteGifs(){
      return function (dispatch){
          dispatch(loadFavoritesSuccess());
      };
  }

  export function addFavorite(favoriteGif){
    return (dispatch, getState, {emit}) => {
      if(favoriteGif.isFavorite){
        dispatch(addFavoriteGif(favoriteGif));
        emit(messageTypes.ADD_FAVORITE_GIF, favoriteGif)
      }
      else{
        dispatch(removeFavoriteGif(favoriteGif));
        emit(messageTypes.REMOVE_FAVORITE_GIF, favoriteGif);
      }
    };
  }

  //NOTE: This methods make easier to test reducers and clearly see the different dispachers.
  export function loadFavoritesSuccess(){
    return {type : types.LOAD_FAVORITE_GIFS_SUCCESS};
  }

  export function addFavoriteGif(favoriteGif){
    return {type : types.ADD_FAVORITE_GIF, favoriteGif};
  }

  export function removeFavoriteGif(favoriteGif){
    return {type : types.REMOVE_FAVORITE_GIF, favoriteGif};
  }
