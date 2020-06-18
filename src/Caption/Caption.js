import React from 'react';
import './Caption.css';

const caption = (props) => {
  return (
    <div className="Caption">
      <h1>{props.name}</h1>
      <hr/>
      <p>{props.children}</p>
    </div>
  )
}

export default caption;