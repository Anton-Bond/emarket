import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './containers/Header';
import Cards from './containers/Cards';
import LoginPage from './containers/LoginPage';
import NotFoundPage from './components/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/cards" exact component={Cards} />
          <Route path="/login" exact component={LoginPage} />
          <Redirect from="/" to="/cards" exact />
          <Route exact component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
