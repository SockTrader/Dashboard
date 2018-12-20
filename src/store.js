import {configureStore, getDefaultMiddleware} from 'redux-starter-kit';
import candles from './reducers/candles';

export default configureStore({

  // A single reducer function that will be used as the root reducer,
  // or an object of slice reducers that will be passed to combineReducers()
  reducer: {
    candles
  },

  // An array of Redux middlewares.  If not supplied, defaults to just redux-thunk.
  middleware: [...getDefaultMiddleware()],

  // Built-in support for devtools. Defaults to true.
  devTools: true,

  // Same as current createStore.
  // preloadedState : State,

  // Same as current createStore.
  // enhancer : ReduxStoreEnhancer,
});