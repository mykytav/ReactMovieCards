import React from 'react';

import FavoriteButtonContainer from '../reusableComponents/FavoriteButton/FavoriteButtonContainer';

const MovieMainInfoComponent = ({ movie }) => {
  const { poster_path, title, overview } = movie;
  return (
    <div className="movie__main">
      <figure className="image is-3by4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="movie__main-poster"
        />
        <FavoriteButtonContainer individualMovie={movie} />
      </figure>
      <article className="message is-warning">
        <div className="movie__main-description message-body">{overview}</div>
      </article>
    </div>
  );
};

export default MovieMainInfoComponent;
