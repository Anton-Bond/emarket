import React from 'react';

import './LoginPage.css';

const LoginPage = props => {
  return (
    <div className="LoginPage">
      <p className="title" align="center">Login</p>
      <form className="form-s">
        <input className="inp-username" type="text" align="center" placeholder="Username" />
        <input className="inp-pass" type="password" align="center" placeholder="Password" />
        <button className="btn-submit" align="center">Sign in</button>
      </form>           
    </div>
  )
}

export default LoginPage;
