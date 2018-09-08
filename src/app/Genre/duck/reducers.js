import types from './types';

const INITIAL_STATE = {
  movies: [],
  error: null,
  isLoading: false
};

const genreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_GENRE_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCH_GENRE_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...action.payload],
        isLoading: false,
        error: null
      };
    case types.FETCH_GENRE_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        movies: []
      };
    default:
      return state;
  }
};

export default genreReducer;
