import React, { useContext } from 'react';

import './Counter.css';
import CardContext from '../context/card-context';

const Counter = props => {
  const cardContext = useContext(CardContext);
  return (
    <div className="wrapper">
      <span className="badge-title">Количество</span>
      <span className="badge">{cardContext.cards.length}</span>
    </div>
  );
}

export default Counter;