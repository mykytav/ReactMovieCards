import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieCardComponent from './MovieCardComponent';
import { movieOperations } from '../../Movie/duck';
import { genreOperations } from '../../Genre/duck';
import { homeOperations } from '../../Home/duck';
import { recommendedOperations } from '../../Movie/RecommendedFilms/duck';
import { generateGenre } from '../../../utils';

class MovieCardContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <MovieCardComponent
          fetchGenreMovies={this.props.fetchGenreMovies}
          fetchMovie={this.props.fetchMovie}
          fetchRecommendedMovies={this.props.fetchRecommendedMovies}
          movieInfo={this.props.movieInfo}
          genres={this.props.movieInfo.genre_ids.map(id => generateGenre(id))}
          movieDetails={this.props.movieDetails}
          favoriteMovies={this.props.favoriteMovies}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movieDetails: state.movieReducer.movie,
  favoriteMovies: state.movieCardReducer.favoriteMovies
});

const mapDispatchToProps = dispatch => {
  const fetchMovie = id => {
    dispatch(movieOperations.fetchMovie(id));
  };

  const fetchGenreMovies = id => {
    dispatch(genreOperations.fetchGenreMovies(id));
  };

  const fetchPopularMovies = () => {
    dispatch(homeOperations.fetchPopularMovies());
  };

  const fetchRecommendedMovies = id => {
    dispatch(recommendedOperations.fetchRecommendedMovies(id));
  };

  return {
    fetchMovie,
    fetchGenreMovies,
    fetchPopularMovies,
    fetchRecommendedMovies
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCardContainer);
