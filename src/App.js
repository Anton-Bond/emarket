import React from 'react';
import './App.css';
import Caption from './Caption/Caption';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <Caption name="Caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
          enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
      </Caption>
    </div>
  );
}

export default App;
