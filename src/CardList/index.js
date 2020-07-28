import React, { useContext } from 'react';

import Card from '../Card';
import AddCard from '../AddCard';
import CardContext from '../context/card-context';

const CardList = (props) => { 
  const cardContext = useContext(CardContext);
  const planets = props.planets.map((p) => {
    return (
      <Card
        title={p.title}
        context={p.context}
        key={p.id}
        isViewOnly={cardContext.isViewOnly}
        onSave={props.onSave(p.id)}
        onChecked={props.pickCard(p.id)}
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
