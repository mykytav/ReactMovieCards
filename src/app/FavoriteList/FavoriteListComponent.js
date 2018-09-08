import React from 'react';

import MovieCardContainer from '../reusableComponents/MovieCard/MovieCardContainer';

const FavoriteListComponent = ({ favoriteMovies }) => (
  <div className="favorite main">
    {favoriteMovies.map(movie => (
      <MovieCardContainer key={movie.id} movieInfo={movie} />
    ))}
  </div>
);

export default FavoriteListComponent;
