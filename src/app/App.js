import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from './Home/HomeContainer';
import HeaderContainer from './reusableComponents/Header/HeaderContainer';
import GenreContainer from './Genre/GenreContainer';
import MovieContainer from './Movie/MovieContainer';
import FavoriteListContainer from './FavoriteList/FavoriteListContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderContainer />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/genre/:genre" exact component={GenreContainer} />
          <Route path="/movie/:id" component={MovieContainer} />
          <Route path="/favorites" component={FavoriteListContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
