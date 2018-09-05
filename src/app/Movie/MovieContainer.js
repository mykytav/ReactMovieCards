import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieComponent from './MovieComponent';
import { movieOperations } from './duck';
import { recommendedOperations } from './RecommendedFilms/duck';

class MovieContainer extends Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    this.props.fetchMovie(params.id);
    this.props.fetchRecommendedMovies(params.id);
  }

  render() {
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <React.Fragment>
        <MovieComponent movie={this.props.movie} />
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
