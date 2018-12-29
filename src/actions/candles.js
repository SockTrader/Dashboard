import { createAction } from 'redux-starter-kit'

export const START_TRADING = createAction('START_TRADING');
export const CANDLE_UPDATE = createAction('CANDLE_UPDATE');

export const startTrading = () => (dispatch, getState, {emit}) => {
  dispatch(START_TRADING);
  emit(START_TRADING);
};
