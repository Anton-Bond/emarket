import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';

import CradsContext from '../context/cards-context';

class CardsWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      checkedCards: [],
      error: false,
    };
  }

  // get card data from server
  componentDidMount() {
    axios
      .get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
      .then((response) => {
        const pokemons = response.data.slice(0, 15);
        const updatedPockemons = pokemons.map((pokemon) => {
          return {
            id: uuidv1(),
            title: pokemon.Name,
            context: pokemon.About,
          };
        });
        this.setState({ pokemons: updatedPockemons });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  // save card changes
  saveHandler = (id) => (value) => {
    this.setState({
      pokemons: this.state.pokemons.map((pokemon) => {
        return id === pokemon.id ? { ...pokemon, ...value } : pokemon;
      }),
    });
  };

  // delete picked pokemons from state
  deleteCardsHandler = () => {
    this.setState({
      pokemons: this.state.pokemons.filter((pokemon) => {
        return !this.state.checkedCards.includes(pokemon.id);
      }),
    });
    this.setState({ checkedCards: [] });
  };

  // add new pokemon to state, get values from AddCard
  addNewpokemonHandler = (values) => {
    const newpokemon = {
      id: values.id,
      title: values.title,
      context: values.context,
    };
    this.setState({ pokemons: [...this.state.pokemons, newpokemon] });
  };

  // add index of picked card or delete from array
  pickCardHandler = (id) => (isChecked) => {
    let newCheckedCards = this.state.checkedCards;
    // add card index if it picked
    if (isChecked) {
      newCheckedCards.push(id);
    } else {
      // delete from array if card has been unpicked
      const idx = newCheckedCards.findIndex((item) => item === id);
      newCheckedCards.splice(idx, 1);
    }
    this.setState({ checkedCards: newCheckedCards });
  };

  render() {
    // show this if get error from server
    let pageContext = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    // when server responses data
    if (!this.state.error) {
      pageContext = (
        <CradsContext.Provider
          value={{
            state: this.state,
            onSave: this.saveHandler,
            onDelete: this.deleteCardsHandler,
            addNew: this.addNewpokemonHandler,
            onPick: this.pickCardHandler,
          }}
        >
          {this.props.children}
        </CradsContext.Provider>
      );
    }

    return <div>{pageContext}</div>;
  }
}

export default CardsWrap;
