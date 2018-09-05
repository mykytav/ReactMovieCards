import React from 'react';
import { Link } from 'react-router-dom';

const MovieInfoComponent = props => {
  if (props.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie__info">
      <ul className="movie__list">
        <li className="movie__list__item">
          Rating: {props.movie.vote_average}
        </li>
        <li className="movie__list__item">
          Genres:
          {props.movie.genres.map(genre => {
            const link = `/genre/${genre.id}`;
            return (
              <Link to={link} key={genre.id}>
                {genre.name}
              </Link>
            );
          })}
        </li>
        <li className="movie__list__item">Budget: {props.movie.budget}</li>
        <li className="movie__list__item">Runtime: {props.movie.runtime}</li>
        <li className="movie__list__item">Revenue: {props.movie.revenue}</li>
        <li className="movie__list__item">
          Release date: {props.movie.release_date}
        </li>
        <li className="movie__list__item">
          Production:{' '}
          {props.movie.production_companies.map(prod => (
            <span key={prod.id}>
              {prod.name} {prod.origin_country}
            </span>
          ))}
        </li>
        <li className="movie__list__item">
          Homepage: {props.movie.homepage ? props.movie.homepage : 'not found'}
        </li>
      </ul>
    </div>
  );
};

export default MovieInfoComponent;
