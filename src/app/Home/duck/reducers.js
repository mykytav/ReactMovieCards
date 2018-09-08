import types from './types';

const INITIAL_STATE = {
  movies: [],
  error: null,
  isLoading: false,
  totalPages: null,
  currentPage: 1
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        movies: [],
        error: null,
        isLoading: true
      };
    case types.FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...action.payload],
        error: null,
        isLoading: false,
        totalPages: action.totalPages,
        currentPage: action.currentPage
      };
    case types.FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
        error: action.payload,
        isLoading: false
      };
    case types.FETCH_SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case types.FETCH_SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        error: null,
        isLoading: false,
        totalPages: action.totalPages
      };
    case types.FETCH_SEARCH_MOVIES_FAILURE:
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

export default homeReducer;
