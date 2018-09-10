import types from './types';

const fetchGenreMoviesRequest = id => ({
  type: types.FETCH_GENRE_MOVIES_REQUEST,
  payload: id
});

const fetchGenreMoviesSuccess = (json, totalPages, currentPage, id) => ({
  type: types.FETCH_GENRE_MOVIES_SUCCESS,
  payload: json,
  totalPages,
  currentPage,
  id
});

const fetchGenreMoviesFailure = error => ({
  type: types.FETCH_GENRE_MOVIES_FAILURE,
  payload: error
});

const addGenrePage = () => ({
  type: types.ADD_GENRE_PAGE
});

const substractGenrePage = () => ({
  type: types.SUBSTRACT_GENRE_PAGE
});

const resetGenrePage = () => ({
  type: types.RESET_GENRE_PAGE
});

export default {
  fetchGenreMoviesRequest,
  fetchGenreMoviesSuccess,
  fetchGenreMoviesFailure,
  addGenrePage,
  substractGenrePage,
  resetGenrePage
};
