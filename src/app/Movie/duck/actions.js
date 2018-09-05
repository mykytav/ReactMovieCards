import types from './types';
// import axios from 'axios';
// import API_KEY from '../../../utils';

// const fetchMovieRequest = id => {
//   const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
//   const request = axios.get(movieUrl);

//   return {
//     type: types.FETCH_MOVIE_REQUEST,
//     payload: request
//   };
// };

const fetchMovieSuccess = json => ({
  type: types.FETCH_MOVIE_SUCCESS,
  payload: json
});

const fetchMovieFailure = error => ({
  type: types.FETCH_MOVIE_FAILURE,
  payload: error
});

const addToFavorite = id => ({
  type: types.ADD_TO_FAVORITE,
  payload: id
});

export default {
  // fetchMovieRequest,
  fetchMovieSuccess,
  fetchMovieFailure,
  addToFavorite
};
