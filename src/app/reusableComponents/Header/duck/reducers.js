import types from './types';

const INITIAL_STATE = {
  query: ''
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_VALUE_FROM_INPUT:
      return {
        ...state,
        query: action.payload
      };
    default:
      return state;
  }
};

export default headerReducer;
