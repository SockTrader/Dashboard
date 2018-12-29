import {createAction} from 'redux-starter-kit';

export const START_TRADING = createAction('START_TRADING');
export const CONN_CONNECTING = createAction('CONN_CONNECTING');
export const CONN_OPEN = createAction('CONN_OPEN');
export const CONN_CLOSE = createAction('CONN_CLOSE');
export const CANDLE_UPDATE = createAction('CANDLE_UPDATE');

export const startTrading = () => (dispatch, getState, {emit}) => {
  dispatch(START_TRADING);
  emit(START_TRADING);
};
