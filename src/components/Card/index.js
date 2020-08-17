import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import './Card.css';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import withLoadingDelay from '../../hoc/withLoadingDelay';
import { pickCard, saveChanges } from '../../store/actions/actions';

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
        ...this.state.cardValues,
        title: event.target.value,
      },
    });
  };

  contextChangedHandler = (event) => {
    this.setState({
      cardValues: {
        ...this.state.cardValues,
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
    this.props.onPickCard(this.state.cardValues.id, false);
  };

  // toggle checked card and send index to CardList for store picked indexes
  checkedHandler = () => {
    this.props.onPickCard(this.state.cardValues.id, !this.state.isChecked);
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
      <Route render={({history}) => (
        // style depends on checkbox 
        <div className="Card"
          style={{ color: this.state.isChecked && '#63ce5a' }}
          onDoubleClick={() => { 
            if (!this.state.isEditMode)
              history.push('/card/' + this.state.cardValues.id)
          }}
        >
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
      )}/> 
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
  viewOnly: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    onPickCard: (id, isChecked) => dispatch(pickCard(id, isChecked)),
    onSave: (values) => dispatch(saveChanges(values))
  }
};

export default  withLoadingDelay(connect(null, mapDispatchToProps)(Card));