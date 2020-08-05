import React from 'react';

import './CardBody.css';

const CardBody = props => {
  return (
    <div>       
      {props.editMode ? (
        // editor context card
        <div>
          <textarea
            className="textarea-edit"
            onChange={props.changed}
            value={props.context}
          ></textarea>
        </div>
      ) : (
        // view contex cart
        <div>
          <p>{props.context}</p>
        </div>
      )}
    </div>
  );
}

export default CardBody;
