import React, { useState } from 'react';
import { connect } from 'react-redux';

import './CardPage.css';
import Card from '../../components/Card';

const CardPage = (props) => {

  const [pokemon] = useState(
    props.pokemons.find(p => p.id === props.match.params.id)
  );
  
  return (
    <div className="CardPage">
      <h2>Card view</h2>
      <Card
        id={pokemon.id}
        title={pokemon.title}
        context={pokemon.context}
        viewOnly={false}
      />
      <div>
        <button
          className="btn-back"
          onClick={() => props.history.push('/cards')}
        >Go back</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.cards.pokemons
  }
}

export default connect(mapStateToProps)(CardPage);