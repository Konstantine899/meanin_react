//redux/reducers/counter2.js

import { ADD2 } from '../actions/actionTypes';

const initialState = {
  counter2: 200,
};

export default function counter22(state = initialState, action) {
  switch (action.type) {
    case ADD2:
      return {
        counter2: state.counter2 + action.payload,
      };
    default:
      return {
        counter2: state.counter2,
      };
  }
}
