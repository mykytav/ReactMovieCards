import axios from 'axios';

import Creators from './actions';
import API_KEY from '../../../utils';

// const fetchPopularMoviesRequest = Creators.fetchPopularMoviesRequest;
const fetchPopularMoviesSuccess = Creators.fetchPopularMoviesSuccess;
const fetchPopularMoviesFailure = Creators.fetchPopularMoviesFailure;
// const fetchSearchMoviesRequest = Creators.fetchSearchMoviesRequest;
const fetchSearchMoviesSuccess = Creators.fetchSearchMoviesSuccess;
const fetchSearchMoviesFailure = Creators.fetchSearchMoviesFailure;
// const clearPopularMovies = Creators.clearPopularMovies;
// const addPage = Creators.addPage;
// const substractPage = Creators.substractPage;

const fetchPopularMovies = (page = 1) => {
  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

  return dispatch => {
    // dispatch(fetchPopularMoviesRequest());

    return axios
      .get(popularMoviesUrl)
      .then(json => {
        const responseMovies = json.data.results;
        const totalPages = json.data.total_pages;

        dispatch(fetchPopularMoviesSuccess(responseMovies, totalPages));
      })
      .catch(error => dispatch(fetchPopularMoviesFailure(error)));
  };
};

const fetchSearchMovies = (movieName, page) => {
  const searchMoviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=${page}&include_adult=false`;

  return dispatch => {
    // dispatch(fetchSearchMoviesRequest());

    return axios
      .get(searchMoviesUrl)
      .then(json => {
        const responseMovies = json.data.results;
        const totalPages = json.data.total_pages;

        dispatch(fetchSearchMoviesSuccess(responseMovies, totalPages));
      })
      .catch(error => dispatch(fetchSearchMoviesFailure(error)));
  };
};

export default {
  fetchPopularMovies,
  fetchSearchMovies
  // clearPopularMovies,
  // addPage,
  // substractPage
};
