import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import './Card.css';

const Card = (props) => {
  return (
    // style depends on checkbox
    <div className="Card" style={{ color: props.isChecked && '#63ce5a' }}>
      { props.isEditMode 
        // editor card title
        ? <div className="Title">
            <div className="Title-context">
              <input type="text" id="title-editor" onChange={props.changedTitle} value={props.title} />
            </div>
            <div className="Controls">
              <a onClick={props.onToggleMode}><AiOutlineCheck /></a>
              <a onClick={props.onCancel}><AiOutlineClose /></a>
            </div>
          </div>
          // view title card
        : <div className="Title">
          <div className="Title-context">
            <h1>{props.title}</h1>
          </div>
            <div className="Controls">
              <a onClick={props.onToggleMode}><AiOutlineEdit /></a>
              {/* color switcher */}
              <input
                type="checkbox"
                id="switchColor"
                onChange={props.onCheck}
              />
            </div>
        </div>
      }
      <hr />
      { props.isEditMode 
        // editor context card
        ? <div>
            <textarea onChange={props.changedContext} value={props.context}></textarea>
          </div>
          // view contex cart
        : <div>
            <p>{props.context}</p>
          </div>
      }
    </div>
  );
}

export default Card;