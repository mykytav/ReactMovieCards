import React from 'react';

import MovieCardContainer from '../../reusableComponents/MovieCard/MovieCardContainer';

const RecommendedFilmsComponent = ({ movies }) => (
  <div className="movie__recommendations">
    {movies.map(movie => {
      return <MovieCardContainer key={movie.id} movieInfo={movie} />;
    })}
  </div>
);

export default RecommendedFilmsComponent;
