import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecommendedFilmsComponent from './RecommendedFilmsComponent';

class RecommendedFilmsContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <RecommendedFilmsComponent movies={this.props.movies} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.recommendedReducer.movies,
    error: state.recommendedReducer.error,
    isLoading: state.recommendedReducer.isLoading
  };
};

export default connect(mapStateToProps)(RecommendedFilmsContainer);
