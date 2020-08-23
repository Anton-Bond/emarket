import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LoginPage.css';
import Input from '../../components/Input';
import * as actionCreators from '../../store/actions';

class LoginPage extends Component {
  state = {
    form: {
      username: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          align: 'center',
          placeholder: 'Username(email)'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 8,
          isStrong: true
        },
        valid: false,
        touched: false
      },
    },
    formIsValid: false,
  }

  checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }
    
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }

    if (rules.isStrong) {
      const pattern = /^((?=.*\d)((?=.*[A-Z])|(?=.*[a-z]))).*$/;
      isValid = pattern.test(value) && isValid
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.form
    };
    const updatedFormElement = { 
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({form: updatedOrderForm, formIsValid: formIsValid});
  }

  onSubmiHandler = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state.form)
      .then(() => {
        this.props.history.push('/cards');
      })
      .catch(() => {
        alert('Password is wrong! Please repeat.');
      });   
  }

  render () {
    const formElementsArray = [];
    for (let key in this.state.form) {
      formElementsArray.push({
        id: key,
        config: this.state.form[key]
      });
    }
    let form = (
      <form className="form-s" onSubmit={this.onSubmiHandler}>
        {formElementsArray.map(formElement => (
          <Input 
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))}
        <button className="btn-submit" disabled={!this.state.formIsValid}>Sign in</button>
      </form>
    );
    return (
      <div className="LoginPage">
        <p className="title" align="center">Login</p>
        {form}
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (form) => dispatch(actionCreators.asyncLogin(form))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
