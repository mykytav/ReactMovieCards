import types from './types';

const INITIAL_STATE = {
  movies: [],
  error: null,
  isLoading: false
};

const recommendedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case types.FETCH_RECOMMENDED_MOVIES_REQUEST:
    //   return {
    //     ...state,
    //     movies: [],
    //     error: null,
    //     isLoading: true
    //   };
    case types.FETCH_RECOMMENDED_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...action.payload],
        error: null,
        isLoading: false
      };
    case types.FETCH_RECOMMENDED_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default recommendedReducer;
