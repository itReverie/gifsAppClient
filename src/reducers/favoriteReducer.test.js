import favoriteReducer from './favoriteReducer';
import initialState from './initialState';
import * as favoriteActions from '../actions/favoriteActions';
import gif from '../mocks/gif';
import gifs from '../mocks/gifsNormalized';

describe('calling favorite reducer', () => {
  it('should load favorite gifs LOAD_FAVORITE_GIFS_SUCCESS', () => {
    const action = favoriteActions.loadFavoritesSuccess();

    const newState = favoriteReducer(gifs, action);

    const result=Object.keys(newState);

    expect.assertions(2);
    expect(result.length).toEqual(2);
    expect(result[0]).toEqual('B0vFTrb0ZGDf2');
  });

  it('should add a gif object to the favorites ADD_FAVORITE_GIF', ()=>{
    const favoriteGif={gif,isFavorite:true};
    const action = favoriteActions.addFavoriteGif(favoriteGif);
    const newState = favoriteReducer(initialState.favorites, action);

    const result=Object.values(newState);

    expect.assertions(5);
    expect(result.length).toEqual(1);
    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('preview');
    expect(result[0].preview).toHaveProperty('url');
    expect(result[0]).toHaveProperty('isFavorite');

  })

  it('should remove a gif object to the favorites REMOVE_FAVORITE_GIF', ()=>{
    const favoriteGif={gif,isFavorite:false};
    const action = favoriteActions.removeFavoriteGif(favoriteGif);
    const newState = favoriteReducer(gifs, action);

    const result=Object.keys(newState);
    const hasGiphy=result.filter(key => key === gif.id);

    expect.assertions(2);
    expect(result.length).toEqual(1);
    expect(hasGiphy.length).toEqual(0);
  })
});
