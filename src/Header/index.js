import React from 'react';

import './Header.css';
import Counter from '../Counter';

const Header = (props) => {
  return (
    <header className="Header">
      <div className="title">
        <h1>Планеты солнечной системы</h1>
      </div>
      <Counter />
    </header>
  );
};

export default Header;
