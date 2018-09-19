import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecommendedFilmsComponent from './RecommendedFilmsComponent';

class RecommendedFilmsContainer extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.movies.length > 0 ? (
          <RecommendedFilmsComponent movies={this.props.movies} />
        ) : (
          <div style={{ width: '150px' }}>
            Oops... seems like there is no recommendations for this movie
          </div>
        )}
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
