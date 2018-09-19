import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';

import { homeOperations } from '../../Home/duck';
import { headerOperations } from './duck';
import HeaderForm from './HeaderForm';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      query: ''
    };
  }

  handleBackToIndexClick = () => {
    const { getValueFromInput, fetchPopularMovies } = this.props;
    const { query } = this.state;
    fetchPopularMovies(1);

    this.setState(() => ({
      query: ''
    }));
    getValueFromInput(query);
  };

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
      <nav className="nav level is-flex-mobile">
        <div className="nav__link level-item has-text-centered">
          <NavLink
            className="button"
            to="/"
            onClick={this.handleBackToIndexClick}
          >
            Back To Popular
          </NavLink>
        </div>
        <div className="nav__form level-item has-text-centered">
          <HeaderForm
            handleInputChange={this.handleInputChange}
            handleSubmitForm={this.handleSubmitForm}
            query={this.state.query}
            refInput={this.input}
          />
        </div>
        <div className="nav__links is-flex-tablet level-item has-text-centered">
          <NavLink className="nav__link-fav button" to="/favorites">
            Favorites
            <span className="nav__link-icon icon has-text-danger">
              <i className="fa fa-heart" />
            </span>
          </NavLink>
          <Link className="nav__link-logout button is-danger" to="/">
            Log out
          </Link>
        </div>
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
