import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './containers/Header';
import Cards from './containers/Cards';
import LoginPage from './containers/LoginPage';
import NotFoundPage from './components/NotFoundPage';
import { asyncDataFetch } from './store/actions/actions';
import CardPage from './containers/CardPage';

class App extends Component {

  // get pokemons from server
  componentDidMount() {
    this.props.onDataFetch('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json');
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/cards" exact component={Cards} />
          <Route path="/login" exact component={LoginPage} />
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
    onDataFetch: (url) => dispatch(asyncDataFetch(url)) 
  }
}

export default connect(null, mapDispatchToProps)(App);
