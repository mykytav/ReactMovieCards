import types from './types';

const addFavoriteMovie = movie => ({
  type: types.ADD_FAVORITE_MOVIE,
  payload: movie,
  id: movie.id
});

const removeFavoriteMovie = id => ({
  type: types.REMOVE_FAVORITE_MOVIE,
  payload: id
});

const fetchFavoriteMovies = movies => {
  const ids = movies.map(movie => movie.id);

  return {
    type: types.FETCH_FAVORITE_MOVIES,
    payload: movies,
    ids
  };
};

export default {
  addFavoriteMovie,
  removeFavoriteMovie,
  fetchFavoriteMovies
};
