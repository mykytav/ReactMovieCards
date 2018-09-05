import React from 'react';

import MovieCardContainer from '../reusableComponents/MovieCard/MovieCardContainer';

const HomeComponent = ({ movies }) => (
  <React.Fragment>
    <div className="home main">
      {movies.map(movie => (
        <MovieCardContainer key={movie.id} movie={movie} />
      ))}
    </div>
  </React.Fragment>
);

export default HomeComponent;
