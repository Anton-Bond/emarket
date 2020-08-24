import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './containers/Header';
import Cards from './containers/Cards';
import LoginPage from './containers/LoginPage';
import NotFoundPage from './components/NotFoundPage';
import * as actionCreators from './store/actions/';
import CardPage from './containers/CardPage';
import { PrivateRoute } from './helpers/PrivateRoute';

class App extends Component {


  componentDidMount() {
    // get pokemons from server
    this.props.onDataFetch('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json');
    // when reboot page, set user data from sessionStorage
    this.props.onInitUser();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/cards" exact component={Cards} />
          <Route path="/login" exact component={LoginPage} />
          {/* for admin */}
          <PrivateRoute path="/settings" exact component={Cards} />
          <Route path="/card/:id" exact component={CardPage} />
          <Redirect from="/" to="/cards" exact />
          <Route exact component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDataFetch: (url) => dispatch(actionCreators.asyncDataFetch(url)),
    onInitUser: () => dispatch(actionCreators.initUser())
  }
}

export default connect(null, mapDispatchToProps)(App);
