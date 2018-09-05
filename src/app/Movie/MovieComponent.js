import React from 'react';

import MovieInfoComponent from './MovieInfoComponent';
import RecommendedFilmContainer from './RecommendedFilms/RecommendedFilmsContainer';

const MovieComponent = ({ movie }) => (
  <div className="movie">
    <div className="movie__main">
      <h2 className="movie__main--title">{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
        className="movie__main--poster"
      />
      <p className="movie__main--desription">{movie.overview}</p>
    </div>
    {movie && movie.genres && <MovieInfoComponent movie={movie} />}
    <RecommendedFilmContainer movie={movie} />
  </div>
);

export default MovieComponent;
