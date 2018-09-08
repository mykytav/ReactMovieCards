import types from './types';

const fetchRecommendedMoviesRequest = id => ({
  type: types.FETCH_RECOMMENDED_MOVIES_REQUEST,
  payload: id
});

const fetchRecommendedMoviesSuccess = json => ({
  type: types.FETCH_RECOMMENDED_MOVIES_SUCCESS,
  payload: json
});

const fetchRecommendedMoviesFailure = error => ({
  type: types.FETCH_RECOMMENDED_MOVIES_FAILURE,
  payload: error
});

export default {
  fetchRecommendedMoviesRequest,
  fetchRecommendedMoviesSuccess,
  fetchRecommendedMoviesFailure
};
