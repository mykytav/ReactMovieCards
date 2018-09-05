import types from './types';

const INITIAL_STATE = {
  movie: {},
  error: null,
  isLoading: false
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        movie: action.payload
      };
    case types.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        movie: {},
        error: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
