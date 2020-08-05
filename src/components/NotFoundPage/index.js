import React from 'react';
import { NavLink } from 'react-router-dom';

import './NotFoundPage.css';

const NotFoundPage = (props) => {
  return (
    <div className="NotFoundPage">
      <h1>404</h1>
      <h3>Page not found.</h3>
      <NavLink 
        to="/cards"
        exact
        className="back-btn"
      >Back to Home page</NavLink>
    </div>
  )
}

export default NotFoundPage;