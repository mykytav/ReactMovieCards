import { combineReducers } from 'redux';

import homeReducer from './app/Home/duck';
import genreReducer from './app/Genre/duck';
import movieReducer from './app/Movie/duck';
import recommendedReducer from './app/Movie/RecommendedFilms/duck';
// import favoriteReducer from './app/FavoriteList/duck';
import movieCardReducer from './app/reusableComponents/MovieCard/duck';
import headerReducer from './app/reusableComponents/Header/duck';

const rootReducer = combineReducers({
  homeReducer,
  genreReducer,
  movieReducer,
  recommendedReducer,
  // favoriteReducer,
  movieCardReducer,
  headerReducer
});

export default rootReducer;
