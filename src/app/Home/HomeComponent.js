import React from 'react';

import MovieCardContainer from '../reusableComponents/MovieCard/MovieCardContainer';

const HomeComponent = ({ movies }) => (
  <div className="main">
    {movies.map(movie => (
      <MovieCardContainer key={movie.id} movieInfo={movie} />
    ))}
  </div>
);

export default HomeComponent;
