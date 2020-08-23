import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import './Cards.css';
import CardList from '../CardList';
import * as actionCreators from '../../store/actions';

class HomePage extends Component {
  render() {
    const StyledLabelView = styled.label`
      &:before {
        content: '\\2714';
        color: ${(props) => (props.alt ? '#000' : 'transparent')};
        display: inline-block;
        background: ${(props) => (props.alt ? '#009688' : '#ccc')};
        border: 2px solid;
        border-color: ${(props) => (props.alt ? '#009688' : '#7A7A7A')};
        border-radius: 5px;
        font-size: 20px;
        font-weight: 900;
        line-height: 22px;
        margin: -5px 5px 0 0;
        height: 20px;
        width: 20px;
        text-align: center;
        vertical-align: middle;
        transition: color ease 0.3s;
        cursor: pointer;
      }
    `;

    const StyledCheckboxView = styled.input`
      display: none;
    `;

    const checkbox = this.props.isAdmin && this.props.location.pathname === '/settings' ?
      <div className="view-checkbox">
        <StyledCheckboxView
          type="checkbox"
          name="viewOnly"
          id="viewOnly"
          checked={this.props.viewOnly}
          onChange={this.props.onToggleView}
        />
        <StyledLabelView htmlFor="viewOnly" alt={this.props.viewOnly ? 1 : 0}>
          Только просмотр
        </StyledLabelView>
      </div> : null;

    return (
      <div className="wrapper-context">
        {checkbox}
        <CardList />
        <div>
          <button
            className="btn-delete"
            disabled={this.props.viewOnly}
            onClick={() => this.props.onDelete(this.props.pickedCards)}
          >
            Удалить выбранные карточки
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pickedCards: state.pickedCards.cards,
    viewOnly: state.cards.viewOnly,
    isAdmin: state.auth.isAdmin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (cardIds) => dispatch(actionCreators.deletePickedCards(cardIds)),
    onToggleView: () => dispatch(actionCreators.toggleView())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
