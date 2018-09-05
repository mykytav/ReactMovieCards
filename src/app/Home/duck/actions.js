import types from './types';

// const fetchPopularMoviesRequest = () => ({
//   type: types.FETCH_POPULAR_MOVIES_REQUEST
// });

const fetchPopularMoviesSuccess = (json, totalPages) => ({
  type: types.FETCH_POPULAR_MOVIES_SUCCESS,
  payload: json,
  totalPages
});

const fetchPopularMoviesFailure = error => ({
  type: types.FETCH_POPULAR_MOVIES_FAILURE,
  payload: error
});

// const fetchSearchMoviesRequest = () => ({
//   type: types.FETCH_SEARCH_MOVIES_REQUEST
// });

const fetchSearchMoviesSuccess = (json, totalPages) => ({
  type: types.FETCH_SEARCH_MOVIES_SUCCESS,
  payload: json,
  totalPages
});

const fetchSearchMoviesFailure = error => ({
  type: types.FETCH_SEARCH_MOVIES_FAILURE,
  payload: error
});

// const clearPopularMovies = () => ({
//   type: types.CLEAR_POPULAR_MOVIES
// });

// const addPage = page => ({
//   type: types.ADD_PAGE,
//   payload: page
// });

// const substractPage = page => ({
//   type: types.SUBSTRACT_PAGE,
//   payload: page
// });

export default {
  // fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
  // fetchSearchMoviesRequest,
  fetchSearchMoviesSuccess,
  fetchSearchMoviesFailure
  // clearPopularMovies,
  // addPage,
  // substractPage
};
