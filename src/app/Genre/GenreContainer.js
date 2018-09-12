import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from 'react-loading-components';

import GenreComponent from './GenreComponent';
import { genreOperations } from './duck';

class GenreContainer extends Component {
  componentDidMount() {
    const {
      match: { params },
      fetchGenreMovies
    } = this.props;

    fetchGenreMovies(params.genre, 1);
  }

  render() {
    const { isLoading, movies } = this.props;
    if (isLoading) {
      return (
        <div className="loading">
          <Loading type="audio" width={100} height={100} fill="#f44242" />
        </div>
      );
    }

    return (
      <React.Fragment>
        <GenreComponent movies={movies} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.genreReducer.movies,
    error: state.genreReducer.error,
    isLoading: state.genreReducer.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  const fetchGenreMovies = (id, page) => {
    dispatch(genreOperations.fetchGenreMovies(id, page));
  };

  return {
    fetchGenreMovies
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreContainer);
