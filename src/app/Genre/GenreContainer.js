import React, { Component } from 'react';
import { connect } from 'react-redux';

import GenreComponent from './GenreComponent';
import { genreOperations } from './duck';

class GenreContainer extends Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    this.props.fetchGenreMovies(params.genre);
  }

  render() {
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <React.Fragment>
        <GenreComponent movies={this.props.movies} />
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
  const fetchGenreMovies = id => {
    dispatch(genreOperations.fetchGenreMovies(id));
  };

  return {
    fetchGenreMovies
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreContainer);
