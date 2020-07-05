import React,  { useState }  from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import './Card.css';

const Card = (props) => {

  const [isChecked, setChecked] = useState(false);
  const [isEditMode, setEditMode] = useState(false);

  //  
  const [cardValues, setcardValues] = useState({
    title: props.title,
    context: props.context
  });

  // 
  const titleChangedHandler = event => {
    setcardValues({ 
      title: event.target.value,
      context: cardValues.context
    });
  };

  const contextChangedHandler = event => {
    setcardValues({
      title: cardValues.title,
      context: event.target.value
    });
  };

  const saveChangesHandler = () => {
    props.onSave(cardValues);
    setEditMode(!isEditMode);
  };

  const switchToEditModeHandler = () => {
    setEditMode(!isEditMode);
    setChecked(false);
  }

  return (
    // style depends on checkbox
    <div className="Card" style={{ color: isChecked && '#63ce5a' }}>
      { isEditMode 
        // editor card title
        ? <div className="Title">
            <div className="Title-context">
              <input 
                type="text" 
                id="title-editor" 
                className="Card-editor-title"
                onChange={titleChangedHandler} 
                value={cardValues.title} 
              />
            </div>
            <div className="Controls">
              <AiOutlineCheck onClick={saveChangesHandler} />
              <AiOutlineClose onClick={() => setEditMode(!isEditMode)} />
            </div>
          </div>
          // view title card
        : <div className="Title">
          <div className="Title-context">
            <h1>{props.title}</h1>
          </div>
          <div className="Controls">
            <AiOutlineEdit onClick={switchToEditModeHandler} />
            {/* color switcher */}
            <input
              type="checkbox"
              id="switchColor"
              onChange={() => setChecked(!isChecked)}
            />
          </div>
        </div>
      }
      <hr />
      { isEditMode 
        // editor context card
        ? <div>
            <textarea 
              className="Card-edit-context" 
              onChange={contextChangedHandler} 
              value={cardValues.context}
            ></textarea>
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