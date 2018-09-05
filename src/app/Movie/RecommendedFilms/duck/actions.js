import types from './types';
// import axios from 'axios';

// import API_KEY from '../../../../utils';

// const fetchRecommendedMoviesRequest = id => {
//   const recommendedMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
//   const request = axios.get(recommendedMoviesUrl);

//   return {
//     type: types.FETCH_RECOMMENDED_MOVIES_REQUEST,
//     payload: request
//   };
// };

const fetchRecommendedMoviesSuccess = json => ({
  type: types.FETCH_RECOMMENDED_MOVIES_SUCCESS,
  payload: json
});

const fetchRecommendedMoviesFailure = error => ({
  type: types.FETCH_RECOMMENDED_MOVIES_FAILURE,
  payload: error
});

export default {
  // fetchRecommendedMoviesRequest,
  fetchRecommendedMoviesSuccess,
  fetchRecommendedMoviesFailure
};
