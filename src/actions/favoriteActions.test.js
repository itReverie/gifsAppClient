import * as favoriteActions from './favoriteActions';
import * as types from "./actionTypes";
import initialState from '../reducers/initialState';
import gif from '../mocks/gif';
import thunk from 'redux-thunk';
//NOTE. redux-mock-store is being used to mock the store
import configureMockStore from 'redux-mock-store';
import { init as websocketInit, emit , getMessages  }  from '../webSocket/';
import {webSocket} from '../config/';

//STORE
const middleware = [thunk.withExtraArgument({ emit })];
const mockStore = configureMockStore(middleware);
let store;

describe('✓ loading favorite gifs action', ()=>{
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

describe("✓ adding and removing a favorite gif action",  () => {

    beforeEach(() => {
        store = mockStore();
        websocketInit( store );
      });

    it("should dispatch and emit ADD_FAVORITE_GIF when isFavorite=true ", () => {
        //Initializing 
        const favoriteGif={ gif: {[gif.id]:gif} ,isFavorite:true};
        const message= webSocket.messages.ADD_FAVORITE_GIF;

        //Expected results
        const expectedEmitAdd = [message,favoriteGif];
        const expectedActionAdd = { type: types.ADD_FAVORITE_GIF, favoriteGif };

        //Action
        store.dispatch(favoriteActions.addFavorite(favoriteGif))
        const actions = store.getActions();

        //Asserts
        expect.assertions(4);
        expect( getMessages() ).toEqual( expectedEmitAdd );
        expect(actions.length).toEqual(1);
        expect(actions[0].type).toEqual(types.ADD_FAVORITE_GIF);
        expect(actions[0]).toEqual(expectedActionAdd);

    });

    it("should dispatch and emit REMOVE_FAVORITE_GIF when isFavorite=false ", () => {
        //Initializing
        const favoriteGif={ gif: {[gif.id]:gif} ,isFavorite:false};
        const message= webSocket.messages.REMOVE_FAVORITE_GIF;

        //Expected results
        const expectedEmitAdd = [message,favoriteGif];
        const expectedActionRemove = { type: types.REMOVE_FAVORITE_GIF, favoriteGif};

        //Action
        store.dispatch(favoriteActions.addFavorite(favoriteGif))
        const actions = store.getActions();

        //Asserts
        expect.assertions(4);
        expect( getMessages() ).toEqual( expectedEmitAdd );
        expect(actions.length).toEqual(1);
        expect(actions[0].type).toEqual(types.REMOVE_FAVORITE_GIF);
        expect(actions[0]).toEqual(expectedActionRemove);
    });

});