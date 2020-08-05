import React, { Component } from 'react';
import styled from 'styled-components';

import './Cards.css';
import CardList from '../CardList';
import CardsContext from '../../context/cards-context';

class HomePage extends Component {

  static contextType = CardsContext;
  state = {
    viewOnly: false
  };

  // toggle view page mode
  toggleViewOnlyHandler = () => {
    this.setState({ viewOnly: !this.state.viewOnly });
  };

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

    return (
      <div className="wrapper-context">
        <div className="view-checkbox">
          <StyledCheckboxView
            type="checkbox"
            name="viewOnly"
            id="viewOnly"
            checked={this.state.viewOnly}
            onChange={this.toggleViewOnlyHandler}
          />
          <StyledLabelView htmlFor="viewOnly" alt={this.state.viewOnly ? 1 : 0}>
            Только просмотр
          </StyledLabelView>
        </div>
        <CardList
          viewOnly={this.state.viewOnly}
        />
        <div>
          <button
            className="btn-delete"
            disabled={this.state.viewOnly}
            onClick={this.context.onDelete}
          >
            Удалить выбранные карточки
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
