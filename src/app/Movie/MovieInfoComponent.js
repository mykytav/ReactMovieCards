import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButtonContainer from '../reusableComponents/FavoriteButton/FavoriteButtonContainer';

const MovieInfoComponent = ({ movie }) => (
  <div className="movie__info">
    <ul className="movie__list">
      <li className="movie__list__item">Rating: {movie.vote_average}</li>
      <li className="movie__list__item">
        Genres:
        {movie.genres.map(genre => {
          const link = `/genre/${genre.id}`;
          return (
            <Link to={link} key={genre.id}>
              {genre.name}
            </Link>
          );
        })}
      </li>
      <li className="movie__list__item">Budget: {movie.budget}</li>
      <li className="movie__list__item">Runtime: {movie.runtime}</li>
      <li className="movie__list__item">Revenue: {movie.revenue}</li>
      <li className="movie__list__item">Release date: {movie.release_date}</li>
      <li className="movie__list__item">
        Production:{' '}
        {movie.production_companies.map(prod => (
          <span key={prod.id}>
            {prod.name} {prod.origin_country}
          </span>
        ))}
      </li>
      <li className="movie__list__item">
        Homepage: {movie.homepage ? movie.homepage : 'not found'}
      </li>
    </ul>
    <FavoriteButtonContainer movies={movie} />
  </div>
);

export default MovieInfoComponent;
