import moment from 'moment';

function parseCandles(d) {
  return {
    date: moment(d.timestamp).toDate(),
    open: d.open,
    high: d.high,
    low: d.low,
    close: d.close,
    volume: d.volume,
  };
}

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type.toString()) {
    case "CANDLE_UPDATE":
      const candles = action.payload;
      return { ...state, list: [...state.list, parseCandles(candles[0])]};
      // return { ...state, list: candles.map(r => parseCandles(r)).reverse() };
    default:
      return state;
  }
};