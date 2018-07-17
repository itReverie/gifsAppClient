import * as favoriteActions from './favoriteActions';
import * as types from "./actionTypes";
import initialState from '../reducers/initialState';
import gif from '../mocks/gif';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('✓ load favorite gifs action', ()=>{
    const expectedAction = { type: types.LOAD_FAVORITE_GIFS_SUCCESS};

    it('should dispatch LOAD_FAVORITE_GIFS_SUCCESS', ()=>{
        const store = mockStore(initialState.favorites, expectedAction);

        store.dispatch(favoriteActions.loadFavoriteGifs())
        const actions = store.getActions();
  
        expect.assertions(3);
        expect(actions.length).toEqual(1);
        expect(actions[0].type).toEqual(types.LOAD_FAVORITE_GIFS_SUCCESS);
        expect(actions[0]).toEqual(expectedAction);

    })
})

describe("✓ setting a favorite gif action",  () => {
    it(" when isFavorite=true should dispatch SET_FAVORITE_GIF and ADD_FAVORITE_GIF ", () => {

        const favoriteGif={ gif: {[gif.id]:gif} ,isFavorite:true};

        const expectedActionAdd = { type: types.ADD_FAVORITE_GIF, 
                                    gif: {[gif.id]:gif} };

        const store = mockStore(initialState.favorites,{...expectedActionAdd,...expectedActionSetFavorite});
        store.dispatch(favoriteActions.addFavorite(favoriteGif))
        const actions = store.getActions();

        expect.assertions(3);
        expect(actions.length).toEqual(2);
        expect(actions[0].type).toEqual(types.ADD_FAVORITE_GIF);
        expect(actions[0]).toEqual(expectedActionAdd);

    });
    it(" when isFavorite=false should dispatch SET_FAVORITE_GIF and REMOVE_FAVORITE_GIF ", () => {

        const favoriteGif={ gif: {[gif.id]:gif} ,isFavorite:false};

        const expectedActionRemove = { type: types.REMOVE_FAVORITE_GIF, 
                                       gifId: gif.id };
        const expectedActionSetFavorite = { type: types.SET_FAVORITE_GIF, 
                                            favoriteGif: favoriteGif};

        const store = mockStore(initialState.favorites,{...expectedActionRemove,...expectedActionSetFavorite});
        store.dispatch(favoriteActions.setFavorite(favoriteGif))
        const actions = store.getActions();

        expect.assertions(4);
        expect(actions.length).toEqual(2);
        expect(actions[0].type).toEqual(types.SET_FAVORITE_GIF);
        expect(actions[0]).toEqual(expectedActionSetFavorite);
        expect(actions[1].type).toEqual(types.REMOVE_FAVORITE_GIF);
    });
});