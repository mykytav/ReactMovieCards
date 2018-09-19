import React, { Component } from 'react';
import { connect } from 'react-redux';

import FavoriteListComponent from './FavoriteListComponent';
import { movieCardOperations } from '../reusableComponents/MovieCard/duck';
import LoadingComponent from '../reusableComponents/Loading/Loading';

class FavoriteListContainer extends Component {
  componentDidMount() {
    const { fetchFavoriteMovies, favoriteMovies } = this.props;

    fetchFavoriteMovies(favoriteMovies);
  }

  render() {
    const { isLoading, favoriteMovies } = this.props;

    if (isLoading) {
      return <LoadingComponent />;
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
