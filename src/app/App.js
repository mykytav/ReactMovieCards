import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from './Home/HomeContainer';
import HeaderContainer from './reusableComponents/Header/HeaderContainer';
import GenreContainer from './Genre/GenreContainer';
import MovieContainer from './Movie/MovieContainer';
import FavoriteListContainer from './FavoriteList/FavoriteListContainer';
import HomePaginationButtonsContainer from './HomePaginationButtons/HomePaginationButtonsContainer';
import GenrePaginationButtonsContainer from './GenrePaginationButtons/GenrePaginationButtonsContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderContainer />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <HomeContainer />
                <HomePaginationButtonsContainer />
              </React.Fragment>
            )}
          />
          <Route
            path="/genre/:genre"
            exact
            render={({ match }) => (
              <React.Fragment>
                <GenreContainer match={match} />
                <GenrePaginationButtonsContainer match={match} />
              </React.Fragment>
            )}
          />
          <Route path="/movie/:id" component={MovieContainer} />
          <Route path="/favorites" component={FavoriteListContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
