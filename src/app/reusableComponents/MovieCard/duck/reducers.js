import types from './types';

const INITIAL_STATE = {
  favoriteMovies: [],
  favoriteIds: []
};

const movieCardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
        favoriteIds: [...state.favoriteIds, action.id]
      };
    case types.REMOVE_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          movie => movie.id !== action.payload
        ),
        favoriteIds: state.favoriteIds.filter(id => id !== action.payload)
      };
    case types.FETCH_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: [...action.payload],
        favoriteIds: [...action.ids]
      };
    default:
      return state;
  }
};

export default movieCardReducer;
