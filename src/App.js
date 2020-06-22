import React from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cardWrapper">
        <Card name="Caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
        </Card>
      </div>      
    </div>
  );
}

export default App;
