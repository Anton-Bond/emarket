import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import Counter from '../../components/Counter';

const Header = (props) => {
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
            <NavLink 
              to="/cards"
              exact
              className="menu-tab"
              activeClassName="active-tab"
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              exact
              className="menu-tab"
              activeClassName="active-tab"
            >Sign in</NavLink>
          </li>
        </ul>
      </nav>


    </header>
  );
};

export default Header;
