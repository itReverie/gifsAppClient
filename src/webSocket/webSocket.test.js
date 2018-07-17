import { init as websocketInit, emit , getMessages  }  from './';
import {webSocket} from '../config/';
//NOTE. mock-socket is being used to mock web socket
import { SocketIO as socketIO, Server } from 'mock-socket';
//NOTE. redux-mock-store is being used to mock the store
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

describe('✓ setting correctly the messages and emit to use in the socket client', ()=>{

    beforeEach(() => {
        store = mockStore();
        websocketInit( store );
      });

    it('should emit ADD_FAVORITE_GIF message for the socket client', () => {
        //Initializing 
        const favoriteGif={ gif: {[gif.id]:gif} ,isFavorite:true};
        const message= webSocket.messages.ADD_FAVORITE_GIF;

        //Expected results
        const expectedEmitAdd = [message,favoriteGif];
        const expectedActionAdd = { type: types.ADD_FAVORITE_GIF, favoriteGif };

        expect.assertions(2);
        //Testing emit SEND by mocking an action dispatch
        store.dispatch(favoriteActions.addFavorite(favoriteGif));
        expect( getMessages() ).toEqual( expectedEmitAdd );

        //Testing emit RECEIVED by mocking a server emit
        mockServer.emit(message,favoriteGif);
        expect( store.getActions()[0] ).toEqual(expectedActionAdd);
    });


    it('should emit REMOVE_FAVORITE_GIF message for the socket client', () => {
        //Initializing 
        const favoriteGif={ gif: {[gif.id]:gif} ,isFavorite:false};
        const message= webSocket.messages.REMOVE_FAVORITE_GIF;

        //Expected results
        const expectedEmitRemove = [message,favoriteGif];
        const expectedActionRemove = { type: types.REMOVE_FAVORITE_GIF, favoriteGif };

        expect.assertions(2);
        //Testing emit SEND by mocking an action dispatch
        store.dispatch(favoriteActions.addFavorite(favoriteGif));
        expect( getMessages() ).toEqual( expectedEmitRemove );

        //Testing emit RECEIVED by mocking a server emit
        mockServer.emit(message,favoriteGif);
        expect( store.getActions()[0] ).toEqual(expectedActionRemove);
    });

    it('should emit SET_FAVORITE_GIF message for the socket client', () => {
        //Initializing 
        const favoriteGif={ gif: {[gif.id]:gif} ,isFavorite:false};
        const message= webSocket.messages.SET_FAVORITE_GIF;

        //Expected results
        const expectedEmitRemove = [message,favoriteGif];
        const expectedActionRemove = { type: types.SET_FAVORITE_GIF, favoriteGif };

        expect.assertions(2);
        //Testing emit SEND by mocking an action dispatch
        store.dispatch(gifActions.setFavorite(favoriteGif));
        expect( getMessages() ).toEqual( expectedEmitRemove );

        //Testing emit RECEIVED by mocking a server emit
        mockServer.emit(message,favoriteGif);
        expect( store.getActions()[0] ).toEqual(expectedActionRemove);
    });

});