import React, { Component } from 'react';
import { connect } from 'react-redux';

import FavoriteButtonComponent from './FavoriteButtonComponent';
import { movieCardOperations } from '../MovieCard/duck';

class FavoriteButtonContainer extends Component {
  handleFavoriteClick = () => {
    const {
      favoriteIds,
      removeFavoriteMovie,
      addFavoriteMovie,
      movies
    } = this.props;

    if (favoriteIds.includes(movies.id)) {
      removeFavoriteMovie(movies.id);
    } else {
      addFavoriteMovie(movies);
    }
  };

  render() {
    const { movies, favoriteIds } = this.props;

    return (
      <React.Fragment>
        <FavoriteButtonComponent
          handleFavoriteClick={this.handleFavoriteClick}
          movies={movies}
          favoriteIds={favoriteIds}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favoriteIds: state.movieCardReducer.favoriteIds
});

const mapDispatchToProps = dispatch => {
  const addFavoriteMovie = movie => {
    dispatch(movieCardOperations.addFavoriteMovie(movie));
  };

  const removeFavoriteMovie = id => {
    dispatch(movieCardOperations.removeFavoriteMovie(id));
  };

  return {
    addFavoriteMovie,
    removeFavoriteMovie
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteButtonContainer);
