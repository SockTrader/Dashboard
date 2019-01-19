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
    case "CANDLES":
      return { ...state, list: action.payload.candles.map(parseCandles).reverse(), ...state.list};

    default:
      return state;
  }
};