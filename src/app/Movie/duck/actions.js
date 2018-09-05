import types from './types';

const fetchMovieRequest = id => ({
  type: types.FETCH_MOVIE_REQUEST,
  payload: id
});

const fetchMovieSuccess = json => ({
  type: types.FETCH_MOVIE_SUCCESS,
  payload: json
});

const fetchMovieFailure = error => ({
  type: types.FETCH_MOVIE_FAILURE,
  payload: error
});

export default {
  fetchMovieRequest,
  fetchMovieSuccess,
  fetchMovieFailure
};
