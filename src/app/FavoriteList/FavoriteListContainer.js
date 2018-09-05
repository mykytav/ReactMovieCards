import React, { Component } from 'react';
import { connect } from 'react-redux';

import FavoriteListComponent from './FavoriteListComponent';
import { movieCardOperations } from '../reusableComponents/MovieCard/duck';

class FavoriteListContainer extends Component {
  componentDidMount() {
    this.props.fetchFavoriteMovies(this.props.favoriteMovies);
  }

  render() {
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <React.Fragment>
        <FavoriteListComponent favoriteMovies={this.props.favoriteMovies} />
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
