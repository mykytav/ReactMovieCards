import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeComponent from './HomeComponent';
import { homeOperations } from './duck';
import LoadingComponent from '../reusableComponents/Loading/Loading';

class HomeContainer extends Component {
  componentDidMount() {
    const { query, fetchPopularMovies } = this.props;
    !query && fetchPopularMovies();
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { isLoading, movies } = this.props;
    if (isLoading) {
      return <LoadingComponent />;
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
