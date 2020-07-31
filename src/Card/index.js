import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import withLoadingDelay from '../hoc/withLoadingDelay';

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

  static getDerivedStateFromProps(props, state) {
    // set off edit mode and discard changes when toggle to view only
    if (props.viewOnly) {
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
        <CardHeader
          title={this.state.cardValues.title}
          editMode={this.state.isEditMode}
          changed={this.titleChangedHandler}
          saved={this.saveChangesHandler}
          canceled={this.cancelChangesHandler}
          switched={this.switchToEditModeHandler}
          checked={this.checkedHandler}
          isChecked={this.state.isChecked}
          viewOnly={this.props.viewOnly}
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
  viewOnly: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
};

export default  withLoadingDelay(Card);
