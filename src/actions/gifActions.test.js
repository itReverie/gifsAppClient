import * as gifActions from './gifActions';
import * as types from "./actionTypes";
import initialState from '../reducers/initialState';
import errors from '../utils/errors';
import thunk from 'redux-thunk';
//NOTE. redux-mock-store is being used to mock the store
import configureMockStore from 'redux-mock-store';
import { init as websocketInit, emit , getMessages  }  from '../webSocket/';
import {webSocket} from '../config/';
import gif from '../mocks/gif';
import apiResponse from '../mocks/gifApiResponse';
import apiResponseWithNoResults from '../mocks/gifApiResponseWithNoResuts';
//NOTE. jest-fetch-mock is being used to mock fetch and avoid calls to the API for testing purposes.
fetch = require('jest-fetch-mock');

//STORE
const middleware = [thunk.withExtraArgument({ emit })];
const mockStore = configureMockStore(middleware);
let store;

describe("✓ loading gifs action",  () => {

      const expectedAction = { type: types.LOAD_GIFS_SUCCESS, gifs :{ } };

      beforeEach(() => {
        fetch.resetMocks()
      })

      it("should dispatch LOAD_GIFS_SUCCESS and the default number of gifs object (100)", (done) => {
          const store = mockStore({gifs: initialState.gifs}, expectedAction, done);

          store.dispatch(gifActions.loadGifs('smile'))
          .then(() => {
            const actions = store.getActions();
            expect(actions.length).toEqual(1);
            expect(actions[0].type).toEqual(types.LOAD_GIFS_SUCCESS);
            expect(Object.keys(actions[0].gifs).length).toEqual(100);
            expect(actions).toEqual(expectedAction);

            expect.assertions(4);
            done();
          })
          .catch(error => {
            done();
          });;

      });

      it("should dispatch LOAD_GIFS_SUCCESS and specific number of gif objects", (done) => {
          fetch.mockResponseOnce(JSON.stringify(apiResponse))

          const store = mockStore({gifs: initialState.gifs}, expectedAction, done);

          store.dispatch(gifActions.loadGifs('smile',25,0))
          .then(() => {
              expect.assertions(4)
              const actions = store.getActions();
              expect(actions.length).toEqual(1);
              expect(actions[0].type).toEqual(types.LOAD_GIFS_SUCCESS);
              expect(Object.keys(actions[0].gifs).length).toEqual(25);
              expect(actions).toEqual(expectedAction);
              done();
          })
          .catch(error => {
            done();
          });;

      });
});

describe("✗ loading gifs action return errors",  () => {

      beforeEach(() => {
        fetch.resetMocks()
      })

      it("should dispatch LOAD_ERROR_GIFS for an invalid search term", (done) => {
        const expectedAction = { type: types.LOAD_GIFS_ERROR,
                                error: {message: errors.Validation.SearchTerm}};

        const store = mockStore({gifs: initialState.gifs}, expectedAction, done);

        store.dispatch(gifActions.loadGifs(''))
        .then(() => {
          const actions = store.getActions();

          expect.assertions(3);
          expect(actions.length).toEqual(1);
          expect(actions[0].type).toEqual(types.LOAD_GIFS_ERROR);
          expect(actions[0].error).toEqual({message: errors.Validation.SearchTerm});
          done();
        })
        .catch(error => {
          done();
        });;

      });

      it("should dispatch LOAD_ERROR_GIFS for no results", (done) => {
        fetch.mockResponseOnce(JSON.stringify(apiResponseWithNoResults))

        const expectedAction = { type: types.LOAD_GIFS_ERROR,
                                error: {message: errors.Validation.SearchWithoutResults}};

        const store = mockStore({gifs: initialState.gifs}, expectedAction, done);

        store.dispatch(gifActions.loadGifs('hxzp'))
        .then(() => {
          const actions = store.getActions();

          expect.assertions(4);
          expect(actions.length).toEqual(1);
          expect(actions[0].type).toEqual(types.LOAD_GIFS_ERROR);
          expect(actions[0].error).toEqual({message: errors.Validation.SearchWithoutResults});
          expect(actions).toEqual(expectedAction);
          done();
        })
        .catch(error => {
          done();
        });;

      });

});

describe("✓ setting a favorite gif action",  () => {

  beforeEach(() => {
      store = mockStore();
      websocketInit( store );
    });

  it("should dispatch and emit SET_FAVORITE_GIF when isFavorite=true ", () => {
      //Initializing 
      const favoriteGif={ gif: {[gif.id]:gif} ,isFavorite:true};
      const message= webSocket.messages.SET_FAVORITE_GIF;

      //Expected results
      const expectedEmit = [message,favoriteGif];
      const expectedAction = { type: types.SET_FAVORITE_GIF, favoriteGif };

      //Action
      store.dispatch(gifActions.setFavorite(favoriteGif))
      const actions = store.getActions();

      //Asserts
      expect.assertions(4);
      expect( getMessages() ).toEqual( expectedEmit );
      expect(actions.length).toEqual(1);
      expect(actions[0].type).toEqual(types.SET_FAVORITE_GIF);
      expect(actions[0]).toEqual(expectedAction);

  });

});