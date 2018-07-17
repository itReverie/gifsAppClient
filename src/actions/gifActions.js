import * as types from './actionTypes';
import giphyApi from '../api/giphyApi';
import {webSocket} from '../config/';


export function loadGifs(searchTerm, numberOfResults=-1,offset=0){
  return function (dispatch){
    return giphyApi.searchGiphys(searchTerm,numberOfResults,offset)
      .then(gifs => {
        dispatch(loadGifsSuccess(gifs));
      })
      .catch(error => {
        dispatch(loadError(error));
      });
  };
}

export function setFavorite(favoriteGif){
  return (dispatch, getState, {emit}) => {
      dispatch(setFavoriteGif(favoriteGif));
      emit(webSocket.actions.SET_FAVORITE_GIF, favoriteGif);
  };
}


//NOTE: This methods make easier to test reducers and clearly see the different dispachers.
export function loadGifsSuccess(gifs)
{
  return {type : types.LOAD_GIFS_SUCCESS, gifs};
}

export function loadError(error)
{
  return {type : types.LOAD_GIFS_ERROR,  error };
}

export function setFavoriteGif(favoriteGif){
  return {type : types.SET_FAVORITE_GIF, favoriteGif};
}
