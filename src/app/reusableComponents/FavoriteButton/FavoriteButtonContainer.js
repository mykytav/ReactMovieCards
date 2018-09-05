import React, { Component } from 'react';
import { connect } from 'react-redux';

import FavoriteButtonComponent from './FavoriteButtonComponent';
import { movieCardOperations } from '../MovieCard/duck';

class FavoriteButtonContainer extends Component {
  handleFavoriteClick = () => {
    if (this.props.favoriteIds.includes(this.props.movies.id)) {
      this.props.removeFavoriteMovie(this.props.movies.id);
    } else {
      this.props.addFavoriteMovie(this.props.movies);
    }
  };

  render() {
    return (
      <React.Fragment>
        <FavoriteButtonComponent
          handleFavoriteClick={this.handleFavoriteClick}
          movies={this.props.movies}
          favoriteMovies={this.props.favoriteMovies}
          favoriteIds={this.props.favoriteIds}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favoriteMovies: state.movieCardReducer.favoriteMovies,
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
