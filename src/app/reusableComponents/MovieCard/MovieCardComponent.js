import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FavoriteButtonContainer from '../FavoriteButton/FavoriteButtonContainer';

class MovieCardComponent extends Component {
  handleGenreClick = () => {
    const fetchGenreMovies = this.props;
    const params = this.props.match;

    fetchGenreMovies(params.genre);
  };

  handleMovieClick = () => {
    const { fetchMovie, fetchRecommendedMovies } = this.props;
    const params = this.props.match;

    fetchMovie(params.id);
    fetchRecommendedMovies(params.id);
  };

  render() {
    const { movieInfo, genres } = this.props;
    const linkToMovie = `/movie/${movieInfo.id}`;

    return (
      <div className="movieCard">
        <Link to={linkToMovie} onClick={this.handleMovieClick}>
          <img
            className="movieCard__img"
            src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`}
            alt={movieInfo.title}
          />
        </Link>
        <div className="movieCard__info">
          <Link to={linkToMovie} onClick={this.handleMovieClick}>
            <h3 className="movieCard__info__title">{movieInfo.title}</h3>
          </Link>
          <span className="movieCard__info__genres">
            {genres.map((genre, i) => {
              const linkToGenre = `/genre/${genre[1]}`;
              return (
                <Link
                  onClick={this.handleGenreClick}
                  key={genre + i}
                  to={linkToGenre}
                >
                  {genre[0]}
                </Link>
              );
            })}
          </span>
          <FavoriteButtonContainer movies={movieInfo} />
        </div>
      </div>
    );
  }
}

export default MovieCardComponent;
