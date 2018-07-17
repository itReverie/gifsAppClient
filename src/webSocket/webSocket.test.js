import { init as websocketInit, emit , getMessages  }  from './';
import {webSocket} from '../config/';
import { SocketIO as socketIO, Server } from 'mock-socket';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as favoriteActions from '../actions/favoriteActions';
import * as gifActions from '../actions/gifActions';
import * as types from "../actions/actionTypes";
import gif from '../mocks/gif';


//STORE
const middleware = [thunk.withExtraArgument({ emit })];
const mockStore = configureMockStore(middleware);
let store;

//SERVER
const mockServer = new Server( webSocket.server);
window.io = socketIO;

describe('setting correctly the messages and emit to use in the socket client', ()=>{

    beforeEach(() => {
        store = mockStore();
        websocketInit( store );
      });

    it('emitting ADD_FAVORITE_GIF message for the socket client', () => {
        expect.assertions(2);

        //Initializing 
        const favoriteGif={ gif: {[gif.id]:gif} ,isFavorite:true};
        const message= webSocket.messages.ADD_FAVORITE_GIF;

        //Expected results
        const expectedEmitAdd = [message,favoriteGif];
        const expectedActionAdd = { type: types.ADD_FAVORITE_GIF, favoriteGif };

        //Testing emit SEND by mocking an action dispatch
        store.dispatch(favoriteActions.addFavorite(favoriteGif));
        expect( getMessages() ).toEqual( expectedEmitAdd );

        //Testing emit RECEIVED by mocking a server emit
        mockServer.emit(message,favoriteGif);
        expect( store.getActions()[0] ).toEqual(expectedActionAdd);
    });


    it('emitting REMOVE_FAVORITE_GIF message for the socket client', () => {
        expect.assertions(2);

        //Initializing 
        const favoriteGif={ gif: {[gif.id]:gif} ,isFavorite:false};
        const message= webSocket.messages.REMOVE_FAVORITE_GIF;

        //Expected results
        const expectedEmitRemove = [message,favoriteGif];
        const expectedActionRemove = { type: types.REMOVE_FAVORITE_GIF, favoriteGif };

        //Testing emit SEND by mocking an action dispatch
        store.dispatch(favoriteActions.addFavorite(favoriteGif));
        expect( getMessages() ).toEqual( expectedEmitRemove );

        //Testing emit RECEIVED by mocking a server emit
        mockServer.emit(message,favoriteGif);
        expect( store.getActions()[0] ).toEqual(expectedActionRemove);
    });

    it('emitting SET_FAVORITE_GIF message for the socket client', () => {
        expect.assertions(2);

        //Initializing 
        const favoriteGif={ gif: {[gif.id]:gif} ,isFavorite:false};
        const message= webSocket.messages.SET_FAVORITE_GIF;

        //Expected results
        const expectedEmitRemove = [message,favoriteGif];
        const expectedActionRemove = { type: types.SET_FAVORITE_GIF, favoriteGif };

        //Testing emit SEND by mocking an action dispatch
        store.dispatch(gifActions.setFavorite(favoriteGif));
        expect( getMessages() ).toEqual( expectedEmitRemove );

        //Testing emit RECEIVED by mocking a server emit
        mockServer.emit(message,favoriteGif);
        expect( store.getActions()[0] ).toEqual(expectedActionRemove);
    });

});