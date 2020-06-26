import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {

  const [isChecked, setChecked] = useState(false);

  return (
    <div className="Card" style={{ color: isChecked && '#63ce5a' }}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="Switch">
          <label htmlFor="switchColor">Switch color:</label>
          <input
            type="checkbox"
            id="switchColor"
            onChange={() => setChecked(!isChecked)}
          />
        </div>
      </div>
      <hr />
      <p>{props.children}</p>
    </div>
  );
}

export default Card;