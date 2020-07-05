import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';

class App extends Component {
  state = {
    card: {
      title: 'Caption',
      context: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Utenim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.`,
    }
  }

  // save card changes
  saveHandler = value => {
    this.setState({
      card: {
        title: value.title,
        context: value.context
      }
    })
  }

  render () {
    const card = this.state.card;
    return (
      <div className="App">
        <Header />
        <div className="cardWrapper">
          <Card 
            title={card.title}
            context={card.context}
            onSave={this.saveHandler}
          />
        </div>   
      </div>
      
    );
  }
}

export default App;
