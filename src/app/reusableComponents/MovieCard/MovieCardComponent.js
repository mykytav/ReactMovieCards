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
      <div className="movieCard card">
        <div className="card-image">
          <Link to={linkToMovie} onClick={this.handleMovieClick}>
            <figure className="image is-4by5">
              <img
                src={
                  movieInfo.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
                    : 'http://plainshumanities.unl.edu/army_officers_wives/images/medium/x.jpg'
                }
                alt={movieInfo.title}
              />
            </figure>
          </Link>
        </div>
        <div className="movieCard__info">
          <Link to={linkToMovie} onClick={this.handleMovieClick}>
            <p className="movieCard__info-title title is-4 has-text-centered">
              {movieInfo.title}
            </p>
          </Link>
          <div className="movieCard__info-bottom is-flex">
            <div className="movieCard__info-genres is-flex">
              {genres &&
                genres.map((genre, i) => {
                  const linkToGenre = `/genre/${genre[1]}`;
                  return (
                    <Link
                      className="movieCard__btn-genres button is-small"
                      onClick={this.handleGenreClick}
                      key={genre + i}
                      to={linkToGenre}
                    >
                      {genre[0]}
                    </Link>
                  );
                })}
            </div>
            <FavoriteButtonContainer individualMovie={movieInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCardComponent;
