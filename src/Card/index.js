import React, { Component } from 'react';

import './Card.css';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import withLoadingDelay from '../hoc/withLoadingDelay';

class Card extends Component {
  state = {
    cardValues: {
      id: this.props.id,
      title: this.props.title,
      context: this.props.context,
    },
    isChecked: false,
    isEditMode: false,
  };

  titleChangedHandler = (event) => {
    this.setState({
      cardValues: {
        id: this.state.cardValues.id,
        title: event.target.value,
        context: this.state.cardValues.context,
      },
    });
  };

  contextChangedHandler = (event) => {
    this.setState({
      cardValues: {
        id: this.state.cardValues.id,
        title: this.state.cardValues.title,
        context: event.target.value,
      },
    });
  };

  saveChangesHandler = () => {
    this.props.onSave(this.state.cardValues);
    this.setState({ isEditMode: !this.state.isEditMode });
  };

  // cancel edit changes
  cancelChangesHandler = () => {
    this.setState({
      cardValues: {
        title: this.props.title,
        context: this.props.context,
      },
    });
    this.setState({ isEditMode: !this.state.isEditMode });
  };

  switchToEditModeHandler = () => {
    this.setState({ isEditMode: !this.state.isEditMode });
    this.setState({ isChecked: false });
    // delete card from picked array of cards
    this.props.onChecked(false);
  };

  // toggle checked card and send index to CardList for store picked indexes
  checkedHandler = () => {
    this.props.onChecked(!this.state.isChecked);
    this.setState({ isChecked: !this.state.isChecked });
  };

  // set off edit mode and discard changes when toggle to view only
  static getDerivedStateFromProps(props, state) {
    if (props.isViewOnly) {
      return {
        cardValues: { ...props },
        isEditMode: false,
      };
    }
    // set new state when delete picked cards from main page app
    if (!state.isEditMode && props.id !== state.cardValues.id) {
      return {
        cardValues: { ...props },
        isChecked: false,
      };
    }
    return null;
  }

  render() {
    // console.log(this.props)
    return (
      // style depends on checkbox
      <div className="Card" style={{ color: this.state.isChecked && '#63ce5a' }}>
        <CardHeader
          title={this.state.cardValues.title}
          editMode={this.state.isEditMode}
          changed={this.titleChangedHandler}
          saved={this.saveChangesHandler}
          canceled={this.cancelChangesHandler}
          switched={this.switchToEditModeHandler}
          viewOnly={this.props.isViewOnly}
          checked={this.checkedHandler}
          isChecked={this.state.isChecked}
        />
        <hr />
        <CardBody
          context={this.state.cardValues.context}
          editMode={this.state.isEditMode}
          changed={this.contextChangedHandler}
        />
      </div>
    );
  }
}

export default withLoadingDelay(Card);
