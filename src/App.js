import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';

class App extends Component {
  state = {
    card: {
      title: 'Caption',
      oldTitle: '',
      context: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Utenim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.`,
      oldContext: '',
      isEditMode: false,
      isChecked: false
    }
  }

  // swithch card text color
  checkedHandler = () => {
    const card = this.state.card;
    card.isChecked = !card.isChecked;
    this.setState({ card });
  }

  // binding with input of title in editor mode
  titleChangedHandler = event => {
    const card = this.state.card;
    card.title = event.target.value;
    this.setState({ card });
  }

  // binding with input of context in editor mode
  contextChangeHandler = event => {
    const card = this.state.card;
    card.context = event.target.value;
    this.setState({ card });
  }

  // swith to editor mode
  toggleModeHandler = () => {
    const card = this.state.card;
    card.oldTitle = card.title;
    card.isChecked = false;
    card.oldContext = card.context;
    card.isEditMode = !card.isEditMode;
    this.setState({ card });
  }

  // cancel changes in editor mode
  cancelChangeHandler = () => {
    const card = this.state.card;
    card.title = card.oldTitle;
    card.context = card.oldContext;
    card.isEditMode = !card.isEditMode;
    this.setState({ card });
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
            isChecked={card.isChecked}
            isEditMode={card.isEditMode}
            onCheck={this.checkedHandler}
            changedTitle={this.titleChangedHandler}
            changedContext={this.contextChangeHandler}
            onToggleMode={this.toggleModeHandler}
            onCancel={this.cancelChangeHandler}
          />
        </div>   
      </div>
      
    );
  }
}

export default App;
