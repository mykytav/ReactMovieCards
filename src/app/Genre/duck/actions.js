// import axios from 'axios';
import types from './types';

// import API_KEY from '../../../utils';

// const fetchGenreMoviesRequest = id => {
//   const genreMoviesUrl = `http://api.themoviedb.org/3/genre/${id}/movies?api_key=${API_KEY}`;
//   const request = axios.get(genreMoviesUrl);

//   return {
//     type: types.FETCH_GENRE_MOVIES_REQUEST,
//     payload: request
//   };
// };

const fetchGenreMoviesSuccess = json => ({
  type: types.FETCH_GENRE_MOVIES_SUCCESS,
  payload: json
});

const fetchGenreMoviesFailure = error => ({
  type: types.FETCH_GENRE_MOVIES_FAILURE,
  payload: error
});

export default {
  // fetchGenreMoviesRequest,
  fetchGenreMoviesSuccess,
  fetchGenreMoviesFailure
};
