import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FavoriteButtonContainer from '../FavoriteButton/FavoriteButtonContainer';

class MovieCardComponent extends Component {
  handleGenreClick = () => {
    this.props.fetchGenreMovies(this.props.match.params.genre);
  };

  handleMovieClick = () => {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.fetchRecommendedMovies(this.props.match.params.id);
  };

  render() {
    const linkToMovie = `/movie/${this.props.movies.id}`;
    return (
      <div className="movieCard">
        <Link to={linkToMovie} onClick={this.handleMovieClick}>
          <img
            className="movieCard__img"
            src={`https://image.tmdb.org/t/p/w300/${
              this.props.movies.poster_path
            }`}
            alt={this.props.movies.title}
          />
        </Link>
        <div className="movieCard__info">
          <Link to={linkToMovie} onClick={this.handleMovieClick}>
            <h3 className="movieCard__info__title">
              {this.props.movies.title}
            </h3>
          </Link>
          <span className="movieCard__info__genres">
            {this.props.genres.map((genre, i) => {
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
          <FavoriteButtonContainer movies={this.props.movies} />
        </div>
      </div>
    );
  }
}

export default MovieCardComponent;
