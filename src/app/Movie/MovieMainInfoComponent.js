import React from 'react';

const MovieMainInfoComponent = ({ poster, title, overview }) => (
  <div className="movie__main">
    <h2 className="movie__main--title">{title}</h2>
    <img
      src={`https://image.tmdb.org/t/p/w300/${poster}`}
      alt={title}
      className="movie__main--poster"
    />
    <p className="movie__main--desription">{overview}</p>
  </div>
);

export default MovieMainInfoComponent;
