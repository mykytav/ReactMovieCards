import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';

import { homeOperations } from '../../Home/duck';
import { headerOperations } from './duck';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      query: ''
    };
  }

  handleInputChange = e => {
    const { getValueFromInput, fetchPopularMovies } = this.props;
    const target = e.target.value;

    if (target === '') {
      fetchPopularMovies();
    }

    this.setState(() => ({
      query: target
    }));
    getValueFromInput(target);
  };

  handleSubmitForm = e => {
    const { history, fetchSearchMovies } = this.props;
    e.preventDefault();
    if (this.input.current.value) {
      history.push('/');
      fetchSearchMovies(this.state.query);
    }
  };

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
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  inputValue: state.headerReducer.query
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

  return {
    fetchSearchMovies,
    fetchPopularMovies,
    getValueFromInput
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderContainer)
);
