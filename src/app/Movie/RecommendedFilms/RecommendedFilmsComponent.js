import React from 'react';

import MovieCardContainer from '../../reusableComponents/MovieCard/MovieCardContainer';

const RecommendedFilmsComponent = ({ movies }) => (
  <div className="movie__recommendations">
    <h5 className="title has-text-centered is-size-4">Also you might like:</h5>
    {movies.map(movie => {
      return <MovieCardContainer key={movie.id} movieInfo={movie} />;
    })}
  </div>
);

export default RecommendedFilmsComponent;
