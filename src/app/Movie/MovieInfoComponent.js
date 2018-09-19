import React from 'react';
import { Link } from 'react-router-dom';

import { addCommas } from '../../utils';

const MovieInfoComponent = ({ movie }) => (
  <div className="movie__info">
    <ul className="movie__list">
      <li className="movie__list-item">
        Rating: {movie.vote_average}
        /10
      </li>
      <li className="movie__list-item list__item-genres">
        Genres:
        {movie.genres.map(genre => {
          const link = `/genre/${genre.id}`;
          return (
            <Link
              className="button is-white is-small is-outlined"
              to={link}
              key={genre.id}
            >
              {genre.name}
            </Link>
          );
        })}
      </li>
      <li className="movie__list-item">Budget: $ {addCommas(movie.budget)}</li>
      <li className="movie__list-item">Runtime: {movie.runtime} min.</li>
      <li className="movie__list-item">
        Revenue: $ {addCommas(movie.revenue)}
      </li>
      <li className="movie__list-item">Release date: {movie.release_date}</li>
      <li className="movie__list-item list__item-prod">
        Production:{' '}
        {movie.production_companies.map(prod => (
          <a
            href={`http://www.google.com/search?q=${prod.name} ${
              prod.origin_country
            }`}
            target="_blank"
            className="tag is-rounded"
            key={prod.id}
          >
            {prod.name} {prod.origin_country}
          </a>
        ))}
      </li>
      <li className="movie__list-item list__item-homepage">
        Homepage:{' '}
        <a href={movie.homepage ? `${movie.homepage}` : '/'} target="_blank">
          {movie.homepage ? movie.homepage : 'not found'}
        </a>
      </li>
    </ul>
  </div>
);

export default MovieInfoComponent;
