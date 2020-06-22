import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="Card">
      <h1>{props.name}</h1>
      <hr/>
      <p>{props.children}</p>
    </div>
  )
}

export default Card;