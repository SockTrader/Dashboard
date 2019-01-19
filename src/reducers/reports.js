import moment from 'moment';

const parseOrder = (d)  => ({
    ...d,
    createdAt: moment(d.createdAt).toDate(),
});
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type.toString()) {
    case 'REPORT':
      return [...state, parseOrder(action.payload)];
    default:
      return state;
  }
};