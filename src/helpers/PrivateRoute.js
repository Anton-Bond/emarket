import React from 'react';
import { Route } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';

export const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      window.sessionStorage.getItem('isAdmin') === 'true' ?
      (
        <Component {...props} />
      ) : (
        <NotFoundPage />
      )
    }
  />
)
