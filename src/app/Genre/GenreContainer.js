import React, { Component } from 'react';
import { connect } from 'react-redux';

import GenreComponent from './GenreComponent';
import { genreOperations } from './duck';
import LoadingComponent from '../reusableComponents/Loading/Loading';

class GenreContainer extends Component {
  componentDidMount() {
    const {
      match: { params },
      fetchGenreMovies
    } = this.props;

    fetchGenreMovies(params.genre, 1);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      isLoading,
      movies,
      match: { params }
    } = this.props;
    if (isLoading) {
      return <LoadingComponent />;
    }

    return (
      <React.Fragment>
        <GenreComponent movies={movies} genreName={params.genre} />
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
