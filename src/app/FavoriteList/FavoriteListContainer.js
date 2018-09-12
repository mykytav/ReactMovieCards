import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from 'react-loading-components';

import FavoriteListComponent from './FavoriteListComponent';
import { movieCardOperations } from '../reusableComponents/MovieCard/duck';

class FavoriteListContainer extends Component {
  componentDidMount() {
    const { fetchFavoriteMovies, favoriteMovies } = this.props;

    fetchFavoriteMovies(favoriteMovies);
  }

  render() {
    const { isLoading, favoriteMovies } = this.props;

    if (isLoading) {
      return (
        <div className="loading">
          <Loading type="audio" width={100} height={100} fill="#f44242" />
        </div>
      );
    }

    return (
      <React.Fragment>
        <FavoriteListComponent favoriteMovies={favoriteMovies} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favoriteMovies: state.movieCardReducer.favoriteMovies
});

const mapDispatchToProps = dispatch => {
  const fetchFavoriteMovies = movies => {
    dispatch(movieCardOperations.fetchFavoriteMovies(movies));
  };

  return {
    fetchFavoriteMovies
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteListContainer);
