import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';

import { homeOperations } from '../../Home/duck';
import { headerOperations } from './duck';
import PaginationButtonsContainer from './PaginationButtons/PaginationButtonsContainer';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      query: ''
    };
  }

  handleInputChange = e => {
    const target = e.target.value;
    this.setState(() => ({
      query: target
    }));
    this.props.getValueFromInput(target);

    if (target === '') {
      this.props.fetchPopularMovies();
    }
  };

  handleSubmitForm = e => {
    e.preventDefault();
    if (this.input.current.value) {
      this.props.history.push('/');
      this.props.fetchSearchMovies(this.state.query);
    }
  };

  // handlePrevPageClick = () => {
  //   if (this.state.query.length > 0) {
  //     this.props.substractPage(this.props.page);
  //     this.props.fetchSearchMovies(this.props.page);
  //   } else {
  //     this.props.fetchPopularMovies();
  //   }
  // };

  // handleNextPageClick = () => {
  //   const page = this.props.page;
  //   this.props.addPage(page);

  //   if (this.state.query.length > 0) {
  //     this.props.fetchSearchMovies(page);
  //   } else {
  //     this.props.fetchPopularMovies(page);
  //     console.log(this.props.page);
  //   }
  // };

  render() {
    return (
      <nav className="header">
        <NavLink to="/">Back To Index</NavLink>
        <form className="header__form form" onSubmit={this.handleSubmitForm}>
          <input
            type="text "
            className="form__input"
            placeholder="Enter a movie name..."
            value={this.state.query}
            onChange={this.handleInputChange}
            ref={this.input}
          />
          <button className="form__btn">Search</button>
        </form>
        <Link to="/">Log out</Link>
        <NavLink to="/favorites">My Favorite movies</NavLink>
        <PaginationButtonsContainer />
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  inputValue: state.headerReducer.query,
  movies: state.homeReducer.movies
  // page: state.homeReducer.page,
  // totalPages: state.homeReducer.totalPages
});

const mapDispatchToProps = dispatch => {
  const fetchSearchMovies = movieName => {
    dispatch(homeOperations.fetchSearchMovies(movieName));
  };

  const fetchPopularMovies = () => {
    dispatch(homeOperations.fetchPopularMovies());
  };

  const getValueFromInput = input => {
    dispatch(headerOperations.getValueFromInput(input));
  };

  // const addPage = page => {
  //   dispatch(homeOperations.addPage(page));
  // };

  // const substractPage = page => {
  //   dispatch(homeOperations.substractPage(page));
  // };

  return {
    fetchSearchMovies,
    fetchPopularMovies,
    getValueFromInput
    // addPage,
    // substractPage
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderContainer)
);
