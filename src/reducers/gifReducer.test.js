import gifReducer from './gifReducer';
import initialState from './initialState';
import * as gifActions from '../actions/gifActions';
import gifs from '../mocks/gifsNormalized';
import gif from '../mocks/gif';

describe('calling gif reducer', () => {
  it('should load gifs LOAD_GIFS_SUCCESS', () => {
    const action = gifActions.loadGifsSuccess(gifs);

    const newState = gifReducer(initialState.gifs, action);

    const result=Object.values(newState);

    expect.assertions(5);
    expect(result.length).toEqual(2);
    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('preview');
    expect(result[0].preview).toHaveProperty('url');
    expect(result[0]).toHaveProperty('isFavorite');

  });

  it('should set isFavorite to true SET_FAVORITE_GIF', ()=>{
    const favoriteGif={gif,isFavorite:true};
    const action = gifActions.setFavoriteGif(favoriteGif);
    const newState = gifReducer(gifs, action);

    expect.assertions(1);
    expect(newState[gif.id].isFavorite).toBeTruthy();
  })

  it('should set isFavorite to false SET_FAVORITE_GIF', ()=>{
    const favoriteGif={gif,isFavorite:false};
    const action = gifActions.setFavoriteGif(favoriteGif);
    const newState = gifReducer(gifs, action);

    expect.assertions(1);
    expect(newState[gif.id].isFavorite).toBeFalsy();
  })
});
