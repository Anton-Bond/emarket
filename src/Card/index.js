import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {

  // set font color by default
  const [colorState, setColorState] = useState({
    color: 'inherit'
  });

  // swithc color by checkbox
  const swichColorHandler = () => {
    colorState.color === 'inherit' ? setColorState({ color: '#63ce5a' }) : setColorState({ color: 'inherit' });
  };

  return (
    <div className="Card" style={colorState}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="Switch">
          <label htmlFor="switchColor">Switch color:</label>
          <input type="checkbox" id="switchColor" onChange={swichColorHandler}/>
        </div>
      </div>
      <hr/>
      <p>{props.children}</p>
    </div>
  )
}

export default Card;