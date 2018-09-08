import React, { Component } from 'react';
import { connect } from 'react-redux';

import GenrePaginationButtonsComponent from './GenrePaginationButtonsComponent';
import { homeOperations } from '../Home/duck';
import { genreOperations } from '../Genre/duck';

class GenrePaginationButtonsContainer extends Component {
  state = {
    currentPage: 1
  };

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.setState({
        currentPage: 1
      });
    }
  }

  handleNextPageClick = () => {
    const {
      totalPages,
      query,
      fetchGenreMovies,
      fetchSearchMovies
    } = this.props;

    let nextPage =
      this.state.currentPage >= totalPages
        ? this.state.currentPage
        : this.state.currentPage + 1;

    if (query.length > 0) {
      fetchSearchMovies(query, nextPage);
      this.setState({
        currentPage: nextPage
      });
    } else {
      fetchGenreMovies(nextPage);
      this.setState({
        currentPage: nextPage
      });
    }
  };

  handlePrevPageClick = () => {
    const { query, fetchPopularMovies, fetchSearchMovies } = this.props;
    const prevPage =
      this.state.currentPage === 1 ? 1 : this.state.currentPage - 1;

    if (query.length > 0) {
      fetchSearchMovies(query, prevPage);
      this.setState({
        currentPage: prevPage
      });
    } else {
      fetchPopularMovies(prevPage);
      this.setState({
        currentPage: prevPage
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <GenrePaginationButtonsComponent
          handlePrevPageClick={this.handlePrevPageClick}
          handleNextPageClick={this.handleNextPageClick}
          currentPage={this.state.currentPage}
          totalPages={this.props.totalPages}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  query: state.headerReducer.query,
  totalPages: state.homeReducer.totalPages
});

const mapDispatchToProps = dispatch => {
  const fetchGenreMovies = id => {
    dispatch(genreOperations.fetchGenreMovies(id));
  };

  const fetchSearchMovies = movieName => {
    dispatch(homeOperations.fetchSearchMovies(movieName));
  };

  return {
    fetchGenreMovies,
    fetchSearchMovies
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenrePaginationButtonsContainer);
