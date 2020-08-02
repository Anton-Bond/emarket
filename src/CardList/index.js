import React, { useContext } from 'react';

import Card from '../Card';
import AddCard from '../AddCard';
import CardsContext from '../context/cards-context';

const CardList = (props) => { 
  const cardsContext = useContext(CardsContext);
  const pokemons = cardsContext.state.pokemons.map((p) => {
    return (
      <Card
        title={p.title}
        context={p.context}
        key={p.id}
        viewOnly={props.viewOnly}
        onSave={cardsContext.onSave(p.id)}
        onChecked={cardsContext.onPick(p.id)}
      />
    );
  });

  return (
    <div>
      {pokemons}
      <AddCard />
    </div>
  );
};

export default CardList;
