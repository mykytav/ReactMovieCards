import types from './types';

const INITIAL_STATE = {
  movies: [],
  error: null,
  isLoading: false,
  totalPages: null,
  currentPage: 1,
  genreId: null
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
        error: null,
        totalPages: action.totalPages,
        genreId: action.id
      };
    case types.FETCH_GENRE_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        movies: []
      };
    // case types.ADD_GENRE_PAGE:
    //   return {
    //     currentPage:
    //       state.currentPage >= state.totalPages
    //         ? state.currentPage
    //         : state.currentPage++
    //   };
    // case types.SUBSTRACT_GENRE_PAGE:
    //   return {
    //     currentPage:
    //       state.currentPage === 1 ? state.currentPage : state.currentPage--
    //   };
    // case types.RESET_GENRE_PAGE:
    //   return {
    //     currentPage: 1
    //   };
    default:
      return state;
  }
};

export default genreReducer;
