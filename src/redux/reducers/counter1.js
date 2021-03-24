//redux/reducers/counter1.js

import { ADD, SUB, ADD_NUMBER } from '../actions/actionTypes';

const initialState = {
  counter: 100,
};

export default function counter1(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        counter: state.counter + 1,
      };
    case SUB:
      return {
        counter: state.counter - 1,
      };
    case ADD_NUMBER:
      return {
        counter: state.counter + action.payload,
      };
    default:
      return {
        counter: state.counter,
      };
  }
}