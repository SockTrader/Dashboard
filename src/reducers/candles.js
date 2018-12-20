import {createReducer} from 'redux-starter-kit';
import {ADD_TODO, TOGGLE_TODO} from '../actions/candles';

export default createReducer([], {
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