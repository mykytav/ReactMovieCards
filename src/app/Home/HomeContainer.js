import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from 'react-loading-components';

import HomeComponent from './HomeComponent';
import { homeOperations } from './duck';

class HomeContainer extends Component {
  componentDidMount() {
    const { query, fetchPopularMovies } = this.props;
    !query && fetchPopularMovies();
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
        <HomeComponent movies={movies} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.homeReducer.movies,
    error: state.homeReducer.error,
    isLoading: state.homeReducer.isLoading,
    totalPages: state.homeReducer.totalPages,
    query: state.headerReducer.query
  };
};

const mapDispatchToProps = dispatch => {
  const fetchPopularMovies = () => {
    dispatch(homeOperations.fetchPopularMovies());
  };

  return {
    fetchPopularMovies
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
