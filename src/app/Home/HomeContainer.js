import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeComponent from './HomeComponent';
import { homeOperations } from './duck';
import PaginationButtonContainer from '../reusableComponents/Header/PaginationButtons/PaginationButtonsContainer';

class HomeContainer extends Component {
  componentDidMount() {
    const { query, fetchPopularMovies } = this.props;
    !query && fetchPopularMovies();
  }

  render() {
    const { isLoading, movies } = this.props;
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <React.Fragment>
        <HomeComponent movies={movies} />
        <PaginationButtonContainer />
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
