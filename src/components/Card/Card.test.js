import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route } from 'react-router-dom';
import { MemoryRouter } from "react-router-dom";

import { Card } from './index';
import { mapStateToProps, mapDispatchToProps } from './index';
import * as actionTypes from '../../store/actions/actionTypes';
import CardHeader from './CardHeader/index';
import CardBody from './CardBody/index';

configure({adapter: new Adapter()});

describe('<Card />', () => {

  describe('rendered ', () => {
    it('should rendered', () => {
      const wrapper = shallow(<Card />);
      expect(wrapper.find(Route)).toHaveLength(1);
    })

    it('should rendered CardHeader and CardBody', () => {
      const wrapper = mount(
        <MemoryRouter>
          <Card />
        </MemoryRouter>
      );
      expect(wrapper.find(CardHeader)).toHaveLength(1);
      expect(wrapper.find(CardBody)).toHaveLength(1);
    })
  })

  describe('functions ', () => {
    let wrapper;
    let instance;
  
    beforeEach(() => {  
      wrapper = shallow(<Card
        onSave={() => {}}
        onPickCard={() => {}}
      />);
      instance = wrapper.instance();
    })

    it('should call titleChangedHandler method', () => {
      const value = 'New Title';
      instance.titleChangedHandler({
        target: {
          value
        }
      });
    })
  
    it('should call contextChangedHandler method', () => {
      const value = 'New context';
      instance.contextChangedHandler({
        target: {
          value
        }
      });
    })
  
    it('should call saveChangesHandler method', () => {
      instance.saveChangesHandler();
    })
  
    it('should call cancelChangesHandler method', () => {
      instance.cancelChangesHandler();
    })
  
    it('should call switchToEditModeHandler method', () => {
      instance.switchToEditModeHandler();
    })
  
    it('should call checkedHandler method', () => {
      instance.checkedHandler();
    })

  })

  describe('getDerivedStateFromProps', () => {
    it('new value arrived from props and state is updated', () => {
      const givenProps = {viewOnly: true};
      const givenState = {};
      const result = Card.getDerivedStateFromProps(givenProps, givenState);
      
      expect(result.isEditMode).toBeFalsy();
    });
  });

  describe('redux ', () => {

    let dispatch;

    beforeEach(() => {  
      dispatch = jest.fn();
    })

    it('should show editor button', () => {
      const initialState = {
        cards: {
          viewOnly: false
        }        
      };
      expect(mapStateToProps(initialState).viewOnly).toBeFalsy();
    });
  
    it('should save changes', () => {
      mapDispatchToProps(dispatch).onSave({});
      expect(dispatch.mock.calls[0][0]).toEqual({ type: actionTypes.SAVE_CHANGES, pokemon: {}});
    });
  
    it('should pick card', () => {
      mapDispatchToProps(dispatch).onPickCard('1', false);
      expect(dispatch.mock.calls[0][0]).toEqual({ type: actionTypes.PICK_CARD, value: '1', isChecked: false});
    });
  })

})