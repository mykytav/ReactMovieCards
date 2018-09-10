import React, { Component } from 'react';
import { connect } from 'react-redux';

import GenrePaginationButtonsComponent from './GenrePaginationButtonsComponent';
import { genreOperations } from '../Genre/duck';

class GenrePaginationButtonsContainer extends Component {
  state = {
    currentPage: 1
  };

  componentDidUpdate(prevProps) {
    if (this.props.genreId !== prevProps.genreId) {
      this.setState({
        currentPage: 1
      });
    }
  }

  handleNextPageClick = () => {
    const {
      match: { params },
      fetchGenreMovies,
      totalPages
    } = this.props;

    let nextPage =
      this.state.currentPage >= totalPages
        ? this.state.currentPage
        : this.state.currentPage + 1;

    fetchGenreMovies(params.genre, nextPage);
    this.setState({
      currentPage: nextPage
    });
  };

  handlePrevPageClick = () => {
    const {
      match: { params },
      fetchGenreMovies
    } = this.props;

    const prevPage =
      this.state.currentPage === 1 ? 1 : this.state.currentPage - 1;

    fetchGenreMovies(params.genre, prevPage);
    this.setState({
      currentPage: prevPage
    });
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
  totalPages: state.genreReducer.totalPages,
  genreId: state.genreReducer.genreId
});

const mapDispatchToProps = dispatch => {
  const fetchGenreMovies = (id, page) => {
    dispatch(genreOperations.fetchGenreMovies(id, page));
  };

  // const addGenrePage = () => {
  //   dispatch(genreOperations.addGenrePage());
  // };

  // const substractGenrePage = () => {
  //   dispatch(genreOperations.substractGenrePage());
  // };

  // const resetGenrePage = () => {
  //   dispatch(genreOperations.resetGenrePage());
  // };

  return {
    fetchGenreMovies
    // addGenrePage,
    // substractGenrePage,
    // resetGenrePage
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenrePaginationButtonsContainer);
