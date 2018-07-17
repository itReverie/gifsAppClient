import gifReducer from './gifReducer';
import initialState from './initialState';
import * as gifActions from '../actions/gifActions';
import gifs from '../mocks/gifsNormalized';


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
});
