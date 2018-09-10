import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      return <p>Loading...</p>;
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
