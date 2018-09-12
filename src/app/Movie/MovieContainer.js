import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from 'react-loading-components';

import MovieComponent from './MovieComponent';
import { movieOperations } from './duck';
import { recommendedOperations } from './RecommendedFilms/duck';

class MovieContainer extends Component {
  componentDidMount() {
    const {
      match: { params },
      fetchMovie,
      fetchRecommendedMovies
    } = this.props;

    fetchMovie(params.id);
    fetchRecommendedMovies(params.id);
  }

  render() {
    const { isLoading, movie } = this.props;
    if (isLoading) {
      return (
        <div className="loading">
          <Loading type="audio" width={100} height={100} fill="#f44242" />
        </div>
      );
    }

    return (
      <React.Fragment>
        <MovieComponent movie={movie} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movieReducer.movie,
    error: state.movieReducer.error,
    isLoading: state.movieReducer.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  const fetchMovie = id => {
    dispatch(movieOperations.fetchMovie(id));
  };

  const fetchRecommendedMovies = id => {
    dispatch(recommendedOperations.fetchRecommendedMovies(id));
  };

  return {
    fetchMovie,
    fetchRecommendedMovies
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
