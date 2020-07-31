import React, { useContext } from 'react';

import Card from '../Card';
import AddCard from '../AddCard';
import CardsContext from '../context/cards-context';

const CardList = (props) => { 
  const cardsContext = useContext(CardsContext);
  const planets = cardsContext.state.planets.map((p) => {
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
      {planets}
      <AddCard />
    </div>
  );
};

export default CardList;
