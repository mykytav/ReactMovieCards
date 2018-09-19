import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieComponent from './MovieComponent';
import { movieOperations } from './duck';
import { recommendedOperations } from './RecommendedFilms/duck';
import LoadingComponent from '../reusableComponents/Loading/Loading';

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
      return <LoadingComponent />;
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
