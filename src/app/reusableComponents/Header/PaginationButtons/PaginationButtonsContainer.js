import React, { Component } from 'react';
import { connect } from 'react-redux';

import PaginationButtonsComponent from './PaginationButtonsComponent';
import { homeOperations } from '../../../Home/duck';

class PaginationButtonsContainer extends Component {
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
    let nextPage =
      this.state.currentPage >= this.props.totalPages
        ? this.state.currentPage
        : this.state.currentPage + 1;

    if (this.props.query.length > 0) {
      this.props.fetchSearchMovies(this.props.query, nextPage);
      this.setState({
        currentPage: nextPage
      });
    } else {
      this.props.fetchPopularMovies(nextPage);
      this.setState({
        currentPage: nextPage
      });
    }
  };

  handlePrevPageClick = () => {
    const prevPage =
      this.state.currentPage === 1 ? 1 : this.state.currentPage - 1;

    if (this.props.query.length > 0) {
      this.props.fetchSearchMovies(this.props.query, prevPage);
      this.setState({
        currentPage: prevPage
      });
    } else {
      this.props.fetchPopularMovies(prevPage);
      this.setState({
        currentPage: prevPage
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <PaginationButtonsComponent
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
)(PaginationButtonsContainer);
