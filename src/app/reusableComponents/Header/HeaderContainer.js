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
      <nav className="nav level">
        <div className="nav__link level-item has-text-centered">
          <NavLink className="button is-primary" to="/">
            Back To Index
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
          <NavLink className="button is-white" to="/favorites">
            Favorites
            <i className="fa fa-heart" style={{ color: 'red' }} />
          </NavLink>
          <Link className="button is-danger" to="/">
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
