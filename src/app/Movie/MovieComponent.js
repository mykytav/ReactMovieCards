import React from 'react';

import MovieInfoComponent from './MovieInfoComponent';
import MovieMainInfoComponent from './MovieMainInfoComponent';
import RecommendedFilmContainer from './RecommendedFilms/RecommendedFilmsContainer';

const MovieComponent = ({ movie }) => (
  <div className="movie">
    <MovieMainInfoComponent
      poster={movie.poster_path}
      title={movie.title}
      overview={movie.overview}
    />
    {movie && movie.genres && <MovieInfoComponent movie={movie} />}
    <RecommendedFilmContainer />
  </div>
);

export default MovieComponent;
