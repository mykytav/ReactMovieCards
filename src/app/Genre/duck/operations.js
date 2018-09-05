import axios from 'axios';

import Creators from './actions';
import API_KEY from '../../../utils';

// const fetchGenreMoviesRequest = Creators.fetchGenreMoviesRequest;
const fetchGenreMoviesSuccess = Creators.fetchGenreMoviesSuccess;
const fetchGenreMoviesFailure = Creators.fetchGenreMoviesFailure;

const fetchGenreMovies = id => {
  const genreMoviesUrl = `http://api.themoviedb.org/3/genre/${id}/movies?api_key=${API_KEY}`;

  return dispatch => {
    // dispatch(fetchGenreMoviesRequest());

    return axios
      .get(genreMoviesUrl)
      .then(json => {
        const responseMovies = json.data.results;
        dispatch(fetchGenreMoviesSuccess(responseMovies));
      })
      .catch(error => dispatch(fetchGenreMoviesFailure(error)));
  };
};

export default {
  fetchGenreMovies
};
