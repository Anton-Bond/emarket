import React, { Component } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { v1 as uuidv1 } from 'uuid';

import './AddCard.css';

class Card extends Component {
  state = {
    id: null,
    title: '',
    context: '',
  };

  titleChangedHandler = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  contextChangedHandler = (event) => {
    this.setState({
      context: event.target.value,
    });
  };

  // save new card to App state
  saveHandler = () => {
    this.props.onSave(this.state);
    this.setState({ 
      id: null,
     })
  };

  // cancel add new card
  static getDerivedStateFromProps(props, state) {
    if (!state.id) {
      return {
        title: '',
        context: '',
      };
    }
    return null;
  }

  render() {
    return (
      <div className="AddCard">
        { this.state.id ?
          (
            <div>
              <div className="title-add-card">
                <div className="title-context-add-card">
                  <input
                    type="text"
                    id="title-editor"
                    className="editor-title"
                    onChange={this.titleChangedHandler}
                    value={this.state.title}
                  />
                </div>
                <div className="controls-add-card">
                  <AiOutlineCheck onClick={this.saveHandler} />
                  <AiOutlineClose
                    onClick={() => this.setState({ id: null })}
                  />
                </div>
              </div>
              <hr />
              <textarea
                className="textarea-add-card"
                onChange={this.contextChangedHandler}
                value={this.state.context}
              ></textarea>
            </div>
          ) : <AiOutlinePlus className="icon-add" onClick={() => this.setState({ id: uuidv1() })}/>
        }
      </div>
    );
  }
}

export default Card;
