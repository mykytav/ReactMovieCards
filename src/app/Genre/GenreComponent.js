import React from 'react';

import MovieCardContainer from '../reusableComponents/MovieCard/MovieCardContainer';

const GenreComponent = ({ movies }) => (
  <div className="genre main">
    {movies.map(movie => (
      <MovieCardContainer key={movie.id} movie={movie} />
    ))}
  </div>
);

export default GenreComponent;