import {createStore,compose, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { init as websocketInit, emit } from '../webSocket/';

//Persisting the state in local storage
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer );

function configureStoreDev (initialState)
{
  const middlewares = [
  reduxImmutableStateInvariant(),
  thunk.withExtraArgument({ emit })
  ];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore( persistedReducer, 
                            initialState,
                            composeEnhancers(applyMiddleware(...middlewares)));
  
  websocketInit(store);
  const persistor = persistStore(store)

  return { store, persistor };
}

function configureStoreProd(initialState) {
  const middlewares = [
    thunk.withExtraArgument({ emit }),
  ];

  const store = createStore(persistedReducer, 
                            initialState, 
                            compose(applyMiddleware(...middlewares)));

  websocketInit(store);
  const persistor = persistStore(store)

  return { store, persistor };
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd 
                                                             : configureStoreDev;

export default configureStore;
