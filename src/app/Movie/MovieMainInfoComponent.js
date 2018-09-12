import React from 'react';

const MovieMainInfoComponent = ({ poster, title, overview }) => (
  <div className="movie__main">
    <h2 className="movie__main--title title has-text-centered">{title}</h2>
    <figure className="image is-3by4">
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster}`}
        alt={title}
        className="movie__main--poster"
      />
    </figure>
    <p className="movie__main--desription">{overview}</p>
  </div>
);

export default MovieMainInfoComponent;
