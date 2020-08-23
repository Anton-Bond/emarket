import React from 'react';
import { connect } from 'react-redux'

import Card from '../../components/Card';
import AddCard from '../../components/AddCard';

const CardList = (props) => {

  // something went wrong while get data from server
  if (props.hasErrored) {
    return <p>Sorry! There was an error loading the data</p>;
  }

  if (!props.isLoaded) {
      return <p>Loading…</p>;
  }

  // if data fetch success
  const pokemons = props.pokemons.map((p) => {
    return (
      <Card
        id={p.id}
        title={p.title}
        context={p.context}
        key={p.id}
      />
    );
  });
  
  return (
    <div>
      {pokemons}
      {props.viewOnly
        ? null
        : <AddCard />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.cards.pokemons,
    isLoaded: state.cards.isLoaded,
    hasErrored: state.cards.error,
    viewOnly: state.cards.viewOnly
  }
}

export default connect(mapStateToProps)(CardList);