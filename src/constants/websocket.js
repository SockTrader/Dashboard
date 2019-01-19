import {CONN_CLOSE, CONN_CONNECTING, CONN_OPEN, START_TRADING} from '../actions/websocket';

export const messageTypes = [
  CONN_OPEN,
  CONN_CLOSE,
  CONN_CONNECTING,
  "CANDLES",
  "REPORT",
  START_TRADING,
];