import axios from 'axios';

import Creators from './actions';
import API_KEY from '../../../utils';

const fetchMovieRequest = Creators.fetchMovieRequest;
const fetchMovieSuccess = Creators.fetchMovieSuccess;
const fetchMovieFailure = Creators.fetchMovieFailure;

const fetchMovie = id => {
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  return dispatch => {
    dispatch(fetchMovieRequest(id));

    return axios
      .get(movieUrl)
      .then(json => {
        const movieDetails = json.data;

        dispatch(fetchMovieSuccess(movieDetails));
      })
      .catch(error => dispatch(fetchMovieFailure(error)));
  };
};

export default {
  fetchMovie
};
