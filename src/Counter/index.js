import React, { useContext } from 'react';

import './Counter.css';
import CardsContext from '../context/cards-context';

const Counter = props => {
  const cardsContext = useContext(CardsContext);
  return (
    <div className="wrapper">
      <span className="badge-title">Количество</span>
      <span className="badge">{cardsContext.state.pokemons.length}</span>
    </div>
  );
}

export default Counter;