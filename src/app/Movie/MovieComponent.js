import React from 'react';

import MovieInfoComponent from './MovieInfoComponent';
import MovieMainInfoComponent from './MovieMainInfoComponent';
import RecommendedFilmContainer from './RecommendedFilms/RecommendedFilmsContainer';

const MovieComponent = ({ movie }) => (
  <div className="movie">
    <h2 className="movie__title title has-text-centered">{movie.title}</h2>
    <MovieMainInfoComponent movie={movie} />
    {movie && movie.genres && <MovieInfoComponent movie={movie} />}
    <RecommendedFilmContainer />
  </div>
);

export default MovieComponent;
