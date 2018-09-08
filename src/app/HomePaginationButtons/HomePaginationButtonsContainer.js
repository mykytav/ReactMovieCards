import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomePaginationButtonsComponent from './HomePaginationButtonsComponent';
import { homeOperations } from '../Home/duck';

class HomePaginationButtonsContainer extends Component {
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
      fetchPopularMovies,
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
      fetchPopularMovies(nextPage);
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
        <HomePaginationButtonsComponent
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
  const fetchPopularMovies = page => {
    dispatch(homeOperations.fetchPopularMovies(page));
  };

  const fetchSearchMovies = (movieName, page) => {
    dispatch(homeOperations.fetchSearchMovies(movieName, page));
  };

  return {
    fetchSearchMovies,
    fetchPopularMovies
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePaginationButtonsContainer);
