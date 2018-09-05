import types from './types';

const INITIAL_STATE = {
  movies: [],
  error: null,
  isLoading: false,
  totalPages: null
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
        totalPages: action.totalPages
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
    // case types.CLEAR_POPULAR_MOVIES:
    //   return {
    //     ...state,
    //     movies: [],
    //     isLoading: false,
    //     error: null
    //   };
    // case types.ADD_PAGE:
    //   return {
    //     ...state,
    //     page: action.payload++
    //   };
    // case types.SUBSTRACT_PAGE:
    //   return {
    //     ...state,
    //     page: state.page === 1 ? 1 : action.payload--
    //   };
    default:
      return state;
  }
};

export default homeReducer;
