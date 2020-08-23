import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';
import Counter from '../../components/Counter';
import * as actionCreators from '../../store/actions';

const Header = (props) => {

  const username = props.username !== '' ? `Welcome, ${props.username}` : null;

  return (
    <header className="Header">

      <div className="title">
        <div className="title-name">
          <h1>Pokemons</h1>
        </div>
        <Counter />
      </div>

      <nav className="main-menu">
        <ul>
          <li>
            {username}
          </li>
          <li>
            <NavLink 
              to="/cards"
              exact
              className="menu-tab"
              activeClassName="active-tab"
            >Home</NavLink>
          </li>
          { props.isAdmin
            ? <li>
                <NavLink
                  to="/settings"
                  exact
                  className="menu-tab"
                  activeClassName="active-tab"
                >Settings</NavLink>
              </li>
            : null
          }
          <li>
            { props.isAuth
              ? <div 
                className="logout-tab"
                  onClick={props.onLogout}
                >
                  Log out
                </div>
              : <NavLink
                  to="/login"
                  exact
                  className="menu-tab"
                  activeClassName="active-tab"
                >Sign in</NavLink>
            }
          </li>
        </ul>
      </nav>

    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    isAuth: state.auth.isAuth,
    isAdmin: state.auth.isAdmin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actionCreators.logout())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
