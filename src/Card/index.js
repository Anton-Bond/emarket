import React, { Component } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import './Card.css';

class Card extends Component {
  state = {
    cardValues: {
      title: this.props.title,
      context: this.props.context,
    },
    isChecked: false,
    isEditMode: false,
  };

  titleChangedHandler = (event) => {
    this.setState({
      cardValues: {
        title: event.target.value,
        context: this.state.cardValues.context,
      },
    });
  };

  contextChangedHandler = (event) => {
    this.setState({
      cardValues: {
        title: this.state.cardValues.title,
        context: event.target.value,
      },
    });
  };

  saveChangesHandler = () => {
    this.props.onSave(this.state.cardValues);
    this.setState({ isEditMode: !this.state.isEditMode });
  };

  switchToEditModeHandler = () => {
    this.setState({ isEditMode: !this.state.isEditMode });
    this.setState({ isChecked: false });
  };

  // set off edit mode and discard changes when toggle to view only
  static getDerivedStateFromProps(props, state) {
    if (props.isViewOnly) {
      return {
        cardValues: { ...props },
        isEditMode: false,
      };
    }
    return null;
  }

  render() {
    return (
      // style depends on checkbox
      <div className="Card" style={{ color: this.state.isChecked && '#63ce5a' }}>
        {this.state.isEditMode ? (
          // editor card title
          <div className="Title">
            <div className="Title-context">
              <input
                type="text"
                id="title-editor"
                className="Card-editor-title"
                onChange={this.titleChangedHandler}
                value={this.state.cardValues.title}
              />
            </div>
            <div className="Controls">
              <AiOutlineCheck onClick={this.saveChangesHandler} />
              <AiOutlineClose
                onClick={() => this.setState({ isEditMode: !this.state.isEditMode })}
              />
            </div>
          </div>
        ) : (
          // view title card
          <div className="Title">
            <div className="Title-context">
              <h1>{this.props.title}</h1>
            </div>
            <div className="Controls">
              {/* hide edit button when view only */}
              {!this.props.isViewOnly ? (
                <AiOutlineEdit onClick={this.switchToEditModeHandler} />
              ) : null}
              {/* color switcher */}
              <input
                type="checkbox"
                id="switchColor"
                onChange={() => this.setState({ isChecked: !this.state.isChecked })}
              />
            </div>
          </div>
        )}
        <hr />
        {this.state.isEditMode ? (
          // editor context card
          <div>
            <textarea
              className="Card-edit-context"
              onChange={this.contextChangedHandler}
              value={this.state.cardValues.context}
            ></textarea>
          </div>
        ) : (
          // view contex cart
          <div>
            <p>{this.props.context}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Card;
