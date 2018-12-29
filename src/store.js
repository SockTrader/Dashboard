import {configureStore} from 'redux-starter-kit';
import candles from './reducers/candles';
import websocket from './reducers/websocket';
import thunk from 'redux-thunk';
import {emit, bindSocketToStore} from './services/websocket';

const store = configureStore({

  // A single reducer function that will be used as the root reducer,
  // or an object of slice reducers that will be passed to combineReducers()
  reducer: {
    candles,
    websocket
  },

  // An array of Redux middlewares.  If not supplied, defaults to just redux-thunk.
  middleware: [thunk.withExtraArgument({emit})],

  // Built-in support for devtools. Defaults to true.
  devTools: true,

  // Same as current createStore.
  // preloadedState : State,

  // Same as current createStore.
  // enhancer : ReduxStoreEnhancer,
});

bindSocketToStore(store)();

export default store;