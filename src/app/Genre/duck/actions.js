import types from './types';

const fetchGenreMoviesRequest = id => ({
  type: types.FETCH_GENRE_MOVIES_REQUEST,
  payload: id
});

const fetchGenreMoviesSuccess = json => ({
  type: types.FETCH_GENRE_MOVIES_SUCCESS,
  payload: json
});

const fetchGenreMoviesFailure = error => ({
  type: types.FETCH_GENRE_MOVIES_FAILURE,
  payload: error
});

export default {
  fetchGenreMoviesRequest,
  fetchGenreMoviesSuccess,
  fetchGenreMoviesFailure
};
