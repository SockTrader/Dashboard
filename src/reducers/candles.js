import {createReducer} from 'redux-starter-kit';
import {ADD_TODO, TOGGLE_TODO} from '../actions/candles';
import * as candles from './candles.json';

import { timeParse } from "d3-time-format";

function parseData(parse) {
  return function(d) {
    d.date = parse(d.date);
    d.open = +d.open;
    d.high = +d.high;
    d.low = +d.low;
    d.close = +d.close;
    d.volume = +d.volume;

    return d;
  };
}

const parseDate = timeParse("%Y-%m-%d");
const defaultData = candles.default.map(r => parseData(parseDate)(r));

export default createReducer(defaultData, {
  [ADD_TODO]: (state, action) => {
    const {newTodo} = action.payload;

    // Can safely call state.push() here
    state.push({...newTodo, completed: false});
  },
  [TOGGLE_TODO]: (state, action) => {
    const {index} = action.payload;

    const todo = state[index];
    // Can directly modify the todo object
    todo.completed = !todo.completed;
  },
})
;