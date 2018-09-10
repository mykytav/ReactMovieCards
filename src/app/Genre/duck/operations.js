import axios from 'axios';

import Creators from './actions';
import API_KEY from '../../../utils';

const fetchGenreMoviesRequest = Creators.fetchGenreMoviesRequest;
const fetchGenreMoviesSuccess = Creators.fetchGenreMoviesSuccess;
const fetchGenreMoviesFailure = Creators.fetchGenreMoviesFailure;
const addGenrePage = Creators.addGenrePage;
const substractGenrePage = Creators.substractGenrePage;
const resetGenrePage = Creators.resetGenrePage;

const fetchGenreMovies = (id, page = 1) => {
  const genreMoviesUrl = `http://api.themoviedb.org/3/genre/${id}/movies?api_key=${API_KEY}&page=${page}`;

  return dispatch => {
    dispatch(fetchGenreMoviesRequest(id));

    return axios
      .get(genreMoviesUrl)
      .then(json => {
        const responseMovies = json.data.results;
        const totalPages = json.data.total_pages;
        const currentPage = json.data.page;
        dispatch(
          fetchGenreMoviesSuccess(responseMovies, totalPages, currentPage, id)
        );
      })
      .catch(error => dispatch(fetchGenreMoviesFailure(error)));
  };
};

export default {
  fetchGenreMovies,
  addGenrePage,
  substractGenrePage,
  resetGenrePage
};
