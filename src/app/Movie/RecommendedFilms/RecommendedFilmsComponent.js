import React from 'react';

import MovieCardContainer from '../../reusableComponents/MovieCard/MovieCardContainer';

const RecommendedFilmsComponent = props => (
  <div className="movie__recommendations">
    {props.movies.map(movie => {
      return <MovieCardContainer key={movie.id} movie={movie} />;
    })}
  </div>
);

export default RecommendedFilmsComponent;
