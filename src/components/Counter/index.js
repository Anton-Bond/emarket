import React from 'react';
import { connect } from 'react-redux';

import './Counter.css';

const Counter = props => {
  return (
    <div className="wrapper">
      <span className="badge-title">Количество</span>
      <span className="badge">{props.pokemons.length}</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.cards.pokemons
  }
}

export default connect(mapStateToProps)(Counter);