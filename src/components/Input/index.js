import React from 'react';

import './Input.css';

const input = (props) => {
  const inputClasses = ['element'];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('invalid');
  }

  return (
    <div className="Input">
      <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />
    </div>
  );

};

export default input;