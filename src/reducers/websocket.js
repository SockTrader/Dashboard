import {createReducer} from 'redux-starter-kit';
import {CONN_CLOSE, CONN_CONNECTING, CONN_OPEN} from '../actions/websocket';

const state = {
  connected: false,
  connecting: false
};

export default createReducer(state, {
  [CONN_OPEN]: state => {
    state.connected = true;
    state.connecting = false;
  },
  [CONN_CONNECTING]: state => {
    state.connecting = true;
  },
  [CONN_CLOSE]: state => {
    state.connected = false;
    state.connecting = false;
  },
});