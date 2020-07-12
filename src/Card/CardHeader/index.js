import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

import './CardHeader.css';

const CardHeader = (props) => {
  return (
    <div>
      {props.editMode ? (
        // editor card title
        <div className="Title">
          <div className="Title-context">
            <input
              type="text"
              id="title-editor"
              className="Card-editor-title"
              onChange={props.changed}
              value={props.title}
            />
          </div>
          <div className="Controls">
            <AiOutlineCheck onClick={props.saved} />
            <AiOutlineClose
              onClick={props.canceled}
            />
          </div>
        </div>
      ) : (
        // view title card
        <div className="Title">
          <div className="Title-context">
            <h1>{props.title}</h1>
          </div>
          <div className="Controls">
            {/* hide edit button when view only */}
            {!props.viewOnly ? (
              <AiOutlineEdit onClick={props.switched} />
            ) : null}
            {/* color switcher */}
            <input
              type="checkbox"
              id="switchColor"
              onChange={props.checked}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CardHeader;
