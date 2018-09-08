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
    const {
      fetchGenreMovies,
      fetchMovie,
      fetchRecommendedMovies,
      movieInfo,
      movieDetails,
      favoriteMovies
    } = this.props;
    return (
      <React.Fragment>
        <MovieCardComponent
          fetchGenreMovies={fetchGenreMovies}
          fetchMovie={fetchMovie}
          fetchRecommendedMovies={fetchRecommendedMovies}
          movieInfo={movieInfo}
          genres={movieInfo.genre_ids.map(id => generateGenre(id))}
          movieDetails={movieDetails}
          favoriteMovies={favoriteMovies}
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
