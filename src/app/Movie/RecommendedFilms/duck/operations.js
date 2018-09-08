import axios from 'axios';

import Creators from './actions';
import API_KEY from '../../../../utils';

const fetchRecommendedMoviesRequest = Creators.fetchRecommendedMoviesRequest;
const fetchRecommendedMoviesSuccess = Creators.fetchRecommendedMoviesSuccess;
const fetchRecommendedMoviesFailure = Creators.fetchRecommendedMoviesFailure;

const fetchRecommendedMovies = id => {
  const recommendedMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;

  return dispatch => {
    dispatch(fetchRecommendedMoviesRequest());

    return axios
      .get(recommendedMoviesUrl)
      .then(json => {
        const responseMovies = json.data.results;

        dispatch(fetchRecommendedMoviesSuccess(responseMovies));
      })
      .catch(error => dispatch(fetchRecommendedMoviesFailure(error)));
  };
};

export default {
  fetchRecommendedMovies
};
